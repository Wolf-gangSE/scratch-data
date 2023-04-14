import { useState } from 'react';
import api from './api';

const useApi = () => {
  const [project, setProject] = useState([]);
  const [studio, setStudio] = useState([]);

  const getProject = async (id) => {
    try {
      const response = await api.get(`/projects/${id}`);
      setProject(response.data);
      console.log(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  const getStudio = async (id) => {
    try {
      const response = await api.get(`/studios/${id}`);
      setStudio(response.data);
      console.log(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  return { project, getProject, studio, getStudio };
};

export default useApi;