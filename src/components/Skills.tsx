import { useEffect, useRef, useState } from "react";
import { skills } from "../data/portfolio";

const categoryColors: Record<string, { card: string; badge: string; glow: string }> = {
  "AI & Automation": {
    card: "hover:border-violet-200 hover:bg-violet-50/30",
    badge: "bg-violet-50 text-violet-700 border-violet-100 hover:bg-violet-100 hover:border-violet-300 hover:shadow-sm hover:shadow-violet-100",
    glow: "group-hover:text-violet-600",
  },
  "Frontend": {
    card: "hover:border-indigo-200 hover:bg-indigo-50/30",
    badge: "bg-indigo-50 text-indigo-700 border-indigo-100 hover:bg-indigo-100 hover:border-indigo-300 hover:shadow-sm hover:shadow-indigo-100",
    glow: "group-hover:text-indigo-600",
  },
  "Backend": {
    card: "hover:border-blue-200 hover:bg-blue-50/30",
    badge: "bg-blue-50 text-blue-700 border-blue-100 hover:bg-blue-100 hover:border-blue-300 hover:shadow-sm hover:shadow-blue-100",
    glow: "group-hover:text-blue-600",
  },
  "Database": {
    card: "hover:border-cyan-200 hover:bg-cyan-50/30",
    badge: "bg-cyan-50 text-cyan-700 border-cyan-100 hover:bg-cyan-100 hover:border-cyan-300 hover:shadow-sm hover:shadow-cyan-100",
    glow: "group-hover:text-cyan-600",
  },
  "Tools & Workflow": {
    card: "hover:border-slate-300 hover:bg-slate-50/50",
    badge: "bg-slate-100 text-slate-700 border-slate-200 hover:bg-slate-200 hover:border-slate-400 hover:shadow-sm",
    glow: "group-hover:text-slate-700",
  },
  "Microsoft & Data": {
    card: "hover:border-green-200 hover:bg-green-50/30",
    badge: "bg-green-50 text-green-700 border-green-100 hover:bg-green-100 hover:border-green-300 hover:shadow-sm hover:shadow-green-100",
    glow: "group-hover:text-green-600",
  },
};

const categoryIcons: Record<string, string> = {
  "AI & Automation": "🤖",
  "Frontend": "⚡",
  "Backend": "🔩",
  "Database": "🗄️",
  "Tools & Workflow": "🔧",
  "Microsoft & Data": "📊",
};

function useInView(threshold = 0.1) {
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

export default function Skills() {
  const { ref, inView } = useInView(0.1);

  return (
    <section id="skills" className="py-24 bg-slate-50">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16">
          <p className="text-sm font-semibold text-indigo-500 uppercase tracking-widest mb-3">
            What I Work With
          </p>
          <h2 className="text-4xl font-bold text-slate-900">Skills & Technologies</h2>
          <p className="text-slate-400 mt-4 max-w-xl mx-auto">
            A snapshot of the tools and technologies I use to build things.
          </p>
        </div>

        <div ref={ref} className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {skills.map((group, i) => {
            const colors = categoryColors[group.category] ?? {
              card: "hover:border-slate-200",
              badge: "bg-slate-50 text-slate-700 border-slate-100 hover:bg-slate-100",
              glow: "group-hover:text-slate-600",
            };
            const icon = categoryIcons[group.category] ?? "💡";
            return (
              <div
                key={group.category}
                className={`group bg-white rounded-2xl border border-slate-100 p-6 shadow-sm hover:shadow-lg transition-all duration-300 flex flex-col gap-4 ${colors.card} ${inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}`}
                style={{ transitionDelay: `${i * 80}ms` }}
              >
                <div className="flex items-center gap-3">
                  <span className="text-2xl">{icon}</span>
                  <h3 className={`font-semibold text-slate-700 text-sm transition-colors duration-200 ${colors.glow}`}>
                    {group.category}
                  </h3>
                </div>
                <div className="flex flex-wrap gap-2">
                  {group.items.map((item) => (
                    <span
                      key={item}
                      className={`text-xs font-medium px-3 py-1 rounded-full border cursor-default transition-all duration-200 ${colors.badge}`}
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
