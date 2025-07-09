import React from "react";
import auto from "../img/auto.png";
import { useEffect, useState } from 'react';
import axios from 'axios';
import { useLocation } from "react-router-dom";
import { useNavigate } from 'react-router-dom';
import useTokenAuth from '../hooks/useTokenAuth';
import useCookieAuth from '../hooks/useCookieAuth';


export const SERVER_URL = process.env.REACT_APP_SERVER_URL;

export default function SimulacionAuto (){

    const [flag1, setFlag1] = useState(false);
    const [flag2, setFlag2] = useState(false);
    const [flag3, setFlag3] = useState(false);
    const [flag4, setFlag4] = useState(false);
    const [flag5, setFlag5] = useState(false);
    const [flag6, setFlag6] = useState(false);



    const [tipo, setTipo] = useState("");
    const [categoria, setCategoria] = useState("");
    const navigate = useNavigate();
    const { handleUserLogin } = useCookieAuth();
    const { handleTokenChange } = useTokenAuth();
  

    const [simulacion, setSimulacion] = useState([]);
    const getData = async () => {
        const { data } = await axios.get(`${SERVER_URL}/simulaciones/showone/${state.name}`);
        return data;
    };
    useEffect(()=>{
        getData().then((data) => {
        console.log(data);
        setSimulacion(data);
        });
    }, [])
    console.log(simulacion);
    const { state } = useLocation();
    

      const handleClick = async () => {
        console.log("click");
        setFlag1(false);
        setFlag2(false);
        setFlag3(false);
        setFlag4(false);
        setFlag5(false);
        setFlag6(false);

        const response = await axios.post(`${SERVER_URL}/pieza_simulacions/delete`, {
        "id_simulacion": state.name,
        "categoria": categoria,
        "tipo": tipo,
        
        });
        if (!response.data.error) {
        handleTokenChange(response.data['token'], 'login');
        handleUserLogin();
        window.location.reload(false);

        } else {
        console.log(response.data.error);
        }
    
      }; 

      const clickPerformance = () => {
    
        navigate('/test3', { state: { name:  state.name }});  
        }
    const clickLook = () => {

        navigate('/test4', { state: { name:  state.name }});  
        }

    return(
        <div>
            <h2>Simulacion: {state.name}</h2>
            <div className="auto_container">
                <img src={auto} alt="Car-image"></img>
                
                
                <div className="auto_1"> 
                    <h2 onClick={() => {setCategoria('Intercooler'); setTipo('Performance') ;setFlag1(true); }}>{simulacion.intercoolerName ? simulacion.intercoolerName : "Intercooler Stock"}</h2> 
                    {flag1 ? <button onClick={handleClick}> Eliminar </button> : null}
                </div>

                <div className="auto_6"> 
                    <h2 onClick={() => {setCategoria('ChargePipe'); setTipo('Performance') ;setFlag2(true); }}>{simulacion.chargepipeName ? simulacion.chargepipeName : "Chargepipe Stock"}</h2>  
                    {flag2 ? <button onClick={handleClick}> Eliminar </button> : null}
                </div>
                        
                <div className="auto_3"> 
                    <h2 onClick={() => {setCategoria('Turbo'); setTipo('Performance') ;setFlag3(true); }}>{simulacion.turboName ? simulacion.turboName : "Turbo Stock"}</h2>  
                    {flag3 ? <button onClick={handleClick}> Eliminar </button> : null}
                </div>
                
                <div className="auto_2"> 
                    <h2 onClick={() => {setCategoria('Capot'); setTipo('Look') ;setFlag4(true); }}>{simulacion.capotName ? simulacion.capotName : "Capot Stock"}</h2> 
                    {flag4 ? <button onClick={handleClick}> Eliminar </button> : null}
                </div>

                <div className="auto_4"> 
                    <h2 onClick={() => {setCategoria('Neumatico'); setTipo('Look') ;setFlag5(true); }}>{simulacion.neumaticoName ? simulacion.neumaticoName : "Neumaticos Stock"}</h2>  
                    {flag5 ? <button onClick={handleClick}> Eliminar </button> : null}
                </div>

                <div className="auto_5"> 
                    <h2 onClick={() => {setCategoria('Llanta'); setTipo('Look') ;setFlag6(true); }}>{simulacion.llantaName ? simulacion.llantaName : "Llanta Stock"}</h2>  
                    {flag6 ? <button onClick={handleClick}> Eliminar </button> : null}
                </div>

                <div className="datos"> 
                    <h2>Costo: {simulacion.costo}</h2>
                    <h2>Hp: {simulacion.hp}</h2>
                    <h2>Torque: {simulacion.torque}</h2> 
                </div>
                <div className="datos_1"> 
                    
                    <h2 onClick={() => {
                clickPerformance()}} >Agregar piezas Performance</h2>
                <h2 onClick={() => {
                clickLook()}} >Agregar piezas Looks</h2>
                </div>
                    
                
            </div>
        </div>
    )
}