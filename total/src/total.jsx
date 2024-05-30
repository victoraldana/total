import Button from '@mui/material/Button';
import { Stack , Card} from '@mui/material';
import BasicTable from './table';
import { useState , useEffect} from 'react';
import axios from 'axios';
import SearchAppBar from './navbar';
import AccountCircleTwoToneIcon from '@mui/icons-material/AccountCircleTwoTone';
import DateInputComponent from './SelectDate';
import Mimodal from './modal';

const Total=({setRender})=>{
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
    
      const fetchData = async () => {
        try {
          const url="https://animalitoslottery.online/app/old/admin/totales.php?desde="+desde+"&hasta="+hasta;
          console.log(url);
          const response = await axios.get(url);
          
          totalizarData(response.data);
          
        } catch (error) {
          console.error('Error fetching data:', error);
        }
      };
      return (


        <Stack>
          <Mimodal open={open} setOpen={setOpen} handleClose={handleClose} handleOpen={handleOpen} info={info}/>
          <SearchAppBar filter={filter} setRender={setRender} renderr={"ESTADISTICAS"}/>
        <Stack display={"flex"} justifyContent={"center"} alignContent={"center"} flexDirection={"colum100%"} >
          <Stack   display={"flex"} justifyContent={"center"} alignContent={"center"} flexDirection={"row"}>
          <Card variant="outlined"style={{ width:"100%",height:"100px", display:"flex", justifyContent:"center", flexDirection:"column", alignItems:"center", backgroundColor:"#087F5B", margin:"5px" }}><h3 style={{color:"white"}}>VENTAS</h3><h4 style={{color:"white"}}>{totales.VENTAS}$</h4></Card>
          <Card variant="outlined"style={{ width:"100%",height:"100px", display:"flex", justifyContent:"center", flexDirection:"column",alignItems:"center", backgroundColor:"#C92A2A" ,margin:"5px" }}><h3 style={{color:"white"}}>PREMIOS</h3><h4 style={{color:"white"}}>{totales.PREMIOS}$</h4></Card>
          </Stack>
          <Stack  display={"flex"} justifyContent={"center"} alignContent={"center"} flexDirection={"row"}>
          <Card variant="outlined"style={{ width:"100%",height:"100px", display:"flex", justifyContent:"center", flexDirection:"column",alignItems:"center", backgroundColor:"#1864AB" ,margin:"5px"}}><h3 style={{color:"white"}}>GANANCIA</h3><h4 style={{color:"white"}}>{totales.PORCENTAJES}$</h4></Card>
          <Card variant="outlined" style={{ width:"100%",height:"100px", display:"flex", justifyContent:"center", flexDirection:"column",alignItems:"center", backgroundColor:"#FCC419", margin:"5px"}}><h3 style={{color:"white"}}>UTILIDAD</h3><h4 style={{color:"white"}}>{totales.UTILIDAD}$</h4>   </Card>
          </Stack>
          <Card variant="outlined" style={{ width:"100%",height:"40px", display:"flex", justifyContent:"center", flexDirection:"row",alignItems:"center", backgroundColor:"#343A40", margin:"5px"}}><AccountCircleTwoToneIcon fontSize='large'/><h4 style={{color:"white"}}>: {datos.length} VENDEDORES ACTIVOS</h4>   </Card>
         
          
          
        </Stack>
        <Stack display={"flex"} justifyContent={"space-between"} alignContent={"center"} flexDirection={"column"}>
        <DateInputComponent label={"DESDE"} setdata={setdesde} data={desde} fetchData={fetchData}/>
        <DateInputComponent label={"HASTA"} setdata={sethasta}  data={hasta} fetchData={fetchData} />
        <Button variant="contained" onClick={()=>{fetchData();}}>Buscar </Button>
          </Stack>
        <Stack>
        <BasicTable datos={datosFiltro} setdatos={setdatosFiltro} totalizarData={totalizarData} desde={desde} hasta={hasta} fetchData={fetchData}  handleOpen={handleOpen}/>
        </Stack>
        </Stack>
       
      ) ;
}

export default Total;