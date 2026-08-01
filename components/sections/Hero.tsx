"use client";

import type { ReactNode } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import BackgroundGradient from "@/components/ui/BackgroundGradient";

/* ------------------------------------------------------------------ */
/*  Animation variants                                                  */
/* ------------------------------------------------------------------ */

const staggerContainer = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.12,
    },
  },
};

const fadeIn = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] as const },
  },
};

/* ------------------------------------------------------------------ */
/*  Placeholder: Profile Image                                         */
/* ------------------------------------------------------------------ */

function ProfilePlaceholder() {
  return (
    <motion.div
      variants={fadeIn}
      className="relative h-24 w-24 shrink-0 overflow-hidden rounded-xl
        border border-zinc-300/60 bg-gradient-to-br from-zinc-100 via-blue-50 to-purple-50
        shadow-lg shadow-zinc-900/5
        dark:border-zinc-700/50 dark:from-zinc-800 dark:via-blue-950/30 dark:to-purple-950/20
        dark:shadow-black/20"
    >
      <Image
        src="/images/hero/img-test1.png"
        alt="Ankasaa"
        fill
        className="object-cover"
      />
    </motion.div>
  );
}

/* ------------------------------------------------------------------ */
/*  Placeholder: Project Showcase                                      */
/* ------------------------------------------------------------------ */

function ShowcasePlaceholder() {
  return (
    <motion.div
      variants={fadeIn}
      className="group relative aspect-video w-full overflow-hidden rounded-3xl bg-transparent"
    >
      {/* Showcase image */}
      <Image
        src="/images/hero/img-project-1.png"
        alt="Project Preview"
        fill
        className="object-cover"
      />

      {/* Subtle shine on hover */}
      <div
        className="pointer-events-none absolute inset-0 -translate-x-full bg-gradient-to-r
          from-transparent via-white/5 to-transparent transition-transform duration-700
          group-hover:translate-x-full"
      />
    </motion.div>
  );
}

/* ------------------------------------------------------------------ */
/*  CTA Button (used for both primary & secondary)                    */
/* ------------------------------------------------------------------ */

interface CtaButtonProps {
  children: ReactNode;
  variant: "primary" | "secondary";
  href?: string;
}

function CtaButton({ children, variant, href }: CtaButtonProps) {
  const Component = href ? "a" : "button";

  return (
    <motion.div variants={fadeIn} whileHover={{ scale: 1.04 }} whileTap={{ scale: 0.97 }}>
      <Component
        href={href}
        className={cn(
          "inline-flex items-center justify-center gap-2 rounded-full px-7 py-3 text-sm font-medium",
          "transition-shadow duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2",
          variant === "primary" &&
            "bg-zinc-900 text-white shadow-md shadow-zinc-900/15 hover:bg-zinc-800 hover:shadow-lg hover:shadow-zinc-900/20 dark:bg-zinc-100 dark:text-zinc-900 dark:shadow-zinc-100/15 dark:hover:bg-white",
          variant === "secondary" &&
            "border border-zinc-300 bg-transparent text-zinc-700 shadow-sm shadow-zinc-900/5 hover:border-zinc-400 hover:bg-zinc-100/70 dark:border-zinc-600 dark:text-zinc-300 dark:hover:border-zinc-500 dark:hover:bg-zinc-900/70"
        )}
      >
        {children}
      </Component>
    </motion.div>
  );
}

/* ================================================================== */
/*  Hero Section                                                        */
/* ================================================================== */

export default function Hero() {
  return (
    <section
      className="relative min-h-screen flex items-center justify-center
        px-4 py-24 md:px-8 lg:px-12 overflow-hidden"
    >
      {/* ---------- Background ---------- */}
      <BackgroundGradient />

      {/* ---------- Grid ---------- */}
      <div
        className="relative z-10 mx-auto flex w-full max-w-7xl flex-col items-center gap-12
          lg:flex-row lg:gap-20"
      >
        {/* ================== LEFT COLUMN ================== */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          animate="visible"
          className="flex w-full max-w-xl flex-col items-center text-center
            lg:items-start lg:text-left"
        >
          {/* Profile + Name */}
          <div className="flex flex-col items-center gap-5 sm:flex-row sm:gap-6">
            {/* Profile placeholder */}
            <ProfilePlaceholder />

            {/* Name */}
            <motion.h1
              variants={fadeIn}
              className="text-4xl font-bold tracking-tight
                text-zinc-900 dark:text-zinc-50
                sm:text-5xl md:text-6xl"
            >
              Ankasaa
            </motion.h1>
          </div>

          {/* Headline */}
          <motion.p
            variants={fadeIn}
            className="mt-4 max-w-lg text-lg leading-relaxed
              text-zinc-600 dark:text-zinc-400
              sm:text-xl"
          >
            Design Engineer who ships products, not just mockups.
          </motion.p>

          {/* CTAs */}
          <div className="mt-8 flex flex-wrap gap-3">
            <CtaButton href="#contact" variant="primary">
              Discuss a Project
            </CtaButton>
            <CtaButton variant="secondary">
              Download CV
            </CtaButton>
          </div>
        </motion.div>

        {/* ================== RIGHT COLUMN ================== */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
          className="w-full max-w-2xl"
        >
          <ShowcasePlaceholder />
        </motion.div>
      </div>
    </section>
  );
}