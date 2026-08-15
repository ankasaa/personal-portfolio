"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

/* ------------------------------------------------------------------ */
/*  Animation variants                                                  */
/* ------------------------------------------------------------------ */

const staggerContainer = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.14,
    },
  },
};

const fadeIn = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] as const },
  },
};

/* ------------------------------------------------------------------ */
/*  Faint code syntax snippet                                          */
/* ------------------------------------------------------------------ */

/*
  Warna token untuk snippet kode.
  Light mode: warna lebih gelap tanpa glow agar tidak mencolok.
  Dark mode: warna neon tipis dengan glow.
*/
const CODE_COLORS = {
  keyword:
    "text-sky-700 dark:text-sky-400/90 [text-shadow:none] dark:[text-shadow:0_0_20px_rgba(56,189,248,0.35)]",
  identifier:
    "text-slate-700 dark:text-slate-200 [text-shadow:none] dark:[text-shadow:0_0_20px_rgba(226,232,240,0.25)]",
  string:
    "text-emerald-700 dark:text-emerald-400/90 [text-shadow:none] dark:[text-shadow:0_0_20px_rgba(52,211,153,0.35)]",
  number:
    "text-amber-700 dark:text-amber-400/90 [text-shadow:none] dark:[text-shadow:0_0_20px_rgba(251,191,36,0.35)]",
  function_:
    "text-violet-700 dark:text-violet-400/90 [text-shadow:none] dark:[text-shadow:0_0_20px_rgba(167,139,250,0.35)]",
  punctuation: "text-slate-500 dark:text-zinc-500",
  functionDim:
    "text-violet-700 dark:text-violet-400/90 [text-shadow:none] dark:[text-shadow:0_0_20px_rgba(167,139,250,0.3)]",
  numberDim:
    "text-amber-700 dark:text-amber-400/80 [text-shadow:none] dark:[text-shadow:0_0_20px_rgba(251,191,36,0.25)]",
  stringDim:
    "text-emerald-700 dark:text-emerald-400/80 [text-shadow:none] dark:[text-shadow:0_0_20px_rgba(52,211,153,0.25)]",
  identifierDim:
    "text-slate-700 dark:text-slate-200 [text-shadow:none] dark:[text-shadow:0_0_20px_rgba(226,232,240,0.2)]",
};

function CodeSnippet({ className }: { className?: string }) {
  return (
    <motion.div
      aria-hidden
      animate={{ y: [0, -10, 0] }}
      transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
      className={cn(
        "pointer-events-none select-none font-mono text-[11px] leading-6 opacity-60 dark:opacity-30",
        className
      )}
    >
      <pre className="tracking-tight">
        <span className={CODE_COLORS.keyword}>const</span>{" "}
        <span className={CODE_COLORS.identifier}>developer</span>{" "}
        <span className={CODE_COLORS.punctuation}>= {"{"}</span>
        {"\n"}
        {"  "}name:{" "}
        <span className={CODE_COLORS.string}>&quot;Andika&quot;</span>,{"\n"}
        {"  "}stack: [
        <span className={CODE_COLORS.number}>&quot;Next.js&quot;</span>,{" "}
        <span className={CODE_COLORS.number}>&quot;TypeScript&quot;</span>,{" "}
        <span className={CODE_COLORS.number}>&quot;Laravel&quot;</span>
        ],{"\n"}
        {"  "}focus:{" "}
        <span className={CODE_COLORS.function_}>&quot;clean, fast, usable&quot;</span>
        ,{"\n"}
        {"}"};
      </pre>
    </motion.div>
  );
}

function CodeSnippetTwo({ className }: { className?: string }) {
  return (
    <motion.div
      aria-hidden
      animate={{ y: [0, 10, 0] }}
      transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
      className={cn(
        "pointer-events-none select-none font-mono text-[10px] leading-6 opacity-60 dark:opacity-25",
        className
      )}
    >
      <pre className="tracking-tight">
        <span className={CODE_COLORS.functionDim}>function</span>{" "}
        <span className={CODE_COLORS.identifierDim}>build</span>
        () {"{"}
        {"\n"}
        {"  "}
        <span className={CODE_COLORS.numberDim}>while</span> (!clean) {"{"}
        {"\n"}
        {"    "}refactor();{"\n"}
        {"  "}
        {"}"}
        {"\n"}
        {"  "}
        <span className={CODE_COLORS.stringDim}>return</span> experience;
        {"\n"}
        {"}"}
      </pre>
    </motion.div>
  );
}

/* ------------------------------------------------------------------ */
/*  Faint open-source contribution graph (GitHub-style)                */
/* ------------------------------------------------------------------ */

const WEEKS = 26;
const ROWS = 7;

