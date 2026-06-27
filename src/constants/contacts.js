export const contextLabels = {
  home: 'Home',
  pharmacy: 'Pharmacy Portal',
  nursing: 'Nursing Portal'
};

export const themes = {
  emerald: {
    backBtnHover: 'hover:border-emerald-600 hover:bg-emerald-50 hover:text-emerald-700',
    badge: 'text-emerald-700 bg-emerald-100/80',
    heroBanner: 'from-emerald-950 via-emerald-900/90 to-transparent',
    heroPill: 'bg-emerald-600',
    heroSub: 'text-emerald-200',
    sectionBg: 'bg-emerald-50/30 border-emerald-100',
    dot: 'bg-emerald-600',
    cardHighlight: 'bg-emerald-50/30 border-emerald-200 hover:border-emerald-500',
    heading: 'text-emerald-800',
    emailLink: 'text-emerald-700 hover:text-emerald-900'
  },
  teal: {
    backBtnHover: 'hover:border-teal-600 hover:bg-teal-50 hover:text-teal-700',
    badge: 'text-teal-700 bg-teal-100/80',
    heroBanner: 'from-teal-950 via-teal-900/90 to-transparent',
    heroPill: 'bg-teal-600',
    heroSub: 'text-teal-200',
    sectionBg: 'bg-teal-50/30 border-teal-100',
    dot: 'bg-teal-600',
    cardHighlight: 'bg-teal-50/30 border-teal-200 hover:border-teal-500',
    heading: 'text-teal-800',
    emailLink: 'text-teal-700 hover:text-teal-900'
  }
};

export const getDepartments = (context) => [
  {
    name: "Pharmacy Campus Address",
    icon: "📍",
    details: [
      { label: "Address", value: "VPO - Badesh Kalan, Khamano, District - Fatehgarh Sahib, Punjab - 141801" },
      { label: "Contact Numbers", value: "01628-260511" }
    ],
    highlight: context === 'pharmacy' || context === 'home'
  },
  {
    name: "Nursing Campus Address",
    icon: "🏥",
    details: [
      { label: "Address", value: "Badesh Kalan, Khamanon, District-Fatehgarh Sahib, Punjab, India" },
      { label: "Contact Numbers", value: "+91-9675631111, +91-9501365511" }
    ],
    highlight: context === 'nursing' || context === 'home'
  },
  {
    name: "Chairman Office",
    icon: "👨‍💼",
    details: [
      { label: "E-mail", value: "chairmangips@gmail.com" },
      { label: "E-mail", value: "s.h.educationalsociety@gmail.com" }
    ],
    highlight: true
  },
  {
    name: "Department of Pharmacy",
    icon: "💊",
    details: [
      { label: "E-mail", value: "principalgips2017@gmail.com" }
    ],
    highlight: context === 'pharmacy' || context === 'home'
  },
  {
    name: "Department of Nursing",
    icon: "🏥",
    details: [
      { label: "E-mail", value: "principalgsn2024@gmail.com" },
      { label: "E-mail", value: "chairmangips@gmail.com" },
      { label: "Contact Numbers", value: "+91-9675631111, +91-9501365511" }
    ],
    highlight: context === 'nursing' || context === 'home'
  },
  {
    name: "Department of Paramedical Sciences",
    icon: "🔬",
    details: [
      { label: "E-mail", value: "paramedicalinstiute@gmail.com" }
    ],
    highlight: context === 'pharmacy' || context === 'home'
  },
  {
    name: "NSDC Training Provider",
    icon: "🎓",
    details: [
      { label: "E-mail", value: "shes.skills@gmail.com" }
    ],
    highlight: true
  }
];
