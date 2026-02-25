import React, { useState, useEffect } from 'react';

const Hero: React.FC = () => {
  const [imageError, setImageError] = useState(false);
  const [imageSrc, setImageSrc] = useState('/Pwn.jpg');
  const [displayText, setDisplayText] = useState('');
  const [showCursor, setShowCursor] = useState(true);
  const [mounted, setMounted] = useState(false);

  const fullText = 'Pawan Kumar';
  const roles = ['Full Stack Developer', 'Problem Solver', 'Tech Enthusiast', 'Creative Thinker'];
  const [currentRole, setCurrentRole] = useState(0);
  const [displayRole, setDisplayRole] = useState('');

  // Try multiple image paths - check common variations
  const imagePaths = [
    '/Pwn.jpg',
    '/Pwn.png',
    '/Pwn.jpeg',
    '/Pwn.JPG',
    '/Pwn.PNG',
    '/pwn.jpg',
    '/pwn.png',
    '/pawan.jpg', 
    '/pawan.png', 
    '/pawan.jpeg', 
    '/pawan.JPG',
    '/pawan.PNG',
    '/Pawan.jpg',
    '/Pawan.png',
    '/profile.jpg', 
    '/profile.png',
    '/profile.jpeg',
    '/Profile.jpg'
  ];
  const [currentPathIndex, setCurrentPathIndex] = useState(0);

  const scrollToContact = () => {
    const element = document.getElementById('contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  // Try next image path if current one fails
  const handleImageError = () => {
    if (currentPathIndex < imagePaths.length - 1) {
      const nextIndex = currentPathIndex + 1;
      setCurrentPathIndex(nextIndex);
      setImageSrc(imagePaths[nextIndex]);
    } else {
      setImageError(true);
    }
  };

  // Typing animation for name
  useEffect(() => {
    setMounted(true);
    let index = 0;
    const typeInterval = setInterval(() => {
      if (index < fullText.length) {
        setDisplayText(fullText.slice(0, index + 1));
        index++;
      } else {
        clearInterval(typeInterval);
        // Start role animation after name is typed
        setTimeout(() => {
          let roleIndex = 0;
          const roleText = roles[currentRole];
          setDisplayRole('');
          const roleInterval = setInterval(() => {
            if (roleIndex < roleText.length) {
              setDisplayRole(roleText.slice(0, roleIndex + 1));
              roleIndex++;
            } else {
              clearInterval(roleInterval);
              // Wait then move to next role
              setTimeout(() => {
                setCurrentRole((prev) => (prev + 1) % roles.length);
              }, 2000);
            }
          }, 100);
        }, 500);
      }
    }, 150);

    return () => clearInterval(typeInterval);
  }, []);

  // Role rotation animation
  useEffect(() => {
    if (!mounted) return;
    let roleIndex = 0;
    const roleText = roles[currentRole];
    setDisplayRole('');

    const roleInterval = setInterval(() => {
      if (roleIndex < roleText.length) {
        setDisplayRole(roleText.slice(0, roleIndex + 1));
        roleIndex++;
      } else {
        clearInterval(roleInterval);
        setTimeout(() => {
          setCurrentRole((prev) => (prev + 1) % roles.length);
        }, 2500);
      }
    }, 100);

    return () => clearInterval(roleInterval);
  }, [currentRole, mounted]);

  // Cursor blinking animation
  useEffect(() => {
    const cursorInterval = setInterval(() => {
      setShowCursor((prev) => !prev);
    }, 530);
    return () => clearInterval(cursorInterval);
  }, []);

  useEffect(() => {
    // Reset to first image path on mount
    setImageSrc('/Pwn.jpg');
    setCurrentPathIndex(0);
    setImageError(false);
  }, []);

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 via-white to-purple-50 dark:from-gray-900 dark:via-gray-950 dark:to-black pt-20 overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 w-72 h-72 bg-blue-400 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob"></div>
        <div className="absolute top-40 right-10 w-72 h-72 bg-purple-400 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob animation-delay-2000"></div>
        <div className="absolute -bottom-8 left-1/2 w-72 h-72 bg-pink-400 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob animation-delay-4000"></div>
      </div>

      {/* Grid Pattern Overlay */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px] opacity-40 dark:opacity-20"></div>

      <div className="container mx-auto px-4 py-20 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-8 animate-fade-in-up">
            <div className="space-y-4">
              <h1 className="text-5xl lg:text-7xl font-bold text-gray-900 dark:text-white leading-tight">
                Hi, I'm{' '}
                <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent animate-gradient">
                  {displayText}
                  <span className={showCursor ? 'opacity-100' : 'opacity-0'}>|</span>
                </span>
              </h1>
              <div className="text-2xl lg:text-3xl text-gray-600 dark:text-gray-300 min-h-[2.5rem]">
                <span className="text-blue-600 dark:text-blue-400 font-semibold">
                  {displayRole || 'Full Stack Developer'}
                  <span className={showCursor && displayRole ? 'opacity-100' : 'opacity-0'}>|</span>
                </span>
              </div>
            </div>
            
            <p className="text-xl text-gray-600 dark:text-gray-300 leading-relaxed max-w-2xl animate-fade-in-up-delay">
              I'm a passionate <span className="font-semibold text-blue-600 dark:text-blue-400">Computer Science Engineering</span> graduate 
              with expertise in creating beautiful, functional, and user-centered digital experiences. 
              I love turning complex problems into simple, elegant solutions.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 animate-fade-in-up-delay-2">
              <button
                onClick={scrollToContact}
                className="group relative px-8 py-4 bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 text-white font-semibold rounded-full hover:shadow-2xl hover:shadow-purple-500/50 hover:scale-105 transition-all duration-300 overflow-hidden"
              >
                <span className="relative z-10 flex items-center gap-2">
                  Get In Touch
                  <svg className="w-5 h-5 transform group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                  </svg>
                </span>
                <div className="absolute inset-0 bg-gradient-to-r from-pink-600 via-purple-600 to-blue-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </button>
              <button
                onClick={() => {
                  const element = document.getElementById('projects');
                  if (element) {
                    element.scrollIntoView({ behavior: 'smooth', block: 'start' });
                  }
                }}
                className="group px-8 py-4 border-2 border-gray-300 dark:border-gray-700 text-gray-700 dark:text-gray-200 font-semibold rounded-full hover:border-blue-600 dark:hover:border-blue-500 hover:text-blue-600 dark:hover:text-blue-400 hover:bg-blue-50 dark:hover:bg-blue-950/20 transition-all duration-300 flex items-center gap-2"
              >
                View My Work
                <svg className="w-5 h-5 transform group-hover:translate-y-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
            </div>

            {/* Social Links */}
            <div className="flex space-x-6 animate-fade-in-up-delay-2">
              <a 
                href="https://github.com/Pawan-Saw" 
                target="_blank"
                rel="noopener noreferrer"
                className="group relative w-12 h-12 rounded-full bg-white dark:bg-gray-800 flex items-center justify-center text-gray-600 dark:text-gray-400 hover:text-white hover:bg-gray-900 dark:hover:bg-white hover:scale-110 transition-all duration-300 shadow-md hover:shadow-xl"
                aria-label="GitHub Profile"
              >
                <svg className="w-6 h-6 transition-transform group-hover:scale-110" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                </svg>
              </a>
              <a 
                href="https://www.linkedin.com/in/pawan-kumar-21a794310" 
                target="_blank"
                rel="noopener noreferrer"
                className="group relative w-12 h-12 rounded-full bg-white dark:bg-gray-800 flex items-center justify-center text-gray-600 dark:text-gray-400 hover:text-white hover:bg-blue-600 dark:hover:bg-blue-500 hover:scale-110 transition-all duration-300 shadow-md hover:shadow-xl"
                aria-label="LinkedIn Profile"
              >
                <svg className="w-6 h-6 transition-transform group-hover:scale-110" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                </svg>
              </a>
              <a 
                href="mailto:pksaw7717@gmail.com" 
                className="group relative w-12 h-12 rounded-full bg-white dark:bg-gray-800 flex items-center justify-center text-gray-600 dark:text-gray-400 hover:text-white hover:bg-gradient-to-r hover:from-red-500 hover:to-pink-500 hover:scale-110 transition-all duration-300 shadow-md hover:shadow-xl"
                aria-label="Send Email"
              >
                <svg className="w-6 h-6 transition-transform group-hover:scale-110" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M24 5.457v13.909c0 .904-.732 1.636-1.636 1.636h-3.819V11.73L12 16.64l-6.545-4.91v9.273H1.636A1.636 1.636 0 0 1 0 19.366V5.457c0-.904.732-1.636 1.636-1.636h3.819l6.545 4.91 6.545-4.91h3.819c.904 0 1.636.732 1.636 1.636z"/>
                </svg>
              </a>
            </div>
          </div>

          {/* Right Content - Profile Image */}
          <div className="flex justify-center lg:justify-end items-center animate-fade-in-right">
            <div className="relative w-full max-w-[450px] lg:max-w-[550px] h-[500px] lg:h-[650px]">
              {/* Animated Shadow/Glow effect behind image */}
              <div className="absolute inset-0 bg-gradient-to-br from-blue-500/30 via-purple-500/30 to-pink-500/30 blur-3xl -z-10 scale-110 dark:from-blue-500/20 dark:via-purple-500/20 dark:to-pink-500/20 animate-pulse-slow"></div>
              <div className="absolute inset-0 bg-gradient-to-br from-purple-500/20 via-pink-500/20 to-blue-500/20 blur-3xl -z-10 scale-125 dark:from-purple-500/15 dark:via-pink-500/15 dark:to-blue-500/15 animate-pulse-slow-delay"></div>
              
              {/* Profile Image Container */}
              <div className="relative w-full h-full rounded-3xl overflow-hidden shadow-2xl ring-2 ring-white/10 dark:ring-white/5 bg-gradient-to-br from-yellow-50 to-orange-50 dark:from-gray-900 dark:to-black transform hover:scale-[1.02] transition-transform duration-500">
                {/* Profile Image - Always show if image exists */}
                {!imageError ? (
                  <img 
                    src={imageSrc}
                    alt="Pawan Kumar - Full Stack Developer"
                    className="w-full h-full object-cover object-center transition-all duration-500"
                    style={{
                      filter: 'contrast(1.08) brightness(0.98) saturate(1.02)',
                      objectPosition: 'center center',
                    }}
                    onError={() => {
                      console.log('Image failed to load, trying next path:', imageSrc);
                      handleImageError();
                    }}
                    onLoad={() => {
                      console.log('✅ Image loaded successfully:', imageSrc);
                      setImageError(false);
                    }}
                    loading="eager"
                    key={imageSrc}
                  />
                ) : (
                  <div className="w-full h-full flex flex-col items-center justify-center p-8 text-center">
                    <div className="w-24 h-24 rounded-full bg-gradient-to-br from-blue-400 to-purple-400 flex items-center justify-center mb-4">
                      <svg className="w-12 h-12 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                      </svg>
                    </div>
                    <p className="text-gray-600 dark:text-gray-400 text-sm">
                      Please add your image as <br />
                      <span className="font-mono text-xs bg-gray-200 dark:bg-gray-800 px-2 py-1 rounded mt-2 inline-block">
                        /public/pwn.jpg
                      </span>
                    </p>
                  </div>
                )}
                
                {/* Subtle Lighting Effect - Left side highlight (complements warm yellow-orange background) */}
                <div className="absolute inset-0 bg-gradient-to-r from-yellow-300/20 via-amber-200/10 via-transparent to-transparent pointer-events-none dark:from-yellow-400/15 dark:via-amber-300/8" style={{ display: imageError ? 'none' : 'block' }}></div>
                
                {/* Right side subtle shadow overlay */}
                <div className="absolute inset-0 bg-gradient-to-l from-black/30 via-black/15 via-transparent to-transparent pointer-events-none dark:from-black/50 dark:via-black/25" style={{ display: imageError ? 'none' : 'block' }}></div>
                
                {/* Top subtle fade */}
                <div className="absolute top-0 left-0 right-0 h-32 bg-gradient-to-b from-transparent via-transparent to-transparent pointer-events-none" style={{ display: imageError ? 'none' : 'block' }}></div>
                
                {/* Bottom fade for seamless blend with page background */}
                <div className="absolute bottom-0 left-0 right-0 h-56 bg-gradient-to-t from-black/40 via-black/15 to-transparent pointer-events-none dark:from-black/60 dark:via-black/25" style={{ display: imageError ? 'none' : 'block' }}></div>
              </div>
              
              {/* Floating Elements */}
              <div className="absolute -top-6 -right-6 w-20 h-20 bg-gradient-to-br from-yellow-400 to-orange-400 dark:from-yellow-500 dark:to-orange-500 rounded-full flex items-center justify-center shadow-2xl animate-float z-10 border-4 border-white dark:border-gray-800 hover:scale-110 transition-transform cursor-pointer">
                <span className="text-3xl animate-spin-slow">🚀</span>
              </div>
              <div className="absolute -bottom-6 -left-6 w-16 h-16 bg-gradient-to-br from-green-400 to-emerald-500 dark:from-green-500 dark:to-emerald-600 rounded-full flex items-center justify-center shadow-2xl animate-float-delay z-10 border-4 border-white dark:border-gray-800 hover:scale-110 transition-transform cursor-pointer">
                <span className="text-2xl">💻</span>
              </div>
              <div className="absolute top-1/2 -right-12 w-12 h-12 bg-gradient-to-br from-purple-400 to-pink-400 dark:from-purple-500 dark:to-pink-500 rounded-full flex items-center justify-center shadow-xl animate-float-slow z-10 border-2 border-white dark:border-gray-800">
                <span className="text-xl">⚡</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
