"use client";

import Image from "next/image";

const TOOLS = [
  { name: "Figma", icon: "/images/tools/icon-1.png" },
  { name: "Hermes Agent", icon: "/images/tools/icon-2.png" },
  { name: "Docker", icon: "/images/tools/icon-3.jpg" },
  { name: "Open Code", icon: "/images/tools/icon-4.jpg" },
  { name: "Github", icon: "/images/tools/icon-5.png" },
  { name: "Unity", icon: "/images/tools/icon-6.png" },
  { name: "Vercel", icon: "/images/tools/icon-7.png" },
  { name: "Blender", icon: "/images/tools/icon-8.png" },
];

export default function Tools() {
  return (
    // ✅ PERBAIKAN: Sekarang ini komentar JavaScript biasa, bukan komentar JSX (aman untuk ditaruh di sini).
    <section className="py-20 md:py-32 bg-white dark:bg-black text-zinc-900 dark:text-white overflow-hidden transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Bagian Judul */}
        <div className="text-center mb-24 md:mb-32 relative z-30">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Tools I Use
          </h2>
          <p className="text-zinc-500 dark:text-zinc-400 max-w-2xl mx-auto">
            The tools I reach for when designing and building digital products.
          </p>
        </div>

        {/* Container Kartu */}
        <div className="flex flex-wrap md:flex-nowrap justify-center items-center max-w-5xl mx-auto relative z-10">
          {TOOLS.map((tool, index) => {
            
            const marginLeft = index > 0 ? "-ml-1 sm:-ml-2 md:-ml-2 lg:-ml-3" : "";

            return (
              <div
                key={index}
                className={`
                  group relative flex items-center justify-center
                  w-14 h-14 sm:w-16 sm:h-16 md:w-20 md:h-20 lg:w-24 lg:h-24
                  ${marginLeft} 
                  hover:z-50 transition-all duration-300
                `}
              >
                {/* Kartu Utama */}
                <div className={`
                  relative w-full h-full
                  bg-white dark:bg-[#1c1c1c] 
                  rounded-2xl md:rounded-3xl
                  flex items-center justify-center
                  border border-zinc-200 dark:border-zinc-700
                  shadow-[0_10px_40px_-5px_rgba(0,0,0,0.05)] dark:shadow-[0_10px_40px_-5px_rgba(0,0,0,0.4)]
                  transition-all duration-300 ease-out cursor-pointer
                  group-hover:-translate-y-6 md:group-hover:-translate-y-8 group-hover:scale-[1.15] md:group-hover:scale-[1.2]
                  group-hover:shadow-[0_20px_60px_-15px_rgba(0,0,0,0.2)] dark:group-hover:shadow-[0_20px_60px_-15px_rgba(255,255,255,0.15)]
                `}>
                  
                  {/* Tooltip Nama Aplikasi */}
                  <div className="
                    absolute -top-10 md:-top-12
                    opacity-0 group-hover:opacity-100 
                    translate-y-2 group-hover:translate-y-0
                    transition-all duration-300 ease-out
                    bg-black text-white text-[10px] md:text-xs font-bold
                    px-3 py-1.5 md:px-4 md:py-2 rounded-lg whitespace-nowrap
                    shadow-xl pointer-events-none
                    flex flex-col items-center
                  ">
                    {tool.name}
                    <div className="absolute -bottom-1 w-2.5 h-2.5 bg-black rotate-45"></div>
                  </div>

                  {/* Ikon */}
                  <div className="w-6 h-6 sm:w-8 sm:h-8 md:w-10 md:h-10 lg:w-12 lg:h-12 relative">
                    <Image
                      src={tool.icon}
                      alt={tool.name}
                      fill
                      className="object-contain"
                      sizes="(max-width: 768px) 32px, 56px"
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