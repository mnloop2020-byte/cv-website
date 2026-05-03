import { skills } from "../data/portfolio";

const categoryColors: Record<string, string> = {
  "AI & Automation": "bg-violet-50 text-violet-700 border-violet-100",
  "Frontend": "bg-indigo-50 text-indigo-700 border-indigo-100",
  "Backend": "bg-blue-50 text-blue-700 border-blue-100",
  "Database": "bg-cyan-50 text-cyan-700 border-cyan-100",
  "Tools & Workflow": "bg-slate-100 text-slate-700 border-slate-200",
  "Microsoft & Data": "bg-green-50 text-green-700 border-green-100",
};

const categoryIcons: Record<string, string> = {
  "AI & Automation": "🤖",
  "Frontend": "⚡",
  "Backend": "🔩",
  "Database": "🗄️",
  "Tools & Workflow": "🔧",
  "Microsoft & Data": "📊",
};

export default function Skills() {
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

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {skills.map((group) => {
            const colorClass = categoryColors[group.category] ?? "bg-slate-50 text-slate-700 border-slate-100";
            const icon = categoryIcons[group.category] ?? "💡";
            return (
              <div key={group.category}
                className="bg-white rounded-2xl border border-slate-100 p-6 shadow-sm hover:shadow-md transition-shadow duration-300 flex flex-col gap-4">
                <div className="flex items-center gap-3">
                  <span className="text-2xl">{icon}</span>
                  <h3 className="font-semibold text-slate-800 text-sm">{group.category}</h3>
                </div>
                <div className="flex flex-wrap gap-2">
                  {group.items.map((item) => (
                    <span key={item} className={`text-xs font-medium px-3 py-1 rounded-full border ${colorClass}`}>
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
