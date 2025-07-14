import { Download } from "lucide-react";
import Header from "./Header";
import { Button } from "./ui/button";
import { motion } from "framer-motion";

const heading = "Fullstack Developer";
const subtitle = "Specializing In Modern Web Applications";

export default function PortfolioHero() {
  return (
    <div className="relative min-h-screen bg-black overflow-hidden">
      {/* Grid Background */}
      <div
        className="absolute inset-0 opacity-100"
        style={{
          backgroundImage: `
            linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)
          `,
          backgroundSize: "60px 60px",
        }}
      />

      {/* Vignette */}
      <div
        className="absolute inset-0"
        style={{
          background: `radial-gradient(ellipse at center, transparent 0%, transparent 50%, rgba(0,0,0,0.4) 100%, rgba(0,0,0,0.8) 100%)`,
        }}
      />

      <Header />

      <div className="relative z-10 flex items-center justify-center min-h-screen mt-10 tracking-tighter font-medium">
        <div className="text-center max-w-4xl">
          {/* Location */}
          <div className="text-white font-semibold text-sm uppercase tracking-widest xl:text-[12px] text-[10px]">
            Based in India
          </div>

          {/* Title (Animated Word-by-Word) */}
          <motion.div
            className="text-white xl:text-[64px] lg:text-[60px] md:text-[60px] sm:text-[50px] text-[35px] leading-[1.1] tracking-tight font-semibold flex flex-wrap justify-center gap-x-2 mt-2"
            initial="hidden"
            animate="visible"
            variants={{
              visible: {
                transition: {
                  staggerChildren: 0.1,
                },
              },
            }}
          >
            {heading.split(" ").map((word, index) => (
              <motion.span
                key={index}
                className="inline-block"
                variants={{
                  hidden: { opacity: 0, filter: "blur(8px)" },
                  visible: { opacity: 1, filter: "blur(0px)" },
                }}
                transition={{ duration: 1, ease: "easeOut" }}
              >
                {word}
              </motion.span>
            ))}
          </motion.div>

          {/* Subtitle (Animated Word-by-Word) */}
          <motion.div
            className="xl:text-[64px] lg:text-[60px] md:text-[60px] sm:text-[50px] text-[35px] font-semibold leading-[1] tracking-tight mb-3 text-white flex flex-wrap justify-center gap-x-2"
            initial="hidden"
            animate="visible"
            variants={{
              visible: {
                transition: {
                  staggerChildren: 0.10,
                },
              },
            }}
          >
            {subtitle.split(" ").map((word, index) => (
              <motion.span
                key={index}
                className={word === "Specializing" || word === "Modern" || word === "Web" || word === 'In' ? "text-blue-500 inline-block" : "inline-block"}
                variants={{
                  hidden: { opacity: 0, filter: "blur(8px)" },
                  visible: { opacity: 1, filter: "blur(0px)" },
                }}
                transition={{ duration: 1.5 }}
              >
                {word}
              </motion.span>
            ))}
          </motion.div>

          {/* Description */}
          <p
            className="text-white/70 mb-4 mx-auto font-semibold text-[14px] sm:text-[16px] md:text-[18px] lg:text-[20px] xl:text-[20px] 
              max-w-xs sm:max-w-sm md:max-w-md lg:max-w-xl xl:max-w-2xl"
          >
            Hi, I'm <span className="text-white font-medium">Salim</span> — a
            creative developer crafting solutions across all layers of modern
            digital experiences.
          </p>

          {/* Buttons */}
          <div className="flex flex-row gap-4 justify-center items-center">
            <Button
              size="lg"
              className="bg-transparent border border-white/30 text-white hover:bg-white/10 text-base cursor-pointer"
            >
              See My Work
            </Button>
            <a href="resume.pdf" download={'resume.pdf'}>
              <Button
                size="lg"
                className="bg-transparent text-white hover:bg-white/10 px-8 py-3 text-base flex items-center gap-2 cursor-pointer"
              >
                <Download className="w-4 h-4 text-blue-500" />
                Download CV
              </Button>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
