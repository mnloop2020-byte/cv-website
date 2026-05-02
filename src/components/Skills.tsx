import { skills } from "../data/portfolio";

const categoryColors: Record<string, string> = {
  Frontend: "bg-indigo-50 text-indigo-700 border-indigo-100",
  "Tools & Workflow": "bg-violet-50 text-violet-700 border-violet-100",
  "Data & Analysis": "bg-emerald-50 text-emerald-700 border-emerald-100",
  "Currently Learning": "bg-amber-50 text-amber-700 border-amber-100",
};

const categoryIcons: Record<string, string> = {
  Frontend: "⚡",
  "Tools & Workflow": "🔧",
  "Data & Analysis": "📊",
  "Currently Learning": "🚀",
};

export default function Skills() {
  return (
    <section id="skills" className="py-24 bg-slate-50">
      <div className="max-w-6xl mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-16">
          <p className="text-sm font-semibold text-indigo-500 uppercase tracking-widest mb-3">
            What I Work With
          </p>
          <h2 className="text-4xl font-bold text-slate-900">Skills & Technologies</h2>
          <p className="text-slate-400 mt-4 max-w-xl mx-auto">
            A snapshot of the tools and technologies I use to build things.
          </p>
        </div>

        {/* Skills Grid */}
        {/* ← Replace skill categories and items in data/portfolio.ts → skills */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {skills.map((group) => {
            const colorClass = categoryColors[group.category] ?? "bg-slate-50 text-slate-700 border-slate-100";
            const icon = categoryIcons[group.category] ?? "💡";
            return (
              <div
                key={group.category}
                className="bg-white rounded-2xl border border-slate-100 p-6 shadow-sm hover:shadow-md transition-shadow duration-300 flex flex-col gap-4"
              >
                <div className="flex items-center gap-3">
                  <span className="text-2xl">{icon}</span>
                  <h3 className="font-semibold text-slate-800 text-sm">{group.category}</h3>
                </div>
                <div className="flex flex-wrap gap-2">
                  {group.items.map((item) => (
                    <span
                      key={item}
                      className={`text-xs font-medium px-3 py-1 rounded-full border ${colorClass}`}
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