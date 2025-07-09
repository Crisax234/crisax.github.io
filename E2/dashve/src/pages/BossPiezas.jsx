import React from "react";
import { useState } from "react";
import Button from "../components/Button";
import axios from "axios";
export const SERVER_URL = "http://localhost:3000";


function FormPiezas() {
    const sendForm = async () => {
        const url = `${SERVER_URL}/form`;
        const body = {
            chasis: values.chasis,
            nombre: values.nombre,
            categoria: values.categoria,
            precio: values.precio
        };
        console.log(body)
        await axios
          .post(url, body)
          .then((response) => {
            alert(` post request to ${url} was successful`);

          })
          .catch((error) =>
            alert(`[${error.response.status}] ${error.response.data}`)
    )}

    const [values, setValues] = useState({
        nombre: '',
        presupuesto: '',
        chasis: '',
        descripcion: '',
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
    
    const [show1, setShow1] = useState(false);
    const handleClickP = () => {
        if (!show1){
            setShow1(true);
        } else {
            setShow1(false);
        }

    }

    const [show, setShow] = useState(false);
    const handleClickL = () => {
        if (!show){
            setShow(true);
        } else {
            setShow(false);
        }

    }
    
    const sendForm2 = async () => {
        const url = `${SERVER_URL}/form`;
        const body = {
            chasis: values2.chasis,
            nombre: values2.nombre,
            categoria: values2.categoria,
            precio: values2.precio
        };
        console.log(body)
        await axios
          .post(url, body)
          .then((response) => {
            alert(` post request to ${url} was successful`);

          })
          .catch((error) =>
            alert(`[${error.response.status}] ${error.response.data}`)
    )}

    const [values2, setValues2] = useState({
        nombre: '',
        presupuesto: '',
        chasis: '',
        descripcion: '',
    })

    function handleChange2(evt) {
        const { target } = evt;
        const { name, value2 } = target;
        const newValues = {
          ...values2,
          [name]: value2,
        };
        setValues2(newValues);
        console.log(values)
      }
    function FormLooks() {
        return (
            <div class="box_container">
                <form>
                    <label>Chasis</label>
                        <input 
                            name="chasis" type="text" value={values.chasis} onChange={handleChange}>
                        </input>
                    <label>Nombre</label>
                        <input 
                            name="nombre" type="text" value={values.nombre} onChange={handleChange}>
                        </input>
                
                    <label > Categoria  </label>
                        <input 
                            name="categoria" type="text" value={values.categoria} onChange={handleChange}>
                        </input>

                    <label > Precio  </label>
                        <input 
                            name="precio" type="text" value={values.precio} onChange={handleChange}>
                        </input>
    
            
                    <Button title="Enviar" link="/" onClick={sendForm}></Button>
                    
                </form>

            </div>
        )
    }


    function FormPerformance() {
        return (
            <div class="box_container">
            <form>
                <label>Chasis</label>
                    <input 
                        name="chasis" type="text" value2={values2.chasis} onChange={handleChange2}>
                    </input>
                <label>Nombre</label>
                    <input 
                        name="nombre" type="text" value2={values2.nombre} onChange={handleChange2}>
                    </input>
                
                <label > Categoria  </label>
                    <input 
                        name="categoria" type="text" value2={values2.categoria} onChange={handleChange2}>
                    </input>

                <label > Hp</label>
                    <input 
                        name="hp" type="text" value2={values2.hp} onChange={handleChange2}>
                    </input>

                <label > Torque  </label>
                    <input 
                        name="torque" type="text" value2={values2.torque} onChange={handleChange2}>
                    </input>

                <label > Precio  </label>
                    <input 
                        name="precio" type="text" value2={values2.precio} onChange={handleChange2}>
                    </input>
        
                <Button title="Enviar" link="/" onClick={sendForm2}></Button>
                
            </form>
</div>
        
        )
    }

    return(
    <div class="column_box">
        <div class="box_container">
            
            <div class="form_container">
                
                <button className = 'btn' onClick={handleClickP}> 
                    Agregar piezas inventario performance 
                </button>
                    
                    {show1 === true && <FormPerformance/> }
                    
            </div>

            <div class="form_container">
            
                <button className = 'btn' onClick={handleClickL}> 
                    Agregar piezas inventario looks </button>
                    {show === true && <FormLooks/> }
            </div> 
            
        </div>
        <div>
            <Button title = 'Volver' link= '/boss'></Button>
        </div>
    </div>
)}

export default FormPiezas;