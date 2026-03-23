import React from 'react';

const Internship: React.FC = () => {
  const internships = [
    {
      id: 1,
      company: "Deloitte Australia",
      position: "Data Analytics Job Simulation",
      duration: "Sep 2025",
      type: "Virtual Internship",
      location: "Remote",
      description: "Successfully completed an internship at Deloitte where I worked on a Data Analysis project, gaining hands-on experience in data processing, visualization, and business intelligence.",
      skills: ["Data Analysis", "Business Intelligence", "Data Visualization", "SQL", "Python", "Tableau"],
      credentialId: "yi99MPr9aHqEJRBBF",
      platform: "Forage",
      certificate: "Data_analysis_Certificate.pdf",
      logo: "https://images.unsplash.com/photo-1560472354-b33ff0c44a43?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2126&q=80",
      achievements: [
        "Analyzed large datasets to identify business trends and patterns",
        "Created interactive dashboards for data visualization",
        "Developed data-driven insights for business decision making",
        "Collaborated with cross-functional teams on analytics projects"
      ],
      featured: true
    },
    {
      id: 2,
      company: "ARDENT COMPUTECH PVT LTD",
      position: "Web Designer",
      duration: "Apr 2024 - May 2024",
      type: "On-site Internship",
      location: "Salt Lake, Kolkata",
      description: "Gained practical experience in web design and user experience design, working on real client projects and learning industry-standard design practices.",
      skills: ["Web Design", "User Experience (UX)", "UI Design", "HTML/CSS", "JavaScript", "Figma"],
      logo: "https://images.unsplash.com/photo-1551650975-87deedd944c3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2374&q=80",
      achievements: [
        "Designed responsive web interfaces for client projects",
        "Improved user experience through UX research and testing",
        "Collaborated with development team on design implementation",
        "Created wireframes and prototypes using design tools"
      ],
      featured: false
    }
  ];

  return (
    <section id="internship" className="py-24 bg-[#0F0A1F] section-surface">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2
              className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold mb-4 text-white"
            >
              <span
                className="bg-clip-text text-transparent"
                style={{
                  backgroundImage:
                    'linear-gradient(135deg, #9F7AEA 0%, #7B61FF 35%, #00D4FF 100%)',
                }}
              >
                Experience & Internships
              </span>
            </h2>
            <p className="text-sm sm:text-base text-[#A0A0B0] max-w-3xl mx-auto">
              Hands-on experience gained through internships and job simulations that have shaped my professional journey.
            </p>
          </div>

          <div className="space-y-12">
            {internships.map((internship, idx) => (
              <div
                key={internship.id}
                className="card-surface bg-[#1A1333] rounded-3xl p-8 transition-transform duration-300 ease-out hover:-translate-y-2 hover:scale-[1.01]"
                style={{
                  animation: 'fadeInUp 0.6s ease-out forwards',
                  animationDelay: `${idx * 0.06}s`,
                }}
              >
                <div className="grid lg:grid-cols-3 gap-8">
                  {/* Company Logo and Basic Info */}
                  <div className="lg:col-span-1">
                    <div className="flex items-center space-x-4 mb-6">
                      <div className="w-16 h-16 rounded-xl bg-[#0F0A1F] border border-white/10 shadow-[0_0_25px_rgba(123,97,255,0.6)] flex items-center justify-center">
                        <img
                          src={internship.logo}
                          alt={`${internship.company} logo`}
                          className="w-12 h-12 object-cover rounded-lg"
                        />
                      </div>
                      <div>
                        <h3 className="text-lg sm:text-xl font-semibold text-white">{internship.company}</h3>
                        <p className="text-xs sm:text-sm text-[#A0A0B0] font-medium">{internship.position}</p>
                      </div>
                    </div>
                    
                    <div className="space-y-3">
                      <div className="flex items-center space-x-3">
                        <svg className="w-5 h-5 text-[#A0A0B0]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                        </svg>
                        <span className="text-xs text-[#A0A0B0]">{internship.duration}</span>
                      </div>
                      <div className="flex items-center space-x-3">
                        <svg className="w-5 h-5 text-[#A0A0B0]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                        </svg>
                        <span className="text-xs text-[#A0A0B0]">{internship.location}</span>
                      </div>
                      <div className="flex items-center space-x-3">
                        <svg className="w-5 h-5 text-[#A0A0B0]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                        </svg>
                        <span className="text-xs text-[#A0A0B0]">{internship.type}</span>
                      </div>
                      {internship.credentialId && (
                        <div className="flex items-center space-x-3">
                          <svg className="w-5 h-5 text-[#A0A0B0]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
                          </svg>
                          <span className="text-xs text-[#A0A0B0]">ID: {internship.credentialId}</span>
                        </div>
                      )}
                    </div>
                  </div>

                  {/* Description and Details */}
                  <div className="lg:col-span-2">
                    <div className="mb-6">
                      <p className="text-[0.9rem] text-[#E5E5F5] leading-relaxed mb-4">
                        {internship.description}
                      </p>
                      
                      {internship.achievements && (
                        <div className="mb-6">
                          <h4 className="text-sm font-semibold text-white mb-3">Key Achievements</h4>
                          <ul className="space-y-2">
                            {internship.achievements.map((achievement, index) => (
                              <li key={index} className="flex items-start space-x-3">
                                <svg className="w-4 h-4 text-[#00D4FF] mt-1 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                                </svg>
                                <span className="text-xs text-[#A0A0B0]">{achievement}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      )}

                      <div className="mb-6">
                        <h4 className="text-sm font-semibold text-white mb-3">Technologies & Skills</h4>
                        <div className="flex flex-wrap gap-2">
                          {internship.skills.map((skill, index) => (
                            <span
                              key={index}
                              className="chip"
                            >
                              {skill}
                            </span>
                          ))}
                        </div>
                      </div>

                      {internship.certificate && (
                        <div className="flex items-center space-x-4">
                          <a
                            href={`#${internship.certificate}`}
                            className="flex items-center space-x-2 rounded-full border border-white/10 bg-[#0F0A1F] px-4 py-2 text-xs font-medium text-[#E5E5F5] shadow-[0_0_25px_rgba(123,97,255,0.5)] hover:bg-[#1A1333] transition-colors duration-300"
                          >
                            <svg className="w-4 h-4 text-[#A0A0B0]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                            </svg>
                            <span>View Certificate</span>
                          </a>
                          {internship.platform && (
                            <span className="text-[0.7rem] text-[#A0A0B0]">
                              via {internship.platform}
                            </span>
                          )}
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Call to Action */}
          <div className="mt-16 text-center">
            <div className="bg-gradient-to-r from-blue-50 to-purple-50 dark:from-gray-800 dark:to-gray-900 rounded-2xl p-8">
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                Ready for the Next Opportunity
              </h3>
              <p className="text-gray-600 dark:text-gray-300 mb-6">
                I'm always looking for new challenges and opportunities to grow. 
                Let's discuss how I can contribute to your team!
              </p>
              <button
                onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                className="px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold rounded-full hover:shadow-lg hover:scale-105 transition-all duration-300"
              >
                Let's Connect
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Internship;
