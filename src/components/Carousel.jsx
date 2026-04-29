import { useState, useEffect } from "react";
import { HiOutlineArrowNarrowLeft, HiOutlineArrowNarrowRight } from "react-icons/hi";
import CustomButton from "./CustomButton";

const slides = [
  {
    src: "src/assets/hero-chantier-1.jpg",
    title: "Bâtissons l'avenir ensemble",
    description: "Forts de notre expertise en bâtiment et travaux publics, nous réalisons des projets solides et durables.",
  },
  {
    src: "src/assets/hero-chantier-2.jpg",
    title: "Structures Solides, Futur Durable",
    description: "De la construction neuve à la rénovation, nous garantissons qualité, sécurité et respect des délais.",
  },
  {
    src: "src/assets/hero-chantier-3.jpg",
    title: "Votre satisfaction, notre priorité",
    description: "Des solutions sur mesure adaptées à vos besoins, conformes aux normes les plus exigeantes.",
  },
];

const Carousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % slides.length);
    }, 6000);
    return () => clearInterval(interval);
  }, []);

  const nextSlide = () => setCurrentIndex((prev) => (prev + 1) % slides.length);
  const prevSlide = () => setCurrentIndex((prev) => (prev === 0 ? slides.length - 1 : prev - 1));

  return (
    <section id="accueil" className="relative w-full h-screen overflow-hidden bg-gray-950">
      {slides.map((slide, index) => {
        const isActive = index === currentIndex;

        return (
          <div
            key={index}
            className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
              isActive ? "opacity-100 z-10" : "opacity-0 z-0"
            }`}
          >
            <img
              src={slide.src}
              alt={slide.title}
              className="w-full h-full object-cover object-center"
            />

            <div className="absolute inset-0 bg-gradient-to-r from-gray-950/90 via-gray-950/50 to-transparent" />
            <div className="absolute inset-0 bg-gradient-to-b from-gray-950/40 via-transparent to-gray-950/70" />

            <div className="absolute inset-0 flex items-center z-20">
              <div className="w-full px-6 sm:px-12 md:px-16 lg:px-24 pt-20">
                <div className="max-w-2xl space-y-5 md:space-y-7">
                  <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold text-white leading-tight">
                    {slide.title}
                  </h2>
                  <p className="text-base sm:text-lg md:text-xl text-gray-300 leading-relaxed max-w-xl">
                    {slide.description}
                  </p>

                  <div className={`flex flex-wrap gap-4 pt-2 transition-all duration-700 ${isActive ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"}`}>
                    <CustomButton text="En savoir plus" />
                    <button
                      onClick={() => {
                        const realisationsSection = document.getElementById('realisations');
                        if (realisationsSection) {
                          const top = realisationsSection.getBoundingClientRect().top + window.scrollY - 85;
                          window.scrollTo({ top, behavior: 'smooth' });
                        }
                      }}
                      className="px-8 py-3 rounded-full font-semibold text-sm uppercase tracking-widest border-1 border-white text-white hover:bg-white hover:text-gray-900 transition-all duration-300"
                    >
                      Nos Réalisations
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        );
      })}

      {/* Flèches de navigation */}
      <button
        onClick={prevSlide}
        className="absolute left-4 md:left-6 top-1/2 -translate-y-1/2 text-white/50 z-30 p-3 rounded-full hover:bg-white/10 hover:text-white transition-all duration-300 hidden md:flex"
        aria-label="Slide précédente"
      >
        <HiOutlineArrowNarrowLeft className="size-9" />
      </button>

      <button
        onClick={nextSlide}
        className="absolute right-4 md:right-6 top-1/2 -translate-y-1/2 text-white/50 z-30 p-3 rounded-full hover:bg-white/10 hover:text-white transition-all duration-300 hidden md:flex"
        aria-label="Slide suivante"
      >
        <HiOutlineArrowNarrowRight className="size-9" />
      </button>

      {/* Indicateurs */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-30 flex gap-3">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentIndex(index)}
            className={`transition-all duration-300 rounded-full ${
              currentIndex === index ? "w-8 h-2 bg-blue-400" : "w-2 h-2 bg-white/40 hover:bg-white/70"
            }`}
            aria-label={`Aller à la slide ${index + 1}`}
          />
        ))}
      </div>
    </section>
  );
};

export default Carousel;
