import React from "react";
import { useState } from "react";
import Button from "../../components/Button";
import axios from "axios";
import { SERVER_URL } from '../../App';
import useTokenAuth from '../../hooks/useTokenAuth';
import useCookieAuth from '../../hooks/useCookieAuth';
import { useNavigate } from 'react-router-dom';
import SideBar from "../../components/SideBar";

function FormSolicitud() {
    const [mid, setMid] = useState();
    const [mp, setMp] = useState();
    
    const [id, setId] = useState("");
    const [titulo, setTitulo] = useState("");
    const [presupuesto, setPresupuesto] = useState("");
    const [descripcion, setDescripcion] = useState("");
    const navigate = useNavigate();
    const { handleUserLogin } = useCookieAuth();
    const { handleTokenChange } = useTokenAuth();

    const userValidation = async (e) => {
        e.preventDefault();
        if (isNaN(id)) {
            setMid(false);
        
        }else{
            setMid(true);
            setId(+id);
        };
        if (isNaN(presupuesto)) {
            setMp(false);
            
            
        }else{
            setMp(true);
            setPresupuesto(+presupuesto);
        };

        if (mid == true && mp == true) {
            console.log({
                "id_car": (+id),
                "titulo": titulo,
                "presupuesto": (+presupuesto),
                "descripcion": descripcion
              });
            const response = await axios.post(`${SERVER_URL}/solicitudes`, {
            "id_car": id,
            "titulo": titulo,
            "presupuesto": presupuesto,
            "descripcion": descripcion
            });
            if (!response.data.error) {
            handleTokenChange(response.data['token'], 'login');
            handleUserLogin();
            navigate(-1);
        
            } else {
            console.log(response.data.error);
            }
        };
    };
    const [show, setShow] = useState(false);
    const handleClick = () => {
        if (!show){
            setShow(true);
        } else {
            setShow(false);
        }

    }

    return(
        <div className="box">
            <div id="side"> <SideBar/>
            </div>
            <div id="content"> <div class="form_container">
                
                <div class="content">
            
          </div>
                <form onSubmit={userValidation}>
                    <div className="box_container">
                        <div className="text">
                    <label>Id Auto</label>
                        <input name="nombre" type="text" value={id} onChange={(e) => setId(e.target.value)}>
                        </input>
                        <div class= "error">
                            {mid === false && <p>El id debe ser un numero</p>}
                        </div>
                        
                        <label>Titulo</label>
                        <input name="titulo" type="text" value={titulo} onChange={(e) => setTitulo(e.target.value)}></input>
                    <label>Presupuesto</label>
                        <input name="presupuesto" type="text" value={presupuesto} onChange={(e) => setPresupuesto(e.target.value)}></input>
                        <div class= "error">
                            {mp === false && <p>El presupuesto debe ser un numero</p>}
                        </div>
                    <label > Descripcion  </label>
                        <input class = 'description' name="descripcion" type="text" value={descripcion} onChange={(e) => setDescripcion(e.target.value)}></input>
                        <Button title="Enviar" type="submit"  ></Button>
                    </div>
                    </div>
                </form>
                </div> 
            </div>
        </div>
    
)}

export default FormSolicitud;





