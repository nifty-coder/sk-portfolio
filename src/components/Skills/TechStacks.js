import React, { useEffect, useState } from 'react';
import TransitionGroup from 'react-transition-group/TransitionGroup';
import StarIcon from '../../assets/images/icons/star.png';
import { useHttpClient } from '../../helpers/http-hook';
import ErrorModal from '../../helpers/ErrorModal';
import './Skills.css';

const TechStacks = () => {
    const { error, sendRequest, clearError } = useHttpClient();
    const [loadedTechStacks, setLoadedTechStacks] = useState();
  
    useEffect(() => {
      const fetchTechStacks = async () => {
        try {
          const responseData = await sendRequest(
            process.env.REACT_APP_BACKEND_API_URL + '/techStacks');
          setLoadedTechStacks(responseData.techs);
        } catch (err) {}
      };
      fetchTechStacks();
    }, [sendRequest]);
  
    return (
        <div>
         <ErrorModal error={error} onClear={clearError} />
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