import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import useCookieAuth from '../hooks/useCookieAuth';
import { SERVER_URL } from '../App';
import useTokenAuth from '../hooks/useTokenAuth';
import Button from "../components/Button";
import Navbar from "../components/Navbar";
import { Link } from 'react-router-dom';
import { useForm } from 'react-hook-form';


export default function Login() {

  const [mmail, setMmail] = useState();
  const [mpass, setMpass] = useState();


  const [mail, setMail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const { handleUserLogin } = useCookieAuth();
  const { handleTokenChange } = useTokenAuth();

  const userValidation = async (e) => {
    
    e.preventDefault();
    if (mail.includes("@") && mail.includes(".") && mail.length > 4) {
      setMmail(true);
  
    }else{
        setMmail(false);
    };
    if (password.length > 2) {
      setMpass(true);
    } else {
      setMpass(false);
    };

    if (mpass == true && mmail == true) {
      
    
    const response = await axios.post(`${SERVER_URL}/auth/login`, {
      "email": mail,
      "password": password
    });
    const resp = await response.data;
    console.log(resp); 
    if (!response.data.error) {
      handleTokenChange(response.data['token'], 'login');
      handleUserLogin(resp);
      if (resp['type'] == 'Mecanico') {
        navigate('/mecanico');
      } else if (resp['type'] == 'Manager') {
        navigate('/boss');
      };

    } else {
      console.log(response.data.error);
    }
    }
  };

  const { register, handleSubmit, formState: { errors } } = useForm();
  console.log(errors);

  return (
    <div>
      <Navbar />

      <div class="box_container">
        <div>
          <div class="content">
            <h2> Bienvenido de vuelta! </h2>
          </div>
          <form onSubmit={userValidation}>
            <div class="box_container">
              <div class="text">
                <label>Correo electrónico</label>
                <input 
                  type="text" value={mail} onChange={(e) => setMail(e.target.value)} required />
                <div class="error">
                  {mmail === false && <p>Introduzca un correo electronico valido</p>}
                </div>
                <br />

                <label>Contraseña</label>
                <input 
                  type="text" value={password} onChange={(e) => setPassword(e.target.value)} required />
                <div class="error">
                  {mpass === false && <p>La contraseña debe tener mas de dos caracteres</p>}
                </div>
                <li><Link to='/useregister'>¿No tienes una cuenta? Registrate aqui</Link></li>
                <div class="content">
                  <Button title="Iniciar sesión" type="submit"  ></Button>
                </div>

              </div>
            </div>
          </form>
        </div>
        

      </div>


    </div>
  );

}