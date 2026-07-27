"use client";

import { motion } from "framer-motion";

export default function BackgroundGradient() {
  return (
    <div className="absolute inset-0 -z-10 overflow-hidden">
      {/* Lingkaran 1 - Biru Muda (kiri atas) */}
      <motion.div
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1.5, delay: 0.2 }}
        className="absolute -top-40 -left-40 h-96 w-96 rounded-full bg-blue-200/30 dark:bg-blue-500/20 blur-3xl"
      />

      {/* Lingkaran 2 - Ungu (kanan bawah) */}
      <motion.div
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1.5, delay: 0.4 }}
        className="absolute -bottom-40 -right-40 h-80 w-80 rounded-full bg-purple-200/30 dark:bg-purple-500/20 blur-3xl"
      />

      {/* Lingkaran 3 - Cyan (tengah agak ke bawah) */}
      <motion.div
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1.5, delay: 0.6 }}
        className="absolute left-1/2 top-1/2 h-64 w-64 -translate-x-1/2 -translate-y-1/2 rounded-full bg-cyan-200/20 dark:bg-cyan-500/10 blur-3xl"
      />
    </div>
  );
}