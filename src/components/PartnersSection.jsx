import React from 'react';

// Imports des vraies images (chemin identique à partSection.jsx)
import ecobank from "../assets/part-1.jpg";
import mtn from "../assets/Part-2.jpg";
import orange from "../assets/part-3.jpg";
import uba from "../assets/part-4.jpg";
import guinness from "../assets/part-5.jpg";
import sorepco from "../assets/part-6.webp";

const logos = [
  { src: ecobank, alt: "Ecobank" },
  { src: mtn, alt: "MTN" },
  { src: orange, alt: "Orange" },
  { src: uba, alt: "UBA" },
  { src: guinness, alt: "Guinness" },
  { src: sorepco, alt: "Sorepco" },
];

const PartnersSection = () => {
  return (
    <div className="w-full bg-gray-50 py-12 border-y border-gray-100 overflow-hidden">
      <style>{`
        @keyframes marquee {
          0%   { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .partners-track {
          display: flex;
          width: max-content;
          animation: marquee 24s linear infinite;
        }
        .partners-track:hover {
          animation-play-state: paused;
        }
      `}</style>

      {/*
        Layout : label à gauche (fixe) + piste défilante à droite.
        Sur TOUS les écrans (mobile inclus) le label reste sur la même ligne
        grâce à flex + shrink-0.
        La piste défile de la même façon quel que soit l'écran.
      */}
      <div className="flex items-center gap-6 px-6 md:px-16">

        {/* Label — fixe, ne rétrécit jamais */}
        <div className="shrink-0 text-gray-500 font-bold uppercase tracking-widest text-xs border-l-4 border-blue-500 pl-4 leading-relaxed">
          Nos partenaires<br />de confiance
        </div>

        {/* Piste défilante avec fondu gauche/droite */}
        <div className="flex-1 overflow-hidden relative">
          <div className="absolute left-0 top-0 bottom-0 w-10 bg-gradient-to-r from-gray-50 to-transparent z-10 pointer-events-none" />
          <div className="absolute right-0 top-0 bottom-0 w-10 bg-gradient-to-l from-gray-50 to-transparent z-10 pointer-events-none" />

          {/* Double la liste pour un loop parfait */}
          <div className="partners-track">
            {[...logos, ...logos].map((logo, index) => (
              <img
                key={index}
                src={logo.src}
                alt={logo.alt}
                className="mx-10 h-16 w-40 object-contain grayscale opacity-60 hover:grayscale-0 hover:opacity-100 transition-all duration-300 shrink-0"
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default PartnersSection;
