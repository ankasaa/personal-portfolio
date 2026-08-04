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
  { name: "Projects", href: "#projects" },
  { name: "Contact", href: "#contact" },
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