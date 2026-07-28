"use client";

import Image from "next/image";

// Saat ini icon_2 - icon_8 masih memakai icon_1.
// Nanti setelah kamu upload file icon_2.png, icon_3.png, dst, ganti saja path di sini.
const TOOLS = [
  { name: "Figma", icon: "/images/tools/icon-1.png" },
  { name: "Webflow", icon: "/images/tools/icon-1.png" },
  { name: "Photoshop", icon: "/images/tools/icon-1.png" },
  { name: "Notion", icon: "/images/tools/icon-1.png" },
  { name: "Obsidian", icon: "/images/tools/icon-1.png" },
  { name: "Unity", icon: "/images/tools/icon-1.png" },
  { name: "Vercel", icon: "/images/tools/icon-1.png" },
  { name: "Blender", icon: "/images/tools/icon-1.png" },
];

export default function Tools() {
  return (
    <section className="py-20 md:py-32 bg-zinc-50 dark:bg-black text-zinc-900 dark:text-white overflow-hidden transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center mb-16 relative z-10">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Tools I Use
          </h2>
          <p className="text-zinc-500 dark:text-zinc-400 max-w-2xl mx-auto">
            The tools I reach for when designing and building digital products.
          </p>
        </div>

        <div className="flex flex-wrap justify-center gap-6 lg:gap-8 max-w-5xl mx-auto items-end">
          {TOOLS.map((tool, index) => {
            
            let yTranslate = "translate-y-0";
            if (index === 1 || index === 6) yTranslate = "md:-translate-y-4";
            if (index === 2 || index === 5) yTranslate = "md:-translate-y-8";
            if (index === 3 || index === 4) yTranslate = "md:-translate-y-10";

            return (
              <div
                key={index}
                className={`
                  group relative flex flex-col items-center justify-end transition-all duration-300
                  w-20 h-20 md:w-24 md:h-24
                  ${yTranslate}
                `}
              >
                {/* TOOLTIP */}
                <div className="
                  absolute -top-10 md:-top-12 
                  opacity-0 group-hover:opacity-100 
                  scale-90 group-hover:scale-100
                  transition-all duration-300 ease-in-out
                  bg-black text-white dark:bg-white dark:text-black text-xs font-medium
                  px-3 py-1.5 rounded-lg whitespace-nowrap
                  shadow-lg shadow-black/30
                  pointer-events-none
                ">
                  {tool.name}
                  <div className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-2 h-2 bg-black dark:bg-white rotate-45"></div>
                </div>

                {/* KARTU UTAMA */}
                <div className="
                  w-full h-full
                  bg-white dark:bg-[#18181b] 
                  rounded-3xl
                  shadow-[0_15px_50px_-15px_rgba(0,0,0,0.05)] dark:shadow-[0_15px_50px_-15px_rgba(0,0,0,0.5)]
                  flex items-center justify-center
                  transition-all duration-300 ease-in-out
                  group-hover:scale-110 group-hover:-translate-y-2 group-hover:shadow-[0_20px_60px_-15px_rgba(0,0,0,0.1)] dark:group-hover:shadow-[0_20px_60px_-15px_rgba(255,255,255,0.1)]
                  border border-zinc-200 dark:border-zinc-800
                ">
                  <div className="w-10 h-10 md:w-12 md:h-12 relative">
                    <Image
                      src={tool.icon}
                      alt={tool.name}
                      fill
                      className="object-contain"
                      sizes="(max-width: 768px) 40px, 48px"
                    />
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}