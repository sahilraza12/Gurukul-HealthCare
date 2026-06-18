import React from 'react';

export default function BentoFacilities() {
  const facilities = [
    {
      id: 1,
      title: "Advanced Pharmaceutical LAB 1",
      desc: "Equipped with high-precision analytical balances, distillation setups, and chemical compounding infrastructure for modern drug research.",
      image: "/bannerimage/5519702088.jfif",
      tag: "Pharmacy",
      size: "md:col-span-8 h-80"
    },
    {
      id: 2,
      title: "HAP Practical Performing Center",
      desc: "Live human anatomy charts, skeleton models, and simulation tools for advanced physiology operations.",
      image: "/bannerimage/4426590152.jfif",
      tag: "Nursing & Pharmacy",
      size: "md:col-span-4 h-80"
    },
    {
      id: 3,
      title: "Green Lush Sports Campus",
      desc: "Wide outdoor sports ground and open interactive ecosystem cultivating overall student development.",
      image: "/bannerimage/236943159278e88f6-77b5-485f-aa4d-74088361680b.jpeg",
      tag: "Campus Facility",
      size: "md:col-span-4 h-80"
    },
    {
      id: 4,
      title: "Clinical Simulation Wards",
      desc: "Mock patient checkup setups with standard clinical beds and emergency monitoring systems to groom real-time nursing expertise.",
      image: "/bannerimage/109012293002c0d482-5150-4d1d-8b47-d83f16cee82f.jpeg",
      tag: "Nursing",
      size: "md:col-span-8 h-80"
    }
  ];

  return (
    <div className="bg-white py-16 px-4">
      <div className="max-w-7xl mx-auto">
        
        {/* Header Titles */}
        <div className="mb-12">
          <div className="flex items-center space-x-2 text-emerald-600 font-bold text-xs uppercase tracking-wider mb-2">
            <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
            <span>Infrastructure Core</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-black text-slate-900 tracking-tight">
            State-of-the-Art <span className="text-emerald-600">Campus Facilities</span>
          </h2>
          <p className="text-slate-600 text-sm md:text-base mt-2 max-w-2xl font-medium">
            Explore GIPS & G.S.N computational setups, operational drug analytical centers, and real-time clinical training laboratories.
          </p>
        </div>

        {/* Bento Grid Structures */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
          {facilities.map((fac) => (
            <div 
              key={fac.id}
              className={`relative rounded-3xl overflow-hidden group border border-slate-200/60 shadow-xl shadow-slate-100 flex flex-col justify-end p-6 md:p-8 ${fac.size}`}
            >
              {/* Facility Render Base Image */}
              <img 
                src={fac.image} 
                alt={fac.title}
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                onError={(e) => { e.target.src = "https://images.unsplash.com/photo-1516549655169-df83a0774514?auto=format&fit=crop&w=800&q=80"; }} 
              />
              
              {/* Solid White To Transparent Matte Bottom Coating Gradient */}
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900/90 via-slate-900/40 to-transparent z-10" />

              {/* Tag Badge */}
              <span className="absolute top-4 left-4 bg-emerald-600 text-white font-bold text-[10px] tracking-wider px-3 py-1 rounded-full uppercase z-20 shadow-md">
                {fac.tag}
              </span>

              {/* Text Layout Meta Elements */}
              <div className="relative z-20 transform transition-all duration-300 group-hover:-translate-y-1">
                <h3 className="text-xl font-black text-white mb-2 tracking-tight group-hover:text-emerald-400 transition-colors">
                  {fac.title}
                </h3>
                <p className="text-slate-200 text-xs leading-relaxed opacity-90 font-medium max-w-xl">
                  {fac.desc}
                </p>
              </div>

            </div>
          ))}
        </div>

      </div>
    </div>
  );
}