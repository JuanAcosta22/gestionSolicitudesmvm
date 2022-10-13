import { BrowserRouter as Router, Route} from 'react-router-dom';
import Navegacion from './components/Navegacion';
import ListaSolicitudes from './components/ListaSolicitudes';
import CrearSolicitudes from './components/CrearSolicitudes';
import EditarSolicitudes from './components/EditarSolicitudes';

function App() {
  return (
    <div className="App">
      <div className='principal-container'>
        <Router>
            <Navegacion />
            <Route path='/editar' exact component={EditarSolicitudes} />
            <Route path='/' exact component={CrearSolicitudes} />
            <Route path='/listar' exact component={ListaSolicitudes} />
        </Router>
      </div>
    </div>  
  );
}

export default App;
