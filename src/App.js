import React, { useState, useEffect } from 'react';
import { Route, Routes, Navigate } from 'react-router-dom';
import Home from './Home';
import OtherPage from './components/OtherPage/OtherPage';
import ErrorModal from './helpers/ErrorModal';
import { useHttpClient } from './helpers/http-hook';

const App = () => {
  const { error, sendRequest, clearError } = useHttpClient();
  const [loadedStatus, setLoadedStatus] = useState();

  useEffect(() => {
    const fetchStatus = async () => {
      try {
        const responseData = await sendRequest(
          process.env.REACT_APP_BACKEND_API_URL + '/status');
        setLoadedStatus(responseData.status);
      } catch (err) {}
    };
    fetchStatus();
  }, [sendRequest]);

  return (
   <>
    <ErrorModal error={error} onClear={clearError} />
    {loadedStatus && loadedStatus.map(status => (
      <h2 id="status">
        {status.statusCode !== 200 && status.status} {status.statusCode !== 200 && `as of ${status.date}.`}
      </h2>
    ))} 
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/certificates-packages" element={<OtherPage />} />
      <Route path="*" element={<Navigate replace to="/" />} />
    </Routes>
   </>
  );
};

export default App; 