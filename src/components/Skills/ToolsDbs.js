import React, { useEffect, useState } from 'react';
import TransitionGroup from 'react-transition-group/TransitionGroup';
import StarIcon from '../../assets/images/icons/star.png';
import { sendRequest, clearError }  from '../../util/fetchApi';
import ErrorModal from '../UI/ErrorModal';
import './Skills.css';
import { fetchToolsDbsFromBackend } from '../../util/requests';

const ToolsDbs = () => {
    const [loadedToolsDbs, setLoadedToolsDbs] = useState();
    const [shouldShowError, setShouldShowError] = useState(false);
 
    useEffect(() => {
      (async () => {
        const data = await fetchToolsDbsFromBackend(sendRequest);
        if(data === undefined || !data) {
            setShouldShowError(true);
        }
        setLoadedToolsDbs(data);   
      })();
    }, []);
  
    return (
        <div>
         <ErrorModal show={shouldShowError} error="Failed to fetch the tools/db experience" onClear={clearError} />
         <h4><u>Tools</u></h4> 
         <TransitionGroup component="table">
         <thead className="TableInfo">
            <tr className="TableInfo">
                <td className="TableInfo">Tool/DB</td>
                <td className="TableInfo">Beginner</td>
                <td className="TableInfo">Intermediate</td>
                <td className="TableInfo">Expert</td>
            </tr>
            </thead>

            {loadedToolsDbs && loadedToolsDbs.map(loadedToolDb => (
                <tbody key={loadedToolDb.id.toString()} className="TableInfo">
                <tr className="TableInfo">
                    <td className="TableInfo">{loadedToolDb.toolOrDb.toString()}</td>
                         
                    <td className="TableInfo">
                    {loadedToolDb.expertiseLevel.toString() === 'Beginner' ? <img src={StarIcon} alt="Beginner" className="Icon" /> 
                    : ''}
                    </td>
                    <td className="TableInfo">
                    {loadedToolDb.expertiseLevel.toString() === 'Intermediate' ? <img src={StarIcon} alt="Intermediate" className="Icon" /> 
                    : ''}
                    </td>

                    <td className="TableInfo">
                    {loadedToolDb.expertiseLevel.toString() === 'Expert' ? <img src={StarIcon} alt="Expert" className="Icon" /> 
                    : ''}
                    </td>          
                </tr>
            </tbody>  
            ))}
        </TransitionGroup>
        </div>
    );
};

export default ToolsDbs;