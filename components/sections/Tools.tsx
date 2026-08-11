"use client";

import Image from "next/image";

const TOOLS = [
  { name: "Figma", icon: "/images/tools/icon-1.png" },
  { name: "Hermes Agent", icon: "/images/tools/icon-2.png", invertInDarkMode: true },
  { name: "Docker", icon: "/images/tools/icon-3.png" },
  { name: "Open Code", icon: "/images/tools/icon-4.png", invertInDarkMode: true },
  { name: "Github", icon: "/images/tools/icon-5.png", invertInDarkMode: true },
  { name: "Canva", icon: "/images/tools/icon-6.png" },
  { name: "Google Colab", icon: "/images/tools/icon-7.png" },
  { name: "Power BI", icon: "/images/tools/icon-8.png" },
];

export default function Tools() {
  return (
    <section className="py-20 md:py-32 bg-white dark:bg-black text-zinc-900 dark:text-white overflow-hidden transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 md:mb-24 relative z-30">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Tools I Use
          </h2>
          <p className="text-zinc-500 dark:text-zinc-400 max-w-2xl mx-auto">
            The core toolkit powering my design, development, and analytical workflow.
          </p>
        </div>

        <div className="flex flex-wrap justify-center gap-4 md:gap-6 md:max-w-3xl mx-auto relative z-10">
          {TOOLS.map((tool) => (
            <div
              key={tool.name}
              className="group flex w-28 h-28 flex-col items-center justify-center gap-2 rounded-2xl border border-zinc-200 dark:border-white/10 bg-zinc-100/70 dark:bg-zinc-900/60 backdrop-blur-sm p-4 cursor-pointer transition-all duration-300 ease-out hover:scale-105 hover:bg-zinc-50 hover:border-zinc-300 dark:hover:bg-white/10 dark:hover:border-indigo-500/50"
            >
              <div className="w-9 h-9 md:w-10 md:h-10 relative shrink-0">
                <Image
                  src={tool.icon}
                  alt={tool.name}
                  fill
                  className={tool.invertInDarkMode ? "object-contain dark:invert" : "object-contain"}
                  sizes="(max-width: 768px) 36px, 40px"
                />
              </div>
              <span className="text-center text-xs text-zinc-500 dark:text-zinc-400 font-medium leading-tight line-clamp-2">
                {tool.name}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
