import { useEffect, useState } from 'react';
import axios from 'axios';
import {Data as data1} from './data/Data';
import SideBar from "../components/SideBar";
import { useNavigate } from "react-router-dom";
import useTokenAuth from '../hooks/useTokenAuth';
import useCookieAuth from '../hooks/useCookieAuth';

export const SERVER_URL = process.env.REACT_APP_SERVER_URL;

export default function AceptarSimulaciones() {
  // Temporales
  // Llamada asincrona a la API
  const [a, setId] = useState();
    const [simulaciones, setSimulaciones] = useState([]);
    const getData = async () => {
        const { data } = await axios.get(`${SERVER_URL}/simulaciones/all`);

        return data;
    };

    useEffect(()=>{
        getData().then((data) => {
        console.log(data);
        setSimulaciones(data);
        });
    }, [])


    const navigate = useNavigate();
    const { handleUserLogin } = useCookieAuth();
    const { handleTokenChange } = useTokenAuth();
  
    const clickMe = async (idSimulacion) => {
      const response = await axios.post(`${SERVER_URL}/simulaciones/accept`, {
         "id_simulacion": idSimulacion
          
          });
          if (!response.data.error) {
          handleTokenChange(response.data['token'], 'login');
          handleUserLogin();
          window.location.reload(false);
  
          } else {
          console.log(response.data.error);
          }
      
        }; 
  return (
    

  <div className="box">
    <div id="side"> <SideBar/>
    </div>
    <div id="content"> 
      <div className='box'>
        <div>
        <h2>Presiona una simulacion si la deseas aceptar</h2>
            {simulaciones.map((post) => { return (
            <table id="requests" key={post.id}>
                <tr>
                    <th > Id </th>
                    <th> Hp </th>
                    <th> Torque</th>
                    <th> Costo </th>
                    <th> InterCooler </th>
                    <th> ChargePipe </th>
                    <th> Turbo </th>
                    <th> Capot </th>
                    <th> Llanta </th>
                    <th> Neumatico </th>
                    <th> Estado </th>
                </tr>
                
                    <tr onClick={() => {
              clickMe(post.id);
            }}>
                        <td > {post.id} </td>
                        <td> {post.hp} </td>
                        <td> {post.torque} </td>
                        <td> {post.costo} </td>
                        <td> {post.intercoolerName} </td>
                        <td> {post.chargepipeName} </td>
                        <td> {post.turboName} </td>
                        <td> {post.capotName} </td>
                        <td> {post.llantaName} </td>
                        <td> {post.neumaticoName} </td>
                        <td> {post.estado ? "Aceptado" : "Pendiente"} </td>
                    </tr>
                    
                </table>
    
                
            );
        })}
    </div>
    </div>
        </div>

    </div>
   
  );
}
    
