import { education } from "../data/portfolio";

export default function Education() {
  const degrees = education.filter((e) => e.type === "education");
  const certs = education.filter((e) => e.type === "certification");

  return (
    <section id="education" className="py-24 bg-white">
      <div className="max-w-6xl mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-16">
          <p className="text-sm font-semibold text-indigo-500 uppercase tracking-widest mb-3">
            Background
          </p>
          <h2 className="text-4xl font-bold text-slate-900">Education & Certifications</h2>
        </div>

        {/* ← Replace entries in data/portfolio.ts → education array */}
        <div className="grid lg:grid-cols-2 gap-12">
          {/* Education */}
          <div>
            <h3 className="flex items-center gap-2 text-sm font-semibold text-slate-400 uppercase tracking-widest mb-6">
              <span className="text-xl">🎓</span> Academic
            </h3>
            <div className="space-y-4">
              {degrees.map((item, i) => (
                <div
                  key={i}
                  className="bg-slate-50 hover:bg-indigo-50/40 border border-slate-100 hover:border-indigo-100 rounded-2xl p-6 transition-all duration-200 group"
                >
                  <div className="flex justify-between items-start gap-3 mb-2">
                    <h4 className="font-bold text-slate-800 group-hover:text-indigo-700 transition-colors">
                      {item.title}
                    </h4>
                    <span className="text-xs font-semibold text-slate-400 whitespace-nowrap">
                      {item.period}
                    </span>
                  </div>
                  <p className="text-sm font-medium text-indigo-500 mb-2">{item.institution}</p>
                  <p className="text-sm text-slate-500 leading-relaxed">{item.description}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Certifications */}
          <div>
            <h3 className="flex items-center gap-2 text-sm font-semibold text-slate-400 uppercase tracking-widest mb-6">
              <span className="text-xl">🏅</span> Certifications
            </h3>
            <div className="space-y-4">
              {certs.map((item, i) => (
                <div
                  key={i}
                  className="bg-slate-50 hover:bg-indigo-50/40 border border-slate-100 hover:border-indigo-100 rounded-2xl p-6 transition-all duration-200 group"
                >
                  <div className="flex justify-between items-start gap-3 mb-2">
                    <h4 className="font-bold text-slate-800 group-hover:text-indigo-700 transition-colors">
                      {item.title}
                    </h4>
                    <span className="text-xs font-semibold bg-indigo-50 text-indigo-600 border border-indigo-100 px-2.5 py-1 rounded-full whitespace-nowrap">
                      {item.period}
                    </span>
                  </div>
                  <p className="text-sm font-medium text-indigo-500 mb-2">{item.institution}</p>
                  <p className="text-sm text-slate-500 leading-relaxed">{item.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}