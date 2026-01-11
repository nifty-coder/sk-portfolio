import React from 'react';
import { useQuery } from '@tanstack/react-query';
import { motion } from 'framer-motion';
import { ExternalLink, Linkedin, ArrowRight, Layers, Sparkles, Briefcase, Calendar, MapPin, Globe } from 'lucide-react';

const fetchNiftyProducts = async () => {
    const response = await fetch('https://niftysoftsol-server.onrender.com/api/products');
    if (!response.ok) {
        throw new Error('Failed to fetch products');
    }
    return response.json();
};

const workHistory = [
    {
        id: 1,
        company: "Global Speakers Circle",
        role: "Partner, Head of Technology & Business Oversight",
        date: "Aug 2025 - Present",
        duration: "6 mos",
        location: "Hybrid",
        description: "In my role as a Partner, I'm responsible for providing strategic leadership for our organization's technology infrastructure, which includes our public website, member portal, and various digital integrations. I focus on ensuring these platforms are secure, scalable, and provide an optimal experience for our users and community. A core part of my work is to collaborate with leadership, fellow partners, and team members to refine our technology initiatives, ensuring they are directly aligned with our mission and strategic goals. I also provide cross-functional oversight, working with our marketing, finance, and operations teams to drive integrated outcomes that serve our community more effectively."
    },
    {
        id: 2,
        company: "Global Speakers Circle",
        role: "Website Developer",
        date: "May 2025 - Jul 2025",
        duration: "3 mos",
        location: "Remote",
        description: "I revamped this organization's website on Wix with a complete UI redesign, giving it a modern and clean aesthetic. To enhance its functionality, I developed and implemented custom Wix Velo code using JavaScript to create a sophisticated access control system, ensuring that specific features were only available to users with the appropriate subscription plans. This project allowed me to quickly learn Wix Velo scripting and payment integration and gain valuable hands-on experience in building a dynamic, feature-rich website."
    },
    {
        id: 3,
        company: "Nubes Opus",
        role: "Jr Software Developer",
        date: "Dec 2024 - Oct 2025",
        duration: "11 mos",
        location: "Prosper, Texas, United States · On-site",
        description: "Part of a team which was responsible for analyzing various AI models to find the perfect fit for our mission: to identify Batten disease. The selected model Convoluted Neural Networks (CNN), available on AWS Cloud, is at the heart of our solution, which produces detailed OCT-A scans for a condition that can cause near-complete vision loss. Significantly grew my skills in AI model analysis. Completed an AI machine learning course by Professor Andrew Ng in collaboration with Stanford University and DeepLearning.AI. Earned my AWS Certified Cloud Practitioner certification as part of this internship."
    },
    {
        id: 4,
        company: "WahSmartDeals, LLC",
        role: "Junior Software Developer and Tester",
        date: "Jul 2024 - Aug 2024",
        duration: "2 mos",
        location: "Frisco, Texas, United States · Remote",
        description: "WahSmartDeals is an app that aims to give coupons on items and services, linking vendors and customers. I worked as an intern for this start-up as a junior developer and tester. I participated in daily stand-up calls with their team. I learned how to design an application using flowcharts and test as per test cases written. It was a great learning experience!"
    }
];

