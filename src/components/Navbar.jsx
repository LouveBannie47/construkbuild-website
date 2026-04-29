import { useState, useEffect } from 'react';
import { HiMenu, HiX } from 'react-icons/hi';

const NAV_LINKS = [
  { href: '#accueil',      label: 'accueil' },
  { href: '#a-propos',     label: 'à propos' },
  { href: '#realisations', label: 'réalisations' },
  { href: '#blog',         label: 'blog' },
  { href: '#contact',      label: 'contact' },
];

const Navbar = () => {
  const [isMenuOpen,   setIsMenuOpen]   = useState(false);
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const [activeLink,   setActiveLink]   = useState('#accueil');
  const [scrolled,     setScrolled]     = useState(false);

  // Ombre de la navbar au scroll
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  // Lien actif mis à jour automatiquement selon la section visible
  useEffect(() => {
    const sections = NAV_LINKS.map(({ href }) => document.querySelector(href)).filter(Boolean);

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActiveLink(`#${entry.target.id}`);
        });
      },
      { rootMargin: '-30% 0px -60% 0px', threshold: 0 }
    );

    sections.forEach((el) => observer.observe(el));
    return () => sections.forEach((el) => observer.unobserve(el));
  }, []);

  // Bloquer le scroll du body quand le drawer est ouvert
  useEffect(() => {
    document.body.style.overflow = isDrawerOpen ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [isDrawerOpen]);

  // Smooth scroll avec offset de 80px pour la navbar fixe
  const handleNavClick = (e, href) => {
    e.preventDefault();
    setIsMenuOpen(false);
    const target = document.querySelector(href);
    if (!target) return;
    const top = target.getBoundingClientRect().top + window.scrollY - 80;
    window.scrollTo({ top, behavior: 'smooth' });
  };

  const openDrawer = () => {
    setIsMenuOpen(false);
    setIsDrawerOpen(true);
  };

  return (
    <>
      <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? 'bg-white shadow-md border-b border-gray-100' : 'bg-white/95 backdrop-blur-sm border-b border-gray-100'
      }`}>
        <div className="max-w-6xl mx-auto flex items-center justify-between px-6 h-20">

          {/* Logo */}
          <div className="flex items-center gap-2 cursor-pointer">
            <img
              src="/logo.png"
              alt="Logo ConstrukBuild"
              className="h-10 w-auto"
              onError={(e) => (e.target.style.display = 'none')}
            />
            <span className="font-bold text-2xl text-gray-700 tracking-tighter">
              Construk<span className="text-blue-400">Build</span>
            </span>
          </div>

          {/* Liens desktop (visible à partir de 768px) */}
          <div className="hidden md:flex items-center gap-8">
            {NAV_LINKS.map(({ href, label }) => (
              <a
                key={href}
                href={href}
                onClick={(e) => handleNavClick(e, href)}
                className={`text-sm font-semibold uppercase tracking-widest transition-colors hover:text-blue-500 ${
                  activeLink === href ? 'text-blue-500' : 'text-gray-600'
                }`}
              >
                {label}
              </a>
            ))}
            <button
              onClick={openDrawer}
              className="bg-blue-500 text-white px-6 py-3 rounded-full text-xs font-bold uppercase tracking-widest hover:bg-gray-900 transition-all"
            >
              Obtenir un devis
            </button>
          </div>

          {/* Hamburger mobile */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden text-gray-800"
            aria-label="Ouvrir le menu"
          >
            {isMenuOpen ? <HiX size={28} /> : <HiMenu size={28} />}
          </button>
        </div>

        {/* Menu mobile déroulant */}
        {isMenuOpen && (
          <div className="md:hidden bg-white border-t px-6 py-6 space-y-4 shadow-xl">
            {NAV_LINKS.map(({ href, label }) => (
              <a
                key={href}
                href={href}
                onClick={(e) => handleNavClick(e, href)}
                className={`block text-lg font-medium capitalize transition-colors hover:text-blue-500 ${
                  activeLink === href ? 'text-blue-500' : 'text-gray-800'
                }`}
              >
                {label}
              </a>
            ))}
            <button
              onClick={openDrawer}
              className="w-full mt-2 bg-blue-500 text-white py-4 rounded-2xl font-bold uppercase tracking-widest"
            >
              Obtenir un devis
            </button>
          </div>
        )}
      </nav>

      {/* Overlay du drawer */}
      <div
        className={`fixed inset-0 bg-black/50 z-[90] transition-opacity duration-300 ${
          isDrawerOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
        }`}
        onClick={() => setIsDrawerOpen(false)}
      />

      {/* Drawer formulaire devis */}
      <div className={`fixed top-0 right-0 h-full w-full max-w-xl bg-white z-[100] shadow-2xl flex flex-col transition-transform duration-500 ease-in-out ${
        isDrawerOpen ? 'translate-x-0' : 'translate-x-full'
      }`}>

        <div className="flex items-start justify-between px-8 pt-8 pb-6 border-b border-gray-100 shrink-0">
          <h2 className="text-2xl font-bold text-gray-900 leading-tight">
            Votre projet, <span className="text-blue-500">notre expertise.</span>
          </h2>
          <button
            onClick={() => setIsDrawerOpen(false)}
            className="p-2 rounded-full hover:bg-gray-100 text-gray-400 hover:text-gray-600 transition-colors"
            aria-label="Fermer"
          >
            <HiX size={22} />
          </button>
        </div>

        <div className="flex-1 overflow-y-auto px-8 py-6">
          <form
            onSubmit={(e) => {
              e.preventDefault();
              alert('✅ Demande envoyée ! Nous vous contacterons très rapidement.');
              setIsDrawerOpen(false);
            }}
            className="space-y-5"
          >
            <div className="grid grid-cols-2 gap-4">
              <div className="flex flex-col gap-1.5">
                <label className="text-xs font-bold text-gray-500 uppercase tracking-widest">Nom complet *</label>
                <input type="text" placeholder="Frédéric Martin" required className="w-full px-4 py-3.5 border border-gray-200 rounded-xl text-sm focus:outline-none focus:border-blue-400 focus:ring-1 focus:ring-blue-300 transition-all" />
              </div>
              <div className="flex flex-col gap-1.5">
                <label className="text-xs font-bold text-gray-500 uppercase tracking-widest">Téléphone *</label>
                <input type="tel" placeholder="+237 6XX XXX XXX" required className="w-full px-4 py-3.5 border border-gray-200 rounded-xl text-sm focus:outline-none focus:border-blue-400 focus:ring-1 focus:ring-blue-300 transition-all" />
              </div>
            </div>

            <div className="flex flex-col gap-1.5">
              <label className="text-xs font-bold text-gray-500 uppercase tracking-widest">Email *</label>
              <input type="email" placeholder="fredericmartin@email.com" required className="w-full px-4 py-3.5 border border-gray-200 rounded-xl text-sm focus:outline-none focus:border-blue-400 focus:ring-1 focus:ring-blue-300 transition-all" />
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div className="flex flex-col gap-1.5">
                <label className="text-xs font-bold text-gray-500 uppercase tracking-widest">Type de projet *</label>
                <select required className="w-full px-4 py-3.5 border border-gray-200 rounded-xl text-sm focus:outline-none focus:border-blue-400 focus:ring-1 focus:ring-blue-300 transition-all bg-white text-gray-700">
                  <option value="">Choisir...</option>
                  <option value="residentiel">Construction résidentielle</option>
                  <option value="commercial">Bâtiment commercial</option>
                  <option value="industriel">Projet industriel</option>
                  <option value="renovation">Rénovation / Extension</option>
                  <option value="infrastructure">Génie civil</option>
                </select>
              </div>
              <div className="flex flex-col gap-1.5">
                <label className="text-xs font-bold text-gray-500 uppercase tracking-widest">Budget estimé</label>
                <select className="w-full px-4 py-3.5 border border-gray-200 rounded-xl text-sm focus:outline-none focus:border-blue-400 focus:ring-1 focus:ring-blue-300 transition-all bg-white text-gray-700">
                  <option value="">Non défini</option>
                  <option value="moins-20">- de 20M FCFA</option>
                  <option value="20-50">20 – 50M FCFA</option>
                  <option value="50-150">50 – 150M FCFA</option>
                  <option value="plus-150">+ de 150M FCFA</option>
                </select>
              </div>
            </div>

            <div className="flex flex-col gap-1.5">
              <label className="text-xs font-bold text-gray-500 uppercase tracking-widest">Localisation</label>
              <input type="text" placeholder="Ex : Douala, Bonapriso" className="w-full px-4 py-3.5 border border-gray-200 rounded-xl text-sm focus:outline-none focus:border-blue-400 focus:ring-1 focus:ring-blue-300 transition-all" />
            </div>

            <div className="flex flex-col gap-1.5">
              <label className="text-xs font-bold text-gray-500 uppercase tracking-widest">Décrivez votre projet *</label>
              <textarea rows="4" placeholder="Ex: Je souhaite construire une villa de 4 chambres à Douala..." required className="w-full px-4 py-3.5 border border-gray-200 rounded-xl text-sm focus:outline-none focus:border-blue-400 focus:ring-1 focus:ring-blue-300 transition-all resize-none" />
            </div>

            <button type="submit" className="w-full bg-blue-500 hover:bg-gray-900 text-white py-4 rounded-xl font-bold uppercase tracking-widest text-sm transition-all duration-300 shadow-lg shadow-blue-100">
              Envoyer ma demande
            </button>

            <p className="text-center text-xs text-gray-400 pb-4">
              Données confidentielles • Devis 100% gratuit et sans engagement
            </p>
          </form>
        </div>
      </div>
    </>
  );
};

export default Navbar;
