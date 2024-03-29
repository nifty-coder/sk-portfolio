import React, { useState, useEffect } from 'react';
import { Route, Routes, Navigate } from 'react-router-dom';
import Home from './Home';
import OtherPage from './components/OtherPage/OtherPage';
import ErrorModal from './components/UI/ErrorModal';
import { sendRequest, clearError }  from './util/fetchApi';
import { fetchStatusFromBackend } from './util/requests';
import Spinner from 'react-bootstrap/Spinner';
import Card from 'react-bootstrap/Card';

const App = () => {
  const [loadedStatus, setLoadedStatus] = useState();
  const [shouldShowError, setShouldShowError] = useState(false);
  useEffect(() => {
    setTimeout(() => {}, 10000);
 
    (async () => {
      const data = await fetchStatusFromBackend(sendRequest);
      if(data === undefined || !data) {
        setShouldShowError(true);
      }
      setLoadedStatus(data);
    })();
  }, []);

  return (
   <>
    <ErrorModal show={shouldShowError} error="Failed to fetch" onClear={clearError} />
    <Card style={{ height: '10vh' }}>
      {loadedStatus ? loadedStatus.map(status => {
        return (
        <>
          <h4 id="status" key={status.statusCode}>
            {status.statusCode !== 200 && status.status} {status.statusCode !== 200 && `as of ${status.date}.`}
          </h4>
         {status.statusCode !== 200 && <Spinner animation="border" role="status">
          <span className="visually-hiidden">Loading...</span>
          </Spinner>}
        </>
       );
      }) : (
        <Spinner animation="border" role="status">
          <span className="visually-hidden">Loading...</span>
        </Spinner>
      )}   
    </Card>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/certificates-packages" element={<OtherPage />} />
      <Route path="*" element={<Navigate replace to="/" />} />
    </Routes> 
   </>
  );
};

export default App; 