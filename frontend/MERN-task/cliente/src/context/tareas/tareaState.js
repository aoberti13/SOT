import React, { useReducer } from "react";
import TareaContext from "./tareaContext";
import TareaReducer from "./tareaReducer";
import { uuid } from 'uuidv4';

import {
    TAREAS_PROYECTO,
    AGREGAR_TAREA,
    VALIDAR_TAREA,
    ELIMINAR_TAREA,
    ESTADO_TAREA,
    TAREA_ACTUAL,
    ACTUALIZAR_TAREA,
    LIMPIAR_TAREA
} from "../../types";

const TareaState = props => {
    const initialState = {
        tareas: [
            { id: 1, nombre: 'elegir plataforma', estado: true, proyectoId: 1 },
            { id: 2, nombre: 'elegir moto', estado: false, proyectoId: 2 },
            { id: 3, nombre: 'elegir color', estado: true, proyectoId: 3 },
            { id: 4, nombre: 'elegir pago', estado: false, proyectoId: 4 },
            { id: 5, nombre: 'elegir plataforma', estado: true, proyectoId: 1 },
            { id: 6, nombre: 'elegir moto', estado: false, proyectoId: 2 },
            { id: 7, nombre: 'elegir color', estado: true, proyectoId: 3 },
            { id: 8, nombre: 'elegir plataforma', estado: true, proyectoId: 4 },
            { id: 9, nombre: 'elegir moto', estado: false, proyectoId: 2 },
            { id: 10, nombre: 'elegir color', estado: true, proyectoId: 1 },
            { id: 11, nombre: 'elegir color', estado: true, proyectoId: 3 },
            { id: 12, nombre: 'elegir plataforma', estado: true, proyectoId: 4 },
            { id: 13, nombre: 'elegir color', estado: true, proyectoId: 3 },
        ],
        tareasproyecto: null,
        errortarea: false,
        tareaseleccionada: null
    }

    //crear dispatch y stsate
    const [state, dispatch] = useReducer(TareaReducer, initialState)

    // crear las funciones
    //obteer las tareas de un proyecto
    const obtenerTareas = proyectoId => {
        dispatch({
            type: TAREAS_PROYECTO,
            payload: proyectoId
        })
    }

    //agregar una tarea al proyecto seleccionado
    const agregarTarea = tarea => {
        tarea.id = uuid();
        dispatch({
            type: AGREGAR_TAREA,
            payload: tarea
        })
    }

    // validar tarea y muestra un error en caso de que sea necesario
    const validarTarea = () => {
        dispatch({
            type: VALIDAR_TAREA
        })
    }

    //elimiar tarea por id
    const elimiarTarea = (id) => {
        dispatch({
            type: ELIMINAR_TAREA,
            payload: id
        })
    }

    //cambiar el estado de una tarea
    const cambiarEstadoTarea = (tarea) => {
        dispatch({
            type: ESTADO_TAREA,
            payload: tarea
        })
    }


    //extrae una tarea para edicion
    const guardarTareaActal = (tarea) => {
        dispatch({
            type: TAREA_ACTUAL,
            payload: tarea
        })
    }

    //edita o modifica una tarea
    const actualizarTarea = (tarea) => {
        dispatch({
            type: ACTUALIZAR_TAREA,
            payload: tarea
        })
    }

    //elimina la tareaseleccionada
    const limpiarTarea = () => {
        dispatch({
            type: LIMPIAR_TAREA
        })
    }
    return (
        <TareaContext.Provider
            value={{
                tareas: state.tareas,
                tareasproyecto: state.tareasproyecto,
                errortarea: state.errortarea,
                tareaseleccionada: state.tareaseleccionada,
                obtenerTareas,
                agregarTarea,
                validarTarea,
                elimiarTarea,
                cambiarEstadoTarea,
                guardarTareaActal,
                actualizarTarea,
                limpiarTarea
            }}
        >
            {props.children}
        </TareaContext.Provider>
    )
}

export default TareaState;