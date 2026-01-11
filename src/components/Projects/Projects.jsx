import React from 'react';
import { useQuery } from '@tanstack/react-query';
import { motion } from 'framer-motion';
import { FolderGit2, Github, ExternalLink, Calendar, Code, Activity, ArrowRight } from 'lucide-react';
import { fetchProjectsFromBackend } from '../../util/requests';

// Import project logos
import burgerLogo from '../../assets/images/burger-logo.png';
import covid101Logo from '../../assets/images/covid101-logo.jpg';
import finance6sLogo from '../../assets/images/finance6s-logo.png';
import gameLogo from '../../assets/images/game-logo.jpg';
import portfolioLogo from '../../assets/images/portfolio.png';
import rngoLogo from '../../assets/images/rngo-logo.png';

// Map project names to logos
const projectLogos = {
  'burger': burgerLogo,
  'covid': covid101Logo,
  'covid101': covid101Logo,
  'finance': finance6sLogo,
  'finance6s': finance6sLogo,
  'game': gameLogo,
  'portfolio': portfolioLogo,
  'rngo': rngoLogo,
};

const getProjectLogo = (projectName) => {
  if (!projectName) return null;
  const name = projectName.toLowerCase();
  for (const [key, logo] of Object.entries(projectLogos)) {
    if (name.includes(key)) return logo;
  }
  return null;
};

const Projects = () => {
  const { data: projects, isLoading, isError } = useQuery({
    queryKey: ['projects'],
    queryFn: fetchProjectsFromBackend,
  });

  if (isLoading) return <div className="text-center p-8">Loading featured work...</div>;
  if (isError) return <div className="text-red-500 p-8">Failed to load projects.</div>;

  return (
    <div className="relative">
      <div className="text-center mb-16">
        <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-6 tracking-tight">Featured Work</h2>
        <p className="text-xl text-gray-500 max-w-2xl mx-auto">
          A selection of projects that demonstrate my passion for building scalable and user-centric applications.
        </p>
      </div>

      <motion.div
        variants={{
          hidden: { opacity: 0 },
          show: {
            opacity: 1,
            transition: { staggerChildren: 0.15 }
          }
        }}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.1 }}
        className="grid grid-cols-1 gap-12"
      >
        {projects && projects.map((project) => (
          <motion.div
            key={project.id}
            variants={{
              hidden: { opacity: 0, y: 40 },
              show: { opacity: 1, y: 0 }
            }}
            className="bg-white rounded-3xl shadow-xl overflow-hidden border border-gray-100 group hover:shadow-2xl transition-all duration-500"
          >
            <div className="grid grid-cols-1 lg:grid-cols-5 h-full">
              {/* Visual Side (Project Logo) */}
              <div className="lg:col-span-2 bg-gradient-to-br from-slate-100 to-slate-200 min-h-[200px] lg:min-h-full flex items-center justify-center relative overflow-hidden p-8">
                <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#4f46e5_1px,transparent_1px)] [background-size:16px_16px]"></div>
                <div className="bg-white p-6 rounded-2xl shadow-lg transform group-hover:scale-105 transition-transform duration-500 max-w-[80%]">
                  {project.appLogo || getProjectLogo(project.name) ? (
                    <img
                      src={project.appLogo || getProjectLogo(project.name)}
                      alt={`${project.name} logo`}
                      className="w-full h-auto max-w-[200px] object-contain"
                    />
                  ) : (
                    <FolderGit2 className="w-16 h-16 text-indigo-500 opacity-80" />
                  )}
                </div>
              </div>

              {/* Content Side */}
              <div className="lg:col-span-3 p-8 md:p-10 flex flex-col justify-between">
                <div>
                  <div className="flex justify-between items-start mb-4">
                    <span className={`px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider ${project.webOrMobile === 'Web' ? 'bg-blue-50 text-blue-600' : 'bg-purple-50 text-purple-600'
                      }`}>
                      {project.webOrMobile}
                    </span>
                    <span className={`flex items-center text-xs font-semibold ${project.status === 'Completed' ? 'text-green-600' : 'text-amber-600'
                      }`}>
                      <Activity className="w-3 h-3 mr-1" />
                      {project.status}
                    </span>
                  </div>

                  <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-3 group-hover:text-indigo-600 transition-colors">
                    {project.name}
                  </h3>

                  <div className="flex items-center text-gray-400 text-sm mb-6 font-medium">
                    <Calendar className="w-4 h-4 mr-2" />
                    {project.date}
                  </div>

                  <p className="text-gray-600 mb-8 leading-relaxed text-lg">
                    {project.description}
                  </p>

                  <div className="mb-8">
                    <h4 className="text-sm font-bold text-gray-900 uppercase tracking-wider mb-3">Technologies</h4>
                    <div className="flex flex-wrap gap-2">
                      {(Array.isArray(project.technologies)
                        ? project.technologies
                        : (project.technologies?.toString() || '').split(',')
                      ).map((tech, i) => (
                        <span key={i} className="bg-slate-100 text-slate-700 px-3 py-1.5 rounded-md text-sm font-medium border border-slate-200">
                          {tech.trim()}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="flex items-center space-x-6 pt-6 border-t border-gray-100">
                  {project.appUrl ? (
                    <a href={project.appUrl} target="_blank" rel="noopener noreferrer"
                      className="flex items-center text-white bg-indigo-600 hover:bg-indigo-700 px-6 py-3 rounded-xl font-bold transition-all shadow-lg hover:shadow-indigo-500/25"
                    >
                      Live Demo <ExternalLink className="w-4 h-4 ml-2" />
                    </a>
                  ) : null}

                  {project.githubUrl ? (
                    <a href={project.githubUrl} target="_blank" rel="noopener noreferrer"
                      className="flex items-center text-gray-600 hover:text-gray-900 font-bold transition-colors"
                    >
                      Source Code <Github className="w-4 h-4 ml-2" />
                    </a>
                  ) : <span className="text-gray-400 text-sm font-medium flex items-center"><Github className="w-4 h-4 mr-2" /> Private Repo</span>}
                </div>
              </div>
            </div>
          </motion.div>
        ))}
      </motion.div>
      <div className="text-center mt-16">
        <a href="https://github.com/nifty-coder" target="_blank" rel="noopener noreferrer" className="inline-flex items-center text-indigo-600 font-bold hover:underline text-lg">
          View all projects on GitHub <ArrowRight className="ml-2 w-5 h-5" />
        </a>
      </div>
    </div >
  );
};

export default Projects;