import React from "react";
import { BrowserRouter } from "react-router-dom";
import Navbar from "../components/Navbar";
import Welcome from "../components/Welcome";
import arrow from "../img/arrow.svg"


function Aboutdash ()  {
    return(
        <main>
        <Navbar />
        <section class="questions container">
            <h2 class="subtitle">Preguntas frecuentes</h2>
            <p class="questions__paragraph"></p>

            <section class="questions__container">
                <article class="questions__padding">
                    <div class="questions__answer">
                        <h3 class="questions__title">¿Qué es Dashve?
                            <span class="questions__arrow">
                                <img src={arrow} class="questions__img"/>
                            </span>
                        </h3>

                        <p class="about">Es una aplicación destinada a las fábricas
                            automotrices, que tiene el objetivo de brindar información clave para
                            la optimización de los procesos, y la toma de decisiones, tanto
                            a nivel de alta gerencia como los gerentes de áreas especificas.</p>
                    </div>
                </article>

                <article class="questions__padding">
                <div class="questions__answer">
                    <h3 class="questions__title">¿En qué consiste la aplicación?
                        <span class="questions__arrow">
                            <img src={arrow} class="questions__img"/>
                        </span>
                    </h3>

                    <p class="about">Esta app será un software de
                        planificación, es decir se hará una solicitud en gerencia general,
                        la cual será enviada al gerente comercial para que envié
                        solicitudes a cada área especifica, donde sus gerentes deberán
                        simular sus procesos y presentar sus simulaciones junto a su
                        dashboard de resultados con indicadores y gráficos del
                        desempeño de su simulación, lo cual será evaluado por el
                        gerente comercial, y este determinara si aceptar o no la
                        simulación, luego de esto, de ser aceptado, ya el gerente
                        comercial teniendo las simulaciones de todas las áreas juntas,
                        procederá a enviar una propuesta completa y detallada al
                        gerente general.</p>
                </div>
                </article>

                <article class="questions__padding">
                <div class="questions__answer">
                    <h3 class="questions__title">¿Qué áreas abordará Dashve?
                        <span class="questions__arrow">
                            <img src={arrow} class="questions__img"/>
                        </span>
                    </h3>

                    <p class="about">Dashve aborda 4 áreas clave de un servicio automotriz: el área de armado, el área de pintura, 
                        el área de Ensamblaje de piezas y el área de montaje. El área de armado contiene todos los procesos
                        involucrados con el chasis del vehículo, es decir, bastidores, paneles, etc. Involucra procesos de soldadura
                        y uniones de estos mismos. El área de pintura contiene todos los procesos involucrados con la pintura del vehículo, es decir tanto el
                        pintado del chasis, como la pintura de los paneles del vehículo. El área de Ensamblaje de piezas contiene todos los procesos involucrados con el ensamblaje de las piezas
                        que luego serán montadas en el chasis, es decir el motor, la transmisión, la electrónica, etc. Y por último, el área de montaje
                        contiene todos los procesos involucrados con el montaje del vehículo, es decir montar
                        las piezas que ya fueron ensambladas previamente, en el chasis del vehículo, al finalizar este proceso se obtiene el producto final, que es el vehículo.
                    </p>
                </div>
                </article>
            </section>
            <section class="questions__offer">
            <h2 class="subtitle">¿Estas listo para aprender a ocupar Dashve?</h2>
            <p class="questions__copy">Una aplicación que llevará tu negocio al siguiente nivel</p>
            <a href="#" class="cta">Aprende ahora </a>
            </section>
            
        </section>
        
    </main>
    )
}


export default Aboutdash;