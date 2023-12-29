import React, { useEffect, useState } from 'react';
import classes from './Projects.module.css';
import ProjIcon from '../../assets/images/icons/projects.png';
import GitHubIcon from '../../assets/images/icons/github.png';
import Card from 'react-bootstrap/Card';
import { TransitionGroup } from 'react-transition-group';
import ErrorModal from '../UI/ErrorModal';
import { sendRequest, clearError }  from '../../util/fetchApi';
import { fetchProjectsFromBackend } from '../../util/requests';

const Projects = () => {
    const [loadedProjects, setLoadedProjects] = useState();
    const [shouldShowError, setShouldShowError] = useState(false);

    useEffect(() => {
      (async () => {
        const data = await fetchProjectsFromBackend(sendRequest);
        if(data === undefined || !data) {
          setShouldShowError(true);
        }
        setLoadedProjects(data); 
      })();
    }, []);

    return (
     <div>
      <ErrorModal show={shouldShowError} error="Failed to fetch projects" onClear={clearError} />
       <Card>
         <h2 className={classes.TableTitle}><img src={ProjIcon} alt="" className={classes.Icon}/> Projects</h2>             
         <span>
          <a href="/certificates-packages" target="_blank" rel="noopener noreferrer">My achievements</a>
         </span>

         <TransitionGroup component="div" className={classes.Projects}>
          <table className={classes.OverallTable}>
            <thead className={classes.TableHeading}>
              <tr className={classes.Table}>
                  <td className={classes.Table}>Type</td>
                  <td className={classes.Table}>Project Name</td>
                  <td className={classes.Table}>Status</td>
                  <td className={classes.Table}>Published</td>
                  <td className={classes.Table}>Project Description</td>
                  <td className={classes.Table}>Technologies Used</td>
                  <td className={classes.Table}>App Link</td>
                  <td className={classes.Table}>GitHub Link</td>
               </tr>
            </thead>
         {loadedProjects && loadedProjects.map(loadedProject => (
          <tbody className={classes.Table} key={loadedProject.id.toString()}>
            <tr className={classes.Table}>
            <td className={classes.Table}>{loadedProject.webOrMobile.toString()}</td>              
              <td className={classes.Table}>{loadedProject.name.toString()}</td>
              <td className={classes.Table}>{loadedProject.status.toString()}</td>
              <td className={classes.Table}>{loadedProject.date.toString()}</td>
              <td className={classes.Table}>{loadedProject.description.toString()}</td>
              <td className={classes.Table}>
                <p className={classes.Languages}>{loadedProject.technologies.toString()}</p>
              </td>
              <td className={classes.Table}>
               <a href={loadedProject.appUrl} target="_blank" rel="noopener noreferrer">
                 <img src={loadedProject.appLogo} alt="App's Logo" className={classes.Icon}/>
                </a>
               </td>
               <td className={classes.Table}>
                <a href={loadedProject.githubUrl} target="_blank" rel="noopener noreferrer">
                  <img src={GitHubIcon} alt="GitHub's Logo" className={classes.Icon}/></a>
               </td>
              </tr>
            </tbody>
        ))}
      </table>
      
      <p className={classes.TableFooter}>and more to come...</p>
    </TransitionGroup> 
   </Card>
   </div>
  );
};

export default Projects;