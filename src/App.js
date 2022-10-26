import React from 'react';
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Navegacion from './components/Navegacion';
import CrearSolicitudes from './components/CrearSolicitudes';
import GestionarSolicitudes from './components/GestionarSolicitudes';
import Update from './components/update';
import Delete from './components/delete';

function App() {
  return (
    <div className="App">
      <div className='principal-container'>
        <Router>
            <Navegacion />
            <Routes>          
              <Route exact path='/' element={ <CrearSolicitudes />} />
              <Route exact path='/gestion' element={ <GestionarSolicitudes />} />
              <Route exact path='/update' element={ < Update /> } />
              <Route exact path='/delete' element={ < Delete/> } />
            </Routes> 
        </Router>
      </div>
    </div>  
  );
}

export default App;
