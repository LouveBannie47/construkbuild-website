import { useState } from "react";
import { HiOutlineMinusSm, HiOutlinePlusSm } from "react-icons/hi"; 
import CustomButton from "./CustomButton";
import SectionHeader from "./SectionHeader";

const faqs = [
  {
    question: "Quels types de projets de construction réalisez-vous ?",
    answer: "Nous réalisons une large gamme de projets, notamment des constructions résidentielles, commerciales et industrielles. Nous adaptons nos services aux besoins spécifiques de chaque client.",
  },
  {
    question: "Comment garantissez-vous la qualité de vos travaux ?",
    answer: "Nous utilisons des matériaux de haute qualité et nous collaborons avec des professionnels expérimentés. De plus, chaque étape de nos projets est rigoureusement contrôlée.",
  },
  {
    question: "Combien de temps dure un projet de construction ?",
    answer: "La durée dépend de la complexité et de la taille du projet. Nous vous fournissons un calendrier précis après évaluation.",
  },
  {
    question: "Offrez-vous des garanties sur vos travaux ?",
    answer: "Oui, tous nos travaux sont garantis pour vous assurer une tranquillité d'esprit totale et conforme aux normes en vigueur.",
  },
];

const FAQSection = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="bg-gray-900 flex flex-col md:flex-row items-start justify-between gap-12 px-6 md:px-16 py-24">
      
      {/* Bloc de gauche : Utilisation de SectionHeader avec light={true} */}
      <div className="w-full md:w-1/2 space-y-6">
        <SectionHeader 
          tag="FAQ" 
          title={<>Besoin d'aide ? <br /> Nous sommes là <span className="text-blue-400">pour vous.</span></>}
          light={true}
        />
        <p className="text-gray-400 max-w-md">
          N'hésitez pas à nous contacter si vous ne trouvez pas la réponse que vous cherchez dans cette liste. Notre équipe se fera un plaisir de vous guider.
        </p>
        <div className="pt-4">
          <CustomButton text="Poser une question" />
        </div>
      </div>

      {/* Bloc de droite : FAQ Interactive */}
      <div className="w-full md:w-1/2 space-y-4">
        {faqs.map((faq, index) => (
          <div key={index} className="border-b border-gray-700">
            <button
              onClick={() => toggleFAQ(index)}
              className="w-full text-left py-5 flex justify-between items-center transition-colors text-white hover:text-blue-400 group cursor-pointer"
            >
              <span className={`font-semibold text-lg ${openIndex === index ? 'text-blue-400' : ''}`}>
                {faq.question}
              </span>
              
              {/* Icône animée corrigée */}
              <div className="relative size-6 shrink-0 ml-4">
                 <HiOutlineMinusSm className={`absolute inset-0 size-6 text-blue-400 transition-transform duration-300 ${openIndex === index ? 'rotate-0' : 'rotate-90 opacity-0'}`}/>
                 <HiOutlinePlusSm className={`absolute inset-0 size-6 text-gray-500 group-hover:text-blue-400 transition-transform duration-300 ${openIndex === index ? 'rotate-90 opacity-0' : 'rotate-0'}`}/>
              </div>
            </button>

            {/* Contenu rétractable */}
            <div className={`overflow-hidden transition-all duration-300 ease-in-out ${openIndex === index ? 'max-h-96 pb-6' : 'max-h-0'}`}>
              <p className="text-gray-400 text-sm leading-relaxed">
                {faq.answer}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default FAQSection;