import React from 'react';

const CustomButton = ({ text, outline = false }) => {
  const baseClasses = "px-8 py-3 rounded-full font-semibold text-sm uppercase tracking-widest transition-all duration-300 relative overflow-hidden group inline-block z-10";
  
  const primaryClasses = "bg-blue-400 text-white hover:text-blue-400 hover:shadow-lg hover:shadow-blue-400/30";
  const outlineClasses = "border border-white text-white hover:text-gray-900 hover:border-gray-900";

  return (
    <button className={`${baseClasses} ${outline ? outlineClasses : primaryClasses}`}>
      {/* L'effet de remplissage au hover */}
      <span className={`absolute inset-0 w-0 h-full transition-all duration-300 ease-out group-hover:w-full -z-10
        ${outline ? 'bg-white' : 'bg-gray-900'}`} 
      />
      
      {/* Le texte */}
      <span className="relative z-20">{text}</span>
    </button>
  );
};

export default CustomButton;