"use client";

import { useState, useRef } from "react";
import Image from "next/image";
import { Terminal, Sparkles, Layers, Cpu } from "lucide-react";

export default function About() {
  const [maskPosition, setMaskPosition] = useState({ x: 0, y: 0 });
  const [isHovered, setIsHovered] = useState(false);
  const imageContainerRef = useRef<HTMLDivElement>(null);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!imageContainerRef.current) return;
    const rect = imageContainerRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    setMaskPosition({ x, y });
  };

  const handleTouchMove = (e: React.TouchEvent<HTMLDivElement>) => {
    if (!imageContainerRef.current || !e.touches[0]) return;
    const rect = imageContainerRef.current.getBoundingClientRect();
    const x = e.touches[0].clientX - rect.left;
    const y = e.touches[0].clientY - rect.top;
    setMaskPosition({ x, y });
  };

  const technologies = [
    "Node.js",
    "Express.js",
    "NestJS",
    "React",
    "Next.js",
    "Docker",
    "Python",
    "TypeScript",
    "Java",
  ];

  return (
    <section id="about" className="relative overflow-hidden bg-zinc-950 py-24 text-zinc-100">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        
        {/* En-tête de section */}
        <div className="mb-16 text-center">
          <div className="inline-flex items-center gap-2 rounded-full bg-zinc-900 px-4 py-1.5 text-xs font-semibold tracking-wider text-indigo-400 border border-zinc-800 uppercase">
            <Sparkles className="h-3.5 w-3.5" /> À propos de moi
          </div>
          <h2 className="mt-4 text-3xl font-bold tracking-tight sm:text-4xl text-white">
            Concepteur d'expériences web & backend
          </h2>
        </div>

        {/* Grille principale : Photo interactive + Texte */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center mb-24">
          
          {/* Colonne Photo avec effet Noir & Blanc -> Couleur au survol/toucher */}
          <div className="lg:col-span-5 flex justify-center">
            <div
              ref={imageContainerRef}
              onMouseMove={handleMouseMove}
              onMouseEnter={() => setIsHovered(true)}
              onMouseLeave={() => setIsHovered(false)}
              onTouchMove={handleTouchMove}
              onTouchStart={() => setIsHovered(true)}
              onTouchEnd={() => setIsHovered(false)}
              className="relative w-72 h-80 sm:w-80 sm:h-96 rounded-3xl overflow-hidden shadow-2xl border border-zinc-800 cursor-pointer select-none group"
            >
              {/* Image en Noir & Blanc (Fond par défaut) */}
              <Image
                src="/philemon.webp"
                alt="Biloa Philemon"
                fill
                priority
                className="object-cover grayscale transition-all duration-300 group-hover:scale-105"
              />

              {/* Image en Couleur (Masquée dynamiquement là où se trouve le curseur/doigt) */}
              <div
                className="absolute inset-0 transition-opacity duration-300 pointer-events-none"
                style={{
                  opacity: isHovered ? 1 : 0,
                  maskImage: `radial-gradient(circle 100px at ${maskPosition.x}px ${maskPosition.y}px, black 100%, transparent 0%)`,
                  WebkitMaskImage: `radial-gradient(circle 100px at ${maskPosition.x}px ${maskPosition.y}px, black 100%, transparent 0%)`,
                }}
              >
                <Image
                  src="/philemon.webp"
                  alt="Biloa Philemon Couleur"
                  fill
                  priority
                  className="object-cover"
                />
              </div>
            </div>
          </div>

          {/* Colonne Texte de présentation */}
          <div className="lg:col-span-7 space-y-6">
            <div className="flex items-center gap-3 text-indigo-400">
              <Terminal className="h-6 w-6" />
              <span className="font-mono text-sm uppercase tracking-wider">Développeur Full-Stack Junior</span>
            </div>

            <h3 className="text-2xl sm:text-3xl font-bold text-white tracking-tight">
              Salut, je suis <span className="text-indigo-400">Biloa Philemon</span>
            </h3>

            <p className="text-zinc-400 text-base sm:text-lg leading-relaxed">
              Passionné par l'ingénierie logicielle et <strong className="text-zinc-200">l'architecture web</strong>, je conçois des applications performantes, scalables et dotées d'interfaces fluides. Spécialisé dans les technologies modernes du web, j'aime transformer des idées complexes en solutions logicielles élégantes et robustes.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4">
              <div className="flex items-start gap-3 p-4 rounded-2xl bg-zinc-900/50 border border-zinc-800/80">
                <div className="p-2 rounded-lg bg-indigo-500/10 text-indigo-400">
                  <Cpu className="h-5 w-5" />
                </div>
                <div>
                  <h4 className="font-semibold text-white text-sm">Backend & API</h4>
                  <p className="text-xs text-zinc-400 mt-1">Conception d'architectures robustes, sécurisées et orientées données.</p>
                </div>
              </div>

              <div className="flex items-start gap-3 p-4 rounded-2xl bg-zinc-900/50 border border-zinc-800/80">
                <div className="p-2 rounded-lg bg-indigo-500/10 text-indigo-400">
                  <Layers className="h-5 w-5" />
                </div>
                <div>
                  <h4 className="font-semibold text-white text-sm">Frontend & UI</h4>
                  <p className="text-xs text-zinc-400 mt-1">Intégration d'interfaces modernes, réactives et ergonomiques.</p>
                </div>
              </div>
            </div>
          </div>

        </div>

      </div>

      {/* Bande Infinie Inclinée Plein Écran (Corrigée sans bug de blocage tactile) */}
      <div className="relative w-screen left-[50%] right-[50%] -ml-[50vw] -mr-[50vw] my-12 rotate-[-2deg] bg-indigo-600 py-4 shadow-2xl overflow-hidden">
        <div className="flex w-max animate-marquee gap-6 items-center">
          {/* On duplique la liste 4 fois pour garantir une fluidité totale sur tous les écrans sans jamais voir de coupure vide */}
          {[...technologies, ...technologies, ...technologies, ...technologies].map((tech, index) => (
            <div
              key={index}
              className="flex shrink-0 items-center gap-3 px-6 py-2.5 rounded-full bg-indigo-700/80 backdrop-blur-md border border-indigo-400/30 text-white font-mono text-sm font-bold tracking-wide shadow-md whitespace-nowrap"
            >
              <span className="h-2 w-2 rounded-full bg-white animate-pulse"></span>
              {tech}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}