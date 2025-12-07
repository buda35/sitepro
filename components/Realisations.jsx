'use client';

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight, ExternalLink } from 'lucide-react';

const projects = [
  {
    id: 1,
    title: 'Site E-commerce',
    description: 'Boutique en ligne moderne avec paiement sécurisé',
    image: '/uploads/hero1.jpg',
    tags: ['E-commerce', 'React', 'Node.js'],
    link: 'https://example.com'
  },
  {
    id: 2,
    title: 'Portfolio Artistique',
    description: 'Galerie interactive pour artiste contemporain',
    image: '/uploads/hero2.jpg',
    tags: ['Portfolio', 'Animation', 'Three.js'],
    link: 'https://example.com'
  },
  {
    id: 3,
    title: 'Application Web',
    description: 'Plateforme de gestion de projets',
    image: '/uploads/hero3.jpg',
    tags: ['SaaS', 'Vue.js', 'Firebase'],
    link: 'https://example.com'
  },
  // Ajoutez d'autres projets ici
];

export default function Realisations() {
  const [hoveredProject, setHoveredProject] = useState(null);

  return (
    <section className="section bg-light-white">
      <div className="grid-container">
        <div className="col-span-12 text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gradient">
            Nos Réalisations
          </h2>
          <p className="text-xl text-custom-grey/80 max-w-3xl mx-auto">
            Découvrez une sélection de nos projets les plus récents, 
            témoignant de notre expertise en création web.
          </p>
        </div>

        <div className="col-span-12">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project) => (
              <div
                key={project.id}
                className="card group relative overflow-hidden"
                onMouseEnter={() => setHoveredProject(project.id)}
                onMouseLeave={() => setHoveredProject(null)}
              >
                <div className="relative h-[300px]">
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>

                <div className="p-6">
                  <h3 className="text-2xl font-bold mb-2">{project.title}</h3>
                  <p className="text-custom-grey/70 mb-4">{project.description}</p>
                  
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-3 py-1 bg-accent-red/10 text-accent-red rounded-full text-sm"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  <Link
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center text-accent-red hover:text-accent-red/80 transition-colors"
                  >
                    Voir le projet
                    <ExternalLink className="w-4 h-4 ml-2" />
                  </Link>
                </div>

                {/* Overlay avec animation */}
                <div
                  className={`absolute inset-0 bg-accent-red/90 flex items-center justify-center transition-all duration-300 ${
                    hoveredProject === project.id
                      ? 'opacity-100'
                      : 'opacity-0 pointer-events-none'
                  }`}
                >
                  <div className="text-center p-6">
                    <h3 className="text-2xl font-bold text-white mb-4">
                      {project.title}
                    </h3>
                    <p className="text-white/90 mb-6">{project.description}</p>
                    <Link
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn btn-secondary group"
                    >
                      Voir le projet
                      <ArrowRight className="w-5 h-5 ml-2 inline-block group-hover:translate-x-1 transition-transform" />
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="col-span-12 text-center mt-16">
          <Link href="/contact">
            <button className="btn btn-primary group">
              Démarrer votre projet
              <ArrowRight className="w-5 h-5 ml-2 inline-block group-hover:translate-x-1 transition-transform" />
            </button>
          </Link>
        </div>
      </div>
    </section>
  );
} 