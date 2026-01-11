import React from 'react';
import { useQuery } from '@tanstack/react-query';
import { motion } from 'framer-motion';
import { Box, ExternalLink, Github } from 'lucide-react';
import { fetchPackagesFromBackend } from '../../../util/requests';

const Packages = () => {
  const { data: packages, isLoading, isError } = useQuery({
    queryKey: ['packages'],
    queryFn: fetchPackagesFromBackend,
  });

  if (isLoading) return <div className="text-center p-4">Loading packages...</div>;
  if (isError) return <div className="text-red-500 p-4">Failed to load packages.</div>;

  return (
    <div>
      <h2 className="text-2xl font-bold mb-6 flex items-center text-gray-800">
        <Box className="w-8 h-8 mr-3 text-red-500" />
        NPM Packages
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {packages && packages.map((pkg, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="bg-white rounded-xl shadow-md p-6 border-t-4 border-red-500 hover:shadow-lg transition-shadow"
          >
            <h3 className="text-xl font-bold text-gray-800 mb-2">{pkg.package}</h3>
            <p className="text-gray-600 mb-6">{pkg.description}</p>

            <div className="flex space-x-4">
              <a href={pkg.npmLink} target="_blank" rel="noopener noreferrer"
                className="inline-flex items-center text-red-600 hover:text-red-800 text-sm font-medium"
              >
                <ExternalLink className="w-4 h-4 mr-2" />
                View on NPM
              </a>
              {pkg.githubRepo && (
                <a href={pkg.githubRepo} target="_blank" rel="noopener noreferrer"
                  className="inline-flex items-center text-gray-700 hover:text-black text-sm font-medium"
                >
                  <Github className="w-4 h-4 mr-2" />
                  GitHub Repo
                </a>
              )}
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Packages;