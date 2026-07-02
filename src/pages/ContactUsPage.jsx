
import CampusDirectory from '../components/shared/CampusDirectory';
import { themes, contextLabels, getDepartments } from '../constants/contacts';

export default function ContactUsPage({ context, onBack }) {
  const themeKey = context === 'nursing' ? 'teal' : 'emerald';
  const t = themes[themeKey];
  const departments = getDepartments(context);

  return (
    <div className="min-h-screen bg-slate-50 pt-24 pb-16 px-4 animate-fade-in">
      <div className="max-w-5xl mx-auto bg-white rounded-[32px] shadow-2xl border border-slate-200/80 overflow-hidden">
        
        {/* Navigation Header */}
        <div className="bg-slate-50 px-6 py-4 border-b border-slate-200 flex justify-between items-center">
          <button 
            onClick={onBack} 
            className={`group inline-flex items-center space-x-2 bg-white border border-slate-300 ${t.backBtnHover} text-slate-800 font-bold px-4 py-2 rounded-xl text-xs transition-all shadow-sm cursor-pointer`}
          >
            <span>← Back to {contextLabels[context] || 'Home'}</span>
          </button>
          <span className={`text-[10px] font-mono font-bold ${t.badge} px-3 py-1 rounded-full uppercase`}>
            Contact Us
          </span>
        </div>

        {/* Hero Section Banner */}
        <div className="relative bg-slate-950 text-white py-16 px-8 sm:px-12 md:px-16 overflow-hidden">
          <div className="absolute inset-0 z-0">
            <img 
              className="absolute inset-0 w-full h-full object-cover opacity-20 scale-100"
              src="/bannerimage/236943159278e88f6-77b5-485f-aa4d-74088361680b.jpeg"
              alt="GIPS Campus"
              onError={(e) => { e.target.style.display = 'none'; }}
            />
          </div>
          <div className={`absolute inset-0 bg-gradient-to-r ${t.heroBanner} z-10`} />
          
          <div className="relative z-20 max-w-3xl space-y-3">
            <span className={`${t.heroPill} text-white text-[10px] font-black px-3 py-1 rounded-md uppercase tracking-wider`}>
              Get In Touch
            </span>
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-black uppercase tracking-tight leading-none drop-shadow-md">
              Contact Us
            </h1>
            <p className={`${t.heroSub} text-xs sm:text-sm font-semibold uppercase tracking-wider`}>
              Gurukul Group of Institutes — Reach Out to Our Departments
            </p>
          </div>
        </div>

        {/* Main Content Area */}
        <div className="p-6 sm:p-10 space-y-6">

          {/* Campus Location Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            
            {/* Pharmacy Campus */}
            <div className="md:col-span-1 border rounded-3xl p-6 bg-emerald-50/20 border-emerald-100 flex flex-col justify-between shadow-sm">
              <div className="space-y-3">
                <span className="text-[9px] font-mono font-bold text-emerald-700 bg-emerald-100/80 px-2 py-0.5 rounded-full uppercase tracking-wider block w-fit">Pharmacy Wing</span>
                <h3 className="text-base font-black text-slate-900 flex items-center gap-2">
                  <span className="w-2.5 h-2.5 rounded-full bg-emerald-600 animate-pulse" />
                  GIPS Campus
                </h3>
                <p className="text-slate-650 text-xs font-semibold leading-relaxed">
                  VPO - Badesh Kalan, Khamano,<br />
                  District - Fatehgarh Sahib, Punjab - 141801
                </p>
              </div>
              <div className="text-slate-700 text-xs font-bold font-mono mt-4 pt-3 border-t border-slate-100 space-y-1">
                <p>📞 01628-260511</p>
                <p className="text-[10px] text-slate-500 font-sans tracking-normal font-medium">✉️ principalgips2017@gmail.com</p>
              </div>
            </div>

            {/* Nursing Campus */}
            <div className="md:col-span-1 border rounded-3xl p-6 bg-teal-50/20 border-teal-100 flex flex-col justify-between shadow-sm">
              <div className="space-y-3">
                <span className="text-[9px] font-mono font-bold text-teal-700 bg-teal-100/80 px-2 py-0.5 rounded-full uppercase tracking-wider block w-fit">Nursing Wing</span>
                <h3 className="text-base font-black text-slate-900 flex items-center gap-2">
                  <span className="w-2.5 h-2.5 rounded-full bg-teal-600 animate-pulse" />
                  GSN Campus
                </h3>
                <p className="text-slate-650 text-xs font-semibold leading-relaxed">
                  Badesh Kalan, Khamanon,<br />
                  District - Fatehgarh Sahib, Punjab, India
                </p>
              </div>
              <div className="text-slate-700 text-xs font-bold font-mono mt-4 pt-3 border-t border-slate-100 space-y-1">
                <p>📞 +91-9675631111</p>
                <p>📞 +91-9501365511</p>
                <p className="text-[10px] text-slate-500 font-sans tracking-normal font-medium">✉️ principalgsn2024@gmail.com</p>
              </div>
            </div>

            {/* Interactive Map */}
            <div className="md:col-span-1 border rounded-3xl p-6 bg-slate-50/50 border-slate-200/80 flex flex-col justify-between shadow-sm">
              <div className="space-y-1 mb-2">
                <span className="text-[9px] font-mono font-bold text-slate-400 uppercase tracking-wider block">🗺️ Campus Hub</span>
                <h4 className="text-xs font-black text-slate-800 uppercase">Interactive Map Location</h4>
              </div>
              <div className="w-full h-28 rounded-xl overflow-hidden border border-slate-200 shadow-inner">
                <iframe
                  title="Gurukul Institute Location"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3424.8!2d76.2!3d30.7!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMzDCsDQyJzAwLjAiTiA3NsKwMTInMDAuMCJF!5e0!3m2!1sen!2sin!4v1"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen=""
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />
              </div>
            </div>

          </div>

          {/* Department Contact Cards Grid */}
          <div className="space-y-4">
            <h3 className="text-lg font-black text-slate-900 flex items-center gap-2">
              <span className={`w-2.5 h-2.5 rounded-full ${t.dot}`} />
              Department Contacts
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {departments.map((dept, idx) => (
                <div 
                  key={idx} 
                  className={`p-5 rounded-2xl border transition-all hover:shadow-md ${
                    dept.highlight 
                      ? t.cardHighlight 
                      : 'bg-slate-50/50 border-slate-200/80 hover:border-slate-400'
                  }`}
                >
                  <div className="flex items-center gap-2 mb-3">
                    <span className="text-2xl">{dept.icon}</span>
                    <h4 className={`font-black text-sm uppercase tracking-tight ${dept.highlight ? t.heading : 'text-slate-700'}`}>
                      {dept.name}
                    </h4>
                  </div>
                  <div className="space-y-2">
                    {dept.details.map((detail, dIdx) => (
                      <div key={dIdx} className="flex flex-col">
                        <span className="text-[10px] font-mono font-bold text-slate-400 uppercase">{detail.label}</span>
                        <a 
                          href={detail.label === 'E-mail' ? `mailto:${detail.value}` : undefined}
                          className={`text-xs font-bold break-all ${
                            detail.label === 'E-mail' 
                              ? `${t.emailLink} hover:underline` 
                              : 'text-slate-700'
                          }`}
                        >
                          {detail.value}
                        </a>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Campus Directory footer info */}
          <CampusDirectory theme={themeKey} />

        </div>

      </div>
    </div>
  );
}
