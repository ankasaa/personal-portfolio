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
  { name: "Home", href: "#home" },
  { name: "About", href: "#about" },
  { name: "Projects", href: "/projects" },
  { name: "Contact", href: "#contact" },
];
export const CERTIFICATIONS = [
  {
    id: 1,
    title: "Front-End Web Developer Expert",
    issuer: "Dicoding",
    image: "https://images.unsplash.com/photo-1547658719-da2b51169166?q=80&w=1200&auto=format&fit=crop",
  },
  {
    id: 2,
    title: "Google Data Analytics",
    issuer: "Coursera",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=1200&auto=format&fit=crop",
  },
  {
    id: 3,
    title: "AWS Certified Cloud Practitioner",
    issuer: "Amazon Web Services",
    image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=1200&auto=format&fit=crop",
  },
  {
    id: 4,
    title: "Professional Scrum Master I",
    issuer: "Scrum.org",
    image: "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?q=80&w=1200&auto=format&fit=crop",
  },
  {
    id: 5,
    title: "Meta Front-End Developer",
    issuer: "Coursera",
    image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?q=80&w=1200&auto=format&fit=crop",
  },
  {
    id: 6,
    title: "Microsoft Azure AI Fundamentals",
    issuer: "Microsoft",
    image: "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?q=80&w=1200&auto=format&fit=crop",
  },
  {
    id: 7,
    title: "IBM Full Stack Software Developer",
    issuer: "IBM",
    image: "https://images.unsplash.com/photo-1518770660439-4636190af475?q=80&w=1200&auto=format&fit=crop",
  },
  {
    id: 8,
    title: "Google UX Design",
    issuer: "Coursera",
    image: "https://images.unsplash.com/photo-1561070791-2526d30994b5?q=80&w=1200&auto=format&fit=crop",
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
    image: "/images/hero/test4.png", // Ganti jika sudah ada gambar 3
    tags: ["Next.js", "TypeScript", "Tailwind", "Framer Motion", "Vercel"],
    href: "https://danakasa-next.vercel.app/",
  },
  {
    id: 4,
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