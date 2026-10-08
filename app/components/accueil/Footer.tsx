"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Code2, Heart, ArrowUp, GraduationCap, ShieldX } from "lucide-react";
import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";

export default function Footer() {
  const [currentYear, setCurrentYear] = useState(2026);

  useEffect(() => {
    setCurrentYear(new Date().getFullYear());
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="relative bg-zinc-950 border-t border-zinc-800/80 text-zinc-400 py-16 overflow-hidden">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 pb-12 border-b border-zinc-800/60">
          
          {/* Colonne 1 : Logo & Présentation rapide */}
          <div className="md:col-span-5 space-y-4">
            <Link 
              href="/" 
              className="inline-flex items-center gap-2 group transition-opacity hover:opacity-80"
            >
              <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-zinc-900 text-white dark:bg-zinc-50 dark:text-zinc-950 shadow-sm transition-transform group-hover:scale-105">
                <ShieldX className="h-5 w-5" />
              </div>
              <span className="font-bold tracking-tight text-white text-lg">
                Biloa<span className="text-indigo-500">.</span>
              </span>
            </Link>

            <p className="text-sm text-zinc-400 max-w-sm leading-relaxed">
              Développeur Full-Stack Junior spécialisé dans l'écosystème Node.js et les technologies web modernes. Je conçois des applications robustes et des interfaces immersives.
            </p>

            {/* Réseaux sociaux */}
            <div className="flex items-center gap-3 pt-2">
              <a
                href="https://github.com/biloa2005"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2.5 rounded-xl bg-zinc-900 border border-zinc-800 text-zinc-300 hover:text-white hover:border-indigo-500/50 transition-all shadow-sm"
                aria-label="GitHub"
              >
                <FaGithub className="h-4 w-4" />
              </a>
              <a
               href="https://linkedin.com/in/biloaphilemon"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2.5 rounded-xl bg-zinc-900 border border-zinc-800 text-zinc-300 hover:text-white hover:border-indigo-500/50 transition-all shadow-sm"
                aria-label="LinkedIn"
              >
                <FaLinkedin className="h-4 w-4" />
              </a>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2.5 rounded-xl bg-zinc-900 border border-zinc-800 text-zinc-300 hover:text-white hover:border-indigo-500/50 transition-all shadow-sm"
                aria-label="Twitter"
              >
                <FaTwitter className="h-4 w-4" />
              </a>
            </div>
          </div>

          {/* Colonne 2 : Navigation rapide */}
          <div className="md:col-span-3 space-y-4">
            <h4 className="text-sm font-semibold uppercase tracking-wider text-white">
              Navigation
            </h4>
            <ul className="space-y-2.5 text-sm">
              <li>
                <Link href="/" className="hover:text-indigo-400 transition-colors">
                  Accueil
                </Link>
              </li>
              <li>
                <Link href="#about" className="hover:text-indigo-400 transition-colors">
                  À propos
                </Link>
              </li>
              <li>
                <Link href="#projets" className="hover:text-indigo-400 transition-colors">
                  Projets vedettes
                </Link>
              </li>
              <li>
                <Link href="#contacts" className="hover:text-indigo-400 transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Colonne 3 : Contact & Statut */}
          <div className="md:col-span-4 space-y-4">
            <h4 className="text-sm font-semibold uppercase tracking-wider text-white">
              Disponibilité
            </h4>
            <div className="p-4 rounded-2xl bg-zinc-900/60 border border-zinc-800/80 space-y-2">
              <div className="flex items-center gap-2 text-xs font-medium text-indigo-400">
                <span className="relative flex h-2 w-2">
                 
                </span>
                Ouvert aux opportunités & stages
              </div>
              <p className="text-xs text-zinc-400 ">
                Basé pour collaborer sur des projets web stimulants ou intégrer une équipe technique dynamique.
              </p>
            </div>
          </div>

        </div>

        {/* Bas du footer : Copyright + Bouton Retour en haut */}
        <div className="mt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-zinc-500">
          <p className="flex items-center gap-1">
            © {currentYear} Biloa Philemon Armand. Fait avec <Heart className="h-3 w-3 text-red-500 fill-red-500" /> & Next.js.
          </p>

          <button
            onClick={scrollToTop}
            className="flex items-center gap-2 px-3 py-1.5 rounded-lg bg-zinc-900 border border-zinc-800 text-zinc-300 hover:text-white hover:bg-zinc-800 transition-colors shadow-sm"
          >
            <span>Retour en haut</span>
            <ArrowUp className="h-3.5 w-3.5" />
          </button>
        </div>

      </div>
    </footer>
  );
}