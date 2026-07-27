"use client";

import { motion } from "framer-motion";
import { PERSONAL_DATA } from "@/constants";
import BackgroundGradient from "@/components/ui/BackgroundGradient";

export default function Hero() {
  const { name, title, bio, location, availableForWork } = PERSONAL_DATA;

  return (
    <section className="relative min-h-screen flex items-center justify-center px-4 py-20 overflow-hidden">
      {/* Background Gradient - ditempatkan di belakang */}
      <BackgroundGradient />

      <div className="max-w-4xl mx-auto text-center relative z-10">
        {/* Nama */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-5xl md:text-7xl font-bold tracking-tight"
        >
          {name}
        </motion.h1>

        {/* Jabatan */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="mt-2 text-2xl md:text-3xl font-medium text-blue-600 dark:text-blue-400"
        >
          {title}
        </motion.h2>

        {/* Bio */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mt-4 text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto"
        >
          {bio}
        </motion.p>

        {/* Badge Status & Lokasi */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-6 flex flex-wrap items-center justify-center gap-4"
        >
          {availableForWork && (
            <span className="px-3 py-1 text-sm font-medium text-green-700 bg-green-100 dark:bg-green-900/30 dark:text-green-400 rounded-full">
              🟢 Tersedia untuk Kerja / Freelance
            </span>
          )}
          <span className="px-3 py-1 text-sm text-gray-600 dark:text-gray-400">
            📍 {location}
          </span>
        </motion.div>
      </div>
    </section>
  );
}