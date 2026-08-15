// constants/index.ts

export const PERSONAL_DATA = {
  name: "Ankasaa",
  title: "Frontend Developer",
  bio: "Membangun pengalaman web yang cepat, responsif, dan berkesan.",
  email: "hello@ankasaa.com", // Ganti dengan email Anda
  location: "Indonesia",
  availableForWork: true,
};

export const NAVIGATION_LINKS = [
  { name: "Home", href: "/" },
  { name: "About", href: "/#about" },
  { name: "Projects", href: "/projects" },
  { name: "Contact", href: "/#contact" },
];
export const CERTIFICATIONS = [
  {
    id: 1,
    title: "Data-AI Agent For Data Analysis",
    issuer: "IBM-Skillsbuild",
    image: "/images/Serti/IBM-C1.png",
  },
  {
    id: 2,
    title: "Web Developer Internship",
    issuer: "PT.Digikref Media Selaras",
    image: "/images/Serti/DK-C3.png",
  },
  {
    id: 3,
    title: "Course Web Programing",
    issuer: "Dicoding Indonesia",
    image: "/images/Serti/DC-C2.png",
  },
  {
    id: 4,
    title: "Sertifikat Kerja Industri",
    issuer: "SMK TI BALI GLOBAL BADUNG",
    image: "/images/Serti/SMK-C4.png",
  },
  {
    id: 5,
    title: "UX Design Course",
    issuer: "Dicoding Indonesia",
    image: "/images/Serti/DC-C5.png",
  },
  {
    id: 6,
    title: "Web Design Competition",
    issuer: "Politeknik Negeri Bali",
    image: "/images/Serti/PNB-C6.png",
  },
  {
    id: 7,
    title: "Getting Started With Data",
    issuer: "IBM SkillsBuild",
    image: "/images/Serti/IBM-C7.png",
  },
  {
    id: 8,
    title: "Python Course",
    issuer: "IBM Developer Skills Network",
    image: "/images/Serti/IBM-C8.png",
  },
];

// src/constants/index.ts
export const PROJECTS = [
  {
    id: 1,
    title: "Aksara Rental",
    description: "Platform Jual beli sewa kamera.",
    image: "/images/hero/test.png", // Gambar kamu yang sudah diupload
    tags: ["Next.js", "Three.js", "AI", "SaaS"],
    href: "https://aksara-rental-camera.vercel.app/", // Ganti dengan link proyek kamu
  },
  {
    id: 2,
    title: "SIPAKTI",
    description: "Sistem peminjeman kelas kosong berbasis QR Code  untuk mahasiswa. Mobile-first dengan PWA.",
    image: "/images/hero/test3.png", // Ganti jika sudah ada gambar 2
    tags: ["React", "Face API", "PWA", "Firebase"],
    href: "https://siprakti.thegt.my.id/",
  },
  {
    id: 3,
    title: "DanaKasa - Financial Planning & Education Platform",
    description: "Platform edukasi finansial modern dengan UI/UX premium. Dilengkapi kalkulator cerdas, integrasi Dark Mode dinamis yang bebas dari hydration error, serta animasi slider interaktif.",
    image: "/images/hero/test5.png", // Ganti jika sudah ada gambar 3
    tags: ["Next.js", "TypeScript", "Tailwind", "Framer Motion", "Vercel"],
    href: "https://danakasa-next.vercel.app/",
  },
];

export const ALL_PROJECTS = [
  {
    id: 1,
    title: "Aksara Rental",
    description: "Platform jual beli dan sewa kamera kelas premium dengan pengalaman 3D yang imersif.",
    image: "/images/hero/test.png",
    tags: ["Next.js", "Three.js", "AI", "SaaS"],
    href: "https://aksara-rental-camera.vercel.app/",
  },
  {
    id: 2,
    title: "SIPAKTI",
    description: "Sistem peminjaman kelas kosong berbasis QR Code untuk mahasiswa. Mobile-first dengan PWA.",
    image: "/images/hero/test3.png",
    tags: ["React", "Face API", "PWA", "Firebase"],
    href: "https://siprakti.thegt.my.id/",
  },
  {
    id: 3,
    title: "DanaKasa",
    description: "Platform edukasi finansial modern dengan kalkulator cerdas dan dark mode dinamis.",
    image: "/images/hero/test4.png",
    tags: ["Next.js", "TypeScript", "Tailwind", "Framer Motion"],
    href: "https://danakasa-next.vercel.app/",
  },
  {
    id: 4,
    title: "TaskFlow",
    description: "Kanban-style productivity board dengan kolaborasi real-time dan drag-and-drop.",
    image: "/images/hero/test5.png",
    tags: ["React", "Socket.io", "Zustand", "Tailwind"],
    href: "#",
  },
  {
    id: 5,
    title: "EcoTrack",
    description: "Dashboard analitik karbon footprint dengan visualisasi data interaktif.",
    image: "/images/hero/img-test1.png",
    tags: ["Next.js", "D3.js", "Prisma", "PostgreSQL"],
    href: "#",
  },
  {
    id: 6,
    title: "ShopVerse",
    description: "E-commerce headless dengan checkout tanpa hambatan dan sistem rekomendasi AI.",
    image: "/images/hero/img-project-1.png",
    tags: ["Next.js", "Stripe", "AI", "tRPC"],
    href: "#",
  },
];