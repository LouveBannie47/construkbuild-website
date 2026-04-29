import React from 'react';
import { FaFacebookF, FaLinkedinIn, FaInstagram } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white pt-16 pb-8 px-6 md:px-16">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
        <div className="space-y-4">
          <h2 className="text-2xl font-bold">Construk<span className="text-blue-400">Build</span></h2>
          <p className="text-gray-400 text-sm">Expert en bâtiment et travaux publics. Nous bâtissons vos rêves avec rigueur et passion.</p>
          <div className="flex gap-4">
            <a href="#" className="p-2 bg-gray-800 rounded-full hover:bg-blue-400 transition-colors"><FaFacebookF /></a>
            <a href="#" className="p-2 bg-gray-800 rounded-full hover:bg-blue-400 transition-colors"><FaLinkedinIn /></a>
            <a href="#" className="p-2 bg-gray-800 rounded-full hover:bg-blue-400 transition-colors"><FaInstagram /></a>
          </div>
        </div>
        
        <div>
          <h3 className="font-bold mb-4 uppercase text-sm tracking-widest">Liens rapides</h3>
          <ul className="space-y-2 text-gray-400">
            <li><a href="#accueil" className="hover:text-blue-400">Accueil</a></li>
            <li><a href="#a-propos" className="hover:text-blue-400">À propos</a></li>
            <li><a href="#realisations" className="hover:text-blue-400">Réalisations</a></li>
            <li><a href="#blog" className="hover:text-blue-400">Blog</a></li>
            <li><a href="#contact" className="hover:text-blue-400">Contact</a></li>
          </ul>
        </div>

        <div>
          <h3 className="font-bold mb-4 uppercase text-sm tracking-widest">Services</h3>
          <ul className="space-y-2 text-gray-400">
            <li>Construction Civile</li>
            <li>Rénovation d'intérieur</li>
            <li>Génie Industriel</li>
            <li>Architecture & Plans</li>
          </ul>
        </div>

        <div>
          <h3 className="font-bold mb-4 uppercase text-sm tracking-widest">Newsletter</h3>
          <p className="text-gray-400 text-sm mb-4">Restez informé de nos derniers chantiers.</p>
          <div className="flex">
            <input type="email" placeholder="Email" className="bg-gray-800 border-none p-2 rounded-l-lg w-full focus:ring-1 ring-blue-400" />
            <button className="bg-blue-400 px-4 rounded-r-lg hover:bg-blue-500 transition-all">→</button>
          </div>
        </div>
      </div>
      <div className="border-t border-gray-800 pt-8 text-center text-gray-500 text-sm">
        &copy; 2025 ConstrukBuild SARL. Tous droits réservés.
      </div>
    </footer>
  );
};

export default Footer;