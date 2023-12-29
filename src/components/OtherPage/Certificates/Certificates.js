import React, { useState, useEffect } from 'react';
import classes from './Certificates.module.css';
import TrophyIcon from '../../../assets/images/icons/trophy.png';
import ErrorModal from '../../UI/ErrorModal';
import { sendRequest, clearError }  from '../../../util/fetchApi';
import Card from 'react-bootstrap/Card';
import { fetchCertificatesFromBackend } from '../../../util/requests';

const Certificates = () => {
  const [loadedCertificates, setLoadedCertificates] = useState();
  const [shouldShowError, setShouldShowError] = useState(false);
 
  useEffect(() => {
    (async () => {
      const data = await fetchCertificatesFromBackend(sendRequest);
      if(data === undefined || !data) {
        setShouldShowError(true);
      }
      setLoadedCertificates(data);  
    })();
  }, []);

    return (
      <div>
        <ErrorModal show={shouldShowError} error="Failed to fetch Certificates" onClear={clearError} />
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