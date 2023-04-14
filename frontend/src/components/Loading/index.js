import React from 'react';
import { CircularProgress } from '@mui/material';

function Loading() {
  return (
    <div
      style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '70vh' }}
    >
      <CircularProgress />
    </div>
  );
}

export default Loading;
