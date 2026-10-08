"use client";

import { Sparkles, Megaphone } from "lucide-react";
import { 
  SiDocker, 
  SiMysql, 
  SiPostgresql, 
  SiReact, 
  SiNextdotjs, 
  SiNestjs, 
  SiExpress, 
  SiGit, 
  SiPython,
  SiTypescript
} from "react-icons/si";

export default function TechStack() {
  const technologies = [
    {
      name: "TypeScript",
      category: "Langage Typé",
      icon: SiTypescript,
      color: "text-blue-500 group-hover:text-blue-400",
      borderHover: "hover:border-blue-500/50",
      bgHover: "hover:bg-blue-500/5",
    },
    {
      name: "Node.js",
      category: "Runtime Backend",
      icon: SiExpress, // Utilisé pour l'écosystème Node/Express
      color: "text-zinc-300 group-hover:text-white",
      borderHover: "hover:border-zinc-400/50",
      bgHover: "hover:bg-zinc-200/5",
    },
    {
      name: "Express.js",
      category: "Framework Backend",
      icon: SiExpress,
      color: "text-zinc-300 group-hover:text-white",
      borderHover: "hover:border-zinc-400/50",
      bgHover: "hover:bg-zinc-200/5",
    },
    {
      name: "NestJS",
      category: "Architecture Backend",
      icon: SiNestjs,
      color: "text-red-500 group-hover:text-red-600",
      borderHover: "hover:border-red-500/50",
      bgHover: "hover:bg-red-500/5",
    },
    {
      name: "React",
      category: "Frontend UI",
      icon: SiReact,
      color: "text-cyan-400 group-hover:text-cyan-500",
      borderHover: "hover:border-cyan-500/50",
      bgHover: "hover:bg-cyan-500/5",
    },
    {
      name: "Next.js",
      category: "Framework Full-Stack",
      icon: SiNextdotjs,
      color: "text-white group-hover:text-zinc-200",
      borderHover: "hover:border-zinc-300/50",
      bgHover: "hover:bg-zinc-100/5",
    },
    {
      name: "Docker",
      category: "DevOps & Conteneurisation",
      icon: SiDocker,
      color: "text-blue-400 group-hover:text-blue-500",
      borderHover: "hover:border-blue-500/50",
      bgHover: "hover:bg-blue-500/5",
    },
    {
      name: "MySQL",
      category: "Base de données",
      icon: SiMysql,
      color: "text-sky-400 group-hover:text-sky-500",
      borderHover: "hover:border-sky-500/50",
      bgHover: "hover:bg-sky-500/5",
    },
    {
      name: "PostgreSQL",
      category: "Base de données",
      icon: SiPostgresql,
      color: "text-blue-300 group-hover:text-blue-400",
      borderHover: "hover:border-blue-400/50",
      bgHover: "hover:bg-blue-400/5",
    },
    {
      name: "Python",
      category: "Langage & Scripting",
      icon: SiPython,
      color: "text-yellow-400 group-hover:text-yellow-500",
      borderHover: "hover:border-yellow-500/50",
      bgHover: "hover:bg-yellow-500/5",
    },
    {
      name: "Git & GitHub",
      category: "Version Control",
      icon: SiGit,
      color: "text-orange-500 group-hover:text-orange-600",
      borderHover: "hover:border-orange-500/50",
      bgHover: "hover:bg-orange-500/5",
    },
    {
      name: "Marketing Digital",
      category: "Stratégie & Croissance",
      icon: Megaphone,
      color: "text-indigo-400 group-hover:text-indigo-500",
      borderHover: "hover:border-indigo-500/50",
      bgHover: "hover:bg-indigo-500/5",
    },
  ];

  return (
    <section id="stack" className="relative overflow-hidden bg-zinc-950 py-24 text-zinc-100">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        
        {/* En-tête de section */}
        <div className="mb-16 text-center">
          <div className="inline-flex items-center gap-2 rounded-full bg-zinc-900 px-4 py-1.5 text-xs font-semibold tracking-wider text-indigo-400 border border-zinc-800 uppercase">
            <Sparkles className="h-3.5 w-3.5" /> Compétences
          </div>
          <h2 className="mt-4 text-3xl font-bold tracking-tight sm:text-4xl text-white">
            Ma Stack Technique
          </h2>
          <p className="mt-2 text-zinc-400 max-w-xl mx-auto text-sm sm:text-base">
            Les technologies, frameworks et outils que j'utilise au quotidien pour concevoir des applications web robustes et performantes.
          </p>
        </div>

        {/* Grille des technos */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 xl:grid-cols-6 gap-4">
          {technologies.map((tech, index) => {
            const IconComponent = tech.icon;
            return (
              <div
                key={index}
                className={`group relative flex flex-col items-center justify-center p-6 bg-zinc-900/60 border border-zinc-800 ${tech.borderHover} ${tech.bgHover} transition-all duration-300 shadow-md hover:-translate-y-1`}
              >
                {/* Icône de la techno */}
                <div className={`text-3xl mb-3 transition-transform duration-300 group-hover:scale-110 ${tech.color}`}>
                  <IconComponent />
                </div>

                {/* Nom et Catégorie */}
                <h3 className="text-sm font-bold text-white tracking-wide text-center">
                  {tech.name}
                </h3>
                <span className="mt-1 text-[10px] font-mono text-zinc-500 uppercase tracking-wider text-center">
                  {tech.category}
                </span>

                {/* Petit accent lumineux discret dans le coin au survol */}
                <div className="absolute top-0 right-0 h-2 w-2 bg-indigo-500 opacity-0 group-hover:opacity-100 transition-opacity"></div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}