import * as React from 'react';
import { BarChart } from '@mui/x-charts/BarChart';
import axios from 'axios';
import { useEffect, useState } from 'react';
export default function Graph2() {
    const fetchData = async () => {
        try {
          const url="https://animalitoslottery.online/Estadisticas.php?desde="+desde+"&hasta="+hasta;
          console.log(url);
          const response = await axios.get(url);
          
          console.log(response.data);
          
        } catch (error) {
          console.error('Error fetching data:', error);
        }
      };
      
  return (
    <BarChart
    xAxis={[{ scaleType: 'band', data: ['group A', 'group B', 'group C'] }]}
  
    series={[{ data: [4, 3, 5] }, { data: [1, 6, 3] }, { data: [2, 5, 6] }]}
    width={500}
    height={300}
  />
  );
}