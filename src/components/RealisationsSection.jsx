import React from 'react';
import CustomButton from './CustomButton';
import SectionHeader from './SectionHeader';

// 1. Importer toutes les images de projets
import project1 from "../assets/project-1.jpg";
import project2 from "../assets/project-2.jpg";
import project3 from "../assets/project-3.jpg";
import project4 from "../assets/project-4.jpg";

const projects = [
  {
    id: 1,
    title: "Résidence SkyLine",
    location: "Douala, Bonapriso",
    category: "Résidentiel",
    img: project1, // Utiliser la variable importée
    stats: "24 Mois"
  },
  {
    id: 2,
    title: "Complexe Industriel Flux",
    location: "Kribi, Zone Portuaire",
    category: "Industriel",
    img: project2,
    stats: "4500 m²"
  },
  {
    id: 3,
    title: "Siège Social TechBuild",
    location: "Yaoundé, Centre",
    category: "Tertiaire",
    img: project3,
    stats: "HQE"
  },
  {
    id: 4,
    title: "Pont de la Réunification",
    location: "Littoral",
    category: "Infrastructure",
    img: project4,
    stats: "Génie Civil"
  }
];

const RealisationsSection = () => {
  return (
    <section id="realisations" className="py-24 px-6 md:px-16 bg-white">
      <div className="max-w-7xl mx-auto">
        
        {/* En-tête avec ligne décorative */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div className="space-y-4">
            <SectionHeader
                tag="Nos Projets" 
                title={<>L'excellence gravée <br /> dans la <span className="text-blue-400">pierre.</span></>}
                light={false}
            />
          </div>
          <p className="text-gray-500 max-w-md border-l-2 border-blue-400 pl-4">
            Chaque chantier est une signature. Découvrez comment nous transformons les paysages urbains avec rigueur.
          </p>
        </div>

        {/* Grille de projets */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {projects.map((project) => (
            <div key={project.id} className="group relative h-[450px] overflow-hidden rounded-3xl bg-gray-100 shadow-2xl">
              
              {/* Image avec zoom au hover */}
              <img 
                src={project.img} // project.img contient maintenant le chemin valide traité par Vite
                alt={project.title} 
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" 
              />

              {/* Le reste de ton code JSX reste identique... */}
              <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-transparent to-transparent opacity-80" />

              <div className="absolute top-6 left-6">
                <span className="bg-white/90 backdrop-blur-md text-gray-900 px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-widest shadow-lg">
                  {project.category}
                </span>
              </div>

              <div className="absolute bottom-0 left-0 right-0 p-8 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                <div className="flex justify-between items-end">
                  <div className="space-y-1">
                    <p className="text-blue-400 font-medium flex items-center gap-2">
                      <span className="w-8 h-[1px] bg-blue-400"></span> {project.location}
                    </p>
                    <h3 className="text-2xl md:text-3xl font-bold text-white">{project.title}</h3>
                  </div>
                  
                  <div className="text-right hidden sm:block">
                    <span className="text-white/60 text-xs uppercase block">Spécificité</span>
                    <span className="text-white font-semibold">{project.stats}</span>
                  </div>
                </div>

                <div className="mt-6 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                   <button className="text-white border-b-2 border-blue-400 pb-1 font-semibold hover:text-blue-400 transition-colors">
                      Découvrir le projet →
                   </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
            <CustomButton text="Explorer tous nos chantiers" />
        </div>
      </div>
    </section>
  );
};

export default RealisationsSection;