import React from "react";
import {SidebarData} from "./data/SidebarDataMecanico";
import Dash from "../img/dash.png";
import LogoutIcon from '@mui/icons-material/Logout';
import { useNavigate } from 'react-router-dom';
import useCookieAuth from '../hooks/useCookieAuth';


function SidebarMecanico() {
    const navigate = useNavigate();
    const { handleUserLogout } = useCookieAuth();
    function logout() {
        navigate('/')
        handleUserLogout();
      }
    return (
        <div className="Sidebar"> 
            <a class="logo" >
                <img class="logo"  src={Dash} alt="logo" />
            </a>
            <ul className="SidebarList">
                {SidebarData.map((val, key) => {
                    return (
                        
                        <li key={key} className="row" > 
                            
                            <a className="side_bar" href= {val.link} id= "icon">{val.icon}</a>
                            <a className="side_bar" href= {val.link} id= "title">{val.title}</a>
                            
                        </li>
                    
                    );
    })}
            <li >
                <div>
                </div> 
            </li>
            <li className="row" >
                <a className="side_bar" id= "icon" > <LogoutIcon /> </a>
                <a className="side_bar" id= "title" onClick={logout}>
                    Logout </a>
                
                {/* <a className="side_bar" id= "title" href="/"> Logout</a> */}
            </li>
        </ul>
        
           
        
    </div>

    );    

    };

export default SidebarMecanico;