import React, { Fragment, useState, useContext } from "react";
import proyectoContext from "../../context/proyectos/proyectoContext";

const NuevoProyecto = () => {

    // obtener el state del formulario
    const proyectosContext = useContext(proyectoContext);
    const { formulario, errorformulario, mostrarFromulario, agregarProyecto, mostrarError } = proyectosContext;
    //state para proyecto

    const [proyecto, setProyecto] = useState({
        nombre: ''
    });

    //extraer nombre de proyecto

    const { nombre } = proyecto

    // lee los contenidos del imput
    const onChangePoryecto = e => {
        setProyecto({
            ...proyecto,
            [e.target.name]: e.target.value
        })
    }


    //cuando el usuario envia un proyecto
    const onSubmitProyecto = e => {
        e.preventDefault();

        // validar el proyecto 
        if (nombre === '') {
            mostrarError();
            return;
        }
        //agregar al state
        agregarProyecto(proyecto)

        //reiniciar el form
        setProyecto({
            nombre: ''
        })

    }

    return (
        <Fragment>
            <button
                type="button"
                className="btn btn-block btn-primario"
                onClick={() => mostrarFromulario()}
            >
                Nuevo Proyecto
            </button>

            {formulario ? (
                <form
                    className="formulario-nuevo-proyecto"
                    onSubmit={onSubmitProyecto}
                >
                    <input
                        type="text"
                        className="input-text"
                        placeholder="Nombre Proyecto"
                        name="nombre"
                        value={nombre}
                        onChange={onChangePoryecto}
                    />

                    <input
                        type="submit"
                        className="btn btn-block btn-primario"
                        value="Agregar Proyecto"
                    />
                </form>
            ) : null }

            {errorformulario ? <p className="mensaje error">El nombre del proyecto es obligatorio</p>:null}
        </Fragment>
    );
}

export default NuevoProyecto;