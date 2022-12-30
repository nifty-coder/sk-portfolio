import React, { useEffect, useState } from 'react';
import ErrorModal from '../../../helpers/ErrorModal';
import { useHttpClient } from '../../../helpers/http-hook';
import Card from '../../UI/Card';
import classes from './Packages.module.css';

const Packages = () => {
    const { error, sendRequest, clearError } = useHttpClient();
    const [loadedPackages, setLoadedPackages] = useState();
  
    useEffect(() => {
      const fetchPackages = async () => {
        try {
          const responseData = await sendRequest(
            process.env.REACT_APP_BACKEND_API_URL + '/packages');
          setLoadedPackages(responseData.packages);
        } catch (err) {}
      };
      fetchPackages();
    }, [sendRequest]);

    return (
        <div>
          <ErrorModal error={error} onClear={clearError} />
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