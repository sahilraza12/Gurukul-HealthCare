export const getNavigationConfigs = ({
  onHomeClick,
  onSelectPharmacy,
  onSelectNursing,
  onContactUs,
  onSelectPharmacyResult,
  onSelectPharmacyDownloads
}) => ({
  home: {
    stripBg: "from-slate-900 to-slate-950",
    accentText: "text-emerald-400",
    phone: "+91 9675631111, 9501365511",
    email: "chairmangips@gmail.com",
    timing: "Mon - Sat: 09:00 AM - 05:30 PM",
    title: "GURUKUL GROUP OF INSTITUTES",
    subtitle: "Integrated Educational Campus",
    useImageLogo: true,
    logoSrc: "/bannerimage/logo.png",
    menu: [
      { name: "Home Gateway", type: "link", action: onHomeClick },
      { name: "Pharmacy Division", type: "link", action: onSelectPharmacy },
      { name: "Nursing Division", type: "link", action: onSelectNursing },
      { name: "Contact Us", type: "link", action: onContactUs }
    ]
  },
  pharmacy: {
    stripBg: "from-emerald-900 to-emerald-950",
    accentText: "text-emerald-300",
    phone: "+91 01628-260511",
    email: "principalgips2017@gmail.com",
    timing: "Mon - Sat: 09:00 AM - 05:00 PM",
    title: "GIPS PHARMACY",
    subtitle: "Pioneering Pharmacy & Paramedical",
    useImageLogo: true,
    logoSrc: "/bannerimage/logo.png",
    menu: [
      { name: "Home Gateway", type: "link", action: onHomeClick },
      { name: "About GIPS", type: "dropdown", subItems: ["About GIPS", "Chairman Desk", "Director Desk", "Vision & Mission"] },
      { name: "Courses Matrix", type: "dropdown", subItems: ["Bachelor of Pharmacy", "Diploma Pharmacy", "M.Pharmacy", "Paramedical Courses"] },
      { name: "Result", type: "link", action: onSelectPharmacyResult },
      { name: "Downloads", type: "link", action: onSelectPharmacyDownloads },
      { name: "Contact Us", type: "link", action: onContactUs }
    ]
  },
  nursing: {
    stripBg: "from-teal-900 to-teal-950",
    accentText: "text-teal-300",
    phone: "+91 9675631111",
    email: "principalgsn2024@gmail.com",
    timing: "Mon - Sat: 09:00 AM - 05:30 PM",
    title: "GSN NURSING",
    subtitle: "Gurukul Institute of Nursing Sciences",
    useImageLogo: true,
    logoSrc: "/bannerimage/logo.png",
    menu: [
      { name: "Home Gateway", type: "link", action: onHomeClick },
      { name: "About GSN", type: "dropdown", subItems: ["NOC Punjab Govt", "Chairman Desk", "Principal Desk"] },
      { name: "Nursing Tracks", type: "dropdown", subItems: ["B.Sc Nursing", "GNM", "ANM"] },
      { name: "Downloads", type: "dropdown", subItems: ["Download Links", "Syllabus Links", "Certificates"] },
      { name: "Contact Us", type: "link", action: onContactUs }
    ]
  }
});
