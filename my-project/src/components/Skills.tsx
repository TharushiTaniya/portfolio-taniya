import React from 'react';
import {
  Code2, Database, Globe, Layout, Server, Smartphone,
  GitBranch, Terminal, Cpu
} from 'lucide-react';

const Skills = () => {
  const skillCategories = [
    {
      title: 'Frontend Development',
      icon: Layout,
      skills: ['html', ' CSS','Javascript TypeScript','React Next.js']
    },
    {
      title: 'Backend Development',
      icon: Server,
      skills: ['Node.js',  'Python', 'Java','php']
    },
    {
      title: 'Database',
      icon: Database,
      skills: ['MySQL']
    },
 
    {
      title: 'DevOps',
      icon: GitBranch,
      skills: ['Git', 'Docker', 'CI/CD', 'AWS']
    },
    {
      title: 'Other Technologies',
      icon: Cpu,
      skills: ['Orange', 'Power BI', 'Canva', 'Figma']
    }
  ];

  return (
    <section id="skills" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl font-bold text-center text-gray-800 mb-16">
          Skills & Expertise
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((category) => (
            <div key={category.title}
                 className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
              <div className="flex items-center space-x-4 mb-6">
                <div className="p-3 bg-blue-100 rounded-lg">
                  <category.icon className="w-6 h-6 text-blue-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-800">
                  {category.title}
                </h3>
              </div>
              
              <div className="space-y-3">
                {category.skills.map((skill) => (
                  <div key={skill}
                       className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
                    <span className="text-gray-600">{skill}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;