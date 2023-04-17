import { useContext } from 'react';
import { saveAs } from 'file-saver';
import { GlobalContext } from '../context/GlobalContext';
import api from './api';

const useApi = () => {
  const { setProject, setStudio } = useContext(GlobalContext);

  const getProject = (id) => {
    api
      .get(`/projects/${id}`)
      .then((response) => {
        setProject(response?.data);
      })
      .catch((error) => {
        console.error(error);
        alert('Projeto não encontrado');
      });
  };

  const getAllProject = () => {
    api
      .get(`/projects`, { responseType: 'blob' })
      .then((response) => {
        const blob = new Blob([response.data], { type: 'text/csv' });
        saveAs(blob, 'file.csv');
      })
      .catch((error) => {
        console.error(error);
      });
  };

  const getStudio = (id) => {
    api
      .get(`/studios/${id}`)
      .then((response) => {
        setStudio(response);
      })
      .catch((error) => {
        console.error(error);
        alert('Turma não encontrada');
      });
  };

  return { getProject, getAllProject, getStudio};
};

export default useApi;
