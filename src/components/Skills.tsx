import React from 'react';

const Skills: React.FC = () => {
  const skillBands = [
    {
      title: "Programming Core",
      descriptor: "Structured thinking & efficient problem solving",
      gradient: "from-sky-500 via-blue-600 to-indigo-600",
      percent: 90,
      stack: ["C", "C++", "Java", "Python"],
      badge: "Logic First",
    },
    {
      title: "UI Engineering",
      descriptor: "Responsive layouts, micro-interactions & accessibility",
      gradient: "from-rose-500 via-pink-500 to-purple-600",
      percent: 94,
      stack: ["HTML", "CSS", "Bootstrap", "Tailwind CSS", "jQuery"],
      badge: "Pixel Perfect",
    },
    {
      title: "Modern Frontend",
      descriptor: "Type-safe SPAs, server components & routing",
      gradient: "from-emerald-500 via-teal-500 to-cyan-500",
      percent: 86,
      stack: ["Next.js", "TypeScript"],
      badge: "Realtime Ready",
    },
    {
      title: "Backend & Data",
      descriptor: "API design, auth, persistent storage & deployments",
      gradient: "from-amber-500 via-orange-500 to-red-500",
      percent: 82,
      stack: ["Node.js", "MongoDB"],
      badge: "Scalable",
    },
  ];

  const skillHighlights = [
    {
      label: "Primary Stack",
      value: "Next.js · Node.js · MongoDB",
      detail: "Full-stack JavaScript with SSR + API routes",
    },
    {
      label: "Languages",
      value: "C++ · C · Java · Python",
      detail: "Competitive programming & DSA foundations",
    },
    {
      label: "Interface Layer",
      value: "HTML · CSS · Bootstrap · Tailwind · jQuery",
      detail: "Design systems, components & rapid prototyping",
    },
  ];

  const toolkit = [
    "C",
    "C++",
    "Java",
    "Python",
    "HTML",
    "CSS",
    "Bootstrap",
    "Tailwind CSS",
    "jQuery",
    "Next.js",
    "TypeScript",
    "Node.js",
    "MongoDB",
  ];

  const workflowPillars = [
    "Research → wireframe → build loop for every feature",
    "Reusable component libraries with Tailwind CSS & Next.js",
    "API-first thinking using Node.js servers & MongoDB",
    "Quality gates: code reviews, manual QA, performance passes",
  ];

  return (
    <section
      id="skills"
      className="relative py-24 bg-gradient-to-b from-gray-50 via-white to-gray-100 dark:from-gray-950 dark:via-gray-900 dark:to-black overflow-hidden"
    >
      <div className="absolute inset-y-0 left-10 w-72 bg-gradient-to-b from-blue-500/15 to-purple-500/10 blur-[160px] pointer-events-none" />
      <div className="absolute -right-10 bottom-0 w-64 h-64 bg-cyan-400/10 blur-[120px] rounded-full pointer-events-none" />

      <div className="relative container mx-auto px-4">
        <div className="max-w-6xl mx-auto space-y-12">
          <div className="grid gap-10 lg:grid-cols-[1.15fr_0.85fr]">
            <div className="rounded-3xl bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white p-10 shadow-2xl">
              <p className="text-sm uppercase tracking-[0.4em] text-blue-300 mb-4">Skill Operating System</p>
              <h2 className="text-4xl lg:text-5xl font-bold leading-tight mb-6">
                Crafting digital experiences with
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400">
                  {' '}
                  code & clarity
                </span>
              </h2>
              <p className="text-lg text-gray-300 mb-8">
                Every project I build relies on a focused set of languages, libraries, and workflows. Here’s the stack I’m
                obsessed with and the level of polish I bring to each layer.
              </p>
              <div className="flex flex-wrap gap-3">
                {["C++", "Next.js", "Tailwind CSS", "Node.js", "MongoDB"].map((chip) => (
                  <span
                    key={chip}
                    className="px-4 py-2 rounded-full bg-white/10 border border-white/10 text-sm tracking-wide"
                  >
                    {chip}
                  </span>
                ))}
              </div>
            </div>

            <div className="grid gap-6">
              {skillHighlights.map((highlight, index) => (
                <div
                  key={index}
                  className="rounded-2xl bg-white/80 dark:bg-gray-900/80 border border-white/60 dark:border-white/5 shadow-xl p-6 backdrop-blur"
                >
                  <p className="text-xs uppercase tracking-[0.4em] text-gray-500 dark:text-gray-400 mb-2">{highlight.label}</p>
                  <h3 className="text-2xl font-semibold text-gray-900 dark:text-white">{highlight.value}</h3>
                  <p className="text-sm text-gray-600 dark:text-gray-300 mt-2">{highlight.detail}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="grid gap-8 md:grid-cols-2">
            {skillBands.map((band, index) => (
              <div
                key={index}
                className="relative overflow-hidden rounded-3xl bg-white dark:bg-gray-900 border border-gray-100 dark:border-gray-800 p-8 shadow-xl"
              >
                <div className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-transparent via-white/60 to-transparent dark:from-transparent dark:via-white/10 dark:to-transparent" />
                <div className="flex items-center justify-between mb-6">
                  <div>
                    <p className="text-xs uppercase tracking-[0.4em] text-gray-400">{band.badge}</p>
                    <h3 className="text-2xl font-bold text-gray-900 dark:text-white">{band.title}</h3>
                    <p className="text-sm text-gray-600 dark:text-gray-300 mt-1">{band.descriptor}</p>
                  </div>
                  <div className="flex items-center justify-center w-20 h-20 rounded-2xl bg-gray-100 dark:bg-gray-800">
                    <div className="text-center">
                      <span className="text-3xl font-black text-gray-900 dark:text-white">{band.percent}</span>
                      <span className="text-sm font-semibold text-blue-500">%</span>
                    </div>
                  </div>
                </div>
                <div className={`rounded-2xl bg-gradient-to-br ${band.gradient} text-white p-5 shadow-inner`}>
                  <p className="text-sm uppercase tracking-[0.3em] text-white/80 mb-3">Stack</p>
                  <div className="flex flex-wrap gap-2">
                    {band.stack.map((item) => (
                      <span key={item} className="px-3 py-1 rounded-full bg-white/15 text-sm font-medium">
                        {item}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="grid gap-10 lg:grid-cols-[1.2fr_0.8fr]">
            <div className="rounded-3xl bg-white dark:bg-gray-900 border border-gray-100 dark:border-gray-800 p-8 shadow-xl">
              <div className="flex items-center justify-between mb-6">
                <h3 className="text-2xl font-semibold text-gray-900 dark:text-white">Toolbox At A Glance</h3>
                <span className="text-sm uppercase tracking-[0.4em] text-blue-500">Always Ready</span>
              </div>
              <div className="flex flex-wrap gap-3">
                {toolkit.map((tool) => (
                  <span
                    key={tool}
                    className="px-4 py-2 rounded-2xl bg-gradient-to-r from-gray-100 to-white dark:from-gray-800 dark:to-gray-900 text-sm font-medium text-gray-700 dark:text-gray-100 border border-gray-200 dark:border-gray-800 shadow-sm"
                  >
                    {tool}
                  </span>
                ))}
              </div>
            </div>

            <div className="rounded-3xl bg-gradient-to-br from-blue-600 via-purple-600 to-indigo-600 text-white p-8 shadow-2xl">
              <h3 className="text-2xl font-semibold mb-6">Workflow Rituals</h3>
              <div className="space-y-5">
                {workflowPillars.map((pillar, index) => (
                  <div key={pillar} className="flex gap-4">
                    <div className="flex h-10 w-10 items-center justify-center rounded-2xl bg-white/20 font-semibold">
                      0{index + 1}
                    </div>
                    <p className="text-sm leading-relaxed">{pillar}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;

