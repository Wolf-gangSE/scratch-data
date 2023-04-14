import { Box, Pagination } from '@mui/material';
import React, { useState } from 'react';
import ClassProject from '../ClassProject';

const data = [
  {
    id: 1,
    title: 'Projeto 1',
    img: 'Descrição do projeto 1',
    author: 'Fulano 1',
    view: 1,
    likes: 1,
    stars: 1,
  },
  {
    id: 2,
    title: 'Projeto 2',
    img: 'Descrição do projeto 2',
    author: 'Fulano 2',
    view: 2,
    likes: 2,
    stars: 2,
  },
  {
    id: 3,
    title: 'Projeto 3',
    img: 'Descrição do projeto 3',
    author: 'Fulano 3',
    view: 3,
    likes: 3,
    stars: 3,
  },
  {
    id: 4,
    title: 'Projeto 4',
    img: 'Descrição do projeto 4',
    author: 'Fulano 4',
    view: 4,
    likes: 4,
    stars: 4,
  },
];

function ListProjects() {
  const [page, setPage] = useState(1);
  const handleChange = (event, value) => {
    setPage(value);
  };

  return (
    <Box
      sx={{
        backgroundColor: '#F2F2F2',
        display: 'flex',
        width: '70%',
        border: '1px solid rgba(0, 0, 0, 0.25)',
        borderRadius: '10px',
        padding: '8px',
        flexDirection: 'column',
      }}
    >
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'row',
          gap: '1rem',
          flexWrap: 'wrap',
        }}
      >
        {data.map((item) => (
          <ClassProject key={item.id} item={item} />
        ))}
      </Box>
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'center',
          marginTop: '32px',
          alignItems: 'center',
        }}
      >
        <Pagination count={data.length} page={page} onChange={handleChange} />
      </Box>
    </Box>
  );
}

export default ListProjects;
