import React, { useEffect, useRef, useState } from 'react';

type ExpertiseItem = {
  number: string;
  title: string;
  description: string;
  featured?: boolean;
};

const expertise: ExpertiseItem[] = [
  {
    number: '01',
    title: 'Backend Development',
    description:
      'Design and development of scalable RESTful APIs using Spring Boot following layered architecture (Controller, Service, Repository). Implementation of JWT authentication, database integration with JPA/Hibernate, and production-ready backend services.',
  },
  {
    number: '02',
    title: 'Full Stack Applications',
    description:
      'Development of full-stack applications using React, Node.js, and Spring Boot. Experience in frontend-backend integration, API-driven workflows, and responsive UI design.',
    featured: true,
  },
  {
    number: '03',
    title: 'Machine Learning Integration',
    description:
      'Built ML-powered systems integrating Python-based microservices (FastAPI) with Java backend. Developed predictive models achieving ~92% accuracy for crop yield and disease detection.',
  },
];

const CoreExpertise: React.FC = () => {
  const [visible, setVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
        }
      },
      {
        threshold: 0.2,
      }
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
      id="core-expertise"
      className="relative py-24 bg-[#080712] text-white overflow-hidden"
    >
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-[#0B081A] via-[#09070E] to-[#050509] opacity-90" />
      <div className="relative z-10 mx-auto w-full max-w-6xl px-4">
        <div
          className={`mx-auto mb-12 max-w-3xl text-center transition-all duration-700 ${
            visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          <h2
            className="text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight bg-clip-text text-transparent font-['Poppins','Inter']"
            style={{
              backgroundImage: 'linear-gradient(90deg, #7B61FF 0%, #0098FF 100%)',
            }}
          >
            Core Expertise
          </h2>
          <p className="mt-4 text-base sm:text-lg text-[#C9C9D9] leading-relaxed">
            Technical capabilities developed through internships, academic research, and real-world project implementation.
          </p>
        </div>

        <div className="space-y-5">
          {expertise.map((item, idx) => {
            const rowClasses = item.featured
              ? 'relative rounded-2xl border border-transparent bg-gradient-to-r from-[#7B61FF]/90 via-[#7A95FF]/80 to-[#00B1FF]/90 p-px shadow-[0_15px_45px_rgba(123,97,255,0.35)]'
              : 'relative rounded-2xl border border-white/10 bg-[#121024]';

            const cardClasses = item.featured
              ? 'rounded-2xl bg-[#170D38] h-full p-6 sm:p-8 transition-all duration-300 hover:scale-[1.02] hover:shadow-[0_0_40px_rgba(123,97,255,0.45)]'
              : 'rounded-2xl bg-[#0F0B1F] p-6 sm:p-8 transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_0_30px_rgba(123,97,255,0.25)]';

            return (
              <div
                key={item.number}
                className={`${rowClasses} transition-all duration-500 ${
                  visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
                }`}
                style={{ transitionDelay: `${idx * 150}ms` }}
              >
                <div className={cardClasses}>
                  <div className="grid grid-cols-12 gap-4 items-start">
                    <div className="col-span-12 sm:col-span-2">
                      <p
                        className="text-lg font-bold bg-clip-text text-transparent"
                        style={{ backgroundImage: 'linear-gradient(90deg, #7B61FF 0%, #0098FF 100%)' }}
                      >
                        {item.number}
                      </p>
                    </div>

                    <div className="col-span-12 sm:col-span-4">
                      <h3 className="text-xl sm:text-2xl font-bold leading-tight">
                        {item.title}
                      </h3>
                    </div>

                    <div className="col-span-12 sm:col-span-5">
                      <p className={item.featured ? 'text-white/90 text-sm sm:text-base leading-relaxed' : 'text-[#C0C0D1] text-sm sm:text-base leading-relaxed'}>
                        {item.description}
                      </p>
                    </div>

                    <div className="col-span-12 sm:col-span-1 flex sm:justify-end items-center">
                      <span className="inline-block rotate-0 transition-transform duration-300 group-hover:rotate-12">
                        <svg
                          className="h-6 w-6 text-[#7B61FF]"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                        </svg>
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default CoreExpertise;
