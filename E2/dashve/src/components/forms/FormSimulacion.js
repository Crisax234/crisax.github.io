import React from "react";
import { useState } from "react";
import Button from "../Button";
import axios from "axios";
import Navbar from "../Navbar";
import useTokenAuth from '../../hooks/useTokenAuth';
import useCookieAuth from '../../hooks/useCookieAuth';
import { SERVER_URL } from '../../App';
import { useNavigate } from 'react-router-dom';



export default function FormSimulacion() {
  
  
  
  const [password, setPassword] = useState("");
  const [mail, setMail] = useState("");
  const [name, setName] = useState("");
  const [type, setType] = useState("");
  const navigate = useNavigate();
  const { handleUserLogin } = useCookieAuth();
  const { handleTokenChange } = useTokenAuth();

  const userValidation = async (e) => {
    e.preventDefault();
    
      const response = await axios.post(`${SERVER_URL}/auth/signup`, {
        "email": mail,
        "password": password,
        "nickname": name,
        "type": type
      });
      if (!response.data.error) {
        handleTokenChange(response.data['token'], 'login');
        handleUserLogin();
        navigate(-1);

      } else {
        console.log(response.data.error);
      }

  };

 

  return (
    <div>
      
      <div class="box_container">
        <div>
          <div class="content">
            
          </div>
          
          <form onSubmit={userValidation}>
          
            <div class="box_container">
              <div class="text">
                
                <label>Intercooler</label>
                
                <select value={name} onChange={(e) => setName(e.target.value)} required>
                  <option value="Manager">Manager</option>
                  <option value="Mecanic">Mecanic</option>
                </select>

                <label>Turbo</label>
                
                <select value={mail} onChange={(e) => setMail(e.target.value)} required>
                  <option value="Manager">Manager</option>
                  <option value="Mecanic">Mecanic</option>
                </select>

                <label>Chargepipe</label>
                
                <select value={password} onChange={(e) => setPassword(e.target.value)} required>
                  <option value="Manager">Manager</option>
                  <option value="Mecanic">Mecanic</option>
                  </select>
                <label>Capot</label>
                
                <select value={type} onChange={(e) => setType(e.target.value)} required>
                  <option value="Manager">Manager</option>
                  <option value="Mecanic">Mecanic</option>
          
                </select>

                <label>Llanta</label>
                
                <select value={type} onChange={(e) => setType(e.target.value)} required>
                  <option value="Manager">Manager</option>
                  <option value="Mecanic">Mecanic</option>
          
                </select>

                <label>Neumatico</label>
                
                <select value={type} onChange={(e) => setType(e.target.value)} required>
                  <option value="Manager">Manager</option>
                  <option value="Mecanic">Mecanic</option>
          
                </select>
                <div class="content">
                  <Button title="Submit" type="submit"  ></Button>
                </div>

              </div>
            </div>
            
          </form>
        </div>


      </div>


    </div>
  );

}