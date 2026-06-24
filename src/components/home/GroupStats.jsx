export default function GroupStats() {
  const stats = [
    { id: 1, number: "15+", label: "Years of Academic Glory", sub: "Since 2011" },
    { id: 2, number: "100%", label: "HAP Practical Oriented", sub: "Live Anatomy Labs" },
    { id: 3, number: "5000+", label: "Healthcare Alumni", sub: "Working Globally" },
    { id: 4, number: "50+", label: "Top Hospital Tie-ups", sub: "Clinical Training" },
  ];

  return (
    <div className="bg-gradient-to-b from-slate-50 to-white py-16 border-y border-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Subtle Section Divider line indicator */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12">
          {stats.map((item) => (
            <div key={item.id} className="text-center group p-6 rounded-2xl transition-all duration-300 hover:bg-emerald-50/40">
              {/* Dynamic Number Counter look */}
              <div className="text-4xl md:text-5xl font-black text-emerald-600 tracking-tight mb-2 group-hover:scale-105 transition-transform duration-300">
                {item.number}
              </div>
              {/* Label fetched straight from their real elements text */}
              <div className="text-slate-900 font-extrabold text-sm md:text-base tracking-tight mb-1">
                {item.label}
              </div>
              <div className="text-slate-500 text-xs font-medium font-mono">
                {item.sub}
              </div>
            </div>
          ))}
        </div>

      </div>
    </div>
  );
}