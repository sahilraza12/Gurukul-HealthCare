
export default function CampusDirectory({ theme = 'emerald' }) {
  // Theme color maps for visual consistency
  const themeMap = {
    emerald: {
      accentText: "text-emerald-600",
      accentBg: "bg-emerald-50",
      hoverText: "hover:text-emerald-600",
      btnBg: "bg-emerald-600 hover:bg-emerald-700",
      tagBadge: "text-emerald-700 bg-emerald-50 border-emerald-200/60"
    },
    teal: {
      accentText: "text-teal-600",
      accentBg: "bg-teal-50",
      hoverText: "hover:text-teal-600",
      btnBg: "bg-teal-600 hover:bg-teal-700",
      tagBadge: "text-teal-700 bg-teal-50 border-teal-200/60"
    }
  };

  const currentTheme = themeMap[theme] || themeMap.emerald;

  const contacts = [
    {
      role: "Chairman Executive Office",
      emails: ["chairmangips@gmail.com", "s.h.educationalsociety@gmail.com"],
      tag: "Society & Management",
      tagColor: "text-amber-700 bg-amber-50 border border-amber-200/60"
    },
    {
      role: "Department of Pharmacy (GIPS)",
      emails: ["principalgips2017@gmail.com"],
      tag: "Principal Desk",
      tagColor: "text-emerald-700 bg-emerald-50 border border-emerald-200/60"
    },
    {
      role: "Department of Nursing (GSN)",
      emails: ["principalgsn2024@gmail.com", "chairmangips@gmail.com"],
      tag: "Principal Desk",
      tagColor: "text-teal-700 bg-teal-50 border border-teal-200/60"
    },
    {
      role: "Department of Paramedical Sciences",
      emails: ["paramedicalinstiute@gmail.com"],
      tag: "Allied Health Wing",
      tagColor: "text-blue-700 bg-blue-50 border border-blue-200/60"
    },
    {
      role: "NSDC Training Provider Cell",
      emails: ["shes.skills@gmail.com"],
      tag: "Govt Skill Hub",
      tagColor: "text-indigo-700 bg-indigo-50 border border-indigo-200/60"
    }
  ];

  return (
    <div className="border border-slate-200/80 rounded-[32px] bg-white p-6 sm:p-8 shadow-xl shadow-slate-100/50 space-y-8">

      {/* Component Title Header */}
      <div>
        <span className={`font-extrabold text-[10px] sm:text-xs uppercase tracking-wider px-3 py-1 rounded-md ${currentTheme.accentBg} ${currentTheme.accentText}`}>
          Communications Hub
        </span>
        <h3 className="font-black text-slate-900 text-xl tracking-tight mt-3">Campus Directory & Info Desk</h3>
        <p className="text-slate-500 text-xs mt-1">Official contact channels and locations for administrative queries and department heads.</p>
      </div>

      {/* Upper Grid Layout: Address and Phone Hotline */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 bg-slate-50/50 p-6 rounded-2xl border border-slate-100">

        {/* Address Location Card */}
        <div className="space-y-2">
          <span className="text-[10px] font-bold text-slate-400 uppercase tracking-wider block font-mono">📍 Campus Location</span>
          {theme === 'teal' ? (
            <p className="text-slate-800 text-sm font-black leading-snug">
              Badesh Kalan, Khamanon,<br />
              District - Fatehgarh Sahib, Punjab, India
            </p>
          ) : (
            <p className="text-slate-800 text-sm font-black leading-snug">
              VPO - Badesh Kalan, Khamano,<br />
              District - Fatehgarh Sahib, Punjab - 141801
            </p>
          )}
          <a
            href={theme === 'teal' ? "https://maps.google.com/?q=Badesh+Kalan+Khamanon+Punjab" : "https://maps.google.com/?q=Gurukul+Institute+of+Pharmaceutical+Sciences+Badesh+Kalan"}
            target="_blank"
            rel="noreferrer"
            className={`inline-block text-[11px] font-black font-mono pt-1 transition-colors ${currentTheme.accentText} ${currentTheme.hoverText}`}
          >
            View on Google Maps ↗
          </a>
        </div>

        {/* Contact Phone Card */}
        <div className="space-y-2 flex flex-col justify-between">
          <div>
            <span className="text-[10px] font-bold text-slate-400 uppercase tracking-wider block font-mono">
              📞 {theme === 'teal' ? 'Nursing Admission Hotline' : 'Campus Hotline'}
            </span>
            {theme === 'teal' ? (
              <div className="space-y-1 mt-1">
                <p className="text-slate-800 text-lg sm:text-xl font-black font-mono tracking-tight leading-tight">
                  +91-9675631111
                </p>
                <p className="text-slate-800 text-lg sm:text-xl font-black font-mono tracking-tight leading-tight">
                  +91-9501365511
                </p>
              </div>
            ) : (
              <p className="text-slate-800 text-2xl font-black font-mono tracking-tight mt-1">
                01628-260511
              </p>
            )}
          </div>
          <p className="text-slate-400 text-[10px] font-semibold font-mono">
            Available: Mon - Sat {theme === 'teal' ? '(9:00 AM - 5:30 PM)' : '(9:00 AM - 5:00 PM)'}
          </p>
        </div>

      </div>

      {/* Email Directories Listing Block */}
      <div className="space-y-3">
        <span className="text-[10px] font-bold text-slate-400 uppercase tracking-wider block font-mono">✉️ Direct Communication Nodes</span>

        <div className="divide-y divide-slate-100 border border-slate-200/60 rounded-2xl overflow-hidden bg-white shadow-sm">
          {contacts.map((contact, index) => (
            <div
              key={index}
              className="flex flex-col md:flex-row md:items-center justify-between p-4 hover:bg-slate-50/30 transition-colors gap-3"
            >
              <div>
                <h4 className="font-black text-slate-900 text-sm">{contact.role}</h4>
                <span className={`inline-block mt-1 font-mono font-bold text-[9px] px-2 py-0.5 rounded-md uppercase tracking-wide border ${contact.tagColor}`}>
                  {contact.tag}
                </span>
              </div>

              <div className="flex flex-col gap-1 md:items-end font-mono text-xs font-bold text-slate-600">
                {contact.emails.map((email, eIdx) => (
                  <a
                    key={eIdx}
                    href={`mailto:${email}`}
                    className={`transition-colors ${currentTheme.hoverText}`}
                  >
                    {email}
                  </a>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>

    </div>
  );
}
