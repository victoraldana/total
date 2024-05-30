
import * as React from 'react';

import { styled } from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import axios from 'axios';
import { useState , useEffect} from 'react';

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
  },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  '&:nth-of-type(odd)': {
    backgroundColor: theme.palette.action.hover,
  },
  // hide last border
  '&:last-child td, &:last-child th': {
    border: 0,
  },
}));


    
        

      export default function BasicTable({datos, fetchData, setinfo, handleopen}) {

        
        useEffect(() => {
            
        
            fetchData();
          }, []); // El segundo argumento es un array vacío para que se ejecute solo una vez al montar el componente
       
                  
  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 250 }} size="small" aria-label="a dense table">
        <TableHead >
          <TableRow  >
            <StyledTableCell>USUARIO</StyledTableCell>
            <StyledTableCell align="left">VENTAS</StyledTableCell>
            <StyledTableCell align="left">PREMIOS</StyledTableCell>
            <StyledTableCell align="left">PORCENTAJE</StyledTableCell>
            <StyledTableCell align="left">UTILIDAD</StyledTableCell>
          </TableRow>
        </TableHead>
        <TableBody >
          {datos.map((row) => (
        <StyledTableRow key={row.USUARIO} 
        onClick={()=>{ 
          handleopen(
             {nombre: row.USUARIO,
          desde: desde,
          hasta: hasta,
          ventas: row.VENTAS,
          premios: row.PREMIOS,
          porcentaje: row.PORCENTAJE,
          utilidad: row.UTILIDAD});
          }} >
              <StyledTableCell component="th" scope="row">
                {row.USUARIO}
              </StyledTableCell>
              <StyledTableCell align="left">{new Intl.NumberFormat().format(row.VENTAS)}$</StyledTableCell>
              <StyledTableCell align="left">{new Intl.NumberFormat().format(row.PREMIOS)}$</StyledTableCell>
              <StyledTableCell align="left">{new Intl.NumberFormat().format(row.PORCENTAJE)}$</StyledTableCell>
              <StyledTableCell align="left">{new Intl.NumberFormat().format(row.UTILIDAD)}$</StyledTableCell>
            </StyledTableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}