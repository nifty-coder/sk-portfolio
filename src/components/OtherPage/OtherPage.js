import React from 'react';
import '../../App.css';
import Certificates from './Certificates/Certificates';
import Packages from './Packages/Packages';

const OtherPage = () => {
  return (
    <div className="OtherPageGrid">
      <Certificates />
      <Packages />
    </div>
  );
};

export default OtherPage; 