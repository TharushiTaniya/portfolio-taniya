import React from 'react';
import { Github, ExternalLink } from 'lucide-react';

const Projects = () => {
  const projects = [
    {
      title: 'Stride_Smart',
      description: 'Footware supply change management.',
      image: '',
      tech: ['React', 'Node.js', 'SQL', ],
      github: 'https://github.com/TharushiTaniya/Stride_Smart',
      demo: 'https://demo.com'
    },
    {
      title: 'Tani Fasion Website',
      description: 'Tani Fashion: E-commerce website with new arrivals, search bar, secure checkout, and mobile-friendly design.',
      image: '/src/Assets/Pictures/shop1.jpg',
      tech: ['React','Node.js'],
      github: 'https://github.com/TharushiTaniya/TaniFashion',
      demo: 'https://demo.com'
    },
    {
      title: 'Social Media Dashboard',
      description: 'Analytics dashboard for social media management.',
      image: '/src/Assets/Pictures/todo.JPG',
      tech: ['React', 'TypeScript'],
      github: 'https://github.com/TharushiTaniya/todo-App',
      demo: 'https://demo.com'
    }
  ];

  return (
    <section id="projects" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl font-bold text-center text-gray-800 mb-16">
          Featured Projects
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <div key={project.title}
                 className="bg-white rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300">
              <div className="relative group">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-48 object-cover"
                />
                <div className="absolute inset-0 bg-blue-600 bg-opacity-0 group-hover:bg-opacity-70 transition-all duration-300 flex items-center justify-center">
                  <div className="space-x-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <a href={project.github} target="_blank" rel="noopener noreferrer"
                       className="inline-block p-3 bg-white rounded-full hover:bg-gray-100 transition-colors duration-300">
                      <Github className="w-5 h-5 text-gray-800" />
                    </a>
                    <a href={project.demo} target="_blank" rel="noopener noreferrer"
                       className="inline-block p-3 bg-white rounded-full hover:bg-gray-100 transition-colors duration-300">
                      <ExternalLink className="w-5 h-5 text-gray-800" />
                    </a>
                  </div>
                </div>
              </div>
              
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-800 mb-2">
                  {project.title}
                </h3>
                <p className="text-gray-600 mb-4">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {project.tech.map((tech) => (
                    <span key={tech}
                          className="px-3 py-1 bg-blue-100 text-blue-600 rounded-full text-sm">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;