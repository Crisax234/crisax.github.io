
import React from "react";
import { useState } from "react";
import Button from "../components/Button";
import axios from "axios";
import Navbar from "../components/Navbar";
import useTokenAuth from '../hooks/useTokenAuth';
import useCookieAuth from '../hooks/useCookieAuth';
import { SERVER_URL } from '../App';
import { useNavigate } from 'react-router-dom';



export default function UserRegister() {
  
  
  const [mpass, setMpass] = useState();
  const [mmail, setMmail] = useState();
  const [mname, setMname] = useState();
  const [mtype, setMtype] = useState();

  const [password, setPassword] = useState("");
  const [mail, setMail] = useState("");
  const [name, setName] = useState("");
  const [type, setType] = useState("");
  const navigate = useNavigate();
  const { handleUserLogin } = useCookieAuth();
  const { handleTokenChange } = useTokenAuth();

  const userValidation = async (e) => {
    e.preventDefault();
    if (password.length > 2) {
      setMpass(true);
    } else {
      setMpass(false);
    };
  
    if (mail.includes("@") && mail.includes(".") && mail.length > 4) {
      setMmail(true);
    } else{
        setMmail(false);
    };
  
    if (name.length > 2) {
      setMname(true);
    } else {
      setMname(false);
    };
  
    

    if (mname == true && mpass == true && mmail == true) {
      const variable = {
        "email": mail,
        "password": password,
        "nickname": name,
        "type": type
      }
      console.log(variable);
      const response = await axios.post(`${SERVER_URL}/auth/signup`, variable);
      if (!response.data.error) {
        handleTokenChange(response.data['token'], 'login');
        handleUserLogin();
        navigate(-1);

      } else {
        console.log(response.data.error);
      }
  };
  };

  return (
    <div>
      <Navbar />

      <div class="box_container">
        <div>
          <div class="content">
            <h2> Ingresa los siguientes datos </h2>
          </div>
          
          <form onSubmit={userValidation}>
          
            <div class="box_container">
              <div class="text">
                
                <label>Nombre</label>
                <input 
                  type="text" value={name} onChange={(e) => setName(e.target.value)} required />
                <div class="error">
                  {mname === false && <p>El nombre debe tener mas de dos caracteres</p>}
                </div>

                <label>Correo electrónico</label>
                <input 
                  type="text" value={mail} onChange={(e) => setMail(e.target.value)} required />
                <div class="error">
                  {mmail === false && <p>Introduzca un correo electronico valido</p>}
                </div>

                <label>Contraseña</label>
                <input 
                  type="text" value={password} onChange={(e) => setPassword(e.target.value)} required />
                <div class="error">
                  {mpass === false && <p>La contraseña debe tener mas de dos caracteres</p>}
                </div>

                <label>Tipo</label>
                
                <select value={type} onChange={(e) => setType(e.target.value)} required>
                  <option value=""></option>
                  <option value="Manager">Manager</option>
                  <option value="Mecanic">Mecanic</option>
          
                </select>
                <div class="content">
                  <Button title="Crear usuario" type="submit"  ></Button>
                </div>

              </div>
            </div>
            
          </form>
        </div>


      </div>


    </div>
  );

}


