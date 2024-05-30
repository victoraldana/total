import * as React from 'react';
import { BarChart } from '@mui/x-charts/BarChart';
import { useEffect } from 'react';

export default function Graph() {
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
  us
  return (
    <BarChart
      series={[
        { data: [2615000,1615000,2215000,1715000,2615000] },
       
      
      ]}
      width={1280
      }
      height={290}
      xAxis={[{ data: ['GRANJAM', 'GRANJAZO', 'GUACHARO', 'LANAPA', 'BOYACA', 'MOTILON'], scaleType: 'band' }]}
      margin={{ top: 10, bottom: 30, left: 40, right: 10 }}
    />
  );
}