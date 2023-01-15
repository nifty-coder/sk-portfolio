import React, { useEffect, useState } from 'react';
import TransitionGroup from 'react-transition-group/TransitionGroup';
import StarIcon from '../../assets/images/icons/star.png';
import { sendRequest, clearError }  from '../../util/fetchApi';
import ErrorModal from '../UI/ErrorModal';
import './Skills.css';
import { fetchTechStacksFromBackend } from '../../util/requests';

const TechStacks = () => {
    const [loadedTechStacks, setLoadedTechStacks] = useState();
    const [shouldShowError, setShouldShowError] = useState(false);
 
    useEffect(() => {
      (async () => {
        const data = await fetchTechStacksFromBackend(sendRequest);
        if(data === undefined || !data) {
            setShouldShowError(true);
        }
        setLoadedTechStacks(data);  
      })();
    }, []);
  
    return (
        <div>
         <ErrorModal show={shouldShowError} error="Failed to fetch the tech stacks" onClear={clearError} />
         <h4><u>Programming</u></h4>
         <TransitionGroup component="table">
           <thead className="TableInfo">
            <tr className="TableInfo">
                <td className="TableInfo">Language/Framework</td>
                <td className="TableInfo">Beginner</td>
                <td className="TableInfo">Intermediate</td>
                <td className="TableInfo">Expert</td>
            </tr>
           </thead>
            {loadedTechStacks && loadedTechStacks.map(loadedTechStack => (
                <tbody key={loadedTechStack.id.toString()} className="TableInfo">
                <tr className="TableInfo">
                    <td className="TableInfo">{loadedTechStack.techLang.toString()}</td>
                         
                    <td className="TableInfo">
                    {loadedTechStack.expertiseLevel.toString() === 'Beginner' ? <img src={StarIcon} alt="Beginner" className="Icon" /> 
                    : ''}
                    </td>
                    <td className="TableInfo">
                    {loadedTechStack.expertiseLevel.toString() === 'Intermediate' ? <img src={StarIcon} alt="Intermediate" className="Icon" /> 
                    : ''}
                    </td>

                    <td className="TableInfo">
                    {loadedTechStack.expertiseLevel.toString() === 'Expert' ? <img src={StarIcon} alt="Expert" className="Icon" /> 
                    : ''}
                    </td>          
                </tr>
            </tbody>  
            ))}
        </TransitionGroup>
        </div>
    );
};

export default TechStacks;