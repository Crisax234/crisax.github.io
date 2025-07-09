import { useEffect, useState } from 'react';
import axios from 'axios';
import React from 'react';
import SideBar from '../components/SideBar';

export const SERVER_URL = process.env.REACT_APP_SERVER_URL;

export default function VerSolicitudes() {
  // Temporales
  // Llamada asincrona a la API
  const [solicitudes, setSolicitudes] = useState([]);
  const getData = async () => {
    const { data } = await axios.get(`${SERVER_URL}/solicitudes/all`);

    return data;
  };

  useEffect(()=>{
    getData().then((data) => {
      console.log(data);
      setSolicitudes(data);
    });
  }, [])

  


  return (
    <div className="box">
      
            <div id="side"> <SideBar/>
            </div>
            <div id="content"> <div class= "form_container">
              <h2>Solicitudes</h2>
            {solicitudes.map((post) => {
       return (
              
              <table id="requests" key={post.id}>
                <tr>
                    <th>Titulo</th>
                    <th> Presupuesto </th>
                    <th> Estado </th>
                    
                </tr>
            
                <tr>
                    <td> {post.titulo} </td>
                    <td> {post.presupuesto} </td>
                    <td> {post.estado} </td>
                    

                </tr>
                
          
                </table>

       );
    })}
        
        </div>
            </div>
        </div>
  );
}