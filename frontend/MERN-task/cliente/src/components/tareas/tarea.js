import React, { useContext } from "react";
import tareaContext from "../../context/tareas/tareaContext";
import proyectoContext from "../../context/proyectos/proyectoContext";

const Tarea = ({ tarea }) => {

    // Extraer si un proyecto esta activo
    const proyectosContext = useContext(proyectoContext);
    const { proyecto } = proyectosContext;

    //obtener la funcion de elimiar tareas 
    const tareasContext = useContext(tareaContext);
    const { elimiarTarea, obtenerTareas, cambiarEstadoTarea, guardarTareaActal } = tareasContext;

    // Extraer el proyecto
    const [proyectoActual] = proyecto;


    // funcion que se ejecuta cuando el usuario toca en elimiar una tarea
    const tareaEliminar = (id) => {
        elimiarTarea(id);
        obtenerTareas(proyectoActual.id)
    }

    //funcion que cambia el estado de las tareas
    const cambiarEstado = (tarea) => {
        if (tarea.estado) {
            tarea.estado = false
        } else {
            tarea.estado = true
        }
        cambiarEstadoTarea(tarea)
    }

    //fn que selecciona la tarea para editarla 
    const seleccionarTarea = (tarea) => {
        guardarTareaActal(tarea);
    }

    return (
        <li className="tarea sombra">
            <p>{tarea.nombre}</p>

            <div className="estado">
                {tarea.estado
                    ? (
                        <button
                            type="button"
                            className="completo"
                            onClick={() => cambiarEstado(tarea)}
                        >
                            Completo
                        </button>
                    ) : (
                        <button
                            type="button"
                            className="incompleto"
                            onClick={() => cambiarEstado(tarea)}
                        >
                            incompleto
                        </button>
                    )

                }
            </div>

            <div className="acciones">
                <button
                    type="button"
                    className="btn btn-primario"
                    onClick={() => seleccionarTarea(tarea)}
                >
                    Editar
                </button>

                <button
                    type="button"
                    className="btn btn-secunadrio"
                    onClick={() => tareaEliminar(tarea.id)}
                >Eliminar
                </button>
            </div>
        </li>
    );
}

export default Tarea