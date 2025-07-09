import { useEffect, useState } from 'react';
import axios from 'axios';
import {Data as data1} from './data/Data';
import SideBar from "../components/SideBar";
import { useNavigate } from "react-router-dom";
import SidebarMecanico from './SidebarMecanico';

export const SERVER_URL = process.env.REACT_APP_SERVER_URL;

export default function VerSimulacionesMecanico() {
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
  
    const clickMe = (id) => {
    
    navigate('/auto', { state: { name:  id }});  
    }

  return (
    

  <div className="box">
    <div id="side"> <SidebarMecanico/>
    </div>
    <div id="content"> 
      <div className='box'>
        <div>
        <div class= "form_container">
        <h2>Simulaciones</h2>
            {simulaciones.map((post) => { return (
            <table id="requests" key={post.id}>
                <tr>
                    <th > Id </th>
                    <th> Id Solicitud </th>
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
                        <td> {post.id_solicitud} </td>
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
  </div>
  );
}