import React from "react";
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import LogIn from "./components/auth/Login";
import NuevaCuenta from "./components/auth/NuevaCuenta";
import Proyectos from "./components/preyectos/Proyectos";

import ProyectoState from "./context/proyectos/proyectoState";
import TareaState from "./context/tareas/tareaState";

function App() {
  return (
    <ProyectoState>
      <TareaState>
        <Router>
          <Switch>
            <Route exact path='/' component={LogIn} />
            <Route exact path='/nueva-cuenta' component={NuevaCuenta} />
            <Route exact path='/proyectos' component={Proyectos} />
          </Switch>
        </Router>
      </TareaState>
    </ProyectoState>
  );
}

export default App;
