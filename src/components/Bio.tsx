import React from 'react';

interface BioProps {
  name: string;
  field: string;
  experience?: string;
  location?: string;
  interests?: string[];
  currentRole?: string;
}

const Bio: React.FC<BioProps> = ({
  name,
  field,
  experience = "2+ years",
  location = "India",
  interests = ["Web Development", "Problem Solving", "Technology Innovation"],
  currentRole = "Software Developer"
}) => {
  return (
    <div className="max-w-4xl mx-auto p-8 bg-white dark:bg-gray-900 rounded-2xl shadow-lg border border-gray-100 dark:border-gray-800">
      <div className="text-center mb-8">
        <div className="w-32 h-32 mx-auto mb-6 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center">
          <span className="text-white text-4xl font-bold">
            {name.split(' ').map(n => n[0]).join('')}
          </span>
        </div>
        <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-2">{name}</h1>
        <p className="text-xl text-gray-600 dark:text-gray-300 mb-4">{currentRole}</p>
        <div className="flex flex-wrap justify-center gap-4 text-sm text-gray-500 dark:text-gray-400">
          <span className="flex items-center">
            <svg className="w-4 h-4 mr-1" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
            </svg>
            {location}
          </span>
          <span className="flex items-center">
            <svg className="w-4 h-4 mr-1" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z" clipRule="evenodd" />
            </svg>
            {experience} experience
          </span>
        </div>
      </div>

      <div className="prose prose-lg max-w-none dark:prose-invert">
        <div className="bg-gray-50 dark:bg-gray-800 rounded-xl p-6 mb-6">
          <p className="text-gray-700 dark:text-gray-300 leading-relaxed text-lg">
            Hi there! I'm <span className="font-semibold text-gray-900">{name}</span>, a passionate 
            <span className="font-semibold text-blue-600"> {field} graduate</span> with {experience} of experience 
            in the tech industry. I love turning complex problems into simple, beautiful, and intuitive solutions.
          </p>
          
          <p className="text-gray-700 dark:text-gray-300 leading-relaxed text-lg mt-4">
            My journey in technology began during my <span className="font-semibold text-purple-600">{field}</span> studies, 
            where I discovered my passion for creating innovative solutions and solving real-world problems. 
            I'm always eager to learn new technologies and stay up-to-date with the latest trends in software development.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          <div className="bg-blue-50 dark:bg-blue-900/20 rounded-xl p-6">
            <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4 flex items-center">
              <svg className="w-5 h-5 mr-2 text-blue-600" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M12.316 3.051a1 1 0 01.633 1.265l-4 12a1 1 0 11-1.898-.632l4-12a1 1 0 011.265-.633zM5.707 6.293a1 1 0 010 1.414L3.414 10l2.293 2.293a1 1 0 11-1.414 1.414l-3-3a1 1 0 010-1.414l3-3a1 1 0 011.414 0zm8.586 0a1 1 0 011.414 0l3 3a1 1 0 010 1.414l-3 3a1 1 0 11-1.414-1.414L16.586 10l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
              </svg>
              What I Do
            </h3>
            <p className="text-gray-700 dark:text-gray-300">
              I specialize in full-stack development, creating responsive web applications, 
              and implementing efficient algorithms. I enjoy working on projects that make 
              a real difference in people's lives.
            </p>
          </div>

          <div className="bg-purple-50 dark:bg-purple-900/20 rounded-xl p-6">
            <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4 flex items-center">
              <svg className="w-5 h-5 mr-2 text-purple-600" fill="currentColor" viewBox="0 0 20 20">
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
              </svg>
              My Interests
            </h3>
            <div className="flex flex-wrap gap-2">
              {interests.map((interest, index) => (
                <span
                  key={index}
                  className="px-3 py-1 bg-purple-100 dark:bg-purple-900/30 text-purple-700 dark:text-purple-300 rounded-full text-sm font-medium"
                >
                  {interest}
                </span>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-8 text-center">
          <p className="text-gray-600 dark:text-gray-300 text-lg">
            I'm always excited to connect with fellow developers and explore new opportunities. 
            Let's build something amazing together! 🚀
          </p>
        </div>
      </div>
    </div>
  );
};

export default Bio;

