import { Box, Typography } from '@mui/material';
import React from 'react';
import { FaEye, FaHeart, FaStar } from 'react-icons/fa';
import { useNavigate  } from "react-router-dom";

function ClassProject({ project }) {
  const navigate = useNavigate();
  return (
    <Box
      sx={{
        backgroundColor: '#FFF',
        width: '245px',
        borderRadius: '10px',
        padding: '8px',
      }}
      onClick={() =>  navigate("/", { state: { project } })}
    >
      <Box
        sx={{
          backgroundColor: '#FFF',
          height: '200px',
          borderRadius: '10px',
          maxWidth: '100%',
          overflow: 'hidden',
        }}
        component="img"
        src={project.image ? project.image : ''}
      />
      <Typography variant="h6">{project.title}</Typography>
      <Typography variant="body2">{project.author ? project.author : ''}</Typography>
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'row',
          gap: '1rem',
        }}
      >
        <Box
         sx={{
            display: 'flex',
            alignItems: 'center',
         }}
         >
          <FaEye size={15} color="#4D97FF" />
          <Typography sx={{marginLeft: '5px'}} variant="body2">{project.views ? project.views : '0'}</Typography>
        </Box>
        <Box
         sx={{
            display: 'flex',
            alignItems: 'center',
         }}
         >
          <FaHeart size={15} color="red" />
          <Typography sx={{marginLeft: '5px'}} variant="body2">{project.loves ? project.loves : '0'}</Typography>
        </Box>
        <Box
         sx={{
            display: 'flex',
            alignItems: 'center',
         }}
         >
          <FaStar size={15} color="#F8AA36" />
          <Typography sx={{marginLeft: '5px'}} variant="body2">{project.favorites ? project.favorites : '0'}</Typography>
        </Box>
      </Box>
    </Box>
  );
}

export default ClassProject;
