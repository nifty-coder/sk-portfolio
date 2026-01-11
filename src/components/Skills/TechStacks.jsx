import React from 'react';
import { useQuery } from '@tanstack/react-query';
import { motion } from 'framer-motion';
import { Code2, Star } from 'lucide-react';
import { fetchTechStacksFromBackend } from '../../util/requests';

const TechStacks = () => {
    const { data: techStacks, isLoading, isError } = useQuery({
        queryKey: ['techStacks'],
        queryFn: fetchTechStacksFromBackend,
    });

    if (isLoading) return <div className="text-center p-4">Loading skills...</div>;
    if (isError) return <div className="text-red-500 p-4">Failed to load skills.</div>;

    const getLevelColor = (level) => {
        switch (level) {
            case 'Expert': return 'bg-green-500';
            case 'Intermediate': return 'bg-blue-500';
            case 'Beginner': return 'bg-yellow-500';
            default: return 'bg-gray-300';
        }
    };

    return (
        <div className="mb-8">
            <h3 className="text-xl font-bold mb-4 flex items-center text-gray-800">
                <Code2 className="w-5 h-5 mr-2 text-indigo-600" />
                Programming Languages & Frameworks
            </h3>
            <motion.div
                variants={{
                    hidden: { opacity: 0 },
                    show: {
                        opacity: 1,
                        transition: { staggerChildren: 0.1 }
                    }
                }}
                initial="hidden"
                animate="show"
                className="grid grid-cols-1 md:grid-cols-2 gap-4"
            >
                {techStacks && techStacks.map((stack) => (
                    <motion.div
                        key={stack.id}
                        variants={{
                            hidden: { opacity: 0, x: -20 },
                            show: { opacity: 1, x: 0 }
                        }}
                        className="group bg-white p-5 rounded-2xl shadow-sm border border-slate-100 flex justify-between items-center hover:shadow-md hover:border-indigo-100 transition-all duration-300"
                    >
                        <div className="flex items-center space-x-3">
                            <div className="w-1.5 h-1.5 rounded-full bg-indigo-500"></div>
                            <span className="font-semibold text-slate-700">{stack.techLang}</span>
                        </div>
                        <span className={`px-3 py-1 rounded-lg text-xs text-white font-bold tracking-wider uppercase ${getLevelColor(stack.expertiseLevel)}`}>
                            {stack.expertiseLevel}
                        </span>
                    </motion.div>
                ))}
            </motion.div>
        </div>
    );
};

export default TechStacks;