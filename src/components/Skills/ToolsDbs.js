import React, { useEffect, useState } from 'react';
import TransitionGroup from 'react-transition-group/TransitionGroup';
import StarIcon from '../../assets/images/icons/star.png';
import { useHttpClient } from '../../helpers/http-hook';
import ErrorModal from '../../helpers/ErrorModal';
import './Skills.css';

const ToolsDbs = () => {
    const { error, sendRequest, clearError } = useHttpClient();
    const [loadedToolsDbs, setLoadedToolsDbs] = useState();
  
    useEffect(() => {
      const fetchToolsDbs = async () => {
        try {
          const responseData = await sendRequest(
            process.env.REACT_APP_BACKEND_API_URL + '/toolsOrDbs');
          setLoadedToolsDbs(responseData.toolsDbs);
        } catch (err) {}
      };
      fetchToolsDbs();
    }, [sendRequest]);
  
    return (
        <div>
         <ErrorModal error={error} onClear={clearError} />
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