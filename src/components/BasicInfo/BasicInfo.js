import React, { Fragment, useEffect, useState } from 'react';
import Card from 'react-bootstrap/Card';
import classes from './BasicInfo.module.css';
// import MyPicture from '../../assets/images/myself.jpeg';
import MailIcon from '../../assets/images/icons/mail.png';
import EduIcon from '../../assets/images/icons/education.jpg';
import LocationIcon from '../../assets/images/icons/location.png';
import InfoIcon from '../../assets/images/icons/info.png';
import { sendRequest, clearError }  from '../../util/fetchApi';
import ErrorModal from '../UI/ErrorModal';
import { fetchInfoFromBackend } from '../../util/requests';

const BasicInfo = () => {
  const [loadedInfo, setLoadedInfo] = useState();
  const [shouldShowError, setShouldShowError] = useState(false);
 
  useEffect(() => {
    (async () => {
      const data = await fetchInfoFromBackend(sendRequest);
      if(data === undefined || !data) {
        setShouldShowError(true);
      }
      setLoadedInfo(data);  
    })();
  }, []);

    return (
      <div className={classes.BasicInfo}>
        <ErrorModal show={shouldShowError} error="Failed to fetch basic info" onClear={clearError} />
        <Card>
        {loadedInfo && loadedInfo.map(lin => (
          <Fragment key={lin.id}>
            <img src={lin.imageUrl} alt="Me" className={classes.Image} />
              <h1>{lin.name}</h1>
       
              <h4><img src={LocationIcon} alt="Location" className={classes.Icon} /> {lin.location}</h4>
              <h4>
                <a href={`mailto: ${lin.email}`} target="_blank" rel="noopener noreferrer">
                  <img src={MailIcon} alt="Mail ID" className={classes.Icon} />
                  </a> {lin.email}
               </h4>
              <h4><img src={EduIcon} alt="Education" className={classes.Icon} /> {lin.educationOrProfession}</h4>
              <p><a href={lin.githubProfile} target="_blank" rel="noopener noreferrer">Follow me on GitHub!</a></p>
              <p><a href={lin.ytChannelCoding} target="_blank" rel="noopener noreferrer">Visit my coding YouTube channel!</a></p>
              {/* Intro section above */}
      
          <h4><img src={InfoIcon} alt="About Me and my Dream Company" className={classes.Icon} /> About Me and my Dream Company:</h4>   
          <p className={classes.AboutMe}>
           {lin.description}
          </p>        
         </Fragment>  
        ))}
    </Card>
    </div>
);
};
    
export default BasicInfo;