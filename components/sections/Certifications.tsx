import Image from "next/image";
import { CERTIFICATIONS } from "@/constants";
import Container from "@/components/ui/Container";

export default function Certifications() {
  return (
    <section id="certifications" className="py-20 md:py-32">
      <Container>
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-10 text-center">
          Sertifikat &amp; Pencapaian
        </h2>
      </Container>

      <div className="relative overflow-hidden w-full mt-10 [mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)]">
        <div className="flex w-max gap-6 animate-[scroll_80s_linear_infinite] hover:[animation-play-state:paused]">
            {[...CERTIFICATIONS, ...CERTIFICATIONS].map((cert, index) => (
              <div
                key={`${cert.id}-${index}`}
                className="relative w-[300px] md:w-[450px] aspect-video rounded-3xl overflow-hidden group cursor-grab bg-white/5 border border-white/10 hover:border-white/30 transition-all duration-300"
              >
                <Image
                  src={cert.image}
                  alt={cert.title}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                  sizes="(max-width: 768px) 300px, 450px"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent" />

                <div className="absolute inset-x-0 bottom-0 p-6 text-left">
                  <h3 className="text-lg md:text-xl font-semibold text-white">
                    {cert.title}
                  </h3>
                  <p className="mt-1 text-sm text-white/70">{cert.issuer}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
    </section>
  );
}