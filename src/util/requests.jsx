import { sendRequest } from './fetchApi';

export const fetchStatusFromBackend = async () => {
  const responseData = await sendRequest('/status');
  return responseData.status;
};

export const fetchInfoFromBackend = async () => {
  const responseData = await sendRequest('/basicInfo');
  return responseData.basicInfo;
};

export const fetchTechStacksFromBackend = async () => {
  const responseData = await sendRequest('/techStacks');
  return responseData.techs;
};

export const fetchToolsDbsFromBackend = async () => {
  const responseData = await sendRequest('/toolsOrDbs');
  return responseData.toolsDbs;
};

export const fetchProjectsFromBackend = async () => {
  const responseData = await sendRequest('/projects');
  return responseData.projects;
};

export const fetchCertificatesFromBackend = async () => {
  const responseData = await sendRequest('/certificates');
  return responseData.certificates;
};

export const fetchPackagesFromBackend = async () => {
  const responseData = await sendRequest('/packages');
  return responseData.packages;
};