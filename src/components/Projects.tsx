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
      className="relative py-24 bg-gradient-to-b from-gray-50 via-white to-gray-100 dark:from-gray-950 dark:via-gray-900 dark:to-black overflow-hidden"
    >
      <div className="absolute -top-40 right-0 w-96 h-96 bg-blue-500/20 blur-[160px] rounded-full pointer-events-none" />
      <div className="absolute -bottom-20 left-0 w-80 h-80 bg-purple-500/15 blur-[140px] rounded-full pointer-events-none" />
      <div className="relative container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col items-center text-center mb-16 gap-6">
            <span className="inline-flex items-center gap-2 border border-blue-100 dark:border-white/10 px-5 py-2 rounded-full bg-white/80 dark:bg-white/10 text-sm font-semibold text-blue-600 dark:text-blue-200 shadow-sm">
              <span className="h-2 w-2 rounded-full bg-blue-600 animate-pulse" />
              Curated case studies
            </span>
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white leading-tight">
              My <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Projects</span>
            </h2>
            <p className="text-lg lg:text-xl text-gray-600 dark:text-gray-300 max-w-3xl">
              A showcase of my recent work and projects that demonstrate my skills and passion for creating innovative solutions.
            </p>
          </div>

          <div>
            <h3 className="text-3xl font-bold text-gray-900 dark:text-white mb-12 text-center">Latest Work</h3>
            <div className="grid md:grid-cols-2 gap-10">
              {visibleProjects.map((project) => (
                <div
                  key={project.id}
                  className="group relative rounded-3xl bg-white/95 dark:bg-gray-900/80 p-1 shadow-xl shadow-blue-500/5 dark:shadow-blue-900/20 hover:shadow-2xl transition-all duration-300 hover:-translate-y-1"
                >
                  <div className="rounded-[26px] bg-gradient-to-br from-white to-gray-50 dark:from-gray-900 dark:to-gray-950 p-6 h-full flex flex-col gap-6">
                    <div className="relative overflow-hidden rounded-2xl">
                      <img
                        src={project.image}
                        alt={project.title}
                        className="w-full h-56 object-cover rounded-2xl transform group-hover:scale-105 transition-transform duration-500"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                        <div className="absolute bottom-4 left-4 right-4 flex gap-3">
                          <a
                            href={project.github}
                            className="flex-1 bg-white/20 backdrop-blur-md text-white px-4 py-2 rounded-full text-center text-sm font-semibold hover:bg-white/30 transition-colors duration-200"
                          >
                            View Code
                          </a>
                          <a
                            href={project.live}
                            className="flex-1 bg-blue-600 text-white px-4 py-2 rounded-full text-center text-sm font-semibold hover:bg-blue-700 transition-colors duration-200"
                          >
                            Live Preview
                          </a>
                        </div>
                      </div>
                    </div>

                    <div className="flex flex-col gap-4">
                      <div className="flex items-center justify-between gap-3">
                        <div>
                          <p className="text-xs uppercase tracking-[0.25em] text-blue-500 dark:text-blue-300 font-semibold">
                            {project.category}
                          </p>
                          <h4 className="text-2xl font-bold text-gray-900 dark:text-white mt-1">{project.title}</h4>
                        </div>
                        <span className="px-3 py-1 rounded-full bg-blue-50 text-blue-700 dark:bg-blue-900/40 dark:text-blue-200 text-xs font-semibold whitespace-nowrap">
                          {project.featured ? 'Featured' : 'Case Study'}
                        </span>
                      </div>
                      <p className="text-gray-600 dark:text-gray-300 leading-relaxed text-sm">{project.description}</p>
                      <div className="flex flex-wrap gap-2">
                        {project.technologies.slice(0, 4).map((tech, index) => (
                          <span
                            key={index}
                            className="px-3 py-1 bg-gradient-to-r from-blue-500/10 to-purple-500/10 text-blue-800 dark:text-blue-100 rounded-full text-xs font-medium border border-blue-500/10"
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
