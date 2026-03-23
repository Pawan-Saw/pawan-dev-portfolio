import React, { useState, useEffect, useRef } from 'react';

const About: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
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

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  return (
    <section
      ref={sectionRef}
      id="about"
      className="py-24 bg-gradient-to-b from-[#0B091E] via-[#0F0A25] to-[#0A0816] text-white overflow-hidden"
    >
      <div className="pointer-events-none absolute inset-0 opacity-25">
        <div className="absolute -top-28 left-10 h-64 w-64 rounded-full bg-[#7B61FF] blur-3xl opacity-20 animate-pulse" />
        <div className="absolute -bottom-28 right-10 h-80 w-80 rounded-full bg-[#00D4FF] blur-3xl opacity-18 animate-pulse" />
      </div>

      <div className="relative z-10 mx-auto max-w-6xl px-4">
        <div className="text-center mb-16">
          <h2
            className="text-4xl sm:text-5xl md:text-6xl font-bold font-['Poppins','Inter'] bg-clip-text text-transparent mb-4"
            style={{ backgroundImage: 'linear-gradient(90deg, #7B61FF 0%, #0098FF 100%)' }}
          >
            About Me
          </h2>
          <p className="text-sm sm:text-base text-[#B5B5C8] max-w-2xl mx-auto">
            Passionate developer creating innovative solutions
          </p>
        </div>

        <div className={`grid lg:grid-cols-2 gap-12 lg:gap-20 items-center transition-all duration-700 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}>
          {/* Left Side - Content */}
          <div className="space-y-8">
            <div className="space-y-6">
              <p className="text-lg text-[#E5E5F5] leading-relaxed font-medium">
                Hi! I'm a <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#7B61FF] to-[#00D4FF] font-semibold">Computer Science Engineering</span> graduate
                with a passion for creating innovative solutions and solving complex problems through code.
              </p>

              <p className="text-lg text-[#E5E5F5] leading-relaxed font-medium">
                I specialize in full-stack development, crafting modern web applications and mobile experiences
                that make a real difference. My journey in technology is driven by curiosity and the desire to
                build something meaningful.
              </p>

              <p className="text-lg text-[#E5E5F5] leading-relaxed font-medium">
                When I'm not coding, you'll find me exploring new technologies, contributing to open-source projects,
                and continuously learning in this ever-evolving field.
              </p>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-2 gap-4">
              <div className="group p-6 rounded-2xl bg-white/5 backdrop-blur-md border border-white/10 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 hover:bg-white/10">
                <div className="text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-[#7B61FF] to-[#00D4FF] mb-2">
                  2+
                </div>
                <div className="text-sm text-[#B5B5C8] font-medium">Years Experience</div>
              </div>

              <div className="group p-6 rounded-2xl bg-white/5 backdrop-blur-md border border-white/10 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 hover:bg-white/10">
                <div className="text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-[#7B61FF] to-[#00D4FF] mb-2">
                  50+
                </div>
                <div className="text-sm text-[#B5B5C8] font-medium">Projects</div>
              </div>
            </div>
          </div>

          {/* Right Side - Image */}
          <div className="flex justify-center lg:justify-end">
            <div className="relative group">
              <div className="absolute -inset-4 bg-gradient-to-r from-[#7B61FF] via-[#00D4FF] to-[#7B61FF] rounded-3xl opacity-20 group-hover:opacity-40 transition-opacity duration-500 blur-xl animate-pulse"></div>

              <div className="relative overflow-hidden rounded-3xl shadow-2xl border-4 border-white/20 bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-sm p-2">
                <div className="relative aspect-[3/4] overflow-hidden rounded-2xl">
                  <img
                    src="/Pawan.jpg"
                    alt="Pawan Kumar - Professional Developer"
                    className="w-full h-full object-cover object-center transition-transform duration-500 group-hover:scale-105"
                    onError={() => {
                      console.error('Image failed to load: /Pawan.jpg');
                    }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