function cellLevel(index: number): 0 | 1 | 2 | 3 {
  const r =
    Math.abs(Math.sin(index * 12.9898 + 78.233) * 43758.5453) % 1;
  if (r < 0.3) return 0;
  if (r < 0.55) return 1;
  if (r < 0.8) return 2;
  return 3;
}

const CELL_COLORS = [
  "bg-slate-900/[0.06] dark:bg-white/[0.04]",
  "bg-emerald-500/25 dark:bg-emerald-400/20",
  "bg-emerald-500/50 shadow-[0_0_8px_rgba(16,185,129,0.3)] dark:bg-emerald-400/40 dark:shadow-[0_0_8px_rgba(52,211,153,0.25)]",
  "bg-emerald-600/60 shadow-[0_0_10px_rgba(16,185,129,0.4)] dark:bg-emerald-300/70 dark:shadow-[0_0_12px_rgba(52,211,153,0.45)]",
];

function ContributionGraph({ className }: { className?: string }) {
  const cells = Array.from({ length: WEEKS * ROWS }, (_, i) => cellLevel(i));

  return (
    <motion.div
      aria-hidden
      animate={{ y: [0, 8, 0] }}
      transition={{ duration: 9, repeat: Infinity, ease: "easeInOut" }}
      className={cn("pointer-events-none select-none opacity-70 dark:opacity-40", className)}
    >
      <div
        className="grid grid-flow-col grid-rows-7 gap-[3px] rounded-lg border border-slate-900/10 bg-slate-900/[0.03]
          p-2 dark:border-white/5 dark:bg-white/[0.02]"
      >
        {cells.map((level, i) => (
          <div
            key={i}
            className={cn("h-1.5 w-1.5 rounded-[2px]", CELL_COLORS[level])}
          />
        ))}
      </div>
    </motion.div>
  );
}

/* ------------------------------------------------------------------ */
/*  API microservice / dev icons                                       */
/* ------------------------------------------------------------------ */

function FloatingIcon({
  className,
  children,
  transition,
}: {
  className?: string;
  children: React.ReactNode;
  transition?: object;
}) {
  return (
    <motion.div
      aria-hidden
      animate={{ y: [0, -12, 0] }}
      transition={{ duration: 6, repeat: Infinity, ease: "easeInOut", ...transition }}
      className={cn(
        "pointer-events-none absolute select-none text-slate-400 dark:text-zinc-500/60",
        "[filter:drop-shadow(0_0_10px_rgba(15,23,42,0.15))] dark:[filter:drop-shadow(0_0_14px_rgba(255,255,255,0.18))]",
        className
      )}
    >
      {children}
    </motion.div>
  );
}

function MeshIcon() {
  return (
    <svg viewBox="0 0 64 64" fill="none" className="h-14 w-14">
      <rect
        x="4"
        y="4"
        width="18"
        height="18"
        rx="4"
        stroke="currentColor"
        strokeWidth="2"
      />
      <rect
        x="42"
        y="4"
        width="18"
        height="18"
        rx="4"
        stroke="currentColor"
        strokeWidth="2"
      />
      <rect
        x="23"
        y="42"
        width="18"
        height="18"
        rx="4"
        stroke="currentColor"
        strokeWidth="2"
      />
      <path d="M22 13h20M13 22v10h19v10M51 22v10H32" stroke="currentColor" strokeWidth="2" />
      <circle cx="13" cy="13" r="1.5" fill="currentColor" />
      <circle cx="51" cy="13" r="1.5" fill="currentColor" />
      <circle cx="32" cy="51" r="1.5" fill="currentColor" />
    </svg>
  );
}

function TerminalIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.6"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="h-8 w-8"
    >
      <path d="m5 7 5 5-5 5" />
      <path d="M12 17h7" />
    </svg>
  );
}

function DatabaseIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" className="h-9 w-9">
      <ellipse cx="12" cy="5" rx="8" ry="3" />
      <path d="M4 5v14c0 1.66 3.58 3 8 3s8-1.34 8-3V5" />
      <path d="M4 12c0 1.66 3.58 3 8 3s8-1.34 8-3" />
    </svg>
  );
}

function CloudIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.6"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="h-10 w-10"
    >
      <path d="M17.5 19a4.5 4.5 0 0 0 .86-8.92A7 7 0 0 0 5.1 12.2 4.5 4.5 0 0 0 6.5 19h11Z" />
    </svg>
  );
}

function ShieldIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.6"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="h-7 w-7"
    >
      <path d="M12 22s8-3.5 8-10V5l-8-3-8 3v7c0 6.5 8 10 8 10Z" />
    </svg>
  );
}

/* ------------------------------------------------------------------ */
/*  Background decoration layer                                        */
/* ------------------------------------------------------------------ */

