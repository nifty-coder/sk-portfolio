export const sendRequest = async (endOfUrl, method = 'GET', body = null, headers = {}) => {
    try {
        const response = await fetch(
          process.env.REACT_APP_BACKEND_API_URL + endOfUrl, 
          {
            method,
            body,
            headers
          }
        );
        const responseData = await response.json();
  
        if (!response.ok) {
          throw new Error(responseData.message);
        }

        return responseData;
      } catch (err) {
        return err ;
      }
};
export const clearError = () => {};