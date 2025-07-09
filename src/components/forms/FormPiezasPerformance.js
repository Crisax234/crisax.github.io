import React from "react";
import { useState } from "react";
import Button from "../../components/Button";
import axios from "axios";
import { SERVER_URL } from '../../App';
import useTokenAuth from '../../hooks/useTokenAuth';
import useCookieAuth from '../../hooks/useCookieAuth';
import { useNavigate } from 'react-router-dom';


function FormPiezasPerformance() {
    
    
    const [id, setId] = useState("");
    const [chasis, setChasis] = useState("");
    const [nombre, setNombre] = useState("");
    const [categoria, setCategoria] = useState("");
    const [hp, setHp] = useState("");
    const [torque, setTorque] = useState("");
    const [precio, setPrecio] = useState("");
    const navigate = useNavigate();
    const { handleUserLogin } = useCookieAuth();
    const { handleTokenChange } = useTokenAuth();

    const userValidation = async (e) => {
        e.preventDefault();
    
        const response = await axios.post(`${SERVER_URL}/`, {
        "id": id,
        "chasis_compatible": chasis,
        "nombre": nombre,
        "categoria": categoria,
        "hp": hp,
        "torque": torque,
        "precio": precio
        });
        if (!response.data.error) {
        handleTokenChange(response.data['token'], 'login');
        handleUserLogin();
        navigate(-1);
    
        } else {
        console.log(response.data.error);
        }
        
    };
    

    return(
        <div class="form_container">
            <h2>Piezas Performance</h2>
                <div class="content">
            
          </div>
                <form onSubmit={userValidation}>
                    <div className="box_container">
                        <div className="text">
                    <label>Id</label>
                        <input name="id" type="text" value={id} onChange={(e) => setId(e.target.value)}>
                        </input>
                        <div class= "error">
                            
                        </div>
                    <label>Chasis</label>
                        <input name="chasis" type="text" value={chasis} onChange={(e) => setChasis(e.target.value)}>
                        </input>
                        <div class= "error">
                            
                    </div>
                        
                        <label>Nombre</label>
                        <input name="nombre" type="text" value={nombre} onChange={(e) => setNombre(e.target.value)}></input>
                    <label>Categoria</label>
                        <input name="categoria" type="text" value={categoria} onChange={(e) => setCategoria(e.target.value)}></input>
                        <div class= "error">
                            
                        </div>

                    <label>Hp</label>
                        <input name="hp" type="text" value={hp} onChange={(e) => setHp(e.target.value)}></input>
                        <div class= "error">
                            
                    </div>

                    <label>Torque</label>
                        <input name="torque" type="text" value={torque} onChange={(e) => setTorque(e.target.value)}></input>
                        <div class= "error">
                            
                        </div>
                    <label > Precio  </label>
                        <input  name="precio" type="text" value={precio} onChange={(e) => setPrecio(e.target.value)}></input>
                        <Button title="Enviar" type="submit"  ></Button>
                    </div>
                    </div>
                </form>
                </div>
    
)}

export default FormPiezasPerformance;
