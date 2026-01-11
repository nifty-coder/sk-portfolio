import React, { useState, useEffect } from 'react';
import { Route, Routes, Navigate, Link as RouterLink, useLocation, useNavigate } from 'react-router-dom';
import { Link as ScrollLink, animateScroll as scroll } from 'react-scroll';
import { useQuery } from '@tanstack/react-query';
import { AnimatePresence, motion } from 'framer-motion';
import Home from './Home';
import OtherPage from './components/OtherPage/OtherPage';
import { fetchStatusFromBackend } from './util/requests';
import { ExternalLink, Home as HomeIcon, Award, Linkedin, Github, Menu, X } from 'lucide-react';

const App = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { data: statusData, isLoading, isError } = useQuery({
    queryKey: ['status'],
    queryFn: fetchStatusFromBackend,
  });
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Close menu when location changes
  useEffect(() => {
    setIsMenuOpen(false);
  }, [location.pathname]);

  const handleNavClick = (to) => {
    if (location.pathname !== '/') {
      navigate('/');
      setTimeout(() => {
        scroll.scrollTo(to, { smooth: true, duration: 500, offset: -80 });
      }, 100);
    }
  };

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 font-sans selection:bg-indigo-100 selection:text-indigo-900">
      {/* Navbar */}
      <nav className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-gray-200 transition-all duration-300">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16 items-center">
            <div
              className="flex items-center space-x-2 cursor-pointer group"
              onClick={() => {
                if (window.innerWidth < 768) {
                  setIsMenuOpen(!isMenuOpen);
                } else {
                  navigate('/');
                }
              }}
            >
              <div className="w-8 h-8 bg-indigo-600 rounded-lg flex items-center justify-center text-white font-bold shadow-lg shadow-indigo-500/30 group-hover:scale-110 transition-transform">
                {isMenuOpen ? <X className="w-5 h-5" /> : 'SK'}
              </div>
              <span className="text-xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-indigo-600 to-blue-600 hidden sm:block">
                Surya Kasibhatla
              </span>
            </div>

            <div className="hidden md:flex items-center space-x-6">
              {location.pathname === '/' ? (
                <>
                  <ScrollLink to="about" spy={true} smooth={true} offset={-100} duration={500} className="text-gray-500 hover:text-indigo-600 font-medium cursor-pointer transition-colors">About</ScrollLink>
                  <ScrollLink to="skills" spy={true} smooth={true} offset={-100} duration={500} className="text-gray-500 hover:text-indigo-600 font-medium cursor-pointer transition-colors">Skills</ScrollLink>
                  <ScrollLink to="projects" spy={true} smooth={true} offset={-100} duration={500} className="text-gray-500 hover:text-indigo-600 font-medium cursor-pointer transition-colors">Projects</ScrollLink>
                  <ScrollLink to="experience" spy={true} smooth={true} offset={-100} duration={500} className="text-gray-500 hover:text-indigo-600 font-medium cursor-pointer transition-colors">Experience</ScrollLink>
                  <ScrollLink to="contact" spy={true} smooth={true} offset={-100} duration={500} className="text-gray-500 hover:text-indigo-600 font-medium cursor-pointer transition-colors">Contact</ScrollLink>
                </>
              ) : (
                <RouterLink to="/" className="text-gray-500 hover:text-indigo-600 font-medium cursor-pointer transition-colors">Back to Home</RouterLink>
              )}
              <div className="h-4 w-px bg-gray-300 mx-2"></div>
              <RouterLink to="/certificates-packages" className={`flex items-center space-x-1 font-medium transition-colors ${location.pathname === '/certificates-packages' ? 'text-indigo-600' : 'text-gray-500 hover:text-gray-900'}`}>
                <Award className="w-4 h-4" />
                <span>Achievements</span>
              </RouterLink>
            </div>

            <div className="flex items-center space-x-4">
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-[#0077b5] transition-colors">
                <Linkedin className="w-5 h-5" />
              </a>
              <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-gray-900 transition-colors">
                <Github className="w-5 h-5" />
              </a>

              <div className="hidden sm:flex items-center pl-4 border-l border-gray-200 ml-4">
                {isLoading ? (
                  <div className="h-2 w-2 bg-gray-200 rounded-full animate-pulse"></div>
                ) : isError || !statusData ? (
                  <div className="h-2 w-2 rounded-full bg-red-400" title="Offline"></div>
                ) : (
                  <div className="h-2 w-2 rounded-full bg-green-500" title="Online"></div>
                )}
              </div>
            </div>
          </div>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-white border-b border-gray-100 overflow-hidden sticky top-16 z-40"
          >
            <div className="px-4 py-6 space-y-4">
              {location.pathname === '/' ? (
                <>
                  {['about', 'skills', 'projects', 'experience', 'contact'].map((item) => (
                    <ScrollLink
                      key={item}
                      to={item}
                      spy={true}
                      smooth={true}
                      offset={-100}
                      duration={500}
                      onClick={() => setIsMenuOpen(false)}
                      className="block text-lg font-medium text-gray-600 hover:text-indigo-600 transition-colors capitalize"
                    >
                      {item}
                    </ScrollLink>
                  ))}
                </>
              ) : (
                <RouterLink
                  to="/"
                  className="block text-lg font-medium text-gray-600 hover:text-indigo-600 transition-colors"
                >
                  Back to Home
                </RouterLink>
              )}
              <div className="pt-4 border-t border-gray-100">
                <RouterLink
                  to="/certificates-packages"
                  className="flex items-center space-x-2 text-lg font-medium text-gray-600 hover:text-indigo-600"
                >
                  <Award className="w-5 h-5" />
                  <span>Achievements</span>
                </RouterLink>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* App Routes with Transitions */}
      <AnimatePresence mode="wait">
        <motion.main
          key={location.pathname}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -10 }}
          transition={{ duration: 0.3 }}
          className="relative"
        >
          <Routes location={location}>
            <Route path="/" element={<Home />} />
            <Route path="/certificates-packages" element={<OtherPage />} />
            <Route path="*" element={<Navigate replace to="/" />} />
          </Routes>
        </motion.main>
      </AnimatePresence>

      <footer className="mt-24 border-t border-gray-100 py-12 bg-white">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <p className="text-gray-400 text-sm">
            &copy; {new Date().getFullYear()} Surya Kasibhatla
          </p>
        </div>
      </footer>
    </div>
  );
};

export default App;
