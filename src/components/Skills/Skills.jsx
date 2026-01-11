import React from 'react';
import { Cpu, CheckCircle } from 'lucide-react';
import TechStacks from './TechStacks';
import ToolsDbs from './ToolsDbs';

const Skills = () => {
  return (
    <div className="max-w-5xl mx-auto px-4">
      <div className="bg-white rounded-3xl shadow-xl overflow-hidden p-8 md:p-10">
        <div className="flex items-center mb-8">
          <div className="w-12 h-12 bg-indigo-100 rounded-2xl flex items-center justify-center text-indigo-600 mr-4">
            <Cpu className="w-6 h-6" />
          </div>
          <h2 className="text-3xl font-bold text-gray-900">Skills & Expertise</h2>
        </div>

        <TechStacks />
        <ToolsDbs />

        <div className="mt-10 border-t border-gray-100 pt-8">
          <h4 className="text-xl font-bold mb-6 text-gray-900">Soft Skills</h4>
          <div className="flex flex-wrap gap-3">
            {['Active Listening', 'Communication', 'Creativity'].map((skill) => (
              <div key={skill} className="flex items-center bg-gradient-to-r from-indigo-50 to-purple-50 px-5 py-2.5 rounded-full text-indigo-700 font-medium border border-indigo-100 hover:border-indigo-200 transition-colors">
                <CheckCircle className="w-4 h-4 mr-2" />
                {skill}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;