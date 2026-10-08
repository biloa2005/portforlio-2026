"use client";

import { FormEvent, useState } from "react";
import { Send, CheckCircle2, AlertCircle, Loader2 } from "lucide-react";
import { FaEnvelope, FaGithub, FaLinkedin } from "react-icons/fa";

export default function ContactForm() {
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState("");
  const [error, setError] = useState("");

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();

    setLoading(true);
    setSuccess("");
    setError("");

    const form = e.currentTarget;
    const formData = new FormData(form);

    const data = {
      name: formData.get("name"),
      email: formData.get("email"),
      subject: formData.get("subject"),
      message: formData.get("message"),
    };

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      const result = await response.json();

      if (!response.ok) {
        throw new Error(result.message);
      }

      setSuccess(result.message);

      // Réinitialiser le formulaire
      form.reset();
    } catch (err) {
      setError(
        err instanceof Error
          ? err.message
          : "Une erreur est survenue."
      );
    } finally {
      setLoading(false);
    }
  }

  return (
    <section id="contacts" className="relative overflow-hidden bg-zinc-950 py-24 text-zinc-100">
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 space-y-12">
        
        {/* En-tête de section assorti */}
        <div className="text-center">
          <div className="inline-flex items-center gap-2 rounded-full bg-zinc-900 px-4 py-1.5 text-xs font-semibold tracking-wider text-indigo-400 border border-zinc-800 uppercase">
            <Send className="h-3.5 w-3.5" /> Contact
          </div>
          <h2 className="mt-4 text-3xl font-bold tracking-tight sm:text-4xl text-white">
            Discutons de votre projet
          </h2>
          <p className="mt-2 text-zinc-400 text-sm sm:text-base">
            Une opportunité, une question ou une collaboration ? N'hésitez pas à m'écrire.
          </p>
        </div>

        {/* Bloc des informations de contact directes (sans gros arrondis) */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          
          {/* Email */}
          <a
            href="mailto:biloaphilemon@gmail.com"
            className="flex items-center gap-3 p-4 bg-zinc-900/60 border border-zinc-800 hover:border-indigo-500/50 hover:bg-zinc-900 transition-all group shadow-md"
          >
            <div className="p-2.5 bg-indigo-500/10 text-indigo-400 group-hover:scale-105 transition-transform">
              <FaEnvelope className="h-5 w-5" />
            </div>
            <div className="overflow-hidden">
              <p className="text-xs font-mono uppercase tracking-wider text-zinc-500">Email</p>
              <p className="text-xs sm:text-sm font-medium text-zinc-200 truncate">biloaphilemon@gmail.com</p>
            </div>
          </a>

          {/* GitHub */}
          <a
            href="https://github.com/biloa2005"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-3 p-4 bg-zinc-900/60 border border-zinc-800 hover:border-indigo-500/50 hover:bg-zinc-900 transition-all group shadow-md"
          >
            <div className="p-2.5 bg-indigo-500/10 text-indigo-400 group-hover:scale-105 transition-transform">
              <FaGithub className="h-5 w-5" />
            </div>
            <div className="overflow-hidden">
              <p className="text-xs font-mono uppercase tracking-wider text-zinc-500">GitHub</p>
              <p className="text-xs sm:text-sm font-medium text-zinc-200 truncate">biloa2005</p>
            </div>
          </a>

          {/* LinkedIn */}
          <a
            href="https://linkedin.com/in/biloaphilemon"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-3 p-4 bg-zinc-900/60 border border-zinc-800 hover:border-indigo-500/50 hover:bg-zinc-900 transition-all group shadow-md"
          >
            <div className="p-2.5 bg-indigo-500/10 text-indigo-400 group-hover:scale-105 transition-transform">
              <FaLinkedin className="h-5 w-5" />
            </div>
            <div className="overflow-hidden">
              <p className="text-xs font-mono uppercase tracking-wider text-zinc-500">LinkedIn</p>
              <p className="text-xs sm:text-sm font-medium text-zinc-200 truncate">biloaphilemon</p>
            </div>
          </a>

        </div>

        {/* Formulaire de Contact (sans bordures arrondies prononcées) */}
        <form 
          onSubmit={handleSubmit} 
          className="space-y-6 bg-zinc-900/60 border border-zinc-800 p-6 sm:p-10 shadow-2xl backdrop-blur-xl"
        >
          
          {/* Nom & Email (Grille responsive) */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <div>
              <label htmlFor="name" className="block mb-2 text-xs font-mono uppercase tracking-wider text-zinc-400">
                Nom <span className="text-indigo-400">*</span>
              </label>
              <input
                id="name"
                name="name"
                type="text"
                placeholder="Votre nom"
                required
                className="w-full bg-zinc-950/60 border border-zinc-800 px-4 py-3 text-sm text-zinc-100 placeholder-zinc-600 focus:outline-none focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 transition-all"
              />
            </div>

            <div>
              <label htmlFor="email" className="block mb-2 text-xs font-mono uppercase tracking-wider text-zinc-400">
                Email <span className="text-indigo-400">*</span>
              </label>
              <input
                id="email"
                name="email"
                type="email"
                placeholder="exemple@gmail.com"
                required
                className="w-full bg-zinc-950/60 border border-zinc-800 px-4 py-3 text-sm text-zinc-100 placeholder-zinc-600 focus:outline-none focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 transition-all"
              />
            </div>
          </div>

          {/* Sujet */}
          <div>
            <label htmlFor="subject" className="block mb-2 text-xs font-mono uppercase tracking-wider text-zinc-400">
              Sujet
            </label>
            <input
              id="subject"
              name="subject"
              type="text"
              placeholder="Sujet de votre message"
              className="w-full bg-zinc-950/60 border border-zinc-800 px-4 py-3 text-sm text-zinc-100 placeholder-zinc-600 focus:outline-none focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 transition-all"
            />
          </div>

          {/* Message */}
          <div>
            <label htmlFor="message" className="block mb-2 text-xs font-mono uppercase tracking-wider text-zinc-400">
              Message <span className="text-indigo-400">*</span>
            </label>
            <textarea
              id="message"
              name="message"
              rows={5}
              placeholder="Parlez-moi de votre projet ou de votre opportunité..."
              required
              className="w-full bg-zinc-950/60 border border-zinc-800 p-4 text-sm text-zinc-100 placeholder-zinc-600 focus:outline-none focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 transition-all resize-none"
            />
          </div>

          {/* Message succès */}
          {success && (
            <div className="flex items-center gap-3 bg-emerald-500/10 border border-emerald-500/20 p-4 text-emerald-400 text-sm animate-in fade-in duration-300">
              <CheckCircle2 className="h-5 w-5 shrink-0" />
              <span>{success}</span>
            </div>
          )}

          {/* Message erreur */}
          {error && (
            <div className="flex items-center gap-3 bg-rose-500/10 border border-rose-500/20 p-4 text-rose-400 text-sm animate-in fade-in duration-300">
              <AlertCircle className="h-5 w-5 shrink-0" />
              <span>{error}</span>
            </div>
          )}

          {/* Bouton de soumission */}
          <button
            type="submit"
            disabled={loading}
            className="w-full flex items-center justify-center gap-2 bg-indigo-600 hover:bg-indigo-500 px-6 py-3.5 font-medium text-white transition-all shadow-lg shadow-indigo-600/20 disabled:opacity-50 disabled:cursor-not-allowed group cursor-pointer"
          >
            {loading ? (
              <>
                <Loader2 className="h-4 w-4 animate-spin" />
                <span>Envoi en cours...</span>
              </>
            ) : (
              <>
                <span>Envoyer le message</span>
                <Send className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </>
            )}
          </button>

        </form>

      </div>
    </section>
  );
}