import { useEffect, useState } from 'react';
import axios from 'axios';
import React from 'react';


export const SERVER_URL = process.env.REACT_APP_SERVER_URL;

export default function PerformanceTable() {
  // Temporales
  // Llamada asincrona a la API
  const [performance, setPerformance] = useState([]);
  const getData = async () => {
    const { data } = await axios.get(`${SERVER_URL}/piezas/performance`);

    return data;
  };

  useEffect(()=>{
    getData().then((data) => {
      console.log(data);
      setPerformance(data);
    });
  }, [])

  

  return (
    <div class= "form_container">
      <h2>Piezas Performance</h2>
            {performance.map((post) => {
       return (
              
              <table id="requests" key={post.id}>
                <tr>
                    <th>Chasis</th>
                    <th> Nombre </th>
                    <th> Categoria </th>
                    <th>Hp</th>
                    <th>Torque</th>
                    <th> Precio</th>
                    
                </tr>
            
                <tr>
                    <td> {post.chasis_compatible} </td>
                    <td> {post.nombre} </td>
                    <td> {post.categoria} </td>
                    <td> {post.hp}</td>
                    <td>{post.torque}</td>
                    <td> {post.precio} </td>
                    

                </tr>
                
          </table>

          
       );
    })}
        
        </div>
  );
}