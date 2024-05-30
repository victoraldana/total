import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Total from './total'
import { Stack } from '@mui/material'
import Estadisticas from './Estadisticas'


function App() {
  const [render,setRender]= useState("TOTAL");

  return (
    <Stack display={'flex'} width={'100%'} flexWrap={'wrap'}>
       {render === "TOTAL"? <Total setRender={setRender}/> : null}
       {render === "ESTADISTICAS"? <Estadisticas setRender={setRender}/> : null}
    </Stack>
     
    
  )
}

export default App
