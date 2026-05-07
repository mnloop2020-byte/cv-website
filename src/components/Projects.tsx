import { useState } from "react";
import { projects, type ProjectCategory, type Project } from "../data/portfolio";

const categories: ("All" | ProjectCategory)[] = ["All", "Web", "GitHub"];

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
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
        d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
    </svg>
  );
}

function GitHubIcon() {
  return (
    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
      <path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
    </svg>
  );
}

function DownloadIcon() {
  return (
    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
        d="M12 10v6m0 0l-3-3m3 3l3-3M3 17V7a2 2 0 012-2h6l2 2h6a2 2 0 012 2v8a2 2 0 01-2 2H5a2 2 0 01-2-2z" />
    </svg>
  );
}

function getPreviewImage(project: Project): string {
  if (project.linkType === "live" && project.liveUrl) {
    return `https://s.wordpress.com/mshots/v1/${encodeURIComponent(project.liveUrl)}?w=600&h=400`;
  }
  const repoPath = project.githubUrl.replace("https://github.com/", "");
  return `https://opengraph.githubassets.com/1/${repoPath}`;
}

export default function Projects() {
  const [active, setActive] = useState<"All" | ProjectCategory>("All");
  const filtered: Project[] = active === "All" ? projects : projects.filter((p) => p.category === active);

  return (
    <section id="projects" className="py-24 bg-white">
      <div className="max-w-6xl mx-auto px-6">

        <div className="text-center mb-12">
          <p className="text-sm font-semibold text-indigo-500 uppercase tracking-widest mb-3">My Work</p>
          <h2 className="text-4xl font-bold text-slate-900">Projects</h2>
          <p className="text-slate-400 mt-4 max-w-xl mx-auto">
            A selection of projects across AI automation, web development, and open source.
          </p>
          <div className="mt-6 flex items-center justify-center gap-3">
            <a
              href="/cv-website/mohammed_najeeb_cv.pdf"
              download="Mohammed_Najeeb_CV.pdf"
              className="inline-flex items-center gap-2 px-5 py-2.5 bg-indigo-600 text-white text-sm font-semibold rounded-full shadow-md shadow-indigo-200 hover:bg-indigo-700 active:scale-95 transition-all duration-200"
            >
              <DownloadIcon />
              Download CV
            </a>
            <a
              href="/cv-website/mohammed_najeeb_cv.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-5 py-2.5 bg-white border border-slate-200 text-slate-700 text-sm font-semibold rounded-full hover:bg-slate-50 active:scale-95 transition-all duration-200"
            >
              View CV
            </a>
          </div>
        </div>

        <div className="flex flex-wrap gap-2 justify-center mb-12">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActive(cat)}
              className={`text-sm font-medium px-4 py-2 rounded-full border transition-all duration-200 ${active === cat
                ? "bg-indigo-600 text-white border-indigo-600 shadow-md shadow-indigo-200"
                : "bg-white text-slate-500 border-slate-200 hover:border-indigo-300 hover:text-indigo-600"
                }`}
            >
              {cat}
            </button>
          ))}
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filtered.map((project) => (
            <article
              key={project.id}
              className={`group relative bg-white rounded-2xl border border-slate-100 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 flex flex-col overflow-hidden ${project.featured ? "ring-1 ring-indigo-100" : ""
                }`}
            >
              {project.featured && (
                <div className="absolute top-4 right-4 z-10 bg-indigo-600 text-white text-xs font-semibold px-2.5 py-1 rounded-full">
                  Featured
                </div>
              )}

              <div className="w-full h-44 overflow-hidden bg-slate-100">
                <img
                  src={getPreviewImage(project)}
                  alt={project.title}
                  className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-500"
                  loading="lazy"
                  onError={(e) => {
                    (e.currentTarget as HTMLImageElement).style.display = "none";
                  }}
                />
              </div>

              <div className={`h-1.5 w-full ${project.category === "Web"
                ? "bg-gradient-to-r from-blue-400 to-indigo-500"
                : "bg-gradient-to-r from-slate-400 to-slate-600"
                }`} />

              <div className="p-6 flex flex-col flex-1 gap-4">
                <div className="flex items-center gap-2">
                  <span className={`inline-flex items-center gap-1.5 text-xs font-semibold px-2.5 py-1 rounded-full border ${categoryColors[project.category]}`}>
                    <span className={`w-1.5 h-1.5 rounded-full ${categoryDot[project.category]}`} />
                    {project.category}
                  </span>
                </div>

                <h3 className="text-base font-bold text-slate-800 group-hover:text-indigo-600 transition-colors leading-snug">
                  {project.title}
                </h3>

                <p className="text-sm text-slate-500 leading-relaxed flex-1">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-1.5">
                  {project.tools.map((tool) => (
                    <span key={tool} className="text-xs font-medium bg-slate-50 border border-slate-100 text-slate-600 px-2.5 py-1 rounded-md">
                      {tool}
                    </span>
                  ))}
                </div>

                <div className="flex flex-col gap-2 mt-auto pt-2 border-t border-slate-50 group-hover:border-indigo-50">
                  <div className="flex items-center gap-3">
                    {project.linkType === "live" ? (
                      <a
                        href={project.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 text-sm font-semibold text-indigo-600 hover:text-indigo-800 transition-colors"
                      >
                        Dashboard <ExternalLinkIcon />
                      </a>
                    ) : (
                      <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 text-sm font-semibold text-slate-700 hover:text-slate-900 transition-colors"
                      >
                        View on GitHub <GitHubIcon />
                      </a>
                    )}
                    {project.linkType === "live" && project.githubUrl && (
                      <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="ml-auto text-slate-400 hover:text-slate-700 transition-colors"
                        title="Source code"
                      >
                        <GitHubIcon />
                      </a>
                    )}
                  </div>
                  {project.customerUrl && (
                    <a
                      href={project.customerUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 text-sm font-semibold text-emerald-600 hover:text-emerald-800 transition-colors"
                    >
                      Customer Page <ExternalLinkIcon />
                    </a>
                  )}
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}