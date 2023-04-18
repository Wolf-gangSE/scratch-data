import { useContext } from 'react';
import { saveAs } from 'file-saver';
import { GlobalContext } from '../context/GlobalContext';
import api from './api';

const useApi = () => {
  const { setProject, setStudio, setIsLoading } = useContext(GlobalContext);

  const getProject = (id) => {
    setIsLoading(true)
    api
      .get(`/projects/${id}`)
      .then((response) => {        
        setProject(response?.data);
        setIsLoading(false)
      })
      .catch((error) => {
        console.log("Loading set to false")
        setIsLoading(false)
        console.error(error);
        alert('Projeto não encontrado');
      });
  };

  const getAllProject = () => {
    setIsLoading(true)
    api
      .get(`/projects`, { responseType: 'blob' })
      .then((response) => {
        const blob = new Blob([response.data], { type: 'text/csv' });
        setIsLoading(false)
        saveAs(blob, 'file.csv');
      })
      .catch((error) => {
        console.error(error);
        setIsLoading(false)
      });
  };

  const getStudio = (id, offset) => {
    setIsLoading(true)
    if (offset) {
      api
        .get(`/studios/${id}?offset=${offset}`)
        .then((response) => {
          setStudio(response?.data);
          setIsLoading(false)
        })
        .catch((error) => {
          console.error(error);
          setIsLoading(false)
          alert('Turma não encontrada');
        });
      return;
    }
    api
      .get(`/studios/${id}`)
      .then((response) => {
        setStudio(response?.data);
        setIsLoading(false)
      })
      .catch((error) => {
        console.error(error);
        setIsLoading(false)
        alert('Turma não encontrada');
      });
  };

  return { getProject, getAllProject, getStudio};
};

export default useApi;
