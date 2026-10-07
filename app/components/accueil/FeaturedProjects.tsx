"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { Sparkles, ExternalLink, Layers, ShieldCheck, Calendar, X, ChevronLeft, ChevronRight } from "lucide-react";
import { FaGithub } from "react-icons/fa";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, EffectFade, Navigation } from "swiper/modules";

// Import des styles de Swiper
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/effect-fade";
import "swiper/css/navigation";

export default function FeaturedProjects() {
  const [isMounted, setIsMounted] = useState(false);
  
  // États pour gérer la modale de zoom des images
  const [modalOpen, setModalOpen] = useState(false);
  const [activeImages, setActiveImages] = useState<string[]>([]);
  const [activeProjectTitle, setActiveProjectTitle] = useState("");

  useEffect(() => {
    setIsMounted(true);
  }, []);

  const openImageModal = (images: string[], title: string) => {
    setActiveImages(images);
    setActiveProjectTitle(title);
    setModalOpen(true);
  };

  const projects = [
    {
      title: "Pacific City Hotel",
      category: "Site Web & Réservation",
      description: "Plateforme web hôtelière haut de gamme intégrant des sections dynamiques, des curseurs interactifs et une interface utilisateur immersive.",
      images: [
        "/pacific/4.webp",
        "/pacific/1.webp",
      ],
      tags: ["Next.js", "TypeScript", "Tailwind CSS", "DaisyUI", "Swiper"],
      link: "#", // Possède un lien de prévisualisation
      github: "#",
      icon: Layers,
      showPreviewButton: true,
    },
    {
      title: "EduManage Pro",
      category: "Système de Gestion Scolaire",
      description: "Application complète gérant les étudiants, professeurs, et enseignants avec 3 niveaux d'accès (Admin, Enseignant, Étudiant), emplois du temps et relevés de notes.",
      images: [
        "/ecole/accueil etudiant.webp",
        "/ecole/accueil enseignant.webp"
      ],
      tags: ["Java", "HTML", "CSS", "Gestion des notes", "Emploi du temps"],
      link: "#",
      github: "#",
      icon: ShieldCheck,
      showPreviewButton: false, // Retiré
    },
    {
      title: "e-Civil Mairie (Actes de Naissance)",
      category: "Digitalisation Administrative",
      description: "Projet de numérisation du processus de demande et de suivi des actes de naissance, offrant une interface frontend réactive et un backend robuste.",
      images: [
        "/mairie/Captureg.webp",
        "/mairie/photo.webp"
      ],
      tags: ["React", "TypeScript", "Express.js", "Node.js"],
      link: "#",
      github: "#",
      icon: Calendar,
      showPreviewButton: false, // Retiré
    },
  ];

  return (
    <section id="projets" className="relative bg-zinc-950 py-24 text-zinc-100 overflow-hidden">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        
        {/* En-tête de section avec animation d'apparition */}
        <div className="mb-16 text-center animate-in fade-in slide-in-from-bottom-6 duration-700">
          <div className="inline-flex items-center gap-2 rounded-full bg-zinc-900 px-4 py-1.5 text-xs font-semibold tracking-wider text-indigo-400 border border-zinc-800 uppercase shadow-inner">
            <Sparkles className="h-3.5 w-3.5" /> Mes Réalisations
          </div>
          <h2 className="mt-4 text-3xl font-bold tracking-tight sm:text-4xl text-white">
            Projets Vedettes
          </h2>
          <p className="mt-2 text-zinc-400 max-w-2xl mx-auto text-sm sm:text-base">
            Découvrez une sélection de mes projets récents alliant ingénierie backend rigoureuse et interfaces frontend soignées.
          </p>
        </div>

        {/* Grille des projets */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => {
            const IconComponent = project.icon;
            return (
              <div
                key={index}
                className="group relative flex flex-col rounded-3xl bg-zinc-900/60 border border-zinc-800 overflow-hidden shadow-xl transition-all duration-300 hover:-translate-y-2 hover:border-indigo-500/50 hover:shadow-2xl hover:shadow-indigo-500/10 animate-in fade-in slide-in-from-bottom-8 duration-700"
                style={{ animationDelay: `${index * 150}ms` }}
              >
                {/* Conteneur Image avec Swiper cliquable pour ouvrir la modale */}
                <div 
                  className="relative h-56 w-full overflow-hidden bg-zinc-950 cursor-pointer"
                  onClick={() => openImageModal(project.images, project.title)}
                  title="Cliquez pour agrandir les images"
                >
                  {isMounted ? (
                    <Swiper
                      modules={[Autoplay, Pagination, EffectFade]}
                      effect={"fade"}
                      autoplay={{
                        delay: 10000,
                        disableOnInteraction: false,
                      }}
                      pagination={{
                        clickable: true,
                      }}
                      className="h-full w-full project-swiper"
                    >
                      {project.images.map((img, imgIndex) => (
                        <SwiperSlide key={imgIndex} className="relative h-full w-full">
                          <Image
                            src={img}
                            alt={`${project.title} - aperçu ${imgIndex + 1}`}
                            fill
                            className="object-cover transition-transform duration-500 group-hover:scale-105"
                            sizes="(max-width: 768px) 100vw, 33vw"
                          />
                        </SwiperSlide>
                      ))}
                    </Swiper>
                  ) : (
                    <div className="relative h-full w-full">
                      <Image
                        src={project.images[0]}
                        alt={project.title}
                        fill
                        className="object-cover"
                        sizes="(max-width: 768px) 100vw, 33vw"
                      />
                    </div>
                  )}

                  {/* Badge Catégorie flottant */}
                  <div className="absolute top-4 left-4 z-10 flex items-center gap-2 px-3 py-1.5 rounded-full bg-zinc-950/80 backdrop-blur-md border border-zinc-800 text-xs font-medium text-indigo-400 pointer-events-none">
                    <IconComponent className="h-3.5 w-3.5" />
                    {project.category}
                  </div>

                  {/* Overlay indicatif au survol */}
                  <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center z-20 pointer-events-none">
                    <span className="px-3 py-1.5 rounded-xl bg-zinc-900/90 text-white text-xs font-medium border border-zinc-700 shadow-lg">
                      🔍 Agrandir les images
                    </span>
                  </div>
                </div>

                {/* Contenu de la carte */}
                <div className="flex flex-1 flex-col justify-between p-6">
                  <div>
                    <h3 className="text-xl font-bold text-white group-hover:text-indigo-400 transition-colors">
                      {project.title}
                    </h3>
                    <p className="mt-3 text-sm text-zinc-400 leading-relaxed">
                      {project.description}
                    </p>

                    {/* Tags technologiques */}
                    <div className="mt-6 flex flex-wrap gap-2">
                      {project.tags.map((tag, tagIndex) => (
                        <span
                          key={tagIndex}
                          className="px-2.5 py-1 text-xs font-mono rounded-lg bg-zinc-800/80 text-zinc-300 border border-zinc-700/50"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Liens d'action en bas de carte */}
                  <div className="mt-8 pt-4 border-t border-zinc-800/80 flex items-center justify-between">
                    <Link
                      href={project.github}
                      className="inline-flex items-center gap-2 text-xs font-medium text-zinc-400 hover:text-white transition-colors"
                    >
                      <FaGithub className="h-4 w-4" /> Code source
                    </Link>

                    {project.showPreviewButton && (
                      <Link
                        href={project.link}
                        className="inline-flex items-center gap-1.5 px-4 py-2 text-xs font-medium rounded-xl bg-indigo-600 hover:bg-indigo-500 text-white transition-all shadow-md shadow-indigo-600/20"
                      >
                        <span>Voir le projet</span>
                        <ExternalLink className="h-3.5 w-3.5" />
                      </Link>
                    )}
                  </div>
                </div>
              </div>
            );
          })}
        </div>

      </div>

      {/* MODAL DE PRÉSENTATION DES IMAGES */}
      {modalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 backdrop-blur-md p-4 animate-in fade-in duration-200">
          <div className="relative w-full max-w-4xl bg-zinc-900 border border-zinc-800 rounded-3xl overflow-hidden shadow-2xl flex flex-col">
            
            {/* Header de la modale */}
            <div className="flex items-center justify-between px-6 py-4 border-b border-zinc-800 bg-zinc-950/50">
              <h3 className="text-lg font-bold text-white flex items-center gap-2">
                <Sparkles className="h-4 w-4 text-indigo-400" />
                {activeProjectTitle} - Galerie d'images
              </h3>
              <button
                onClick={() => setModalOpen(false)}
                className="p-2 rounded-full bg-zinc-800 text-zinc-400 hover:text-white hover:bg-zinc-700 transition-colors"
                aria-label="Fermer"
              >
                <X className="h-5 w-5" />
              </button>
            </div>

            {/* Corps de la modale avec Swiper de navigation */}
            <div className="relative h-[60vh] w-full bg-black">
              <Swiper
                modules={[Navigation, Pagination]}
                navigation={{
                  nextEl: ".swiper-button-next-custom",
                  prevEl: ".swiper-button-prev-custom",
                }}
                pagination={{ clickable: true }}
                className="h-full w-full modal-swiper"
              >
                {activeImages.map((img, idx) => (
                  <SwiperSlide key={idx} className="relative h-full w-full flex items-center justify-center">
                    <div className="relative h-full w-full">
                      <Image
                        src={img}
                        alt={`Aperçu ${idx + 1}`}
                        fill
                        className="object-contain"
                      />
                    </div>
                  </SwiperSlide>
                ))}
              </Swiper>

              {/* Boutons de navigation personnalisés */}
              <button className="swiper-button-prev-custom absolute left-4 top-1/2 -translate-y-1/2 z-30 p-3 rounded-full bg-zinc-900/80 border border-zinc-700 text-white hover:bg-indigo-600 transition-colors shadow-lg">
                <ChevronLeft className="h-6 w-6" />
              </button>
              <button className="swiper-button-next-custom absolute right-4 top-1/2 -translate-y-1/2 z-30 p-3 rounded-full bg-zinc-900/80 border border-zinc-700 text-white hover:bg-indigo-600 transition-colors shadow-lg">
                <ChevronRight className="h-6 w-6" />
              </button>
            </div>

            {/* Footer de la modale */}
            <div className="px-6 py-4 bg-zinc-950/50 border-t border-zinc-800 text-center text-xs text-zinc-400">
              Utilisez les flèches ou faites glisser pour naviguer entre les captures d'écran.
            </div>
          </div>
        </div>
      )}
    </section>
  );
}