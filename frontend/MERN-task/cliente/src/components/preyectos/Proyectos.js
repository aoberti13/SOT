import React from "react";
import SideBar from "../layout/sidebar";
import Barra from "../layout/barra";
import FormTarea from "../tareas/FormTarea";
import ListadoTareas from "../tareas/listadoTareas";

const Proyectos = () => {
    return (
        <div className="contenedor-app">
            <SideBar />
            <div className="seccion-principal">

                <Barra />

                <main>
                    <FormTarea />

                    <div className="contenedor-tareas">
                        <ListadoTareas />
                    </div>
                </main>
            </div>
        </div>
    )
}

export default Proyectos;