import Button from "../components/Button";

function GTview(){
    return (
    <div class="box_container">
        <Button title="Revisar solicitudes" link="/gtrequests"></Button>
        <Button title="Crear informe" link="/informe"></Button>
        <Button title="Ver estado" link="/estado"></Button>
        <Button title="Crear informe gerente" link="/informefinal"></Button>
    </div>
    );
}

export default GTview;