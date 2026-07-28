"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { PROJECTS } from "@/constants";
import Container from "@/components/ui/Container";
import Navbar from "@/components/Layout/Navbar"; // Asumsi kamu punya Navbar
import { ArrowLeft } from "lucide-react";

export default function ProjectsPage() {
  return (
    <main className="min-h-screen bg-white dark:bg-black text-zinc-900 dark:text-white pb-20">
      <Navbar />
      
      <Container>
        {/* Tombol Kembali & Judul Halaman */}
        <div className="pt-24 pb-12 flex flex-col items-start gap-4 border-b border-zinc-200 dark:border-zinc-800 mb-12">
          <Link 
            href="/" 
            className="flex items-center gap-2 text-sm text-zinc-500 hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-white transition"
          >
            <ArrowLeft size={16} /> Kembali ke Beranda
          </Link>
          <h1 className="text-4xl md:text-5xl font-bold">Semua Proyek</h1>
          <p className="text-zinc-600 dark:text-zinc-400">
            Kumpulan project yang pernah saya bangun dan kembangkan.
          </p>
        </div>

        {/* Grid Semua Proyek (3 Kolom) */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {PROJECTS.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.05 }}
              viewport={{ once: true }}
              whileHover={{ y: -8 }}
              className="group bg-zinc-100 dark:bg-zinc-900/50 rounded-2xl overflow-hidden border border-zinc-200 dark:border-zinc-800 hover:border-zinc-300 dark:hover:border-zinc-700 transition-all duration-300"
            >
              <Link href={project.href} target="_blank" rel="noopener noreferrer">
                <div className="relative aspect-video overflow-hidden bg-zinc-200 dark:bg-zinc-800">
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-lg font-semibold text-zinc-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition">
                    {project.title}
                  </h3>
                  <p className="mt-2 text-sm text-zinc-600 dark:text-zinc-400 line-clamp-2">
                    {project.description}
                  </p>
                  <div className="mt-4 flex flex-wrap gap-2">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-2.5 py-1 text-xs font-medium rounded-full bg-zinc-200 dark:bg-zinc-800 text-zinc-700 dark:text-zinc-300"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </Container>
    </main>
  );
}