import React from 'react';
import { GraduationCap, Code, Briefcase } from 'lucide-react';

const About = () => {
  return (
    <section
      id="about"
      className="py-20 bg-cover bg-top bg-no-repeat"
      style={{
        backgroundImage: 'url(/src/Assets/Pictures/ta.jpeg)',
      }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 bg-white bg-opacity-75 p-10 rounded-lg">
        <h2 className="text-4xl font-bold text-center text-gray-800 mb-16">
          About Me
        </h2>
        
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <p className="text-lg text-gray-600 leading-relaxed">
              As an undergraduate at the Institute of Technology, University of Moratuwa,
              I'm passionate about creating innovative web solutions that make a difference.
              My journey in software engineering has been driven by curiosity and a
              commitment to excellence.
            </p>
            
            <div className="space-y-4">
              <div className="flex items-start space-x-4">
                <div className="p-3 bg-blue-100 rounded-lg">
                  <GraduationCap className="w-6 h-6 text-blue-600" />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-800">Education</h3>
                  <p className="text-gray-600"> Information Technology</p>
                  <p className="text-gray-500">University of Moratuwa</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-4">
                <div className="p-3 bg-blue-100 rounded-lg">
                  <Code className="w-6 h-6 text-blue-600" />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-800">Specialization</h3>
                  <p className="text-gray-600">Web Development</p>
                  <p className="text-gray-500">Full-stack Development</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-4">
                <div className="p-3 bg-blue-100 rounded-lg">
                  <Briefcase className="w-6 h-6 text-blue-600" />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-800">Experience</h3>
                  <p className="text-gray-600">Software Engineering Intern</p>
                  <p className="text-gray-500">Various Projects & Collaborations</p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="relative">
            <div className="absolute inset-0 bg-blue-600 rounded-lg -z-10 transform translate-x-4 translate-y-4"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;