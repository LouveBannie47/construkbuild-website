import React from 'react';
import HeadContainer from './HeadContainer';

const SectionHeader = ({ tag, title, light = false }) => {
  return (
    <div className="space-y-4">
      <HeadContainer text={tag} />
      <h2 className={`text-4xl font-extrabold text-gray-900 leading-tight
        ${light ? 'text-white' : 'text-gray-950'}`}>
        {title}
      </h2>
    </div>
  );
};

export default SectionHeader;