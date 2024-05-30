import Button from '@mui/material/Button';
import { Stack , Card} from '@mui/material';
import BasicTable from './table';
import { useState , useEffect} from 'react';
import axios from 'axios';
import SearchAppBar from './navbar';
import AccountCircleTwoToneIcon from '@mui/icons-material/AccountCircleTwoTone';
import DateInputComponent from './SelectDate';
import Mimodal from './modal';
import Graph from './grafico';
import Graph2 from './barchart';

const Estadisticas=({setRender})=>{
    const currentDate = new Date().toISOString().split('T')[0];
   
    const [open, setOpen] = useState(false);
    const handleOpen = (inform) => {
      setinfo(inform);
      setOpen(true);}
    const handleClose = () => setOpen(false);
    const [info,setinfo]=useState([]);

    
    const [desde, setdesde] = useState(currentDate);
    const [hasta, sethasta] = useState(currentDate);
    
  
    
    const [datos, setdatos]= useState([]);
    const [datosFiltro, setdatosFiltro]=useState([]);
   
  
    const filter=(usuario)=>{
      if(usuario==""){
        setdatosFiltro(datos);
      }else{
        const lowerCaseSearch = usuario.toLowerCase();
      const filteredData = datos.filter((item) =>
        item.USUARIO.toLowerCase().includes(lowerCaseSearch)
      );
      setdatosFiltro(filteredData);
      }
      
    }
  
    
      const [totales,settotales]=useState({
          "VENTAS": 0,
          "PREMIOS": 0,
          "PORCENTAJES": 0,
          "UTILIDAD": 0,
         
      });
  
      const totalizarData=(data)=>{
          var Ventas=0;
          var Premios=0;
          var Porcentaje=0;
          var Utilidad=0;
          
          data.forEach(element => {
              Ventas+=parseInt(element.VENTAS);
              Premios+=parseInt(element.PREMIOS);
              Porcentaje+=parseInt(element.PORCENTAJE);
              Utilidad+=parseInt(element.UTILIDAD);
          });
  
          settotales({
              "VENTAS": new Intl.NumberFormat().format(Ventas),
          "PREMIOS": new Intl.NumberFormat().format(Premios),
          "PORCENTAJES": new Intl.NumberFormat().format(Porcentaje),
          "UTILIDAD": new Intl.NumberFormat().format(Utilidad),
          });
          setdatos(data);
          setdatosFiltro(data);
      }
    
      
      return (


        <Stack>
          <Mimodal open={open} setOpen={setOpen} handleClose={handleClose} handleOpen={handleOpen} info={info}/>
          <SearchAppBar filter={filter} setRender={setRender}  renderr={"TOTAL"}/>
        <Stack display={"flex"} justifyContent={"center"} alignContent={"center"} flexDirection={"colum100%"} width={'100%'} >
        <Graph/>
          
        </Stack>
        <Stack display={"flex"} justifyContent={"space-between"} alignContent={"center"} flexDirection={"column"}>
        <DateInputComponent label={"DESDE"} setdata={setdesde} data={desde} />
        <DateInputComponent label={"HASTA"} setdata={sethasta}  data={hasta}  />
        <Button variant="contained" onClick={()=>{}}>Buscar </Button>
          </Stack>
        <Stack>
        <Graph2/>
        </Stack>
        </Stack>
       
      ) ;
}

export default Estadisticas;