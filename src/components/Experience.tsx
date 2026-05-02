import { experience } from "../data/portfolio";

export default function Experience() {
  return (
    <section id="experience" className="py-24 bg-slate-50">
      <div className="max-w-6xl mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-16">
          <p className="text-sm font-semibold text-indigo-500 uppercase tracking-widest mb-3">
            My Path
          </p>
          <h2 className="text-4xl font-bold text-slate-900">Experience & Journey</h2>
          <p className="text-slate-400 mt-4 max-w-xl mx-auto">
            Where I've worked, what I've built, and where I'm heading.
          </p>
        </div>

        {/* Timeline */}
        {/* ← Replace experience entries in data/portfolio.ts → experience array */}
        <div className="relative max-w-3xl mx-auto">
          {/* Vertical line */}
          <div className="absolute left-6 top-0 bottom-0 w-px bg-slate-200 hidden sm:block" />

          <div className="flex flex-col gap-8">
            {experience.map((item, index) => (
              <div key={index} className="relative sm:pl-16">
                {/* Dot */}
                <div className="hidden sm:flex absolute left-0 top-6 w-12 h-12 rounded-full bg-white border-2 border-indigo-200 items-center justify-center shadow-sm z-10">
                  <div className="w-3 h-3 rounded-full bg-indigo-500" />
                </div>

                {/* Card */}
                <div className="bg-white rounded-2xl border border-slate-100 shadow-sm hover:shadow-md transition-shadow duration-300 p-6 space-y-4">
                  <div className="flex flex-wrap items-start justify-between gap-3">
                    <div>
                      <h3 className="text-base font-bold text-slate-800">{item.role}</h3>
                      <p className="text-sm font-medium text-indigo-600 mt-0.5">{item.company}</p>
                    </div>
                    <span className="text-xs font-semibold bg-indigo-50 text-indigo-600 border border-indigo-100 px-3 py-1 rounded-full whitespace-nowrap">
                      {item.period}
                    </span>
                  </div>

                  <p className="text-sm text-slate-500 leading-relaxed">{item.description}</p>

                  {/* Highlights */}
                  <ul className="space-y-1.5">
                    {item.highlights.map((h, i) => (
                      <li key={i} className="flex items-start gap-2 text-sm text-slate-600">
                        <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-indigo-400 flex-shrink-0" />
                        {h}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}