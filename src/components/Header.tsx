import React, { useContext, useEffect, useMemo, useState, useRef } from 'react';
import { ThemeContext } from '../main';

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState<string>('home');
  const [scrollProgress, setScrollProgress] = useState<number>(0);
  const hireMeRef = useRef<HTMLButtonElement>(null);

  const navItems = useMemo(() => ([
    { id: 'home', label: 'Home' },
    { id: 'about', label: 'About' },
    { id: 'skills', label: 'Skills' },
    { id: 'internship', label: 'Internships' },
    { id: 'projects', label: 'Projects' },
    { id: 'contact', label: 'Contact' },
  ]), []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMenuOpen(false);
  };

  // Magnetic hover effect for Hire Me button
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!hireMeRef.current) return;

      const rect = hireMeRef.current.getBoundingClientRect();
      const centerX = rect.left + rect.width / 2;
      const centerY = rect.top + rect.height / 2;

      const deltaX = (e.clientX - centerX) / 10;
      const deltaY = (e.clientY - centerY) / 10;

      hireMeRef.current.style.transform = `translate(${deltaX}px, ${deltaY}px)`;
    };

    const handleMouseLeave = () => {
      if (hireMeRef.current) {
        hireMeRef.current.style.transform = 'translate(0px, 0px)';
      }
    };

    if (hireMeRef.current) {
      hireMeRef.current.addEventListener('mousemove', handleMouseMove);
      hireMeRef.current.addEventListener('mouseleave', handleMouseLeave);
    }

    return () => {
      if (hireMeRef.current) {
        hireMeRef.current.removeEventListener('mousemove', handleMouseMove);
        hireMeRef.current.removeEventListener('mouseleave', handleMouseLeave);
      }
    };
  }, []);

  useEffect(() => {
    const sections = navItems
      .map(item => document.getElementById(item.id))
      .filter((el): el is HTMLElement => Boolean(el));

    const observer = new IntersectionObserver(
      entries => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { root: null, rootMargin: '0px 0px -60% 0px', threshold: 0.1 }
    );

    sections.forEach(sec => observer.observe(sec));

    const onScroll = () => {
      const scrollTop = window.scrollY || document.documentElement.scrollTop;
      const docHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
      const progress = docHeight > 0 ? (scrollTop / docHeight) * 100 : 0;
      setScrollProgress(progress);
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();

    return () => {
      observer.disconnect();
      window.removeEventListener('scroll', onScroll);
    };
  }, [navItems]);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-gradient-to-r from-[#0B091E]/95 via-[#0F0A25]/95 to-[#0A0816]/95 backdrop-blur-xl border-b border-white/10 shadow-2xl rounded-b-2xl mx-4 mt-4">
      {/* Scroll progress bar */}
      <div className="h-1 bg-transparent rounded-b-2xl overflow-hidden">
        <div
          className="h-1 transition-[width] duration-150 rounded-b-2xl"
          style={{
            width: `${scrollProgress}%`,
            backgroundImage: 'linear-gradient(90deg, #7B61FF, #00D4FF)',
          }}
        />
      </div>
      <nav className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          {/* Left Section - Logo */}
          <button
            onClick={() => scrollToSection('home')}
            className="flex items-center space-x-3 group"
            aria-label="Go to home"
          >
            <div
              className="w-12 h-12 rounded-full text-white flex items-center justify-center font-extrabold shadow-lg group-hover:shadow-xl transition-all duration-300 border-2 border-white/20"
              style={{
                backgroundImage: 'linear-gradient(135deg, #7B61FF, #00D4FF)',
                boxShadow: '0 0 20px rgba(123, 97, 255, 0.3)'
              }}
            >
              PK
            </div>
            <div className="text-left">
              <div className="text-sm leading-none text-[#B5B5C8]">Portfolio</div>
              <div className="-mt-0.5 text-xl font-bold text-white font-['Poppins']">Pawan Kumar</div>
            </div>
          </button>

          {/* Center Section - Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-8">
            {navItems.map(item => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className={`relative px-3 py-2 text-sm font-medium transition-all duration-300 group ${
                  activeSection === item.id ? 'text-white' : 'text-[#A0A0B0] hover:text-white'
                }`}
              >
                {item.label}
                <span
                  className={`absolute bottom-0 left-0 h-0.5 bg-gradient-to-r from-[#7B61FF] to-[#00D4FF] transition-all duration-300 ${
                    activeSection === item.id ? 'w-full shadow-[0_0_10px_rgba(123,97,255,0.8)]' : 'w-0 group-hover:w-full'
                  }`}
                />
              </button>
            ))}
          </div>

          {/* Right Section - Icons and Hire Me Button */}
          <div className="flex items-center space-x-3">
            <div className="hidden md:flex items-center space-x-2">
              <ThemeToggle />
              <a
                href="https://github.com/Pawan-Saw"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-xl bg-white/5 backdrop-blur-md border border-white/10 text-[#A0A0B0] hover:text-white hover:bg-white/10 hover:scale-110 hover:shadow-lg transition-all duration-300 flex items-center justify-center group"
                aria-label="GitHub"
              >
                <svg className="w-5 h-5 group-hover:scale-110 transition-transform duration-300" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                </svg>
              </a>
              <a
                href="https://www.linkedin.com/in/pawan-kumar-21a794310"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-xl bg-white/5 backdrop-blur-md border border-white/10 text-[#A0A0B0] hover:text-white hover:bg-blue-600/20 hover:scale-110 hover:shadow-lg transition-all duration-300 flex items-center justify-center group"
                aria-label="LinkedIn"
              >
                <svg className="w-5 h-5 group-hover:scale-110 transition-transform duration-300" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                </svg>
              </a>
            </div>

            {/* Hire Me Liquid Button */}
            <button
              ref={hireMeRef}
              onClick={() => scrollToSection('contact')}
              className="relative px-6 py-3 rounded-full font-semibold text-white overflow-hidden transition-all duration-300 hover:scale-105 group"
              style={{
                backgroundImage: 'linear-gradient(135deg, #7B61FF, #00D4FF)',
                boxShadow: '0 0 20px rgba(123, 97, 255, 0.4)'
              }}
            >
              <span className="relative z-10 font-bold">Hire Me</span>

              {/* Liquid Animation */}
              <div className="absolute inset-0 rounded-full overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-r from-[#7B61FF]/20 to-[#00D4FF]/20 animate-liquid-wave"></div>
                <div className="absolute inset-0 bg-gradient-to-r from-[#00D4FF]/20 to-[#7B61FF]/20 animate-liquid-wave-delayed"></div>
              </div>

              {/* Glow Effect */}
              <div className="absolute inset-0 rounded-full bg-gradient-to-r from-[#7B61FF] to-[#00D4FF] opacity-0 group-hover:opacity-20 blur-xl transition-opacity duration-300"></div>
            </button>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="lg:hidden w-10 h-10 rounded-xl bg-white/5 backdrop-blur-md border border-white/10 text-[#A0A0B0] hover:text-white hover:bg-white/10 transition-all duration-300 flex items-center justify-center"
              aria-label="Toggle menu"
            >
              {isMenuOpen ? (
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12"/>
                </svg>
              ) : (
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16"/>
                </svg>
              )}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="lg:hidden mt-4">
            <div className="fixed inset-0 bg-black/20 backdrop-blur-[2px] -mx-6 -my-4" onClick={() => setIsMenuOpen(false)} />
            <div className="relative py-4 border-t border-white/10 bg-white/5 backdrop-blur-xl rounded-2xl shadow-2xl">
              <div className="flex flex-col py-2">
                {navItems.map(item => (
                  <button
                    key={item.id}
                    onClick={() => scrollToSection(item.id)}
                    className={`px-4 py-3 text-left text-base font-medium transition-colors duration-300 ${
                      activeSection === item.id ? 'text-white bg-white/10' : 'text-[#A0A0B0] hover:text-white hover:bg-white/5'
                    }`}
                  >
                    {item.label}
                  </button>
                ))}
                <div className="px-4 pt-4 flex items-center space-x-2">
                  <ThemeToggle />
                  <a href="https://github.com/Pawan-Saw" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-xl bg-white/5 backdrop-blur-md border border-white/10 text-[#A0A0B0] hover:text-white hover:bg-white/10 transition-all duration-300 flex items-center justify-center" aria-label="GitHub">
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                    </svg>
                  </a>
                  <a href="https://www.linkedin.com/in/pawan-kumar-21a794310" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-xl bg-white/5 backdrop-blur-md border border-white/10 text-[#A0A0B0] hover:text-white hover:bg-blue-600/20 transition-all duration-300 flex items-center justify-center" aria-label="LinkedIn">
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                    </svg>
                  </a>
                </div>
              </div>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
};

const ThemeToggle: React.FC = () => {
  const { theme, toggleTheme } = useContext(ThemeContext);
  return (
    <button
      onClick={toggleTheme}
      className="w-10 h-10 rounded-xl bg-white/5 backdrop-blur-md border border-white/10 text-[#A0A0B0] hover:text-white hover:bg-white/10 hover:scale-110 hover:shadow-lg transition-all duration-300 flex items-center justify-center group"
      aria-label="Toggle dark mode"
      title={theme === 'dark' ? 'Switch to light mode' : 'Switch to dark mode'}
    >
      {theme === 'dark' ? (
        <svg className="w-5 h-5 group-hover:scale-110 transition-transform duration-300" viewBox="0 0 24 24" fill="currentColor">
          <path d="M21.64 13.007A9 9 0 1111 2.36a7 7 0 1010.64 10.647z"/>
        </svg>
      ) : (
        <svg className="w-5 h-5 group-hover:scale-110 transition-transform duration-300" viewBox="0 0 24 24" fill="currentColor">
          <path d="M12 18a6 6 0 100-12 6 6 0 000 12z"/><path d="M12 1v2M12 21v2M4.222 4.222l1.414 1.414M18.364 18.364l1.414 1.414M1 12h2M21 12h2M4.222 19.778l1.414-1.414M18.364 5.636l1.414-1.414"/>
        </svg>
      )}
    </button>
  );
}

export default Header;
