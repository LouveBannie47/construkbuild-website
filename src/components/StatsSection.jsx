import React from "react";

const stats = [
  { label: "Projets Terminés", value: "250+" },
  { label: "Experts Métiers", value: "45" },
  { label: "Années d'Activité", value: "15" },
  { label: "Satisfaction", value: "98%" },
];

const StatsSection = () => {
  return (
    <section className="bg-gray-900 py-10">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-4 items-center">
          {stats.map((stat, index) => (
            <div key={index} className="text-center group">
              <div className="text-4xl md:text-5xl font-black text-white mb-2">
                {stat.value}
              </div>
              <div className="text-blue-400 text-xs uppercase tracking-[0.2em] font-bold">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StatsSection;