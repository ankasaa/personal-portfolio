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
  { name: "Home", href: "/", spyId: "home" },
  { name: "Sertifikat", href: "#sertifikat", spyId: "sertifikat" },
  { name: "Projects", href: "#projects", spyId: "projects" },
  { name: "Contact", href: "#about", spyId: "about" },
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
    tags: ["HTML", "CSS", "JavaScript", "Varcel"],
    href: "https://aksara-rental-camera.vercel.app/", // Ganti dengan link proyek kamu
  },
  {
    id: 2,
    title: "SIPAKTI",
    description: "Sistem peminjeman kelas kosong berbasis QR Code  untuk mahasiswa. Mobile-first dengan PWA.",
    image: "/images/hero/test3.png", // Ganti jika sudah ada gambar 2
    tags: ["HTML", "CSS", "JavaScript", "Figma"],
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
  {
    id: 4,
    title: "Putra Bali Property - Real Estate & Property Platform",
    description: "Desain UI/UX website properti modern yang berfokus pada kemudahan pencarian rumah, villa, dan tanah (freehold) di area Bali. Menampilkan antarmuka yang clean, user-friendly, dan terstruktur untuk mempermudah transaksi jual beli properti.",
    image: "/images/hero/test6.png", // Ganti jika sudah ada gambar 3
    tags: ["Figma", "Canva","UI/UX Design"],
    href: "https://www.figma.com/proto/VuCbR8EhUsVqgeYQfDIQug/Untitled?page-id=0%3A1&node-id=736-4&viewport=-250%2C-488%2C0.24&t=dmLFuMyRx0zo6Q4U-1&scaling=scale-down&content-scaling=fixed",
  },
];

export const ALL_PROJECTS = [
  {
    id: 1,
    title: "Aksara Rental",
    description: "Platform Jual beli sewa kamera.",
    image: "/images/hero/test.png", // Gambar kamu yang sudah diupload
    tags: ["HTML", "CSS", "JavaScript", "Varcel"],
    href: "https://aksara-rental-camera.vercel.app/", // Ganti dengan link proyek kamu
  },
  {
    id: 2,
    title: "SIPAKTI",
    description: "Sistem peminjeman kelas kosong berbasis QR Code  untuk mahasiswa. Mobile-first dengan PWA.",
    image: "/images/hero/test3.png", // Ganti jika sudah ada gambar 2
    tags: ["HTML", "CSS", "JavaScript", "Figma"],
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
  {
    id: 4,
    title: "Putra Bali Property - Real Estate & Property Platform",
    description: "Desain UI/UX website properti modern yang berfokus pada kemudahan pencarian rumah, villa, dan tanah (freehold) di area Bali. Menampilkan antarmuka yang clean, user-friendly, dan terstruktur untuk mempermudah transaksi jual beli properti.",
    image: "/images/hero/test6.png", // Ganti jika sudah ada gambar 3
    tags: ["Figma", "Canva","UI/UX Design"],
    href: "https://www.figma.com/proto/VuCbR8EhUsVqgeYQfDIQug/Untitled?page-id=0%3A1&node-id=736-4&viewport=-250%2C-488%2C0.24&t=dmLFuMyRx0zo6Q4U-1&scaling=scale-down&content-scaling=fixed",
  },
];