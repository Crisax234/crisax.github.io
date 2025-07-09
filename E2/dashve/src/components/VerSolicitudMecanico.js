import React from "react";
import { useEffect, useState } from 'react';
import axios from 'axios';
import auto from "../img/auto.png";
import { Data } from "./data/Data";
import { useNavigate } from "react-router-dom";
import { useLocation } from "react-router-dom";
import useTokenAuth from '../hooks/useTokenAuth';
import useCookieAuth from '../hooks/useCookieAuth';
import SidebarMecanico from "./SidebarMecanico";

export const SERVER_URL = process.env.REACT_APP_SERVER_URL;

export default function VerSolicitudMecanico (){

    const navigate = useNavigate();
    const { state } = useLocation();
    console.log(state.post);

    const { handleUserLogin } = useCookieAuth();
    const { handleTokenChange } = useTokenAuth();
    const clickMe = async () => {
        const response = await axios.post(`${SERVER_URL}/simulaciones`, {
            "id_car": state.post.id_car,
            "id_solicitud": state.post.id_solicitud
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

    function hola (){
        return (<div className="container">
        <h2>titulo: {state.post.titulo}</h2>
        <h2>id: {state.post.id}</h2>
        <h2>Marca:{state.post.Car.marca} </h2>
        <h2>Modelo:{state.post.Car.modelo} </h2>
        <button onClick={() => {
          clickMe();
        }}>
            CrearSimulacion
        </button>
    </div>);
    }
    return(
        <div className="box">
            <div id="side"> <SidebarMecanico/>
            </div>
            <div id="content"> <section class="questions container">
            
            <h2 class="subtitle">Titulo: {state.post.titulo}</h2>
            <h2 class="subtitle">Id solicitud: {state.post.id}</h2>
            <h2 class="subtitle">Marca: {state.post.Car.marca}</h2>
            <h2 class="subtitle">Modelo: {state.post.Car.modelo}</h2>
            
        <p class="questions__paragraph"></p>

        <section class="questions__container">
            <article class="questions__padding">
                <div class="questions__answer">
                    <h3 class="questions__title">Descripción
                        
                    </h3>

                    <p class="about">{state.post.descripcion}</p>
                </div>
            </article>

            

            
        </section>
        <div className="l">
        <button   onClick={clickMe}>
            CrearSimulacion
        </button>
        </div>
       
        
    </section> 
            </div>
        </div>
        
        
    

    
    )
}