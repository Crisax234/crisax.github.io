import { useEffect, useState } from 'react';
import axios from 'axios';
import React from 'react';
import { useNavigate } from "react-router-dom";
import SideBar from './SideBar';
import useTokenAuth from '../hooks/useTokenAuth';
import useCookieAuth from '../hooks/useCookieAuth';

export const SERVER_URL = process.env.REACT_APP_SERVER_URL;

export default function SolicitudesManager() {
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


  const navigate = useNavigate();
  const clickMe = async (post) => {
    navigate('/verSolicitudManager', { state: post});
    
      }; 


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
                    <th> Titulo </th>
                    <th> Presupuesto </th>
                    <th> marca </th>
                    <th> Modelo </th>
                    <th> Estado </th>
                    
                </tr>
                <tr onClick={() => {
              clickMe({post});
              }}>
                    <td> {post.titulo} </td>
                    <td> {post.presupuesto} </td>
                    <td> {post.Car.marca} </td>
                    <td> {post.Car.modelo} </td>
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