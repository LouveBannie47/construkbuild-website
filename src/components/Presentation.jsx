import React from 'react';
import CustomButton from './CustomButton';
import SectionHeader from './SectionHeader';

const Presentation = () => {
  return (
    <section id="a-propos" className="max-w-7xl mx-auto py-24 px-6 md:px-16 flex flex-col lg:flex-row gap-16 items-center">
      <div className="w-full lg:w-1/2 grid grid-cols-2 gap-4">
        <img src="src/assets/about-1.jpg" alt="Chantier" className="w-full h-64 object-cover rounded-2xl" />
        <img src="src/assets/about-2.jpg" alt="Équipe" className="w-full h-64 object-cover rounded-2xl mt-8" />
      </div>

      <div className="w-full lg:w-1/2 space-y-6">
            <SectionHeader
                tag="À propos de nous" 
                title={<>L'excellence au service de la <span className="text-blue-500">construction.</span></>}
                light={false}
            />
        <p className="text-gray-600 leading-relaxed">
          Nous sommes une entreprise passionnée par l'excellence dans le secteur du bâtiment et des travaux publics. Notre mission est de transformer vos idées en réalisations durables et innovantes, en respectant les normes les plus rigoureuses.
        </p>
        <div className="grid grid-cols-2 gap-6 pt-4">
          <div>
            <h4 className="font-bold text-gray-900">Qualité</h4>
            <p className="text-sm text-gray-500">Matériaux premium et finitions soignées.</p>
          </div>
          <div>
            <h4 className="font-bold text-gray-900">Délais</h4>
            <p className="text-sm text-gray-500">Respect strict du calendrier de livraison.</p>
          </div>
        </div>
        <div className="pt-6">
          <CustomButton text="Découvrir notre histoire" />
        </div>
      </div>
    </section>
  );
};

export default Presentation;