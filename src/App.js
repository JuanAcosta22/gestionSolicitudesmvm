import { BrowserRouter as Router, Route} from 'react-router-dom';
import Navegacion from './components/Navegacion';
// import ListaSolicitudes from './components/ListaSolicitudes';
import CrearSolicitudes from './components/CrearSolicitudes';
import EditarSolicitudes from './components/EditarSolicitudes';
import ModalVerSolicitud from './components/ModalVerSolicitud';

function App() {
  return (
    <div className="App">
      <div className='principal-container'>
        <Router>
            <Navegacion />
            <Route path='/editar' exact component={EditarSolicitudes} />
            <Route path='/modal' exact component={ModalVerSolicitud} /> {/*Por Radocado*/}
            <Route path='/' exact component={CrearSolicitudes} />
            <Route path='/listar' exact component={EditarSolicitudes} />
        </Router>
      </div>
    </div>  
  );
}

export default App;
