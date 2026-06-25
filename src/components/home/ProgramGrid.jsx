import React from 'react';

export default function ProgramGrid() {
  const courses = [
    {
      wing: "Pharmacy (GIPS)",
      name: "Bachelor of Pharmacy (B.Pharmacy)",
      duration: "4 Years",
      eligibility: "10+2 Madical/ Non- Medical",
      seats: "60 Seats / Govt. Norms",
      color: "border-l-4 border-emerald-600 bg-emerald-50/30"
    },
    {
      wing: "Pharmacy (GIPS)",
      name: "Diploma Pharmacy (D.Pharmacy)",
      duration: "2 Years",
      eligibility: "10+2 MEDICAL/ NON-MEDICAL",
      seats: "60 Seats / Govt. Norms",
      color: "border-l-4 border-emerald-500 bg-emerald-50/20"
    },
    {
      wing: "Pharmacy (GIPS)",
      name: "M.Pharmacy (Master of Pharmacy)",
      duration: "2 Years",
      eligibility: "Candidates usually need a B Pharmacy degree from a recognized institution.",
      seats: "As Per Govt. Norms",
      color: "border-l-4 border-emerald-400 bg-emerald-50/15"
    },
    {
      wing: "Pharmacy (GIPS)",
      name: "Paramedical Courses (B.Sc. MLS / OT / Radiology)",
      duration: "3 Years",
      eligibility: "10+2 Medical / Non- Medical",
      seats: "As Per Govt. Norms",
      color: "border-l-4 border-emerald-300 bg-emerald-50/10"
    },
    {
      wing: "Nursing (G.S.N)",
      name: "B.Sc Nursing",
      duration: "4 Years",
      eligibility: "10+2 Medical with PCBE (Physics, Chemistry, Biology & English) - Min 45%",
      seats: "60 Seats",
      color: "border-l-4 border-teal-600 bg-teal-50/30"
    },
    {
      wing: "Nursing (G.S.N)",
      name: "GNM (General Nursing & Midwifery)",
      duration: "3 Years",
      eligibility: "10+2 in any stream (Science preferred) - Min 40%",
      seats: "40 Seats",
      color: "border-l-4 border-teal-500 bg-teal-50/20"
    },
    {
      wing: "Nursing (G.S.N)",
      name: "ANM (Auxiliary Nursing Midwifery)",
      duration: "2 Years",
      eligibility: "10+2 in any stream from a recognized board - Min 40%",
      seats: "30 Seats",
      color: "border-l-4 border-teal-400 bg-teal-50/10"
    }
  ];

  return (
    <div className="bg-slate-50 py-16 px-4 border-t border-slate-200">
      <div className="max-w-7xl mx-auto">
        
        {/* Section Header */}
        <div className="mb-12 text-center md:text-left">
          <div className="text-emerald-600 font-extrabold text-xs uppercase tracking-wider mb-2">
            Academic Programs 2026-27
          </div>
          <h2 className="text-3xl md:text-4xl font-black text-slate-900 tracking-tight">
            Offered Courses & <span className="text-emerald-600">Eligibility Criteria</span>
          </h2>
          <p className="text-slate-600 text-sm mt-2 max-w-2xl font-medium">
            Directly mapped from GIPS & G.S.N university criteria. Find durations, intake seat capacities, and required qualification metrics.
          </p>
        </div>

        {/* Course Cards Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {courses.map((course, idx) => (
            <div 
              key={idx} 
              className={`p-6 rounded-2xl border border-slate-200 shadow-sm flex flex-col justify-between transition-all duration-300 hover:shadow-md hover:scale-[1.01] bg-white ${course.color}`}
            >
              <div>
                {/* Wing Badge */}
                <span className="inline-block text-[10px] font-bold font-mono tracking-wider uppercase px-2.5 py-1 rounded-md bg-white border border-slate-200 text-slate-700 mb-4 shadow-sm">
                  {course.wing}
                </span>
                {/* Course Name */}
                <h3 className="text-xl font-black text-slate-900 mb-2 tracking-tight">
                  {course.name}
                </h3>
                {/* Eligibility Text */}
                <p className="text-slate-600 text-xs md:text-sm font-medium leading-relaxed mb-4">
                  <span className="font-bold text-slate-800">Eligibility:</span> {course.eligibility}
                </p>
              </div>

              {/* Footer Meta info inside card */}
              <div className="flex justify-between items-center pt-4 border-t border-slate-100 font-mono text-xs font-bold text-slate-500">
                <span className="flex items-center gap-1">⏱️ {course.duration}</span>
                <span className="text-emerald-700 bg-emerald-50 px-2.5 py-1 rounded-lg">👥 {course.seats}</span>
              </div>
            </div>
          ))}
        </div>

      </div>
    </div>
  );
}