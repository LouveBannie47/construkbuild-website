import React from 'react';
import SectionHeader from './SectionHeader';
import { HiLocationMarker, HiPhone, HiMail } from 'react-icons/hi';

const ContactSection = () => {
  return (
    <section id="contact" className="py-24 px-6 md:px-16 bg-white">
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-20">
        <div className="lg:w-1/2 space-y-8">
         <SectionHeader
                tag="Contactez-nous" 
                title={<>Prêt à lancer votre projet ? <span className="text-blue-400">Demandons un devis.</span></>}
                light={false}
            />
          <p className="text-gray-600">
            Notre équipe d'experts est disponible pour répondre à toutes vos questions techniques et vous accompagner dans la réalisation de vos travaux.
          </p>
          <div className="space-y-4">
            <div className="flex items-center gap-4">
              <div className="p-4 bg-blue-50 rounded-full text-blue-400">
                <HiLocationMarker />
              </div>
              <p className="font-bold text-gray-700">Douala, Cameroun</p>
            </div>
            <div className="flex items-center gap-4">
              <div className="p-4 bg-blue-50 rounded-full text-blue-400">
                <HiPhone />
              </div>
              <p className="font-bold text-gray-700">+237 6XX XXX XXX</p>
            </div>
            <div className="flex items-center gap-4">
              <div className="p-4 bg-blue-50 rounded-full text-blue-400">
                <HiMail />
              </div>
              <p className="font-bold text-gray-700">contact@btp.com</p>
            </div>
          </div>
        </div>

        <div className="lg:w-1/2 bg-gray-50 p-10 rounded-3xl">
          <form className="space-y-6">
            <div className="grid md:grid-cols-2 gap-6">
              <input type="text" placeholder="Nom complet" className="w-full bg-white p-4 rounded-xl outline-none focus:ring-2 focus:ring-blue-400" />
              <input type="email" placeholder="Email" className="w-full bg-white p-4 rounded-xl outline-none focus:ring-2 focus:ring-blue-400" />
            </div>
            <input type="text" placeholder="Sujet du projet" className="w-full bg-white p-4 rounded-xl outline-none focus:ring-2 focus:ring-blue-400" />
            <textarea placeholder="Décrivez votre besoin..." rows="5" className="w-full bg-white p-4 rounded-xl outline-none focus:ring-2 focus:ring-blue-400"></textarea>
            <button className="w-full bg-gray-900 text-white py-4 rounded-xl font-bold uppercase tracking-widest hover:bg-blue-400 transition-all shadow-lg shadow-gray-200">
              Envoyer le message
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;