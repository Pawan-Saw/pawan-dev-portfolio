import React, { useState, useEffect, useRef } from 'react';

type Skill = {
  name: string;
  icon: string;
};

const skills: Skill[] = [
  { name: 'C', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/c/c-original.svg' },
  { name: 'Java', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg' },
  { name: 'JavaScript', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg' },
  { name: 'Node.js', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg' },
  { name: 'Bootstrap', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bootstrap/bootstrap-original.svg' },
  { name: 'Express.js', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg' },
  { name: 'MongoDB', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg' },
  { name: 'SQL', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg' },
  { name: 'Python', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg' },
  { name: 'HTML', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg' },
  { name: 'CSS', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg' },
  { name: 'TypeScript', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg' },
  { name: 'Tailwind CSS', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-plain.svg' },
  { name: 'Git', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg' },
];

const Skills: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [showScrollTop, setShowScrollTop] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

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
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <section
      ref={sectionRef}
      id="skills"
      className="relative py-24 bg-gradient-to-b from-[#0B091E] via-[#0F0A25] to-[#0A0816] text-white overflow-hidden"
    >
      <div className="pointer-events-none absolute inset-0 opacity-25">
        <div className="absolute -top-28 left-10 h-64 w-64 rounded-full bg-[#7B61FF] blur-3xl opacity-20 animate-pulse" />
        <div className="absolute -bottom-28 right-10 h-80 w-80 rounded-full bg-[#00D4FF] blur-3xl opacity-18 animate-pulse" />
      </div>

      <div className="relative z-10 mx-auto max-w-6xl px-4 text-center">
        <h2
          className="text-4xl sm:text-5xl md:text-6xl font-bold font-['Poppins','Inter'] bg-clip-text text-transparent"
          style={{ backgroundImage: 'linear-gradient(90deg, #7B61FF 0%, #0098FF 100%)' }}
        >
          My Skills
        </h2>
        <p className="mx-auto mt-4 max-w-xl text-sm sm:text-base text-[#B5B5C8]">
          I have mentioned all the skills I learned till now
        </p>

        <div
          className={`mt-12 grid gap-y-10 gap-x-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-6 transition-all duration-700 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          {skills.map((skill, index) => (
            <div
              key={skill.name}
              className="group flex flex-col items-center justify-center space-y-3 px-2 py-4 text-center transition-all duration-300 hover:scale-[1.08] hover:-translate-y-[10px] hover:shadow-xl hover:text-[#E3E7FF]"
              style={{
                animation: isVisible ? 'fadeInUp 0.6s ease-out forwards' : 'none',
                animationDelay: `${index * 0.05}s`,
              }}
            >
              <img
                src={skill.icon}
                alt={skill.name}
                className="h-12 w-12 sm:h-14 sm:w-14 md:h-16 md:w-16 opacity-60 transition-all duration-300 group-hover:opacity-100 shadow-lg float-animation"
                style={{ 
                  filter: 'grayscale(45%)',
                  animationDelay: `${index * 0.5}s`
                }}
              />
              <span className="text-sm sm:text-base font-medium text-[#90A1FF] transition-all duration-300 group-hover:text-[#D4DAFF] group-hover:drop-shadow-[0_0_12px_rgba(123,97,255,0.65)]">
                {skill.name}
              </span>
            </div>
          ))}
        </div>
      </div>

      {showScrollTop && (
        <button
          type="button"
          onClick={scrollToTop}
          aria-label="Scroll to top"
          className="fixed right-6 bottom-6 z-40 rounded-full border border-[#7B61FF]/40 bg-[#1A1333]/90 p-3 text-white shadow-[0_0_20px_rgba(123,97,255,0.5)] transition-all duration-300 hover:scale-110 hover:shadow-[0_0_30px_rgba(123,97,255,0.8)]"
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M5 15l7-7 7 7" />
          </svg>
        </button>
      )}
    </section>
  );
};

export default Skills;

