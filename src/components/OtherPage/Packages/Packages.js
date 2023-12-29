import React, { useEffect, useState } from 'react';
import ErrorModal from '../../UI/ErrorModal';
import { sendRequest, clearError }  from '../../../util/fetchApi';
import { fetchPackagesFromBackend } from '../../../util/requests';
import Card from 'react-bootstrap/Card';
import classes from './Packages.module.css';

const Packages = () => {
    const [loadedPackages, setLoadedPackages] = useState();
    const [shouldShowError, setShouldShowError] = useState(false);
 
    useEffect(() => {
      (async () => {
        const data = await fetchPackagesFromBackend(sendRequest);
        if(data === undefined || !data) {
          setShouldShowError(true);
        }
        setLoadedPackages(data);   
      })();
    }, []);

    return (
        <div>
          <ErrorModal show={shouldShowError} error="Failed to fetch packages" onClear={clearError} />
          <Card>
            <h2>My Packages</h2>
            {loadedPackages && loadedPackages.map((loadedPackage, index) => (
                <div key={index} className={classes.Packages}>
                <h4>Package #{index + 1}</h4>
                <h4>Package Name: {loadedPackage.package.toString()}</h4>
                <p>{loadedPackage.description.toString()}</p>

                <a href={loadedPackage.npmLink} target="_blank" rel="noopener noreferrer">Check this package out on npm.js!</a>
                <br />
                {loadedPackage.githubRepo && <a href={loadedPackage.githubRepo} target="_blank" rel="noopener noreferrer">If you are interested about the code for this, click here to see my GitHub repo.</a>}
                
                <div className={classes.Line}><hr /></div>
               </div>
            ))}
            </Card>
        </div>
    );
};

export default Packages;