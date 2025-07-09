import React from "react";
import Proc from "../img/proc.png"
import Navbar from "../components/Navbar";

function Welcome() {
    const currentUser = JSON.parse(localStorage.getItem('user'));
    console.log(currentUser);
    return (
        
        <div>
            <Navbar />
        <div class="box_container">
            
            <div class= "content">
                <div class="text">
                    <h2>Bienvenido a Dashve</h2>
                    <p>Esta aplicación te dara todas las herramientas necesarias para que tu cadena de producción funcione de la manera mas optima posible, esta se encarga de recopilar todo tipo de datos y simular escenarios que ayuden a tomar las mejores decisiones administrativas para tu empresa.</p>
                    <a href="/nosotros" class="btn">Conoce nuestro equipo</a>
                </div>
            </div>
            <div class="image">
                <img src={Proc} alt="Home-Image" />
            </div>
        </div>
        </div>
        
    );
}

export default Welcome;

