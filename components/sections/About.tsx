"use client";

import { Briefcase, Download, MapPin, Send } from "lucide-react";
import Link from "next/link";

export default function About() {
  return (
    <section id="about" className="py-20 md:py-32 bg-white dark:bg-black transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Card Utama About Me */}
        <div className="p-8 md:p-16 bg-[#faf9f6] dark:bg-zinc-900/60 border border-zinc-200 dark:border-zinc-800 rounded-[40px] shadow-sm">
          
          {/* PERUBAHAN: items-start diubah menjadi items-center agar rata tengah secara vertikal */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16 items-center">
            
            {/* KOLOM KIRI: Teks & Tombol */}
            <div className="flex flex-col items-start gap-6">
              <p className="text-xs font-bold uppercase tracking-[0.2em] text-zinc-500 dark:text-zinc-400">
                About Me
              </p>
              
              <h1 className="text-4xl md:text-5xl font-bold leading-[1.1] tracking-tight text-zinc-900 dark:text-white">
                Technology and design are how I build functional solutions.
              </h1>
              
              <p className="text-base text-zinc-600 dark:text-zinc-400 leading-relaxed max-w-md">
                I&apos;m a Informatics student and tech enthusiast who loves bridging the gap between thoughtful design and structured engineering. With a strong focus on system workflows, clean user interfaces, and functional performance, I build digital experiences that are not only intuitive to use but also reliable under the hood.
              </p>
              
              {/* Tombol CTA */}
              <div className="mt-4 flex flex-wrap items-center gap-4">
                <Link
                  href="/contact"
                  className="px-8 py-3.5 bg-black text-white text-sm font-semibold rounded-full shadow-lg hover:scale-105 active:scale-95 transition-all duration-200"
                >
                  Discuss a Project
                </Link>

                <a
                  href="/cv-andika.pdf"
                  download
                  className="inline-flex items-center gap-2 px-8 py-3.5 border border-zinc-700 bg-transparent text-zinc-800 dark:text-zinc-200 text-sm font-semibold rounded-full shadow-sm hover:bg-white/5 hover:scale-105 active:scale-95 transition-all duration-200"
                >
                  <Download className="w-4 h-4" />
                  Download CV
                </a>
              </div>
            </div>

            {/* KOLOM KANAN: Info Experience, Location, Freelance */}
            {/* PERUBAHAN: Ditambahkan wrapper flex justify-start md:justify-center untuk meletakkan blok di tengah kolom */}
            <div className="flex justify-start md:justify-center w-full">
              
              {/* Kontainer list dipertahankan flex-col agar ikon tetap sejajar satu sama lain ke bawah */}
              <div className="relative flex flex-col gap-8 md:gap-10">
                
                {/* Item 1 */}
                <div className="relative flex gap-5 items-start">
                  <div className="absolute left-[11px] top-9 h-[40px] w-[1px] bg-zinc-300 dark:bg-zinc-700 hidden md:block"></div>
                  <div className="pt-1 z-10 bg-[#faf9f6] dark:bg-[#1a1a1a]"> {/* Tambahan background agar garis tidak menembus ikon jika jarak mepet */}
                    <Briefcase className="w-6 h-6 text-zinc-800 dark:text-zinc-300" />
                  </div>
                  <div>
                    <p className="font-medium text-zinc-800 dark:text-zinc-200">5+ Years of Experience</p>
                  </div>
                </div>

                {/* Item 2 */}
                <div className="relative flex gap-5 items-start">
                  <div className="absolute left-[11px] top-9 h-[40px] w-[1px] bg-zinc-300 dark:bg-zinc-700 hidden md:block"></div>
                  <div className="pt-1 z-10 bg-[#faf9f6] dark:bg-[#1a1a1a]">
                    <MapPin className="w-6 h-6 text-zinc-800 dark:text-zinc-300" />
                  </div>
                  <div>
                    <p className="font-medium text-zinc-800 dark:text-zinc-200">Based in Indonesia</p>
                  </div>
                </div>

                {/* Item 3 */}
                <div className="relative flex gap-5 items-start">
                  <div className="pt-1 z-10 bg-[#faf9f6] dark:bg-[#1a1a1a]">
                    <Send className="w-6 h-6 text-zinc-800 dark:text-zinc-300" />
                  </div>
                  <div>
                    <p className="font-medium text-zinc-800 dark:text-zinc-200">Open to freelance & collaborations</p>
                  </div>
                </div>

              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}