import { useState } from 'react';
import CampusDirectory from '../components/shared/CampusDirectory';

export default function GrievancePage({ context, onBack }) {
  const [formData, setFormData] = useState({
    name: '',
    rollNo: '',
    department: 'Pharmacy',
    contact: '',
    email: '',
    category: 'Academic',
    subject: '',
    description: ''
  });

  const [submitted, setSubmitted] = useState(false);
  const [ticketId, setTicketId] = useState('');

  const contextLabels = {
    home: 'Home Gateway',
    pharmacy: 'Pharmacy Portal',
    nursing: 'Nursing Portal'
  };

  const themes = {
    slate: {
      backBtnHover: 'hover:border-slate-600 hover:bg-slate-50 hover:text-slate-900',
      badge: 'text-slate-700 bg-slate-100',
      heroBanner: 'from-slate-950 via-slate-900/90 to-transparent',
      heroPill: 'bg-slate-600',
      heroSub: 'text-slate-300',
      sectionBg: 'bg-slate-50/50 border-slate-200',
      dot: 'bg-slate-600',
      btnSubmit: 'bg-slate-800 hover:bg-slate-900 shadow-slate-900/10',
      accentText: 'text-slate-800'
    },
    emerald: {
      backBtnHover: 'hover:border-emerald-600 hover:bg-emerald-50 hover:text-emerald-700',
      badge: 'text-emerald-700 bg-emerald-100/80',
      heroBanner: 'from-emerald-950 via-emerald-900/90 to-transparent',
      heroPill: 'bg-emerald-600',
      heroSub: 'text-emerald-200',
      sectionBg: 'bg-emerald-50/30 border-emerald-100',
      dot: 'bg-emerald-600',
      btnSubmit: 'bg-emerald-600 hover:bg-emerald-700 shadow-emerald-600/10',
      accentText: 'text-emerald-800'
    },
    teal: {
      backBtnHover: 'hover:border-teal-600 hover:bg-teal-50 hover:text-teal-700',
      badge: 'text-teal-700 bg-teal-100/80',
      heroBanner: 'from-teal-950 via-teal-900/90 to-transparent',
      heroPill: 'bg-teal-600',
      heroSub: 'text-teal-200',
      sectionBg: 'bg-teal-50/30 border-teal-100',
      dot: 'bg-teal-600',
      btnSubmit: 'bg-teal-600 hover:bg-teal-700 shadow-teal-600/10',
      accentText: 'text-teal-800'
    }
  };

  const themeKey = context === 'nursing' ? 'teal' : context === 'pharmacy' ? 'emerald' : 'slate';
  const t = themes[themeKey];

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.name || !formData.contact || !formData.subject || !formData.description) {
      alert('Please fill in all required fields.');
      return;
    }
    // Generate a random ticket tracking ID
    const generatedId = 'GRV-' + Math.floor(100000 + Math.random() * 900000);
    setTicketId(generatedId);
    setSubmitted(true);
  };

  const handleReset = () => {
    setFormData({
      name: '',
      rollNo: '',
      department: 'Pharmacy',
      contact: '',
      email: '',
      category: 'Academic',
      subject: '',
      description: ''
    });
    setSubmitted(false);
  };

  return (
    <div className="min-h-screen bg-slate-50 pt-24 pb-16 px-4 animate-fade-in">
      <div className="max-w-4xl mx-auto bg-white rounded-[32px] shadow-2xl border border-slate-200/80 overflow-hidden">
        
        {/* Navigation Header */}
        <div className="bg-slate-50 px-6 py-4 border-b border-slate-200 flex justify-between items-center">
          <button 
            onClick={onBack} 
            className={`group inline-flex items-center space-x-2 bg-white border border-slate-300 ${t.backBtnHover} text-slate-800 font-bold px-4 py-2 rounded-xl text-xs transition-all shadow-sm cursor-pointer`}
          >
            <span>← Back to {contextLabels[context] || 'Home'}</span>
          </button>
          <span className={`text-[10px] font-mono font-bold ${t.badge} px-3 py-1 rounded-full uppercase`}>
            Grievance Redressal
          </span>
        </div>

        {/* Hero Section Banner */}
        <div className="relative bg-slate-950 text-white py-16 px-8 sm:px-12 md:px-16 overflow-hidden">
          <div className="absolute inset-0 z-0">
            <img 
              className="absolute inset-0 w-full h-full object-cover opacity-20 scale-100"
              src="/bannerimage/1417907879b72dcce7-1f3a-452d-b78c-bfd90a720f9b.jpeg"
              alt="Campus Block"
              onError={(e) => { e.target.style.display = 'none'; }}
            />
          </div>
          <div className={`absolute inset-0 bg-gradient-to-r ${t.heroBanner} z-10`} />
          
          <div className="relative z-20 max-w-3xl space-y-3">
            <span className={`${t.heroPill} text-white text-[10px] font-black px-3 py-1 rounded-md uppercase tracking-wider`}>
              Official Redressal Cell
            </span>
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-black uppercase tracking-tight leading-none drop-shadow-md">
              Grievance Portal
            </h1>
            <p className={`${t.heroSub} text-xs sm:text-sm font-semibold uppercase tracking-wider`}>
              Submit feedback, issues or complaints directly to the institutional cells.
            </p>
          </div>
        </div>

        {/* Main Content Area */}
        <div className="p-6 sm:p-10">

          {!submitted ? (
            <div className="space-y-6">
              <div className={`${t.sectionBg} border rounded-2xl p-5 sm:p-6 text-xs sm:text-sm font-semibold text-slate-600 leading-relaxed text-justify`}>
                📢 **Important Note**: In accordance with PCI and UGC regulations, Gurukul Group operates an impartial Grievance Redressal Cell. You can submit details regarding academic issues, infrastructural support, examinations, hostel facilities, or administrative operations. All submissions are reviewed securely by the grievance committee.
              </div>

              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-xs font-bold text-slate-600 uppercase mb-1">
                      FullName / Applicant Name <span className="text-red-500">*</span>
                    </label>
                    <input 
                      type="text" 
                      required
                      placeholder="Enter full name"
                      value={formData.name}
                      onChange={(e) => setFormData({...formData, name: e.target.value})}
                      className="w-full px-4 py-2.5 rounded-xl border border-slate-300 text-sm focus:outline-none focus:border-emerald-600 font-medium bg-white" 
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-bold text-slate-600 uppercase mb-1">
                      Student Roll No / ID Number <span className="text-slate-400 font-normal">(Optional)</span>
                    </label>
                    <input 
                      type="text" 
                      placeholder="Enter Roll Number if student"
                      value={formData.rollNo}
                      onChange={(e) => setFormData({...formData, rollNo: e.target.value})}
                      className="w-full px-4 py-2.5 rounded-xl border border-slate-300 text-sm focus:outline-none focus:border-emerald-600 font-medium bg-white" 
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-xs font-bold text-slate-600 uppercase mb-1">Department / Branch</label>
                    <select 
                      value={formData.department}
                      onChange={(e) => setFormData({...formData, department: e.target.value})}
                      className="w-full px-4 py-2.5 rounded-xl border border-slate-300 text-sm focus:outline-none focus:border-emerald-600 font-bold text-slate-700 bg-white"
                    >
                      <option value="Pharmacy">Department of Pharmacy</option>
                      <option value="Nursing">Department of Nursing</option>
                      <option value="Paramedical">Paramedical Sciences</option>
                      <option value="Admissions">Admissions & Accounts</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-xs font-bold text-slate-600 uppercase mb-1">Grievance Category</label>
                    <select 
                      value={formData.category}
                      onChange={(e) => setFormData({...formData, category: e.target.value})}
                      className="w-full px-4 py-2.5 rounded-xl border border-slate-300 text-sm focus:outline-none focus:border-emerald-600 font-bold text-slate-700 bg-white"
                    >
                      <option value="Academic">Academic / Classes</option>
                      <option value="Exams">Examinations & Results</option>
                      <option value="Infrastructure">Infrastructure / Labs</option>
                      <option value="Hostel">Hostel & Mess</option>
                      <option value="Fees">Fees & Finance</option>
                      <option value="Others">Others</option>
                    </select>
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-xs font-bold text-slate-600 uppercase mb-1">
                      Mobile Number <span className="text-red-500">*</span>
                    </label>
                    <div className="flex">
                      <span className="inline-flex items-center px-3 rounded-l-xl border border-r-0 border-slate-300 bg-slate-100 text-slate-500 font-mono text-xs font-bold">+91</span>
                      <input 
                        type="tel" 
                        required
                        placeholder="Phone Number"
                        value={formData.contact}
                        onChange={(e) => setFormData({...formData, contact: e.target.value})}
                        className="w-full px-4 py-2.5 rounded-r-xl border border-slate-300 text-sm focus:outline-none focus:border-emerald-600 font-medium bg-white" 
                      />
                    </div>
                  </div>
                  <div>
                    <label className="block text-xs font-bold text-slate-600 uppercase mb-1">
                      Email Address <span className="text-slate-400 font-normal">(Optional)</span>
                    </label>
                    <input 
                      type="email" 
                      placeholder="email@example.com"
                      value={formData.email}
                      onChange={(e) => setFormData({...formData, email: e.target.value})}
                      className="w-full px-4 py-2.5 rounded-xl border border-slate-300 text-sm focus:outline-none focus:border-emerald-600 font-medium bg-white" 
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-600 uppercase mb-1">
                    Subject / Summary <span className="text-red-500">*</span>
                  </label>
                  <input 
                    type="text" 
                    required
                    placeholder="Short description of the issue"
                    value={formData.subject}
                    onChange={(e) => setFormData({...formData, subject: e.target.value})}
                    className="w-full px-4 py-2.5 rounded-xl border border-slate-300 text-sm focus:outline-none focus:border-emerald-600 font-medium bg-white" 
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-600 uppercase mb-1">
                    Detailed Grievance Description <span className="text-red-500">*</span>
                  </label>
                  <textarea 
                    rows="4"
                    required
                    placeholder="Provide full description of your concern/complaint..."
                    value={formData.description}
                    onChange={(e) => setFormData({...formData, description: e.target.value})}
                    className="w-full px-4 py-2.5 rounded-xl border border-slate-300 text-sm focus:outline-none focus:border-emerald-600 font-medium bg-white"
                  />
                </div>

                <div className="flex justify-end gap-3 pt-2">
                  <button 
                    type="button"
                    onClick={handleReset}
                    className="px-6 py-3 rounded-xl border border-slate-300 text-slate-700 text-xs uppercase tracking-wider font-bold hover:bg-slate-50 transition-colors cursor-pointer"
                  >
                    Clear Form
                  </button>
                  <button 
                    type="submit"
                    className={`text-white font-black text-xs uppercase tracking-wider px-8 py-3.5 rounded-xl transition-all shadow-md hover:-translate-y-0.5 cursor-pointer ${t.btnSubmit}`}
                  >
                    Submit Grievance
                  </button>
                </div>
              </form>
            </div>
          ) : (
            <div className="py-12 text-center max-w-xl mx-auto space-y-6">
              <div className="w-16 h-16 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center text-3xl mx-auto">
                ✔
              </div>
              <h2 className="text-2xl font-black text-slate-900 tracking-tight uppercase">
                Grievance Submitted
              </h2>
              <div className="bg-slate-50 p-6 rounded-2xl border border-slate-200 space-y-3 font-medium text-xs sm:text-sm text-slate-600">
                <p>Your concern has been registered successfully with our Redressal Cell.</p>
                <div className="py-2.5 px-4 bg-white rounded-xl border font-bold text-slate-800 font-mono text-base inline-block">
                  Reference ID: {ticketId}
                </div>
                <p className="text-[11px] text-slate-400">Keep this ID safe to track responses from the redressal officer.</p>
              </div>

              <div className="flex justify-center gap-3">
                <button 
                  onClick={onBack}
                  className={`group inline-flex items-center space-x-2 bg-white border border-slate-300 ${t.backBtnHover} text-slate-800 font-bold px-5 py-3 rounded-xl text-xs transition-all shadow-sm cursor-pointer`}
                >
                  <span>Return to Portal</span>
                </button>
                <button 
                  onClick={handleReset}
                  className={`text-white font-black text-xs uppercase tracking-wider px-6 py-3 rounded-xl transition-all shadow-md hover:-translate-y-0.5 cursor-pointer ${t.btnSubmit}`}
                >
                  Submit Another Grievance
                </button>
              </div>
            </div>
          )}

          {/* Campus Directory footer info */}
          <div className="mt-10 border-t border-slate-100 pt-8">
            <CampusDirectory theme={themeKey === 'slate' ? 'emerald' : themeKey} />
          </div>

        </div>

      </div>
    </div>
  );
}
