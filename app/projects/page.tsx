"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ALL_PROJECTS } from "@/constants";
import Container from "@/components/ui/Container";
import Navbar from "@/components/Layout/Navbar";
import { ArrowLeft, ArrowUpRight } from "lucide-react";

export default function ProjectsPage() {
  return (
    <main className="min-h-screen bg-white dark:bg-black text-zinc-900 dark:text-white pb-20">
      <Navbar />

      <Container>
        <div className="pt-24 md:pt-32 pb-16 flex flex-col items-center text-center gap-4">
          <Link
            href="/"
            className="flex items-center gap-2 text-sm text-zinc-500 hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-white transition"
          >
            <ArrowLeft size={16} /> Back to Home
          </Link>
          <h1 className="text-4xl md:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-zinc-900 to-zinc-500 dark:from-white to-gray-400">
            All Projects
          </h1>
          <p className="text-sm md:text-base text-zinc-600 dark:text-gray-400 max-w-2xl">
            A collection of my work, from web applications to creative experiments.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {ALL_PROJECTS.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.05 }}
              viewport={{ once: true }}
              className="group bg-zinc-100 dark:bg-[#121212] rounded-2xl overflow-hidden border border-zinc-200 dark:border-white/10 hover:border-zinc-300 dark:hover:border-indigo-500/50 hover:-translate-y-2 transition-all duration-300 shadow-sm dark:shadow-none"
            >
              <Link href={project.href} target="_blank" rel="noopener noreferrer">
                <div className="relative aspect-video overflow-hidden bg-zinc-200 dark:bg-zinc-900">
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  />
                  <div className="absolute top-3 right-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-white/10 backdrop-blur-md border border-white/10 rounded-lg p-1.5 text-white">
                    <ArrowUpRight size={16} />
                  </div>
                </div>

                <div className="p-6 bg-white/5 dark:bg-white/5 border-t border-zinc-200 dark:border-white/10">
                  <div className="flex items-start justify-between gap-2">
                    <h3 className="text-xl font-semibold text-zinc-900 dark:text-white">
                      {project.title}
                    </h3>
                  </div>
                  <p className="mt-2 text-sm text-zinc-600 dark:text-gray-400 line-clamp-2">
                    {project.description}
                  </p>
                  <div className="mt-4 flex flex-wrap gap-2">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-2.5 py-1 text-xs font-medium rounded-full bg-zinc-200 text-zinc-700 dark:bg-white/10 dark:text-zinc-300 border border-zinc-300/50 dark:border-white/10"
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