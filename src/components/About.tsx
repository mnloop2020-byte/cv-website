import { useEffect, useRef, useState } from "react";
import { about } from "../data/portfolio";

function useInView(threshold = 0.2) {
  const ref = useRef<HTMLDivElement>(null);
  const [inView, setInView] = useState(false);
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) { setInView(true); observer.disconnect(); } },
      { threshold }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [threshold]);
  return { ref, inView };
}

function useCounter(target: number, duration: number, active: boolean) {
  const [count, setCount] = useState(0);
  useEffect(() => {
    if (!active) return;
    const start = Date.now();
    const timer = setInterval(() => {
      const elapsed = Date.now() - start;
      const progress = Math.min(elapsed / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setCount(Math.floor(eased * target));
      if (progress === 1) clearInterval(timer);
    }, 16);
    return () => clearInterval(timer);
  }, [target, duration, active]);
  return count;
}

function StatCard({ value, label, active }: { value: string; label: string; active: boolean }) {
  const isInfinity = value === "∞";
  const num = parseInt(value.replace(/\D/g, ""), 10) || 0;
  const suffix = value.replace(/[0-9]/g, "");
  const count = useCounter(num, 1800, active && !isInfinity);

  return (
    <div className="group bg-slate-50 hover:bg-indigo-50 border border-slate-100 hover:border-indigo-200 rounded-2xl p-6 text-center transition-all duration-300 hover:shadow-md">
      <div className="text-3xl font-extrabold text-indigo-600 group-hover:scale-110 transition-transform duration-300">
        {isInfinity ? "∞" : `${count}${suffix}`}
      </div>
      <div className="text-sm text-slate-500 mt-1 font-medium">{label}</div>
    </div>
  );
}

export default function About() {
  const { ref: sectionRef, inView } = useInView(0.2);
  const { ref: textRef, inView: textVisible } = useInView(0.1);

  return (
    <section id="about" className="py-24 bg-white">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16">
          <p className="text-sm font-semibold text-indigo-500 uppercase tracking-widest mb-3">
            About Me
          </p>
          <h2 className="text-4xl font-bold text-slate-900">Who I Am</h2>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div
            ref={textRef}
            className={`space-y-6 transition-all duration-700 ${textVisible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-8"}`}
          >
            <p className="text-lg text-slate-600 leading-relaxed">{about.summary}</p>
            <p className="text-base text-slate-500 leading-relaxed">{about.bio}</p>

            <div className="flex flex-wrap gap-3 pt-2">
              <a
                href="#contact"
                className="inline-flex items-center gap-2 bg-indigo-600 hover:bg-indigo-700 text-white text-sm font-semibold px-5 py-2.5 rounded-xl transition-colors shadow-md shadow-indigo-100"
              >
                Get In Touch
              </a>
              <a
                href="#projects"
                className="inline-flex items-center gap-2 bg-slate-100 hover:bg-slate-200 text-slate-700 text-sm font-semibold px-5 py-2.5 rounded-xl transition-colors"
              >
                See My Work
              </a>
            </div>
          </div>

          <div
            ref={sectionRef}
            className={`grid grid-cols-2 gap-5 transition-all duration-700 delay-200 ${inView ? "opacity-100 translate-x-0" : "opacity-0 translate-x-8"}`}
          >
            {about.stats.map((stat) => (
              <StatCard key={stat.label} value={stat.value} label={stat.label} active={inView} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
