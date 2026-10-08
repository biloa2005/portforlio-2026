import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: Request) {
  try {
    const body = await request.json();

    const { name, email, subject, message } = body;

    // Vérification des champs
    if (!name || !email || !message) {
      return Response.json(
        {
          success: false,
          message: "Veuillez remplir tous les champs obligatoires.",
        },
        { status: 400 }
      );
    }

    // Envoi de l'email
    const { data, error } = await resend.emails.send({
      from: "Formulaire <onboarding@resend.dev>",
      to: [process.env.CONTACT_EMAIL!],
      replyTo: email,
      subject: subject || `Message de ${name}`,
      html: `
        <div style="font-family: Arial, sans-serif;">
          <h2>Nouveau message depuis votre site</h2>

          <p>
            <strong>Nom :</strong> ${name}
          </p>

          <p>
            <strong>Email :</strong> ${email}
          </p>

          <p>
            <strong>Sujet :</strong> ${subject || "Aucun sujet"}
          </p>

          <hr />

          <h3>Message :</h3>

          <p style="white-space: pre-line;">
            ${message}
          </p>
        </div>
      `,
    });

    if (error) {
      console.error(error);

      return Response.json(
        {
          success: false,
          message: "Erreur lors de l'envoi de l'email.",
        },
        { status: 500 }
      );
    }

    return Response.json({
      success: true,
      message: "Votre message a été envoyé avec succès.",
      data,
    });
  } catch (error) {
    console.error(error);

    return Response.json(
      {
        success: false,
        message: "Une erreur est survenue.",
      },
      { status: 500 }
    );
  }
}