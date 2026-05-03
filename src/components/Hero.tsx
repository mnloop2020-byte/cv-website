import { personal } from "../data/portfolio";

export default function Hero() {
  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-slate-50 via-white to-indigo-50/40">
      <div className="absolute top-20 right-0 w-96 h-96 bg-indigo-100/50 rounded-full blur-3xl -translate-y-1/2 translate-x-1/3 pointer-events-none" />
      <div className="absolute bottom-20 left-0 w-80 h-80 bg-violet-100/40 rounded-full blur-3xl translate-y-1/2 -translate-x-1/3 pointer-events-none" />

      <div className="relative max-w-6xl mx-auto px-6 py-32 flex flex-col lg:flex-row items-center gap-16">
        <div className="flex-1 text-center lg:text-left space-y-6">
          <div className="inline-flex items-center gap-2 bg-indigo-50 border border-indigo-100 text-indigo-700 text-sm font-medium px-4 py-1.5 rounded-full">
            <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
            Available for opportunities
          </div>

          <h1 className="text-5xl lg:text-6xl xl:text-7xl font-extrabold text-slate-900 leading-tight tracking-tight">
            Hi, I'm{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-violet-600">
              {personal.name}
            </span>
          </h1>

          <p className="text-xl lg:text-2xl font-medium text-slate-500">{personal.title}</p>
          <p className="text-base lg:text-lg text-slate-400 max-w-xl mx-auto lg:mx-0 leading-relaxed">{personal.tagline}</p>

          <div className="flex flex-wrap gap-4 justify-center lg:justify-start pt-2">
            <a href="#projects"
              className="inline-flex items-center gap-2 bg-indigo-600 hover:bg-indigo-700 active:scale-95 text-white font-semibold px-6 py-3 rounded-xl shadow-lg shadow-indigo-200 transition-all duration-200">
              View Projects
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </a>
            <a href="/mohammed_najeeb_cv.pdf" download="Mohammed_Najeeb_CV.pdf"
              className="inline-flex items-center gap-2 bg-white hover:bg-slate-50 active:scale-95 text-slate-700 font-semibold px-6 py-3 rounded-xl border border-slate-200 shadow-sm transition-all duration-200">
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3M3 17V7a2 2 0 012-2h6l2 2h6a2 2 0 012 2v8a2 2 0 01-2 2H5a2 2 0 01-2-2z" />
              </svg>
              Download CV
            </a>
            <a href={`mailto:${personal.email}`}
              className="inline-flex items-center gap-2 bg-white hover:bg-slate-50 active:scale-95 text-slate-700 font-semibold px-6 py-3 rounded-xl border border-slate-200 shadow-sm transition-all duration-200">
              Contact Me
            </a>
          </div>

          <div className="flex items-center gap-4 justify-center lg:justify-start pt-2">
            <a href={personal.github} target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-slate-700 transition-colors">
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" />
              </svg>
            </a>
            <a href={personal.linkedin} target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-indigo-600 transition-colors">
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
              </svg>
            </a>
            <span className="text-slate-300">|</span>
            <span className="text-sm text-slate-400 flex items-center gap-1.5">
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
              {personal.location}
            </span>
          </div>
        </div>

        <div className="flex-shrink-0">
          <div className="relative">
            <div className="absolute -inset-3 bg-gradient-to-br from-indigo-400 to-violet-500 rounded-full opacity-20 blur-lg" />
            <div className="relative w-52 h-52 lg:w-64 lg:h-64 rounded-full border-4 border-white shadow-2xl overflow-hidden bg-slate-100">
              <img
                src="/src/assets/profile.jpg"
                alt={personal.name}
                className="w-full h-full object-cover object-top"
                onError={(e) => {
                  const img = e.target as HTMLImageElement;
                  img.src = "/profile.jpg";
                }}
              />
            </div>
          </div>
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-slate-300 animate-bounce">
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 9l-7 7-7-7" />
        </svg>
      </div>
    </section>
  );
}
