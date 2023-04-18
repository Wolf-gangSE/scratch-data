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
      })
      .catch((error) => {
        console.error(error);
        alert('Projeto não encontrado');
        window.location.reload()
      }).finally(() => {
        setIsLoading(false)
      });
  };

  const getAllProject = () => {
    setIsLoading(true)
    api
      .get(`/projects`, { responseType: 'blob' })
      .then((response) => {
        const blob = new Blob([response.data], { type: 'text/csv' });
        saveAs(blob, 'file.csv');
      })
      .catch((error) => {
        console.error(error);
      }).finally(() => {
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
        })
        .catch((error) => {
          console.error(error);
          alert('Turma não encontrada');          
          window.location.reload()
        }).finally(() => {
          setIsLoading(false)
        });
      return;
    }
    api
      .get(`/studios/${id}`)
      .then((response) => {
        setStudio(response?.data);        
      })
      .catch((error) => {
        console.error(error);
        alert('Turma não encontrada');        
        window.location.reload()
      }).finally(() => {
        setIsLoading(false)
      });
  };

  return { getProject, getAllProject, getStudio};
};

export default useApi;
