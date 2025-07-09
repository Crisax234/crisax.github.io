import React from "react";
import Zink from "../img/zink.jpg";
import Carvallo from "../img/carvallo.jpg";
import Santander from "../img/face3.jpg";
import Button from "../components/Button"

export default function Nosotros() {


    function hola() {
        <section class="testimony">
            <div class="testimony__container container">
                <img src="./img/leftarrow.png" class="testimony__arrow" id="before"></img>

                <section class="testimony__body testimony__body--show" data-id="1">
                    <div class="testimony__texts">
                        <h2 class="subtitle">Mi nombre es Cristóbal Zink, <span class="testimony__course">estudiante
                            de Ingeniería</span></h2>
                        <p class="testimony__review">Amante de las actividades al aire libre y el deporte, programador nocturno
                            amante del café, la música y la tecnología. </p>

                    </div>

                    <figure class="testimony__picture">
                        <img src={Zink} class="testimony__img"></img>
                    </figure>
                </section>

                <section class="testimony__body" data-id="2">
                    <div class="testimony__texts">
                        <h2 class="subtitle">Mi nombre es Cristóbal Carvallo, <span class="testimony__course">estudiante de
                            Ingeniería</span></h2>
                        <p class="testimony__review">Soy un amante de los autos, el audio de alta fidelidad y lo más importante, los relojes</p>
                    </div>

                    <figure class="testimony__picture">
                        <img src="./img/carvallo.jpg" class="testimony__img"></img>
                    </figure>
                </section>

                <section class="testimony__body" data-id="3">
                    <div class="testimony__texts">
                        <h2 class="subtitle">Mi nombre es Cristóbal Santander, <span class="testimony__course">estudiante de
                            Ingeniería</span></h2>
                        <p class="testimony__review">Un alma aventurera, me encantan los deportes extremos, las experiencias exóticas, los negocios,
                            la música y la tecnología. </p>

                    </div>

                    <figure class="testimony__picture">
                        <img src="./img/face3.jpg" class="testimony__img"></img>
                    </figure>
                </section>


                <img src="./img/rightarrow.png" class="testimony__arrow" id="next"></img>
            </div>

        </section>
    }

    return (
        <section class="testimony">
            <div class="testimony__container container">
                <img class="testimony__arrow" id="before"></img>

                <section class="testimony__body testimony__body--show" data-id="1">
                    <div class="testimony__texts">
                        <h2 class="subtitle">Mi nombre es Cristóbal Zink, <span class="testimony__course">estudiante
                            de Ingeniería</span></h2>
                        <p class="testimony__review">Amante de las actividades al aire libre y el deporte, programador nocturno
                            amante del café, la música y la tecnología. </p>

                    </div>

                    <figure class="testimony__picture">
                        <img src={Zink} class="testimony__img"></img>
                    </figure>
                </section>
            </div>

            <div class="testimony__container container">
                <img class="testimony__arrow" id="before"></img>

                <section class="testimony__body testimony__body--show" data-id="1">
                    <div class="testimony__texts">
                        <h2 class="subtitle">Mi nombre es Cristóbal Carvallo, <span class="testimony__course">estudiante
                            de Ingeniería</span></h2>
                        <p class="testimony__review">Soy un amante de los autos, el audio de alta fidelidad y lo más importante, los relojes. </p>

                    </div>

                    <figure class="testimony__picture">
                        <img src={Carvallo} class="testimony__img"></img>
                    </figure>
                </section>
            </div>

            <div class="testimony__container container">
                <img class="testimony__arrow" id="before"></img>

                <section class="testimony__body testimony__body--show" data-id="1">
                    <div class="testimony__texts">
                        <h2 class="subtitle">Mi nombre es Cristóbal Santander, <span class="testimony__course">estudiante
                            de Ingeniería</span></h2>
                        <p class="testimony__review">Un alma aventurera, me encantan los deportes extremos, las experiencias exóticas, los negocios,
                            la música y la tecnología. </p>

                    </div>

                    <figure class="testimony__picture">
                        <img src={Santander} class="testimony__img"></img>
                    </figure>
                </section>
            </div>
            <div className="box">
            <Button link='\' title="Volver"> </Button>
            </div>
        </section>


    );
};
