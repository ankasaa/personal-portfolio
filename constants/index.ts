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
    title: "Generative 3D Icons",
    description: "Platform SaaS untuk generate icon 3D dengan AI. Menggunakan Next.js, Three.js, dan OpenAI API.",
    image: "/images/gambar_1.png", // Gambar kamu yang sudah diupload
    tags: ["Next.js", "Three.js", "AI", "SaaS"],
    href: "https://github.com/yourusername/project1", // Ganti dengan link proyek kamu
  },
  {
    id: 2,
    title: "Absen.id",
    description: "Sistem absensi berbasis QR Code dan Face Recognition untuk perusahaan. Mobile-first dengan PWA.",
    image: "/images/placeholder.png", // Ganti jika sudah ada gambar 2
    tags: ["React", "Face API", "PWA", "Firebase"],
    href: "https://github.com/yourusername/project2",
  },
  {
    id: 3,
    title: "Portfolio Website",
    description: "Personal portfolio modern dengan Next.js 15, Tailwind CSS v4, dan Framer Motion.",
    image: "/images/placeholder.png", // Ganti jika sudah ada gambar 3
    tags: ["Next.js", "TypeScript", "Tailwind", "Framer Motion"],
    href: "https://github.com/yourusername/project3",
  },
];