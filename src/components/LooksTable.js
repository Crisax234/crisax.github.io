import { useEffect, useState } from 'react';
import axios from 'axios';
import React from 'react';


export const SERVER_URL = process.env.REACT_APP_SERVER_URL;

export default function LooksTable() {
  // Temporales
  // Llamada asincrona a la API
  
  const [looks, setLooks] = useState([]);
  const getData = async () => {
    const { data } = await axios.get(`${SERVER_URL}/piezas/look`);

    return data;
  };

  useEffect(()=>{
    getData().then((data) => {
      console.log(data);
      setLooks(data);
    });
  }, [])

  

  return (
    <div class= "form_container">
      <h2>Piezas looks</h2>
            {looks.map((post) => {
       return (
              
              <table id="requests" key={post.id}>
                <tr>
                    <th>Chasis</th>
                    <th> Nombre </th>
                    <th> Categoria </th>
                    <th> Precio</th>
                    
                </tr>
            
                <tr>
                    <td> {post.chasis_compatible} </td>
                    <td> {post.nombre} </td>
                    <td> {post.categoria} </td>
                    <td> {post.precio} </td>
                    

                </tr>
                
          </table>

          
       );
    })}
        
        </div>
  );
}