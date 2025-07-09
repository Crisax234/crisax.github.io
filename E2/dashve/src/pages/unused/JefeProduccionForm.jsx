import React from "react";
import { useState } from "react";
const BossView = () => {

    const [values, setValues] = useState({
        nombre: '',
        presupuesto: '',
        C: '',
        D: ''
    })

    function handleChange(evt) {
        const { target } = evt;
        const { name, value } = target;
        const newValues = {
          ...values,
          [name]: value,
        };
        setValues(newValues);
        console.log(values)
      }
    

    return(
        <form>
            <label>Nombre</label>
            <input name="nombre" type="text" value={values.nombre} onChange={handleChange}></input>
            <br/>
            <label>Presupuesto</label>
            <input name="presupuesto" type="text" value={values.presupuesto} onChange={handleChange}></input>
            <br/>
            <label>C</label>
            <input name="C" type="text" value={values.C} onChange={handleChange}></input>
            <br/>
            <label>D</label>
            <input name="D" type="text" value={values.D} onChange={handleChange}></input>

            <button  type="submit"> Enviar </button>

        </form>
        
    )
}


export default BossView;