import React from "react";
import { useEffect, useState } from 'react';
import axios from 'axios';
import auto from "../img/auto.png";
import { Data } from "./data/Data";
import { useLocation } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import useTokenAuth from '../hooks/useTokenAuth';
import useCookieAuth from '../hooks/useCookieAuth';

export const SERVER_URL = process.env.REACT_APP_SERVER_URL;

export default function PiezaPerformance(){
    const { handleUserLogin } = useCookieAuth();
    const { handleTokenChange } = useTokenAuth();
  
    const [simulaciones, setSimulaciones] = useState([]);
    const getData = async () => {
        const { data } = await axios.get(`${SERVER_URL}/piezas/performance`);

        return data;
    };

    useEffect(()=>{
        getData().then((data) => {
        console.log(data);
        setSimulaciones(data);
        });
    }, []);


    const navigate = useNavigate();
    const { state } = useLocation();
    console.log(state.name);


    const clickMe = async (request_form) => {
    console.log(request_form);
    const response = await axios.post(`${SERVER_URL}/pieza_simulacions/`, {
        "id_simulacion": state.name,
        "id_pieza":request_form.id_pieza,
        "tipo": request_form.tipo,
        
        });
        if (!response.data.error) {
        handleTokenChange(response.data['token'], 'login');
        handleUserLogin();
        window.location.reload(false);
        navigate(-1);

        } else {
        console.log(response.data.error);
        }
    
      }; 

    
    
    
    return(
    <div class= "form_container">
        <h2>Piezas Disponibles</h2>
            {simulaciones.map((post) => { return (
            <table id="requests" key={post.id}>
                <tr>
                    <th > Id </th>
                    <th> Chasis Compatible </th>
                    <th> Nombre </th>
                    <th> Categoria </th>
                    <th> Hp </th>
                    <th> Torque </th>
                    <th> Precio </th>
                </tr>
                
                    <tr onClick={() => {
              clickMe({ id_pieza : post.id, tipo : "Performance"});
            }}>
                        <td > {post.id} </td>
                        <td> {post.chasis_compatible} </td>
                        <td> {post.nombre} </td>
                        <td> {post.categoria} </td>
                        <td> {post.hp} </td>
                        <td> {post.torque} </td>
                        <td> {post.precio} </td>
                    </tr>
                    
                </table>
    
                
            );
    
    
        })}
    </div>
  
    )
}
