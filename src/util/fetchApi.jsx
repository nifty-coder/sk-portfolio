
export const sendRequest = async (endOfUrl, method = 'GET', body = null, headers = {}) => {
  try {
    const response = await fetch(
      import.meta.env.VITE_BACKEND_API_URL + endOfUrl,
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
    throw err;
  }
};