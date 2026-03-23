import React, { useState, useEffect, useRef } from 'react';

interface EducationCard {
  year: string;
  degree: string;
  institute: string;
  delay: number;
}

const Education: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [showScrollTop, setShowScrollTop] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  const educationData: EducationCard[] = [
    {
      year: '2022–2026',
      degree: 'B.TECH',
      institute: 'Gargi Memorial Institute of Technology, Kolkata',
      delay: 0,
    },
    {
      year: '2019–2021',
      degree: 'HIGHER SECONDARY EDUCATION (12TH)',
      institute: '+2 High School Brahmasia, Tisri',
      delay: 100,
    },
    {
      year: '2019',
      degree: 'SECONDARY EDUCATION (10TH)',
      institute: 'High School Fufandi, Giridih',
      delay: 200,
    },
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 500);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <>
      <section
        ref={sectionRef}
        id="education"
        className="py-24 bg-[#0F0A1F] section-surface relative overflow-hidden"
      >
        {/* Animated background gradient */}
        <div className="absolute inset-0 opacity-40">
          <div className="absolute top-0 left-0 w-96 h-96 bg-[#7B61FF] rounded-full mix-blend-screen filter blur-3xl opacity-20 animate-pulse"></div>
          <div className="absolute bottom-0 right-0 w-96 h-96 bg-[#00D4FF] rounded-full mix-blend-screen filter blur-3xl opacity-20 animate-pulse" style={{ animationDelay: '2s' }}></div>
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-5xl mx-auto">
            {/* Header Section */}
            <div
              className={`mb-20 transition-all duration-1000 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
              }`}
            >
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[#7B61FF] to-[#00D4FF] flex items-center justify-center shadow-lg shadow-[#7B61FF]/50">
                  <svg
                    className="w-6 h-6 text-white"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M12 2L2 7v10c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V7l-10-5z" />
                  </svg>
                </div>
                <h2 className="text-4xl md:text-5xl font-bold font-['Poppins','Montserrat'] text-white">
                  <span
                    className="bg-clip-text text-transparent"
                    style={{
                      backgroundImage: 'linear-gradient(135deg, #7B61FF 0%, #00D4FF 100%)',
                    }}
                  >
                    My Education
                  </span>
                </h2>
              </div>
              <p className="text-[#A0A0B0] text-lg font-light">
                Proudly showcasing my academic journey and professional development
              </p>
            </div>

            {/* Education Cards */}
            <div className="space-y-6">
              {educationData.map((edu, index) => (
                <div
                  key={index}
                  className={`group relative transition-all duration-500 transform ${
                    isVisible
                      ? 'opacity-100 translate-y-0'
                      : 'opacity-0 translate-y-8'
                  }`}
                  style={{
                    transitionDelay: isVisible ? `${edu.delay}ms` : '0ms',
                  }}
                >
                  {/* Card glow effect */}
                  <div className="absolute inset-0 bg-gradient-to-r from-[#7B61FF]/0 via-[#7B61FF]/5 to-[#00D4FF]/0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-xl"></div>

                  {/* Main Card */}
                  <div className="relative p-8 md:p-10 bg-[#1A1333] rounded-2xl border border-white/10 shadow-lg hover:shadow-[0_0_40px_rgba(123,97,255,0.3)] transition-all duration-300 group-hover:border-[#7B61FF]/50 group-hover:scale-105 cursor-pointer">
                    {/* Hover border glow */}
                    <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 p-[1px] bg-gradient-to-r from-[#7B61FF] to-[#00D4FF] -z-10"></div>

                    <div className="grid md:grid-cols-4 gap-6 md:gap-8">
                      {/* Year */}
                      <div className="md:col-span-1">
                        <div className="text-sm font-semibold text-[#7B61FF] uppercase tracking-wider">
                          {edu.year}
                        </div>
                      </div>

                      {/* Content */}
                      <div className="md:col-span-3 space-y-3">
                        {/* Degree */}
                        <h3 className="text-xl md:text-2xl font-bold font-['Poppins','Montserrat'] text-white group-hover:text-[#00D4FF] transition-colors duration-300">
                          {edu.degree}
                        </h3>

                        {/* Institute */}
                        <p className="text-[#A0A0B0] font-light text-base leading-relaxed">
                          {edu.institute}
                        </p>

                        {/* Decorative line */}
                        <div className="h-1 w-12 bg-gradient-to-r from-[#7B61FF] to-[#00D4FF] rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                      </div>
                    </div>

                    {/* Corner accents */}
                    <div className="absolute top-4 right-4 w-2 h-2 bg-[#7B61FF] rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    <div className="absolute bottom-4 left-4 w-2 h-2 bg-[#00D4FF] rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  </div>
                </div>
              ))}
            </div>

            {/* Timeline decoration */}
            <div className="mt-16 flex justify-center">
              <div className="relative w-1 h-24 bg-gradient-to-b from-[#7B61FF] via-[#00D4FF] to-transparent rounded-full opacity-50"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Scroll to Top Button */}
      {showScrollTop && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-8 right-8 group z-40 transition-all duration-300"
          aria-label="Scroll to top"
        >
          {/* Button glow */}
          <div className="absolute inset-0 bg-gradient-to-r from-[#7B61FF] to-[#00D4FF] rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur-lg scale-150"></div>

          {/* Button */}
          <div className="relative w-12 h-12 bg-[#1A1333] border border-white/10 rounded-full flex items-center justify-center shadow-lg group-hover:border-[#7B61FF]/50 group-hover:shadow-[0_0_30px_rgba(123,97,255,0.5)] transition-all duration-300 group-hover:scale-110">
            <svg
              className="w-5 h-5 text-white group-hover:text-[#00D4FF] transition-colors duration-300"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M9 19l3-3m0 0l3 3m-3-3v12"
              />
            </svg>
          </div>
        </button>
      )}
    </>
  );
};

export default Education;
