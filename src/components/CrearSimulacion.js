import React from "react";
import FormSimulacion from "./forms/FormSimulacion";

import SidebarMecanico from "./SidebarMecanico";

export default function CrearSimulacion () {
    return (
        <div className="box">
            <div id="side"> <SidebarMecanico/>
            </div>
            <div id="content"> <FormSimulacion /> 
            </div>
        </div>

    );

};