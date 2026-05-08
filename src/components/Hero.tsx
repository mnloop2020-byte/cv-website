import { useState, useEffect } from "react";
import { personal } from "../data/portfolio";

function useTypingEffect(text: string, speed: number = 50) {
  const [displayed, setDisplayed] = useState("");
  const [done, setDone] = useState(false);
  useEffect(() => {
    setDisplayed("");
    setDone(false);
    let i = 0;
    const timer = setInterval(() => {
      if (i < text.length) { setDisplayed(text.slice(0, i + 1)); i++; }
      else { setDone(true); clearInterval(timer); }
    }, speed);
    return () => clearInterval(timer);
  }, [text, speed]);
  return { displayed, done };
}

const PARTICLES = Array.from({ length: 18 }, (_, i) => ({
  id: i,
  size: Math.random() * 3 + 2,
  x: Math.random() * 100,
  y: Math.random() * 100,
  duration: Math.random() * 14 + 12,
  delay: Math.random() * 8,
  drift: Math.random() * 30 - 15,
}));

function Particles() {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none" aria-hidden>
      {PARTICLES.map((p) => (
        <span
          key={p.id}
          className="absolute rounded-full bg-indigo-400/20"
          style={{
            width: p.size,
            height: p.size,
            left: `${p.x}%`,
            top: `${p.y}%`,
            animation: `floatDot ${p.duration}s ${p.delay}s ease-in-out infinite alternate`,
            "--drift": `${p.drift}px`,
          } as React.CSSProperties}
        />
      ))}
      <style>{`
        @keyframes floatDot {
          0%   { transform: translateY(0px) translateX(0px); opacity: 0.3; }
          50%  { opacity: 0.7; }
          100% { transform: translateY(-28px) translateX(var(--drift)); opacity: 0.2; }
        }
      `}</style>
    </div>
  );
}

export default function Hero() {
  const { displayed, done } = useTypingEffect(personal.title, 45);

  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-slate-50 via-white to-indigo-50/40">
      <Particles />
      <div className="absolute top-20 right-0 w-96 h-96 bg-indigo-100/50 rounded-full blur-3xl -translate-y-1/2 translate-x-1/3 pointer-events-none" />
      <div className="absolute bottom-20 left-0 w-80 h-80 bg-violet-100/40 rounded-full blur-3xl translate-y-1/2 -translate-x-1/3 pointer-events-none" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-indigo-50/30 rounded-full blur-3xl pointer-events-none" />

      <div className="relative max-w-6xl mx-auto px-6 py-32 flex flex-col lg:flex-row items-center gap-16">
        <div className="flex-1 text-center lg:text-left space-y-6">
          <div className="inline-flex items-center gap-2 bg-indigo-50 border border-indigo-100 text-indigo-700 text-sm font-medium px-4 py-1.5 rounded-full">
            <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
            Available for opportunities
          </div>

          <h1 className="text-5xl lg:text-6xl xl:text-7xl font-extrabold text-slate-900 leading-tight tracking-tight">
            Hi, I'm{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-violet-600">
              {personal.name}
            </span>
          </h1>

          <p className="text-xl lg:text-2xl font-medium text-slate-500 min-h-[2rem]">
            {displayed}
            <span className={`inline-block w-0.5 h-6 bg-indigo-400 ml-0.5 align-middle ${done ? "animate-pulse" : "opacity-100"}`} />
          </p>
          <p className="text-base lg:text-lg text-slate-400 max-w-xl mx-auto lg:mx-0 leading-relaxed">{personal.tagline}</p>

          <div className="flex flex-wrap gap-4 justify-center lg:justify-start pt-2">
            <a href="#projects" className="inline-flex items-center gap-2 bg-indigo-600 hover:bg-indigo-700 active:scale-95 text-white font-semibold px-6 py-3 rounded-xl shadow-lg shadow-indigo-200 transition-all duration-200">
              View Projects
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </a>
            <a href="https://claude.ai/public/artifacts/09e68c78-29da-4227-8108-5e266322d243" target="_blank" rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-white hover:bg-slate-50 active:scale-95 text-slate-700 font-semibold px-6 py-3 rounded-xl border border-slate-200 shadow-sm transition-all duration-200">
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3M3 17V7a2 2 0 012-2h6l2 2h6a2 2 0 012 2v8a2 2 0 01-2 2H5a2 2 0 01-2-2z" />
              </svg>
              Download CV
            </a>
            <a href="#contact" className="inline-flex items-center gap-2 bg-white hover:bg-slate-50 active:scale-95 text-slate-700 font-semibold px-6 py-3 rounded-xl border border-slate-200 shadow-sm transition-all duration-200">
              Contact Me
            </a>
          </div>

          <div className="flex items-center gap-4 justify-center lg:justify-start pt-2">
            <a href={personal.github} target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-slate-700 transition-colors">
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                <path fillRule="evenodd" clipRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844a9.59 9.59 0 012.504.337c1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
              </svg>
            </a>
            <span className="text-slate-300">|</span>
            <span className="text-sm text-slate-400 flex items-center gap-1.5">
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
              {personal.location}
            </span>
          </div>
        </div>

        <div className="flex-shrink-0">
          <div className="relative">
            <div className="absolute -inset-3 bg-gradient-to-br from-indigo-400 to-violet-500 rounded-full opacity-20 blur-lg" />
            <div className="absolute -inset-6 bg-gradient-to-br from-indigo-300/20 to-violet-300/20 rounded-full blur-2xl animate-pulse" />
            <div className="relative w-52 h-52 lg:w-64 lg:h-64 rounded-full border-4 border-white shadow-2xl overflow-hidden bg-slate-100">
              <img
                src="https://mnloop2020-byte.github.io/cv-website/myprofile.png"
                alt={personal.name}
                className="w-full h-full object-cover object-top"
              />
            </div>
          </div>
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-slate-300 animate-bounce">
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 9l-7 7-7-7" />
        </svg>
      </div>
    </section>
  );
}