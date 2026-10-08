import { NextResponse } from "next/server";
import { Resend } from "resend";

export async function POST(request: Request) {
  try {
    // Vérification et initialisation de Resend à l'intérieur de la requête (évite le crash au build)
    const apiKey = process.env.RESEND_API_KEY;
    if (!apiKey) {
      return NextResponse.json(
        { message: "La clé API Resend n'est pas configurée sur le serveur." },
        { status: 500 }
      );
    }

    const resend = new Resend(apiKey);

    const body = await request.json();
    const { name, email, subject, message } = body;

    // Validation basique
    if (!name || !email || !message) {
      return NextResponse.json(
        { message: "Veuillez remplir tous les champs obligatoires." },
        { status: 400 }
      );
    }

    // Envoi de l'e-mail via Resend
    const data = await resend.emails.send({
      from: "Portfolio Contact <onboarding@resend.dev>", // Ou ton domaine vérifié sur Resend
      to: ["biloaphilemon@gmail.com"],
      subject: subject || `Nouveau message de ${name} depuis le portfolio`,
      replyTo: email,
      text: `Nom: ${name}\nEmail: ${email}\nSujet: ${subject || "Aucun"}\n\nMessage:\n${message}`,
    });

    return NextResponse.json(
      { message: "Message envoyé avec succès !", data },
      { status: 200 }
    );
  } catch (error) {
    console.error("Erreur lors de l'envoi de l'e-mail:", error);
    return NextResponse.json(
      { message: "Une erreur est survenue lors de l'envoi du message." },
      { status: 500 }
    );
  }
}