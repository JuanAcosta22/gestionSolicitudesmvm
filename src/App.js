import React from 'react';
import { BrowserRouter as Router, Route} from 'react-router-dom';
import Navegacion from './components/Navegacion';
import ListaSolicitud from './components/ListaSolicitud';
import CrearSolicitudes from './components/CrearSolicitudes';
import GestionarSolicitudes from './components/GestionarSolicitudes';
// import AsignarSolicitudes from './components/AsignarSolicitudes';

function App() {
  return (
    <div className="App">
      <div className='principal-container'>
        <Router>
            <Navegacion />           
            <Route exact path='/' component={CrearSolicitudes} />
            <Route exact path='/gestion' component={GestionarSolicitudes} />
            <Route exact path='/lista' component={ListaSolicitud} />
            {/* <Route exact path='/asignar' component={AsignarSolicitudes} /> */}
        </Router>
      </div>
    </div>  
  );
}

export default App;
