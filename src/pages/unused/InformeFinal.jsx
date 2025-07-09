import React from "react";
import { useState } from "react";

const InformeFinal = () => {

    const [values, setValues] = useState({
        id: '',
        descripcion: ''
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
            
            
            <label>ID</label>
            <br/>
            <input name="id" type="text" value={values.id} onChange={handleChange}></input>
            <br/>
            <label>Descripcion</label>
            <br/>
            <input name="descripcion" type="text" value={values.descripcion} onChange={handleChange}></input>
            <br/>
            <button  type="submit"> Enviar </button>

        </form>
        
    )
}


export default InformeFinal;