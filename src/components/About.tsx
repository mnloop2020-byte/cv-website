import { about } from "../data/portfolio";

export default function About() {
  return (
    <section id="about" className="py-24 bg-white">
      <div className="max-w-6xl mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-16">
          <p className="text-sm font-semibold text-indigo-500 uppercase tracking-widest mb-3">
            About Me
          </p>
          <h2 className="text-4xl font-bold text-slate-900">Who I Am</h2>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Text */}
          <div className="space-y-6">
            {/* ← Replace summary text in data/portfolio.ts → about.summary */}
            <p className="text-lg text-slate-600 leading-relaxed">{about.summary}</p>
            {/* ← Replace bio text in data/portfolio.ts → about.bio */}
            <p className="text-base text-slate-500 leading-relaxed">{about.bio}</p>

            <div className="flex flex-wrap gap-3 pt-2">
              <a
                href="#contact"
                className="inline-flex items-center gap-2 bg-indigo-600 hover:bg-indigo-700 text-white text-sm font-semibold px-5 py-2.5 rounded-xl transition-colors"
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

          {/* Stats Grid */}
          <div className="grid grid-cols-2 gap-5">
            {/* ← Replace stats in data/portfolio.ts → about.stats */}
            {about.stats.map((stat) => (
              <div
                key={stat.label}
                className="group bg-slate-50 hover:bg-indigo-50 border border-slate-100 hover:border-indigo-100 rounded-2xl p-6 text-center transition-all duration-300"
              >
                <div className="text-3xl font-extrabold text-indigo-600 group-hover:scale-110 transition-transform duration-300">
                  {stat.value}
                </div>
                <div className="text-sm text-slate-500 mt-1 font-medium">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}