function HeroBackdrop() {
  return (
    <div aria-hidden className="absolute inset-0 -z-10 overflow-hidden">
      {/* Base: terang di light mode, arang di dark mode */}
      <div className="absolute inset-0 bg-slate-50 dark:bg-[#0d0d11]" />

      {/* Dot texture: abu transparan (light) / putih transparan (dark) */}
      <div
        className="absolute inset-0 bg-[radial-gradient(rgba(15,23,42,0.05)_1px,transparent_1px)]
          dark:bg-[radial-gradient(rgba(255,255,255,0.035)_1px,transparent_1px)]
          [background-size:26px_26px]"
      />

      {/* Red studio glow behind the portrait */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.4 }}
        className="absolute left-1/2 top-1/2 h-[520px] w-[520px] -translate-x-[85%] -translate-y-[110%]
          rounded-full bg-red-500/20 blur-[130px] dark:bg-red-600/25 lg:-translate-x-[120%]"
      />

      {/* Faint ambient glows */}
      <div className="absolute -top-32 right-[10%] h-72 w-72 rounded-full bg-violet-500/15 blur-[100px] dark:bg-violet-600/10" />
      <div className="absolute bottom-[8%] right-[20%] h-64 w-64 rounded-full bg-cyan-400/20 blur-[100px] dark:bg-cyan-500/10" />

      {/* Faint code syntax */}
      <CodeSnippet className="absolute left-[5%] top-[16%] hidden lg:block" />
      <CodeSnippetTwo className="absolute right-[7%] bottom-[22%] hidden md:block" />

      {/* Faint contribution graph */}
      <ContributionGraph className="absolute bottom-[10%] left-[4%] hidden lg:block" />

      {/* API microservice icons */}
      <FloatingIcon className="right-[12%] top-[12%]">
        <MeshIcon />
      </FloatingIcon>
      <FloatingIcon className="right-[24%] top-[34%] hidden xl:block" transition={{ duration: 7 }}>
        <CloudIcon />
      </FloatingIcon>
      <FloatingIcon className="bottom-[14%] right-[9%]">
        <DatabaseIcon />
      </FloatingIcon>
      <FloatingIcon className="left-[22%] top-[14%] hidden xl:block" transition={{ duration: 8 }}>
        <ShieldIcon />
      </FloatingIcon>
      <FloatingIcon className="left-[7%] top-[52%] hidden xl:block" transition={{ duration: 7 }}>
        <TerminalIcon />
      </FloatingIcon>

      {/* Vignette: lembut abu-abu (light) / hitam pekat (dark) */}
      <div
        className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_35%,rgba(15,23,42,0.07)_100%)]
          dark:bg-[radial-gradient(ellipse_at_center,transparent_35%,rgba(0,0,0,0.55)_100%)]"
      />
    </div>
  );
}

/* ------------------------------------------------------------------ */
/*  Hero Section                                                        */
/* ------------------------------------------------------------------ */

export default function Hero() {
  return (
    <section
      className="relative flex min-h-screen items-center justify-center
        overflow-hidden px-4 py-24 md:px-8 lg:px-12"
    >
      <HeroBackdrop />

      <motion.div
        variants={staggerContainer}
        initial="hidden"
        animate="visible"
        className="relative z-10 mx-auto flex w-full max-w-5xl flex-col items-center"
      >
        {/* Portrait + Name */}
        <motion.div
          variants={fadeIn}
          className="flex flex-col items-center gap-7 sm:flex-row sm:gap-10"
        >
          {/* Rounded-square frame with red studio background */}
          <div
            className="relative h-28 w-28 shrink-0 overflow-hidden rounded-[1.75rem]
              bg-gradient-to-br from-red-500 via-red-600 to-red-800
              ring-1 ring-slate-900/10 shadow-2xl shadow-red-900/30
              dark:ring-white/15 dark:shadow-red-950/60 sm:h-36 sm:w-36 md:h-44 md:w-44"
          >
            <Image
              src="/images/hero/itsme.png"
              alt="Andika"
              fill
              priority
              sizes="(max-width: 640px) 7rem, (max-width: 768px) 9rem, 11rem"
              className="object-cover"
            />
          </div>

          {/* Name */}
          <motion.h1
            variants={fadeIn}
            className="text-center text-[clamp(3.25rem,11vw,7.5rem)] leading-none font-extrabold tracking-tight
              text-slate-900 dark:text-white sm:text-left"
          >
            Andika
          </motion.h1>
        </motion.div>

        {/* Subtitle */}
        <motion.p
          variants={fadeIn}
          className="mt-7 max-w-2xl text-center text-lg leading-relaxed
            text-slate-600 dark:text-zinc-400 sm:text-xl md:text-2xl"
        >
          <span className="font-semibold text-slate-900 dark:text-white">
            Web Developer
          </span>{" "}
          who turns ideas into clean, functional experiences.
        </motion.p>
      </motion.div>
    </section>
  );
}
