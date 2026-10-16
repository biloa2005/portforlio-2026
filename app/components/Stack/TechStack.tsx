"use client";

import { Sparkles, Megaphone } from "lucide-react";
import { motion } from "framer-motion";
import { FaHtml5, FaJava } from "react-icons/fa";
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
  SiTypescript,
  SiNodedotjs,
  SiTailwindcss
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
      icon: SiNodedotjs,
      color: "text-green-500 group-hover:text-green-500",
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
      name: "HTML/CSS",
      category: "Frontend",
      icon: FaHtml5,
      color: "text-blue-500 group-hover:text-red-500",
      borderHover: "hover:border-indigo-500/50",
      bgHover: "hover:bg-indigo-500/5",
    },
    {
      name: "Tailwind CSS",
      category: "Frontend",
      icon: SiTailwindcss,
      color: "text-blue-500 group-hover:text-white",
      borderHover: "hover:border-indigo-500/50",
      bgHover: "hover:bg-indigo-500/5",
    },
    {
      name: "Marketing Digital",
      category: "Stratégie & Croissance",
      icon: Megaphone,
      color: "text-indigo-400 group-hover:text-indigo-500",
      borderHover: "hover:border-indigo-500/50",
      bgHover: "hover:bg-indigo-500/5",
    },
    {
      name: "Java",
      category: "application offline & API",
      icon: FaJava,
      color: "text-white group-hover:text-indigo-500",
      borderHover: "hover:border-indigo-500/50",
      bgHover: "hover:bg-indigo-500/5",
    },
  ];

  // Animation de révélation des cartes : chaque carte se révèle quand elle entre
  // dans l'écran (au scroll). Fonctionne aussi sur mobile (grille 1 colonne).
  const cardVariants = {
    hidden: { opacity: 0, y: 40, scale: 0.9, filter: "blur(6px)" },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      scale: 1,
      filter: "blur(0px)",
      transition: {
        duration: 0.6,
        ease: [0.22, 1, 0.36, 1] as const,
        delay: (i % 6) * 0.08, // léger décalage entre cartes d'une même ligne
      },
    }),
  };

  return (
    <section id="stack" className="relative overflow-hidden bg-zinc-950 py-24 text-zinc-100">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        
        {/* En-tête de section */}
        <motion.div
          className="mb-16 text-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          <div className="inline-flex items-center gap-2 rounded-full bg-zinc-900 px-4 py-1.5 text-xs font-semibold tracking-wider text-indigo-400 border border-zinc-800 uppercase">
            <Sparkles className="h-3.5 w-3.5" /> Compétences
          </div>
          <h2 className="mt-4 text-3xl font-bold tracking-tight sm:text-4xl text-white">
            Ma Stack Technique
          </h2>
          <p className="mt-2 text-zinc-400 max-w-xl mx-auto text-sm sm:text-base">
            Les technologies, frameworks et outils que j'utilise au quotidien pour concevoir des applications web robustes et performantes.
          </p>
        </motion.div>

        {/* Grille des technos */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 xl:grid-cols-6 gap-4">
          {technologies.map((tech, index) => {
            const IconComponent = tech.icon;
            return (
              // Wrapper animé : il porte l'animation d'apparition (transform/opacity).
              // La carte interne garde ses transitions CSS (hover) sans conflit.
              <motion.div
                key={tech.name}
                custom={index}
                variants={cardVariants}
                initial="hidden"
                whileInView="visible"
                // amount faible + marge négative : se déclenche de façon fiable
                // sur petit écran, et une seule fois (once)
                viewport={{ once: true, amount: 0.2, margin: "0px 0px -40px 0px" }}
              >
                <div
                  className={`group relative flex h-full flex-col items-center justify-center p-6 bg-zinc-900/60 border border-zinc-800 ${tech.borderHover} ${tech.bgHover} transition-all duration-300 shadow-md hover:-translate-y-1`}
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
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
