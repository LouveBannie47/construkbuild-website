import React from 'react';
import CustomButton from './CustomButton';
import HeadContainer from './HeadContainer';

// 1. Importation des images de blog
import blog1 from "../assets/blog-1.jpg";
import blog2 from "../assets/blog-2.jpg";
import blog3 from "../assets/blog-3.jpg";
import blog4 from "../assets/blog-4.jpg";

const blogs = [
  {
    image: blog1, // Utilisation de la variable importée
    category: "Innovation",
    date: "12 Mars 2025",
    readTime: "5 min",
    title: "Les innovations qui révolutionnent le secteur du BTP",
    description: "Explorez les dernières technologies et innovations dans le domaine du bâtiment et des travaux publics.",
  },
  {
    image: blog2,
    category: "Durabilité",
    date: "5 Mars 2025",
    readTime: "7 min",
    title: "Comment rendre vos constructions plus durables",
    description: "Discutez de l'utilisation de matériaux durables, de techniques de construction respectueuses de l'environnement.",
  },
  {
    image: blog3,
    category: "Conseils",
    date: "28 Fév 2025",
    readTime: "4 min",
    title: "Pourquoi investir dans des matériaux haut de gamme ?",
    description: "Guidez vos visiteurs à travers le processus, du premier plan jusqu'à la livraison du chantier.",
  },
  {
    image: blog4,
    category: "Gestion",
    date: "15 Fév 2025",
    readTime: "6 min",
    title: "Bien gérer un chantier de A à Z",
    description: "Découvrez les meilleures pratiques pour piloter efficacement un projet de construction dans les délais.",
  },
];

const categoryColors = {
  "Innovation": "bg-blue-100 text-blue-600",
  "Durabilité": "bg-emerald-100 text-emerald-600",
  "Conseils":   "bg-amber-100 text-amber-700",
  "Gestion":    "bg-violet-100 text-violet-600",
};

const BlogSection = () => {
  return (
    <section id="blog" className="px-6 md:px-16 py-24 bg-gray-50">

      {/* En-tête */}
      <div className="flex flex-col md:flex-row md:items-end justify-between mb-14 gap-6">
        <div>
          <HeadContainer text="Nos actualités" />
          <h2 className="text-3xl md:text-4xl font-bold mt-3 text-gray-900 leading-tight">
            Découvrez nos dernières <span className="text-blue-500">actualités</span>
          </h2>
        </div>
        <p className="text-gray-500 max-w-sm border-l-2 border-blue-400 pl-4 text-sm leading-relaxed">
          Expertise, conseils techniques et veille sectorielle pour les professionnels du BTP.
        </p>
      </div>

      {/* Grille responsive */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {blogs.map((blog, index) => (
          <article
            key={index}
            className="group bg-white rounded-[0.5rem] overflow-hidden border border-gray-100 shadow-sm hover:shadow-lg transition-all duration-300 flex flex-col"
          >
            {/* Image */}
            <div className="overflow-hidden h-48 shrink-0">
              <img
                src={blog.image} // Vite gère maintenant le chemin dynamiquement
                alt={blog.title}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
            </div>

            {/* Contenu */}
            <div className="p-5 flex flex-col flex-1 gap-3">
              <div className="flex items-center gap-2 flex-wrap">
                <span className={`text-[10px] font-bold uppercase tracking-widest px-2.5 py-1 rounded-full ${categoryColors[blog.category]}`}>
                  {blog.category}
                </span>
                <span className="text-gray-400 text-xs">{blog.readTime} de lecture</span>
              </div>

              <h3 className="font-bold text-gray-800 text-base leading-snug group-hover:text-blue-500 transition-colors line-clamp-2">
                {blog.title}
              </h3>

              <p className="text-gray-500 text-sm leading-relaxed line-clamp-3 flex-1">
                {blog.description}
              </p>

              <div className="flex items-center justify-between pt-3 border-t border-gray-100 mt-auto">
                <span className="text-gray-400 text-xs">{blog.date}</span>
                <button className="text-blue-500 text-xs font-semibold hover:underline transition-colors">
                  Lire la suite →
                </button>
              </div>
            </div>
          </article>
        ))}
      </div>

      <div className="mt-12 flex justify-center">
        <CustomButton text="Voir tous les articles" />
      </div>
    </section>
  );
};

export default BlogSection;