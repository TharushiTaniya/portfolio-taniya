import React from 'react';
import { FileText, Download } from 'lucide-react';

const Resume = () => {
  return (
    <section id="resume" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl font-bold text-center text-gray-800 mb-16">
          Resume
        </h2>
        
        <div className="max-w-3xl mx-auto text-center">
          <div className="mb-8">
            <FileText className="w-16 h-16 text-blue-600 mx-auto mb-4" />
            <p className="text-lg text-gray-600 mb-8">
              Download my resume to learn more about my experience, skills, and qualifications.
            </p>
          </div>
          
          <a href="/src/Assets/21IT0509 Taniya Pathirana CV.pdf" download
             className="inline-flex items-center space-x-2 bg-blue-600 text-white px-8 py-3 rounded-full
                      hover:bg-blue-700 transition-colors duration-300 shadow-lg hover:shadow-xl">
            <Download className="w-5 h-5" />
            <span>Download Resume</span>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Resume;