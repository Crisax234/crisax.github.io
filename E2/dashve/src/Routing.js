import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Login from './components/Login';
import Aboutdash from './pages/Aboutdash';
import VerSimulaciones from './components/VerSimulaciones';
import React, { useState, useEffect } from 'react';
import CookieAuthProvider from './contexts/cookieAuth';
import TokenAuthProvider from './contexts/tokenAuth';
import Welcome from "./components/Welcome";
import UserRegister from './pages/UserRegister';
import BossView from "./pages/BossView";
import BossRequests from "./pages/BossRequests";
import DashBoard from "./pages/dashboard/index.jsx";
import MecanicoView from './pages/MecanicoView';
import FormSolicitud from './components/forms/FormSolicitud';
import VerPiezas from './components/VerPiezas';
import AddPiezaPerformance from './components/AddPiezaPerformance';
import CrearSimulacion from './components/CrearSimulacion';
import SolicitudesMecanico from './components/SolicitudesMecanico';
import Nosotros from './pages/nosotros';
import SimulacionAuto from './components/AutoSimulacion';
import Test from './components/test';
import Test2 from './components/test2';
import Test3 from './components/test3';
import Test4 from './components/test4';
import AddPiezaLooks from './components/AddPiezaLooks';
import VerSimulacionesMecanico from './components/VerSimulacionesMecanico';
import VerSolicitudMecanico from './components/VerSolicitudMecanico';
import VerSolicitudesManager from './components/VerSolicitudesManager';
import VerSolicitudManager from './components/VerSolicitudManager';
import AceptarSimulacion from './components/AceptarSimulacion';


function Routing(){
    return (
        <BrowserRouter>
            <CookieAuthProvider>
                <TokenAuthProvider>
                    <Routes>
                        <Route path="/" element={<Welcome/>}/>
                        <Route path="/login" element={<Login/>}/>
                        <Route path="/aboutdash" element={<Aboutdash/>}/>
                        <Route path="/VerSimulaciones" element={<VerSimulaciones/>}/>
                        <Route path="/useregister" element={<UserRegister/>}/>  
                        <Route path="/boss" element={<BossView/>}/>      
                        <Route path="/requests" element={<BossRequests/>}/>
                        <Route path="/dashboard" element={<DashBoard/>}/> 
                        <Route path="/mecanico" element={<MecanicoView/>}/>    
                        <Route path="/formsolicitud" element={<FormSolicitud/>}/> 
                        <Route path="/verpiezas" element={<VerPiezas/>}/>
                        <Route path="/addpiezaperformance" element={<AddPiezaPerformance/>}/>
                        <Route path ="/addpiezalooks" element={<AddPiezaLooks/>}/>
                        <Route path="/crearsimulacion" element={<CrearSimulacion/>}/>
                        <Route path="/solicitudesmecanico" element={<SolicitudesMecanico/>}/>
                        <Route path="/nosotros" element={<Nosotros/>}/>
                        <Route path="/auto" element={<SimulacionAuto/>}/>
                        <Route path="/test" element={<Test/>}/>
                        <Route path="/test2" element={<Test2/>}/>
                        <Route path="/test3" element={<Test3/>}/>
                        <Route path="/test4" element={<Test4/>}/>
                        <Route path="/verSimulacionesMecanico" element={<VerSimulacionesMecanico/>}/>
                        <Route path="/verSolicitudMecanico" element={<VerSolicitudMecanico/>}/>
                        <Route path="/solicitudesManager" element={<VerSolicitudesManager/>}/>
                        <Route path="/verSolicitudManager" element={<VerSolicitudManager/>}/>
                        <Route path="/aceptarSimulaciones" element={<AceptarSimulacion/>}/>



                    </Routes>
                </TokenAuthProvider>
            </CookieAuthProvider>
        </BrowserRouter>
    )
}

export default Routing;