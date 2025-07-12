import { Download } from "lucide-react";
import Header from "./Header";
import { Button } from "./ui/button";

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
          backgroundSize: "40px 40px",
        }}
      />

      {/* Vignette Effect */}
      <div
        className="absolute inset-0"
        style={{
          background: `radial-gradient(ellipse at center, transparent 0%, transparent 40%, rgba(0,0,0,0.4) 70%, rgba(0,0,0,0.8) 100%)`,
        }}
      />

      {/* Header */}
      <Header />

      {/* Main Content */}
      <div className="relative z-10 flex items-center justify-center min-h-screen mt-10 tracking-tighter font-medium">
        <div className="text-center max-w-4xl">
          {/* Location */}
          <div className="text-white font-semibold text-sm uppercase tracking-widest xl:text-[12px]">
            Based in India
          </div>

          {/* Main Title */}
          <h1 className="text-white xl:text-[64px] leading-[1.1] tracking-tight">
            Software Engineer
          </h1>

          {/* Subtitle */}
          <h2 className="text-[32px] sm:text-[44px] md:text-[56px] font-semibold leading-[1.2] tracking-tight mb-4">
            <span className="text-blue-500">Crafting</span>{" "}
            <span className="text-white">Modern Web Experiences</span>
          </h2>

          {/* Description */}
          <p className="text-white/70 text-lg md:text-xl mb-4 max-w-2xl mx-auto font-semibold">
            I'm <span className="text-white font-medium">Salim</span> — a
            software engineer passionate about building
            scalable, user-focused applications from backend logic to intuitive
            frontends.
          </p>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button
              size="lg"
              className="bg-transparent border border-white/30 text-white hover:bg-white/10 text-base"
            >
              See My Work
            </Button>
            <Button
              size="lg"
              className="bg-transparent text-white hover:bg-white/10 px-8 py-3 text-base flex items-center gap-2"
            >
              <Download className="w-4 h-4 text-blue-500" />
              Download CV
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
