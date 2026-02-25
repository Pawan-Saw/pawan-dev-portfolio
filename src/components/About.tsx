import React, { useState, useEffect, useRef } from 'react';

const About: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);
  const [counts, setCounts] = useState({ experience: 0, projects: 0, satisfaction: 0 });

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          // Animate counters
          animateCounter('experience', 2, 1500);
          animateCounter('projects', 50, 2000);
          animateCounter('satisfaction', 100, 1500);
        }
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  const animateCounter = (key: 'experience' | 'projects' | 'satisfaction', target: number, duration: number) => {
    const start = 0;
    const increment = target / (duration / 16);
    let current = start;

    const timer = setInterval(() => {
      current += increment;
      if (current >= target) {
        setCounts(prev => ({ ...prev, [key]: target }));
        clearInterval(timer);
      } else {
        setCounts(prev => ({ ...prev, [key]: Math.floor(current) }));
      }
    }, 16);
  };

  return (
    <section 
      ref={sectionRef}
      id="about" 
      className="relative py-24 bg-gradient-to-br from-gray-50 via-white to-blue-50/30 dark:from-gray-950 dark:via-gray-900 dark:to-black overflow-hidden"
    >
      {/* Background decorations */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-blue-400/10 rounded-full blur-3xl -z-0"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-purple-400/10 rounded-full blur-3xl -z-0"></div>
      
      {/* Grid pattern overlay */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808008_1px,transparent_1px),linear-gradient(to_bottom,#80808008_1px,transparent_1px)] bg-[size:24px_24px] opacity-40 dark:opacity-20 -z-0"></div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-7xl mx-auto">
          <div className={`text-center mb-20 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <div className="inline-block mb-4">
              <span className="text-sm font-semibold text-blue-600 dark:text-blue-400 uppercase tracking-wider bg-blue-50 dark:bg-blue-950/50 px-4 py-2 rounded-full">
                About Me
              </span>
            </div>
            <h2 className="text-5xl lg:text-6xl font-bold text-gray-900 dark:text-white mb-6">
              About <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent animate-gradient">Me</span>
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto leading-relaxed">
              Get to know more about my journey, passion, and what drives me in the world of technology.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            {/* Left Side - Enhanced Content */}
            <div className={`space-y-8 transition-all duration-1000 delay-200 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'}`}>
              {/* Header Section */}
              <div className="space-y-4">
                <div className="inline-block">
                  <span className="text-sm font-semibold text-blue-600 dark:text-blue-400 uppercase tracking-wider bg-blue-50 dark:bg-blue-950/50 px-4 py-2 rounded-full">
                    Know More About Me
                  </span>
                </div>
                <h3 className="text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white leading-tight">
                  Passionate Developer &<br />
                  <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">Creative Problem Solver</span>
                </h3>
              </div>
              
              {/* Enhanced Content Cards */}
              <div className="space-y-4">
                <div className="group relative p-6 rounded-2xl bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm border border-gray-200/50 dark:border-gray-700/50 shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-1 overflow-hidden">
                  <div className="absolute top-0 right-0 w-32 h-32 bg-blue-400/10 rounded-full blur-2xl group-hover:bg-blue-400/20 transition-all duration-500"></div>
                  <div className="relative">
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-blue-600 rounded-xl flex items-center justify-center flex-shrink-0 shadow-md">
                        <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                        </svg>
                      </div>
                      <p className="text-base text-gray-700 dark:text-gray-300 leading-relaxed flex-1">
                        Hi there! I'm a passionate <span className="font-semibold text-blue-600 dark:text-blue-400">Computer Science Engineering</span> graduate 
                        with a deep love for creating innovative solutions and solving complex problems. My journey in technology 
                        began during my academic years, where I discovered the endless possibilities of software development.
                      </p>
                    </div>
                  </div>
                </div>
                
                <div className="group relative p-6 rounded-2xl bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm border border-gray-200/50 dark:border-gray-700/50 shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-1 overflow-hidden">
                  <div className="absolute top-0 right-0 w-32 h-32 bg-purple-400/10 rounded-full blur-2xl group-hover:bg-purple-400/20 transition-all duration-500"></div>
                  <div className="relative">
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-purple-600 rounded-xl flex items-center justify-center flex-shrink-0 shadow-md">
                        <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                        </svg>
                      </div>
                      <p className="text-base text-gray-700 dark:text-gray-300 leading-relaxed flex-1">
                        I specialize in full-stack development, with expertise in modern web technologies, mobile applications, 
                        and cloud computing. I believe in writing clean, efficient code and creating user experiences that 
                        make a real difference in people's lives.
                      </p>
                    </div>
                  </div>
                </div>
                
                <div className="group relative p-6 rounded-2xl bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm border border-gray-200/50 dark:border-gray-700/50 shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-1 overflow-hidden">
                  <div className="absolute top-0 right-0 w-32 h-32 bg-pink-400/10 rounded-full blur-2xl group-hover:bg-pink-400/20 transition-all duration-500"></div>
                  <div className="relative">
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 bg-gradient-to-br from-pink-500 to-pink-600 rounded-xl flex items-center justify-center flex-shrink-0 shadow-md">
                        <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                        </svg>
                      </div>
                      <p className="text-base text-gray-700 dark:text-gray-300 leading-relaxed flex-1">
                        When I'm not coding, you can find me exploring new technologies, contributing to open-source projects, 
                        or sharing knowledge with the developer community. I'm always eager to learn and grow in this 
                        ever-evolving field.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Enhanced Statistics Cards */}
              <div className={`grid grid-cols-2 gap-4 transition-all duration-1000 delay-400 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
                <div className="group relative overflow-hidden text-center p-5 bg-gradient-to-br from-blue-50 to-blue-100 dark:from-blue-950/50 dark:to-blue-900/30 rounded-xl border border-blue-200/50 dark:border-blue-800/50 shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                  <div className="text-3xl lg:text-4xl font-bold bg-gradient-to-r from-blue-600 to-blue-700 bg-clip-text text-transparent mb-1">
                    {counts.experience}+
                  </div>
                  <div className="text-sm text-gray-700 dark:text-gray-300 font-medium">Years Experience</div>
                </div>
                
                <div className="group relative overflow-hidden text-center p-5 bg-gradient-to-br from-purple-50 to-purple-100 dark:from-purple-950/50 dark:to-purple-900/30 rounded-xl border border-purple-200/50 dark:border-purple-800/50 shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                  <div className="text-3xl lg:text-4xl font-bold bg-gradient-to-r from-purple-600 to-purple-700 bg-clip-text text-transparent mb-1">
                    {counts.projects}+
                  </div>
                  <div className="text-sm text-gray-700 dark:text-gray-300 font-medium">Projects</div>
                </div>
                
                <div className="group relative overflow-hidden text-center p-5 bg-gradient-to-br from-green-50 to-green-100 dark:from-green-950/50 dark:to-green-900/30 rounded-xl border border-green-200/50 dark:border-green-800/50 shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                  <div className="text-3xl lg:text-4xl font-bold bg-gradient-to-r from-green-600 to-green-700 bg-clip-text text-transparent mb-1">
                    {counts.satisfaction}%
                  </div>
                  <div className="text-sm text-gray-700 dark:text-gray-300 font-medium">Satisfaction</div>
                </div>
                
                <div className="group relative overflow-hidden text-center p-5 bg-gradient-to-br from-orange-50 to-orange-100 dark:from-orange-950/50 dark:to-orange-900/30 rounded-xl border border-orange-200/50 dark:border-orange-800/50 shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                  <div className="text-3xl lg:text-4xl font-bold bg-gradient-to-r from-orange-600 to-orange-700 bg-clip-text text-transparent mb-1">
                    24/7
                  </div>
                  <div className="text-sm text-gray-700 dark:text-gray-300 font-medium">Learning</div>
                </div>
              </div>
            </div>

            {/* Right Side - Professional Image with Beautiful Frame */}
            <div className={`transition-all duration-1000 delay-300 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'}`}>
              <div className="relative">
                {/* Decorative Background Glow Effects */}
                <div className="absolute -top-8 -right-8 w-full h-full bg-gradient-to-br from-blue-500/20 via-purple-500/20 to-pink-500/20 rounded-3xl blur-3xl -z-10"></div>
                <div className="absolute -bottom-8 -left-8 w-3/4 h-3/4 bg-gradient-to-br from-purple-500/15 via-pink-500/15 to-orange-500/15 rounded-3xl blur-3xl -z-10"></div>
                
                {/* Professional Image Frame */}
                <div className="relative group">
                  {/* Outer Animated Border */}
                  <div className="absolute -inset-4 bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 rounded-3xl opacity-20 group-hover:opacity-40 transition-opacity duration-500 blur-sm animate-pulse-slow"></div>
                  
                  {/* Middle Frame Layer with Pattern */}
                  <div className="absolute -inset-2 bg-gradient-to-br from-white/95 to-gray-50/95 dark:from-gray-800/95 dark:to-gray-900/95 rounded-2xl shadow-2xl border border-gray-200/50 dark:border-gray-700/50"></div>
                  
                  {/* Inner Image Container */}
                  <div className="relative overflow-hidden rounded-2xl shadow-2xl border-4 border-white dark:border-gray-700 bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-800 dark:to-gray-900 p-4 transform group-hover:scale-[1.02] transition-all duration-500">
                    <div className="relative aspect-[3/4] overflow-hidden rounded-xl">
                      <img 
                        src="/Pawan.jpg" 
                        alt="Pawan Kumar - Professional Developer"
                        className="w-full h-full object-cover object-center transition-transform duration-700 group-hover:scale-110"
                        onError={() => {
                          console.error('Image failed to load: /Pawan.jpg');
                        }}
                      />
                      {/* Overlay Gradient */}
                      <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                      
                      {/* Shine Effect */}
                      <div className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-1000 bg-gradient-to-r from-transparent via-white/20 to-transparent"></div>
                    </div>
                  </div>
                  
                  {/* Decorative Corner Elements */}
                  <div className="absolute -top-4 -left-4 w-12 h-12 border-t-4 border-l-4 border-blue-500 rounded-tl-2xl opacity-70 group-hover:opacity-100 transition-opacity"></div>
                  <div className="absolute -top-4 -right-4 w-12 h-12 border-t-4 border-r-4 border-purple-500 rounded-tr-2xl opacity-70 group-hover:opacity-100 transition-opacity"></div>
                  <div className="absolute -bottom-4 -left-4 w-12 h-12 border-b-4 border-l-4 border-pink-500 rounded-bl-2xl opacity-70 group-hover:opacity-100 transition-opacity"></div>
                  <div className="absolute -bottom-4 -right-4 w-12 h-12 border-b-4 border-r-4 border-orange-500 rounded-br-2xl opacity-70 group-hover:opacity-100 transition-opacity"></div>
                  
                  {/* Floating Professional Badge */}
                  <div className="absolute -bottom-8 left-1/2 -translate-x-1/2 bg-white dark:bg-gray-800 rounded-xl shadow-2xl p-4 border-2 border-gray-200 dark:border-gray-700 transform rotate-[-3deg] group-hover:rotate-0 transition-transform duration-300">
                    <div className="flex items-center gap-3">
                      <div className="w-12 h-12 bg-gradient-to-br from-blue-500 via-purple-500 to-pink-500 rounded-lg flex items-center justify-center shadow-lg">
                        <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
                        </svg>
                      </div>
                      <div>
                        <div className="text-sm font-bold text-gray-900 dark:text-white">Professional</div>
                        <div className="text-xs text-gray-500 dark:text-gray-400">Developer</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* What I Do Section */}
          <div className={`mt-20 transition-all duration-1000 delay-500 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <div className="text-center mb-12">
              <div className="inline-block mb-4">
                <span className="text-xs font-semibold text-purple-600 dark:text-purple-400 uppercase tracking-wider bg-purple-50 dark:bg-purple-950/50 px-3 py-1.5 rounded-full">
                  Core Expertise
                </span>
              </div>
              <h3 className="text-3xl lg:text-4xl font-bold text-gray-900 dark:text-white mb-3">
                What I Do
              </h3>
              <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
                Delivering exceptional solutions across multiple domains
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {/* Service Card 1 */}
              <div className="group p-6 rounded-xl bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm border border-gray-200 dark:border-gray-700 shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-blue-600 rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                  </svg>
                </div>
                <h4 className="text-lg font-bold text-gray-900 dark:text-white mb-2 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                  Full Stack Development
                </h4>
                <p className="text-sm text-gray-600 dark:text-gray-300 leading-relaxed">
                  Building scalable web applications with modern frameworks
                </p>
              </div>

              {/* Service Card 2 */}
              <div className="group p-6 rounded-xl bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm border border-gray-200 dark:border-gray-700 shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-purple-600 rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
                  </svg>
                </div>
                <h4 className="text-lg font-bold text-gray-900 dark:text-white mb-2 group-hover:text-purple-600 dark:group-hover:text-purple-400 transition-colors">
                  Mobile Development
                </h4>
                <p className="text-sm text-gray-600 dark:text-gray-300 leading-relaxed">
                  Creating intuitive mobile apps for iOS and Android platforms
                </p>
              </div>

              {/* Service Card 3 */}
              <div className="group p-6 rounded-xl bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm border border-gray-200 dark:border-gray-700 shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                <div className="w-12 h-12 bg-gradient-to-br from-green-500 to-green-600 rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                  </svg>
                </div>
                <h4 className="text-lg font-bold text-gray-900 dark:text-white mb-2 group-hover:text-green-600 dark:group-hover:text-green-400 transition-colors">
                  Problem Solving
                </h4>
                <p className="text-sm text-gray-600 dark:text-gray-300 leading-relaxed">
                  Analyzing and solving complex technical challenges efficiently
                </p>
              </div>

              {/* Service Card 4 */}
              <div className="group p-6 rounded-xl bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm border border-gray-200 dark:border-gray-700 shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                <div className="w-12 h-12 bg-gradient-to-br from-orange-500 to-orange-600 rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                <h4 className="text-lg font-bold text-gray-900 dark:text-white mb-2 group-hover:text-orange-600 dark:group-hover:text-orange-400 transition-colors">
                  Innovation
                </h4>
                <p className="text-sm text-gray-600 dark:text-gray-300 leading-relaxed">
                  Implementing cutting-edge solutions with latest technologies
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
