import React from 'react';
import { useQuery } from '@tanstack/react-query';
import { motion } from 'framer-motion';
import { Mail, GraduationCap, MapPin, Info, Github, Youtube, Sparkles, ExternalLink, User } from 'lucide-react';
import { fetchInfoFromBackend } from '../../util/requests';
import profileImage from '../../assets/images/profile.png';
import bannerImage from '../../assets/images/banner.png';

const BasicInfo = () => {
  const { data: basicInfo, isLoading, isError } = useQuery({
    queryKey: ['basicInfo'],
    queryFn: fetchInfoFromBackend,
  });

  if (isLoading) return <div className="text-center p-8">Loading profile...</div>;
  if (isError) return <div className="text-red-500 text-center p-8">Failed to load profile.</div>;

  return (
    <div className="max-w-7xl mx-auto px-4">
      {basicInfo && basicInfo.map((info) => (
        <div key={info.id} className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Profile Card Side */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-6 xl:col-span-5"
          >
            <div className="bg-white rounded-3xl shadow-xl border border-gray-100 p-8 text-center relative overflow-hidden group">
              {/* Banner Image Header */}
              <div
                className="absolute top-0 left-0 w-full h-32 bg-cover bg-center"
                style={{ backgroundImage: `url(${bannerImage})` }}
              >
                <div className="absolute inset-0 bg-gradient-to-r from-slate-900/60 to-slate-900/40"></div>
              </div>

              <div className="relative mx-auto w-40 h-40 rounded-full border-4 border-white shadow-lg overflow-hidden bg-slate-200 mt-12 mb-6 group-hover:scale-105 transition-transform duration-300 z-10">
                <img
                  src={info.imageUrl || profileImage}
                  alt={info.name}
                  className="w-full h-full object-cover"
                  onError={(e) => {
                    e.target.onerror = null;
                    e.target.style.display = 'none';
                    e.target.nextSibling.style.display = 'flex';
                  }}
                />
                <div className="hidden absolute inset-0 items-center justify-center bg-indigo-100 text-indigo-400">
                  <User className="w-20 h-20" />
                </div>
              </div>

              <h2 className="text-3xl font-bold text-gray-900 mb-2 relative z-10">{info.name}</h2>
              <p className="text-indigo-600 font-medium mb-6 flex items-center justify-center relative z-10">
                <MapPin className="w-4 h-4 mr-1" /> {info.location}
              </p>

              <div className="space-y-4 text-left relative z-10">
                <div className="flex items-center p-3 bg-slate-50 rounded-xl hover:bg-slate-100 transition-colors">
                  <div className="bg-white p-2 rounded-lg shadow-sm text-indigo-500 mr-3">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div className="overflow-hidden">
                    <p className="text-xs text-gray-400 uppercase font-bold">Email</p>
                    <a href={`mailto:${info.email}`} className="text-gray-900 font-medium truncate block hover:text-indigo-600 transition-colors">{info.email}</a>
                  </div>
                </div>

                <div className="flex items-center p-3 bg-slate-50 rounded-xl hover:bg-slate-100 transition-colors">
                  <div className="bg-white p-2 rounded-lg shadow-sm text-purple-500 mr-3">
                    <GraduationCap className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="text-xs text-gray-400 uppercase font-bold">Education</p>
                    <p className="text-gray-900 font-medium">{info.educationOrProfession}</p>
                  </div>
                </div>
              </div>

              <div className="flex justify-center space-x-3 mt-8 relative z-10">
                <a href={info.githubProfile} target="_blank" rel="noopener noreferrer" className="p-3 bg-gray-900 text-white rounded-full hover:bg-gray-800 transition-colors tooltip hover:scale-110 transform duration-200" aria-label="GitHub">
                  <Github className="w-6 h-6" />
                </a>
                <a href={info.ytChannelCoding} target="_blank" rel="noopener noreferrer" className="p-3 bg-red-600 text-white rounded-full hover:bg-red-700 transition-colors hover:scale-110 transform duration-200" aria-label="YouTube">
                  <Youtube className="w-6 h-6" />
                </a>
              </div>
            </div>
          </motion.div>

          {/* Bio Side */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-6 xl:col-span-7 flex flex-col justify-center h-full pt-8 lg:pt-0"
          >
            <div className="mb-6 flex items-center">
              <span className="w-12 h-1 bg-indigo-600 rounded-full mr-4"></span>
              <span className="text-indigo-600 font-bold tracking-widest uppercase text-sm">About Me</span>
            </div>
            <h3 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-8 leading-tight">
              Transforming ideas into <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-purple-600">reality.</span>
            </h3>

            <div className="prose prose-lg text-gray-600 leading-relaxed mb-8">
              <p>
                {info.description}
              </p>
            </div>

            <div className="grid grid-cols-2 gap-6 mt-4">
              <div className="border-l-4 border-indigo-200 pl-4 py-2 hover:bg-indigo-50/50 transition-colors rounded-r-lg">
                <h4 className="text-3xl font-bold text-indigo-600">3+</h4>
                <p className="text-gray-500 font-medium">Years Experience</p>
              </div>
              <div className="border-l-4 border-purple-200 pl-4 py-2 hover:bg-purple-50/50 transition-colors rounded-r-lg">
                <h4 className="text-3xl font-bold text-purple-600">10+</h4>
                <p className="text-gray-500 font-medium">Projects Completed</p>
              </div>
            </div>
          </motion.div>
        </div>
      ))}
    </div>
  );
};

export default BasicInfo;