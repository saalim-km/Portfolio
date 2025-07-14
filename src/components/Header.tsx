import { Github, Mail } from "lucide-react";
import Logo from "./Logo";

export default function Header() {
  return (
    <header className="absolute top-0 left-0 right-0 z-50 xl:px-36 md:px-16 sm:px-16 px-10">
      <div className="flex items-center justify-between">
        <div className="text-white text-3xl md:text-4xl font-script">
          <Logo />
        </div>
        <div className="flex items-center gap-2.5">
          {/* LinkedIn SVG */}
          <a
            href="https://www.linkedin.com/in/salim-k-m-3ab7ba246"
            className="text-white hover:bg-blue-400 transition-colors cursor-pointer rounded-full bg-white/10 p-1.5 flex justify-center items-center "
            aria-label="LinkedIn"
          >
            <svg
              width="20"
              height="20"
              viewBox="0 0 24 19"
              fill="white"
              xmlns="http://www.w3.org/2000/svg"
              className="w-5 h-5"
            >
              <path d="M4.98 3.5C4.98 4.88 3.87 6 2.5 6S0 4.88 0 3.5 1.12 1 2.5 1s2.48 1.12 2.48 2.5zM.5 8h4V24h-4V8zM8 8h3.6v2.2h.05c.5-.95 1.72-2.2 3.55-2.2 3.8 0 4.5 2.5 4.5 5.8V24h-4v-8.4c0-2-.04-4.6-2.8-4.6-2.8 0-3.2 2.2-3.2 4.4V24h-4V8z" />
            </svg>
          </a>

          {/* GitHub Icon */}
          <a
            href="https://github.com/saalim-km/"
            className="text-white hover:bg-blue-400 transition-colors cursor-pointer rounded-full bg-white/10 p-1.5"
            aria-label="GitHub"
          >
            <Github className="w-5 h-5" />
          </a>

          {/* Mail Icon */}
          <a
            href="mailto:saalimkm@gmail.com?subject=Hello%20Saalim&body=Just%20wanted%20to%20say%20hi!"
            className="text-white hover:bg-blue-400 transition-colors cursor-pointer rounded-full bg-white/10 p-1.5"
            aria-label="Email"
          >
            <Mail className="w-5 h-5" />
          </a>
        </div>
      </div>
    </header>
  );
}
