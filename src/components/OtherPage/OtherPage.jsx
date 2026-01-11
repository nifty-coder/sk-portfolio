import React from 'react';
import '../../App.css';
import Certificates from './Certificates/Certificates';
import Packages from './Packages/Packages';

const OtherPage = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-12">
      <Certificates />
      <Packages />
    </div>
  );
};

export default OtherPage; 