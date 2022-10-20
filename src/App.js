import React from 'react';
import { BrowserRouter as Router, Route} from 'react-router-dom';
import Navegacion from './components/Navegacion';
import ListaSolicitud from './components/ListaSolicitud';
import CrearSolicitudes from './components/CrearSolicitudes';
import GestionarSolicitudes from './components/GestionarSolicitudes';
import AsignarSolicitudes from './components/AsignarSolicitudes';

function App() {
  return (
    <div className="App">
      <div className='principal-container'>
        <Router>
            <Navegacion />
            <Route path='/gestionar' exact component={GestionarSolicitudes} />
            <Route path='/' exact component={CrearSolicitudes} />
            <Route path='/listar' exact component={ListaSolicitud} />
            <Route path='/asignar' exact component={AsignarSolicitudes} />
        </Router>
      </div>
    </div>  
  );
}

export default App;
