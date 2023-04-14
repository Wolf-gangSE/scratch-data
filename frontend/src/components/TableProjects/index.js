import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

function createData(id, data, title, author, genre, progress, rating, url) {
  return { id, data, title, author, genre, progress, rating, url };
}

const rows = [
  createData(
    '1',
    '22/12/2022',
    'Fire&Blood',
    'George R.R mart',
    'Fantasy',
    50,
    4.3,
    'https://www.google.com.br'
  ),
  createData(
    '2',
    '22/12/2022',
    'Fire&Blood',
    'George R.R mart',
    'Fantasy',
    50,
    4.3,
    'https://www.google.com.br'
  ),
  createData(
    '3',
    '22/12/2022',
    'Fire&Blood',
    'George R.R mart',
    'Fantasy',
    50,
    4.3,
    'https://www.google.com.br'
  ),
];

function TableProjects() {
  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell sx={{ fontWeight: 'bold' }}>Data</TableCell>
            <TableCell sx={{ fontWeight: 'bold' }}>Titulo</TableCell>
            <TableCell sx={{ fontWeight: 'bold' }}>Autor</TableCell>
            <TableCell sx={{ fontWeight: 'bold' }}>Gênero</TableCell>
            <TableCell sx={{ fontWeight: 'bold' }}>Progresso</TableCell>
            <TableCell sx={{ fontWeight: 'bold' }}>Avaliação</TableCell>
            <TableCell sx={{ fontWeight: 'bold' }}>URL</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow key={row.id} sx={{}}>
              <TableCell>{row.data}</TableCell>
              <TableCell>{row.title}</TableCell>
              <TableCell>{row.author}</TableCell>
              <TableCell>{row.genre}</TableCell>
              <TableCell>{row.progress}</TableCell>
              <TableCell>{row.rating}</TableCell>
              <TableCell>{row.url}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}

export default TableProjects;
