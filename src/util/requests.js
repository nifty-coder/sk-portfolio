export const fetchStatusFromBackend = async (sendRequest) => {
    try {
      const responseData = await sendRequest('/status');
      return responseData.status;
    } catch (err) {
      return err;
    }
};

export const fetchInfoFromBackend = async (sendRequest) => {
    try {
      const responseData = await sendRequest('/basicInfo');
      return responseData.basicInfo;
    } catch (err) {
      return err;
    }
};

export const fetchTechStacksFromBackend = async (sendRequest) => {
    try {
      const responseData = await sendRequest('/techStacks');
      return responseData.techs;
    } catch (err) {
      return err;
    }
};

export const fetchToolsDbsFromBackend = async (sendRequest) => {
    try {
      const responseData = await sendRequest('/toolsOrDbs');
      return responseData.toolsDbs;
    } catch (err) {
      return err;
    }
};

export const fetchProjectsFromBackend = async (sendRequest) => {
    try {
      const responseData = await sendRequest('/projects');
      return responseData.projects;
    } catch (err) {
      return err;
    }
};

export const fetchCertificatesFromBackend = async (sendRequest) => {
    try {
      const responseData = await sendRequest('/certificates');
      return responseData.certificates;
    } catch (err) {
      return err;
    }
};

export const fetchPackagesFromBackend = async (sendRequest) => {
    try {
      const responseData = await sendRequest('/packages');
      return responseData.packages;
    } catch (err) {
      return err;
    }
};