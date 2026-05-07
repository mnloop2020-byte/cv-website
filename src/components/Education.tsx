import { education } from "../data/portfolio";
import ScrollReveal from "./ScrollReveal";

export default function Education() {
  const degrees = education.filter((e) => e.type === "education");
  const certs = education.filter((e) => e.type === "certification");

  return (
    <section id="education" className="py-24 bg-white">
      <div className="max-w-6xl mx-auto px-6">
        <ScrollReveal direction="up">
          <div className="text-center mb-16">
            <p className="text-sm font-semibold text-indigo-500 uppercase tracking-widest mb-3">Background</p>
            <h2 className="text-4xl font-bold text-slate-900">Education & Certifications</h2>
          </div>
        </ScrollReveal>

        <div className="grid lg:grid-cols-2 gap-12">
          <ScrollReveal direction="left" delay={100}>
            <div>
              <h3 className="flex items-center gap-2 text-sm font-semibold text-slate-400 uppercase tracking-widest mb-6">
                <span className="text-xl">🎓</span> Academic
              </h3>
              <div className="space-y-4">
                {degrees.map((item, i) => (
                  <ScrollReveal key={i} direction="up" delay={i * 80}>
                    <div className="bg-slate-50 hover:bg-indigo-50/40 border border-slate-100 hover:border-indigo-100 rounded-2xl p-6 transition-all duration-200 hover:-translate-y-0.5 hover:shadow-sm group">
                      <div className="mb-2">
                        <h4 className="font-bold text-slate-800 group-hover:text-indigo-700 transition-colors">{item.title}</h4>
                      </div>
                      <p className="text-sm font-medium text-indigo-500 mb-2">{item.institution}</p>
                      <p className="text-sm text-slate-500 leading-relaxed">{item.description}</p>
                    </div>
                  </ScrollReveal>
                ))}
              </div>
            </div>
          </ScrollReveal>

          <ScrollReveal direction="right" delay={150}>
            <div>
              <h3 className="flex items-center gap-2 text-sm font-semibold text-slate-400 uppercase tracking-widest mb-6">
                <span className="text-xl">🏅</span> Certifications
              </h3>
              <div className="space-y-4">
                {certs.map((item, i) => (
                  <ScrollReveal key={i} direction="up" delay={i * 80}>
                    <div className="bg-slate-50 hover:bg-indigo-50/40 border border-slate-100 hover:border-indigo-100 rounded-2xl p-6 transition-all duration-200 hover:-translate-y-0.5 hover:shadow-sm group">
                      <div className="mb-2">
                        <h4 className="font-bold text-slate-800 group-hover:text-indigo-700 transition-colors">{item.title}</h4>
                      </div>
                      <p className="text-sm font-medium text-indigo-500 mb-2">{item.institution}</p>
                      <p className="text-sm text-slate-500 leading-relaxed">{item.description}</p>
                    </div>
                  </ScrollReveal>
                ))}
              </div>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
