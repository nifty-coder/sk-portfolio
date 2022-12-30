import React, { useState, useEffect } from 'react';
import classes from './Certificates.module.css';
import TrophyIcon from '../../../assets/images/icons/trophy.png';
import ErrorModal from '../../../helpers/ErrorModal';
import { useHttpClient } from '../../../helpers/http-hook';
import Card from '../../UI/Card';

const Certificates = () => {
  const { error, sendRequest, clearError } = useHttpClient();
  const [loadedCertificates, setLoadedCertificates] = useState();

  useEffect(() => {
    const fetchCertificates = async () => {
      try {
        const responseData = await sendRequest(
          process.env.REACT_APP_BACKEND_API_URL + '/certificates');
        setLoadedCertificates(responseData.certificates);
      } catch (err) {}
    };
    fetchCertificates();
  }, [sendRequest]);

    return (
      <div>
        <ErrorModal error={error} onClear={clearError} />
        <Card>
        <h2><img src={TrophyIcon} alt="My Certificates" className={classes.Icon} /> Certificates</h2>
    
      {loadedCertificates && loadedCertificates.map((loadedCertificate, index) => (
         <div key={loadedCertificate.id.toString()} className={classes.Certificates}>
           <h4>Certificate #{index + 1}</h4>
           <h4>Course Name: {loadedCertificate.course}</h4>
           <p>On {loadedCertificate.platform}</p>
           <p>{loadedCertificate.otherInfo && 'Other Information: ' + loadedCertificate.otherInfo}</p>
           <a href={loadedCertificate.file} target="_blank" rel="noopener noreferrer">Certificate Link</a>
          <div className={classes.Line}><hr /></div>
         </div>
      ))}
      </Card>
     </div>
    );
};

export default Certificates;