import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Linkedin } from 'lucide-react';
import { Link } from 'react-scroll'; // We'll need to install react-scroll or use anchors

const Hero = () => {
    return (
        <div className="relative min-h-[90vh] flex items-center justify-center overflow-hidden bg-slate-900">
            {/* Dynamic Background */}
            <div className="absolute inset-0 w-full h-full">
                <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-indigo-900/40 via-slate-900 to-slate-900"></div>
                <div className="absolute inset-0 opacity-20 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]"></div>
            </div>

            {/* Subtle Background Blob */}
            <motion.div
                animate={{
                    scale: [1, 1.15, 1],
                    opacity: [0.2, 0.4, 0.2],
                }}
                transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
                className="absolute top-1/3 left-1/3 w-[500px] h-[500px] bg-gradient-to-br from-purple-600/20 to-blue-600/20 rounded-full blur-3xl"
            />

            <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                >
                    <h2 className="text-indigo-400 font-semibold tracking-wide uppercase mb-4">Full Stack Developer</h2>
                    <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 tracking-tight">
                        Building digital <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-600">experiences</span><br />
                        that matter.
                    </h1>
                    <p className="mt-4 text-xl text-gray-300 max-w-2xl mx-auto leading-relaxed">
                        I craft scalable, high-performance web applications with modern technologies.
                        Let's turn your vision into reality.
                    </p>

                    <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
                        <Link
                            to="projects"
                            smooth={true}
                            duration={500}
                            className="px-8 py-4 bg-indigo-600 hover:bg-indigo-700 text-white rounded-full font-bold text-lg transition-all shadow-lg hover:shadow-indigo-500/25 flex items-center cursor-pointer"
                        >
                            View My Work <ArrowRight className="ml-2 w-5 h-5" />
                        </Link>
                        <a
                            href="https://www.linkedin.com/in/suryakasibhatla"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="px-8 py-4 bg-white/10 hover:bg-white/20 text-white rounded-full font-bold text-lg transition-all backdrop-blur-sm border border-white/10 flex items-center"
                        >
                            View LinkedIn <Linkedin className="ml-2 w-5 h-5" />
                        </a>
                    </div>
                </motion.div>
            </div>

            {/* Scroll indicator */}
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1, y: [0, 10, 0] }}
                transition={{ delay: 2, duration: 2, repeat: Infinity }}
                className="absolute bottom-10 left-1/2 transform -translate-x-1/2 text-gray-400"
            >
                <span className="text-sm">Scroll Down</span>
            </motion.div>
        </div>
    );
};

export default Hero;
