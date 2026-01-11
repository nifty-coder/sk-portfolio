import React from 'react';
import { useQuery } from '@tanstack/react-query';
import { motion } from 'framer-motion';
import { Award, ExternalLink, BookOpen, User } from 'lucide-react';
import { fetchCertificatesFromBackend } from '../../../util/requests';

const Certificates = () => {
  const { data: certificates, isLoading, isError } = useQuery({
    queryKey: ['certificates'],
    queryFn: fetchCertificatesFromBackend,
  });

  if (isLoading) return <div className="text-center p-4">Loading certificates...</div>;
  if (isError) return <div className="text-red-500 p-4">Failed to load certificates.</div>;

  return (
    <div className="mb-12">
      <h2 className="text-2xl font-bold mb-6 flex items-center text-gray-800">
        <Award className="w-8 h-8 mr-3 text-yellow-500" />
        Certificates
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {certificates && certificates.map((cert) => (
          <motion.div
            key={cert.id}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="bg-white rounded-xl shadow-md p-6 border-l-4 border-yellow-400 hover:shadow-lg transition-shadow"
          >
            <h3 className="text-lg font-bold text-gray-800 mb-2">{cert.course}</h3>
            <div className="flex items-center text-gray-600 text-sm mb-2">
              <BookOpen className="w-4 h-4 mr-2 text-gray-400" />
              <span>{cert.platform}</span>
            </div>
            {cert.otherInfo && (
              <div className="flex items-start text-gray-500 text-sm mb-4">
                <User className="w-4 h-4 mr-2 text-gray-400 mt-1" />
                <span>{cert.otherInfo}</span>
              </div>
            )}
            <a href={cert.file} target="_blank" rel="noopener noreferrer"
              className="inline-flex items-center text-blue-600 hover:text-blue-800 text-sm font-medium"
            >
              View Certificate <ExternalLink className="w-4 h-4 ml-1" />
            </a>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Certificates;