const Experience = () => {
    const { data: products, isLoading, isError } = useQuery({
        queryKey: ['niftyProducts'],
        queryFn: fetchNiftyProducts,
    });

    return (
        <div id="experience" className="bg-slate-50 py-24 relative overflow-hidden">
            {/* Background Decoration */}
            <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
                <div className="absolute top-1/4 -left-64 w-96 h-96 bg-indigo-100 rounded-full blur-3xl opacity-50 mix-blend-multiply animate-blob"></div>
                <div className="absolute bottom-1/4 -right-64 w-96 h-96 bg-purple-100 rounded-full blur-3xl opacity-50 mix-blend-multiply animate-blob animation-delay-2000"></div>
            </div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <div className="text-center mb-20">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="inline-block"
                    >
                        <h2 className="text-4xl md:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-indigo-600 to-purple-600 mb-6">
                            Professional Experience
                        </h2>
                        <div className="h-1 w-24 bg-gradient-to-r from-indigo-600 to-purple-600 mx-auto rounded-full"></div>
                    </motion.div>
                </div>

                {/* Ventures Section */}
                <div className="mb-24">
                    <h3 className="text-2xl font-bold text-gray-800 mb-2 flex items-center">
                        <Sparkles className="w-6 h-6 text-indigo-600 mr-2" />
                        My Ventures
                    </h3>
                    <p className="text-gray-600 mb-8 ml-8">CEO & Founder of Nifty Software Solutions</p>

                    {isLoading ? (
                        <div className="text-center py-10 text-gray-500">Loading ventures...</div>
                    ) : isError ? (
                        <div className="text-center py-10 text-red-500">Failed to load venture data.</div>
                    ) : (
                        <div className="grid grid-cols-1 gap-12">
                            {products && products.map((product, index) => (
                                <motion.div
                                    key={product._id}
                                    initial={{ opacity: 0, y: 50 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: index * 0.2 }}
                                    className="bg-white rounded-3xl shadow-xl overflow-hidden border border-gray-100 group hover:shadow-2xl transition-all duration-300"
                                >
                                    <div className="grid grid-cols-1 lg:grid-cols-2">
                                        <div className="p-8 lg:p-12 flex flex-col justify-center bg-gradient-to-br from-slate-900 to-slate-800 text-white relative overflow-hidden">
                                            <div className="absolute top-0 right-0 w-64 h-64 bg-indigo-500 rounded-full blur-3xl opacity-20 -translate-y-1/2 translate-x-1/2 group-hover:opacity-30 transition-opacity"></div>

                                            <div className="relative z-10">
                                                <div className="inline-flex items-center space-x-2 bg-indigo-500/20 px-3 py-1 rounded-full text-indigo-300 text-sm font-semibold mb-6 border border-indigo-500/30">
                                                    <Sparkles className="w-4 h-4" />
                                                    <span>Made by Nifty Software Solutions</span>
                                                </div>
                                                <h3 className="text-3xl md:text-4xl font-bold mb-2">{product.title}</h3>
                                                <h4 className="text-xl text-indigo-400 mb-6 font-light">{product.subtitle}</h4>
                                                <div className="flex flex-wrap gap-4 mt-auto">
                                                    <a
                                                        href={product.link}
                                                        target="_blank"
                                                        rel="noopener noreferrer"
                                                        className="inline-flex items-center px-6 py-3 bg-indigo-600 hover:bg-indigo-700 text-white rounded-xl font-medium transition-all transform hover:translate-y-[-2px] shadow-lg shadow-indigo-500/25"
                                                    >
                                                        {product.linkText || "Visit Site"} <ExternalLink className="ml-2 w-4 h-4" />
                                                    </a>
                                                    {product.linkedInPost && (
                                                        <a
                                                            href={product.linkedInPost}
                                                            target="_blank"
                                                            rel="noopener noreferrer"
                                                            className="inline-flex items-center px-6 py-3 bg-white/10 hover:bg-white/20 text-white rounded-xl font-medium transition-all backdrop-blur-sm border border-white/10"
                                                        >
                                                            <Linkedin className="mr-2 w-4 h-4" /> View Post
                                                        </a>
                                                    )}
                                                </div>
                                            </div>
                                        </div>

                                        <div className="p-8 lg:p-12 flex flex-col justify-center bg-white">
                                            <div className="mb-6">
                                                <div className="w-12 h-12 bg-indigo-100 rounded-2xl flex items-center justify-center text-indigo-600 mb-6">
                                                    <Layers className="w-6 h-6" />
                                                </div>
                                                <h4 className="text-xl font-bold text-gray-900 mb-4">About the Product</h4>
                                                <p className="text-gray-600 leading-relaxed text-lg">
                                                    {product.description}
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                    )}
                </div>

                {/* Career History Section */}
                <div>
                    <h3 className="text-2xl font-bold text-gray-800 mb-12 flex items-center">
                        <Briefcase className="w-6 h-6 text-indigo-600 mr-2" />
                        Career History
                    </h3>

                    <div className="relative border-l-2 border-indigo-200 ml-4 space-y-16">
                        {workHistory.map((job, index) => (
                            <motion.div
                                key={job.id}
                                initial={{ opacity: 0, x: -20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.2 }}
                                className="relative pl-10"
                            >
                                {/* Timeline Dot */}
                                <div className="absolute -left-[9px] top-2 w-4 h-4 rounded-full bg-indigo-600 border-4 border-white shadow-md"></div>

                                <div className="bg-white p-8 rounded-2xl shadow-lg border border-gray-100 hover:shadow-xl transition-shadow duration-300">
                                    <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-6">
                                        <div>
                                            <h4 className="text-2xl font-bold text-gray-900">{job.role}</h4>
                                            <div className="flex items-center mt-2 text-indigo-600 font-semibold text-lg">
                                                <Globe className="w-4 h-4 mr-2" />
                                                {job.company}
                                            </div>
                                        </div>
                                        <div className="mt-4 md:mt-0 text-right">
                                            <div className="inline-flex items-center text-gray-500 bg-gray-50 px-3 py-1 rounded-full text-sm font-medium mb-2">
                                                <Calendar className="w-4 h-4 mr-2" />
                                                {job.date}
                                            </div>
                                            <div className="text-sm text-gray-400 flex items-center md:justify-end">
                                                <MapPin className="w-3 h-3 mr-1" /> {job.location}
                                            </div>
                                        </div>
                                    </div>

                                    <p className="text-gray-600 leading-relaxed text-lg">
                                        {job.description}
                                    </p>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>

            </div>
        </div>
    );
};

export default Experience;
