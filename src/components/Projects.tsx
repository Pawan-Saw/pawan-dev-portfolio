import React, { useState } from 'react';

const Projects: React.FC = () => {
  const projects = [
    {
      id: 0,
      title: "Medical Finder Web",
      description:
        "A modern, responsive medical finder platform that helps patients discover doctors, hospitals, and medical services with smooth navigation, animated statistics, and custom medical-themed styling.",
      image:
        "https://images.unsplash.com/photo-1586773860418-d37222d8fce3?auto=format&fit=crop&w=2340&q=80",
      technologies: ["React 18", "Tailwind CSS", "jQuery 3.7", "Vite", "PostCSS"],
      github: "https://github.com",
      live: "https://medical-finder.vercel.app",
      featured: true,
      category: "Healthcare Platform",
    },
    {
      id: 1,
      title: "GMIT Library",
      description: "A modern Library Management System (LMS) built with React, TypeScript, Vite, and Tailwind CSS. It includes separate portals for Students and Admins with protected routes and demo data.",
      image: "https://images.unsplash.com/photo-1519681393784-d120267933ba?q=80&w=2340&auto=format&fit=crop",
      technologies: ["React", "TypeScript", "Vite", "TailwindCSS", "Protected Routes"],
      github: "https://github.com",
      live: "https://gmit-library.vercel.app",
      featured: true,
      category: "Education SaaS",
    },
    {
      id: 2,
      title: "E-Commerce Platform",
      description: "A full-stack e-commerce solution with React, Node.js, and MongoDB. Features include user authentication, payment integration, and admin dashboard.",
      image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2340&q=80",
      technologies: ["React", "Node.js", "MongoDB", "Stripe", "JWT"],
      github: "https://github.com",
      live: "https://example.com",
      featured: true,
      category: "Commerce Suite",
    },
    {
      id: 3,
      title: "Task Management App",
      description: "A collaborative task management application with real-time updates, drag-and-drop functionality, and team collaboration features.",
      image: "https://images.unsplash.com/photo-1611224923853-80b023f02d71?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2339&q=80",
      technologies: ["Next.js", "TypeScript", "Socket.io", "PostgreSQL", "Tailwind"],
      github: "https://github.com",
      live: "https://example.com",
      featured: true,
      category: "Productivity Tool",
    },
    {
      id: 4,
      title: "Weather Dashboard",
      description: "A responsive weather application with location-based forecasts, interactive maps, and detailed weather analytics.",
      image: "https://images.unsplash.com/photo-1504608524841-42fe6f032b4b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2341&q=80",
      technologies: ["React", "OpenWeather API", "Chart.js", "Geolocation"],
      github: "https://github.com",
      live: "https://example.com",
      featured: false,
      category: "Data Visualization",
    },
    {
      id: 5,
      title: "Social Media Analytics",
      description: "A comprehensive analytics dashboard for social media metrics with data visualization and reporting features.",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2340&q=80",
      technologies: ["Python", "Django", "D3.js", "Redis", "Celery"],
      github: "https://github.com",
      live: "https://example.com",
      featured: false,
      category: "Analytics Dashboard",
    },
    {
      id: 6,
      title: "Mobile Banking App",
      description: "A secure mobile banking application with biometric authentication, transaction management, and real-time notifications.",
      image: "https://images.unsplash.com/photo-1563013544-824ae1b704d3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2340&q=80",
      technologies: ["React Native", "Node.js", "MongoDB", "Biometric Auth"],
      github: "https://github.com",
      live: "https://example.com",
      featured: true,
      category: "FinTech",
    },
    {
      id: 7,
      title: "AI Chatbot",
      description: "An intelligent chatbot powered by machine learning with natural language processing and context awareness.",
      image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2340&q=80",
      technologies: ["Python", "TensorFlow", "Flask", "NLTK", "OpenAI API"],
      github: "https://github.com",
      live: "https://example.com",
      featured: false,
      category: "AI / ML",
    },
    {
      id: 8,
      title: "Amazon_clone",
      description:
        "A responsive Amazon-inspired e-commerce clone with product listings, cart interactions, and a modern UI.",
      image:
        "https://images.unsplash.com/photo-1557825835-70d97c4aa06a?auto=format&fit=crop&w=2340&q=80",
      technologies: ["React", "TypeScript", "TailwindCSS", "Vite"],
      github: "https://github.com",
      live: "https://amazon-clone-mu-orpin.vercel.app",
      featured: true,
      category: "E-Commerce",
    }
  ];

  const [showAll, setShowAll] = useState(false);
  const visibleProjects = showAll ? projects : projects.slice(0, 4);

  return (
    <section
      id="projects"
      className="relative py-24 bg-[#0F0A1F] section-surface"
    >
      <div className="relative container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col items-center text-center mb-16 gap-4">
            <span className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-[#1A1333]/80 px-5 py-2 text-xs font-semibold text-[#E5E5F5] shadow-[0_10px_30px_rgba(0,0,0,0.6)]">
              <span
                className="h-2 w-2 rounded-full"
                style={{ backgroundImage: 'linear-gradient(135deg, #7B61FF, #00D4FF)' }}
              />
              Selected work
            </span>
            <h2
              className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold leading-tight text-white"
            >
              <span
                className="bg-clip-text text-transparent"
                style={{
                  backgroundImage:
                    'linear-gradient(135deg, #9F7AEA 0%, #7B61FF 35%, #00D4FF 100%)',
                }}
              >
                Projects
              </span>
            </h2>
            <p className="text-sm sm:text-base text-[#A0A0B0] max-w-3xl">
              A selection of recent work across full‑stack, backend, and modern web projects.
            </p>
          </div>

          <div>
            <h3 className="text-2xl font-semibold text-white mb-8 text-center">
              Latest Work
            </h3>
            <div className="grid gap-8 md:grid-cols-2">
              {visibleProjects.map((project) => (
                <div
                  key={project.id}
                  className="group relative rounded-3xl bg-[#1E1A3A] border border-white/8 shadow-[0_20px_50px_rgba(0,0,0,0.85)] transition-transform duration-300 ease-out hover:-translate-y-2 hover:scale-[1.02]"
                >
                  <div className="rounded-[26px] p-6 h-full flex flex-col gap-6">
                    <div className="relative overflow-hidden rounded-2xl">
                      <img
                        src={project.image}
                        alt={project.title}
                        className="w-full h-56 object-cover rounded-2xl transform group-hover:scale-110 transition-transform duration-500"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                        <div className="absolute bottom-4 left-4 right-4 flex gap-3">
                          <a
                            href={project.github}
                            className="flex-1 rounded-full bg-white/10 px-4 py-2 text-center text-xs font-semibold text-white backdrop-blur hover:bg-white/20 transition-colors duration-200"
                          >
                            View Code
                          </a>
                          <a
                            href={project.live}
                            className="flex-1 rounded-full bg-[#7B61FF] px-4 py-2 text-center text-xs font-semibold text-white hover:bg-[#6750ff] transition-colors duration-200"
                          >
                            Live Preview
                          </a>
                        </div>
                      </div>
                    </div>

                    <div className="flex flex-col gap-4">
                      <div className="flex items-center justify-between gap-3">
                        <div>
                            <p className="text-[0.65rem] uppercase tracking-[0.25em] text-[#A0A0B0] font-semibold">
                            {project.category}
                          </p>
                            <h4 className="mt-1 text-xl font-semibold text-white">
                              {project.title}
                            </h4>
                        </div>
                        <span className="px-3 py-1 rounded-full border border-[#7B61FF]/60 bg-[#1A1333] text-[0.65rem] font-medium text-[#E5E5F5] whitespace-nowrap">
                          {project.featured ? 'Featured' : 'Case study'}
                        </span>
                      </div>
                      <p className="text-[0.8rem] leading-relaxed text-[#A0A0B0]">
                        {project.description}
                      </p>
                      <div className="flex flex-wrap gap-2">
                        {project.technologies.slice(0, 4).map((tech, index) => (
                          <span
                            key={index}
                            className="chip"
                          >
                            {tech}
                          </span>
                        ))}
                        {project.technologies.length > 4 && (
                          <span className="px-3 py-1 bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 rounded-full text-xs font-medium border border-gray-200 dark:border-gray-700">
                            +{project.technologies.length - 4}
                          </span>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            {projects.length > 4 && (
              <div className="mt-12 flex justify-center">
                <button
                  onClick={() => setShowAll(!showAll)}
                  className="px-8 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-full font-semibold shadow-lg shadow-blue-500/30 hover:shadow-2xl hover:-translate-y-0.5 transition-all duration-300"
                >
                  {showAll ? 'Show Less' : 'More Projects'}
                </button>
              </div>
            )}
          </div>

          {/* Call to Action */}
          <div className="mt-16 text-center">
            <div className="bg-gradient-to-r from-blue-50 to-purple-50 dark:from-gray-800 dark:to-gray-900 rounded-2xl p-8">
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                Interested in working together?
              </h3>
              <p className="text-gray-600 dark:text-gray-300 mb-6">
                I'm always open to discussing new projects, creative ideas, or opportunities to be part of your vision.
              </p>
              <button
                onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                className="px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold rounded-full hover:shadow-lg hover:scale-105 transition-all duration-300"
              >
                Let's Talk
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
