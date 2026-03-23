import React, { useState, useEffect } from 'react';

const Hero: React.FC = () => {
  const [imageError, setImageError] = useState(false);
  const [imageSrc, setImageSrc] = useState('/Pwn.jpg');
  const [displayText, setDisplayText] = useState('');
  const [showCursor, setShowCursor] = useState(true);
  const [mounted, setMounted] = useState(false);

  const fullText = 'Pawan Kumar';
  const roles = ['Backend Developer', 'Full Stack Developer', 'Problem Solver', 'Tech Enthusiast'];
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
    <section id="home" className="relative min-h-screen flex items-center justify-center pt-24 bg-[#0F0A1F] overflow-hidden">
      {/* background glows */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -top-40 -left-10 h-80 w-80 rounded-full bg-[#7B61FF]/30 blur-3xl" />
        <div className="absolute -bottom-40 right-0 h-96 w-96 rounded-full bg-[#00D4FF]/25 blur-3xl" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(123,97,255,0.18),transparent_60%),radial-gradient(circle_at_bottom,_rgba(0,212,255,0.18),transparent_60%)] opacity-80" />
      </div>

      <div className="container mx-auto px-4 py-20 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-8 animate-fade-in-up text-left">
            <div className="space-y-4">
              <p className="text-xs font-semibold tracking-[0.35em] text-[#A0A0B0] uppercase">
                Backend · Full Stack · Problem Solver
              </p>
              <h1
                className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight text-white"
              >
                Hi, I&apos;m{' '}
                <span
                  className="bg-clip-text text-transparent"
                  style={{
                    backgroundImage:
                      'linear-gradient(135deg, #9F7AEA 0%, #7B61FF 35%, #00D4FF 100%)',
                  }}
                >
                  {displayText}
                  <span className={showCursor ? 'opacity-100' : 'opacity-0'}>|</span>
                </span>
              </h1>
              <div className="text-xl lg:text-2xl text-[#A0A0B0] min-h-[2.5rem]">
                <span className="font-semibold text-white">
                  {displayRole || 'Full Stack Developer'}
                  <span className={showCursor && displayRole ? 'opacity-100' : 'opacity-0'}>|</span>
                </span>
              </div>
            </div>
            
            <p className="text-sm sm:text-base text-[#A0A0B0] leading-relaxed max-w-xl animate-fade-in-up-delay">
              I&apos;m a Computer Science Engineering graduate focused on backend and full‑stack development,
              building reliable APIs, clean architectures, and smooth user experiences with modern web tech.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 animate-fade-in-up-delay-2">
              <button
                onClick={scrollToContact}
                className="group btn-primary transition-all duration-300 hover:shadow-2xl"
              >
                <span className="relative z-10 flex items-center gap-2">
                  Get In Touch
                  <svg className="w-5 h-5 transform group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                  </svg>
                </span>
              </button>
              <button
                onClick={() => {
                  const element = document.getElementById('projects');
                  if (element) {
                    element.scrollIntoView({ behavior: 'smooth', block: 'start' });
                  }
                }}
                className="group btn-secondary duration-300 flex"
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
                className="group relative w-12 h-12 rounded-full bg-white/80 dark:bg-white/5 flex items-center justify-center text-gray-700 dark:text-gray-200 hover:text-white hover:bg-slate-900 dark:hover:bg-slate-100 dark:hover:text-slate-900 hover:scale-110 transition-all duration-300 shadow-sm hover:shadow-lg border border-black/5 dark:border-white/10"
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
                className="group relative w-12 h-12 rounded-full bg-white/80 dark:bg-white/5 flex items-center justify-center text-gray-700 dark:text-gray-200 hover:text-white hover:bg-blue-700 dark:hover:bg-blue-300 dark:hover:text-slate-900 hover:scale-110 transition-all duration-300 shadow-sm hover:shadow-lg border border-black/5 dark:border-white/10"
                aria-label="LinkedIn Profile"
              >
                <svg className="w-6 h-6 transition-transform group-hover:scale-110" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                </svg>
              </a>
              <a 
                href="mailto:pksaw7717@gmail.com" 
                className="group relative w-12 h-12 rounded-full bg-white/80 dark:bg-white/5 flex items-center justify-center text-gray-700 dark:text-gray-200 hover:text-white hover:bg-rose-600 dark:hover:bg-rose-300 dark:hover:text-slate-900 hover:scale-110 transition-all duration-300 shadow-sm hover:shadow-lg border border-black/5 dark:border-white/10"
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
              {/* Profile Image Container */}
              <div className="relative w-full h-full rounded-3xl overflow-hidden shadow-2xl ring-1 ring-black/10 dark:ring-white/10 bg-white/40 dark:bg-white/5 backdrop-blur-sm transform hover:scale-[1.01] transition-transform duration-500">
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
              
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
