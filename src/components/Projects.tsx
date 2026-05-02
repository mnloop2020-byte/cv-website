import { useState } from "react";
import { projects, type ProjectCategory } from "../data/portfolio";

const categories: ("All" | ProjectCategory)[] = ["All", "Web", "GitHub", "Dashboard", "Excel"];

const categoryColors: Record<ProjectCategory, string> = {
  Web: "bg-blue-50 text-blue-700 border-blue-100",
  GitHub: "bg-slate-100 text-slate-700 border-slate-200",
  Dashboard: "bg-emerald-50 text-emerald-700 border-emerald-100",
  Excel: "bg-green-50 text-green-700 border-green-100",
};

const categoryDot: Record<ProjectCategory, string> = {
  Web: "bg-blue-400",
  GitHub: "bg-slate-400",
  Dashboard: "bg-emerald-400",
  Excel: "bg-green-500",
};

function ExternalLinkIcon() {
  return (
    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
    </svg>
  );
}

export default function Projects() {
  const [active, setActive] = useState<"All" | ProjectCategory>("All");

  const filtered = active === "All" ? projects : projects.filter((p) => p.category === active);

  return (
    <section id="projects" className="py-24 bg-white">
      <div className="max-w-6xl mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-12">
          <p className="text-sm font-semibold text-indigo-500 uppercase tracking-widest mb-3">
            My Work
          </p>
          <h2 className="text-4xl font-bold text-slate-900">Projects</h2>
          <p className="text-slate-400 mt-4 max-w-xl mx-auto">
            A selection of projects across web development, data analysis, and open source.
          </p>
        </div>

        {/* Filter Tabs */}
        <div className="flex flex-wrap gap-2 justify-center mb-12">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActive(cat)}
              className={`text-sm font-medium px-4 py-2 rounded-full border transition-all duration-200 ${
                active === cat
                  ? "bg-indigo-600 text-white border-indigo-600 shadow-md shadow-indigo-200"
                  : "bg-white text-slate-500 border-slate-200 hover:border-indigo-300 hover:text-indigo-600"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        {/* ← Replace project data in data/portfolio.ts → projects array */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filtered.map((project) => (
            <article
              key={project.id}
              className={`group relative bg-white rounded-2xl border border-slate-100 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 flex flex-col overflow-hidden ${
                project.featured ? "ring-1 ring-indigo-100" : ""
              }`}
            >
              {/* Featured badge */}
              {project.featured && (
                <div className="absolute top-4 right-4 z-10 bg-indigo-600 text-white text-xs font-semibold px-2.5 py-1 rounded-full">
                  Featured
                </div>
              )}

              {/* Card top color strip */}
              <div
                className={`h-1.5 w-full ${
                  project.category === "Web"
                    ? "bg-gradient-to-r from-blue-400 to-indigo-500"
                    : project.category === "GitHub"
                    ? "bg-gradient-to-r from-slate-400 to-slate-600"
                    : project.category === "Dashboard"
                    ? "bg-gradient-to-r from-emerald-400 to-teal-500"
                    : "bg-gradient-to-r from-green-400 to-emerald-500"
                }`}
              />

              <div className="p-6 flex flex-col flex-1 gap-4">
                {/* Category badge */}
                <div className="flex items-center gap-2">
                  <span
                    className={`inline-flex items-center gap-1.5 text-xs font-semibold px-2.5 py-1 rounded-full border ${categoryColors[project.category]}`}
                  >
                    <span className={`w-1.5 h-1.5 rounded-full ${categoryDot[project.category]}`} />
                    {project.category}
                  </span>
                </div>

                {/* Title */}
                <h3 className="text-base font-bold text-slate-800 group-hover:text-indigo-600 transition-colors leading-snug">
                  {project.title}
                </h3>

                {/* Description */}
                <p className="text-sm text-slate-500 leading-relaxed flex-1">
                  {project.description}
                </p>

                {/* Tools */}
                <div className="flex flex-wrap gap-1.5">
                  {project.tools.map((tool) => (
                    <span
                      key={tool}
                      className="text-xs font-medium bg-slate-50 border border-slate-100 text-slate-600 px-2.5 py-1 rounded-md"
                    >
                      {tool}
                    </span>
                  ))}
                </div>

                {/* Link */}
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-sm font-semibold text-indigo-600 hover:text-indigo-800 transition-colors mt-auto pt-2 border-t border-slate-50 group-hover:border-indigo-50"
                >
                  {project.category === "GitHub" ? "View on GitHub" : "View Project"}
                  <ExternalLinkIcon />
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}