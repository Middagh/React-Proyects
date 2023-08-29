import './App.css';
import freeCodeCamp_logo from './imagenes/freeCodeCamp_logo.svg';
import Boton from './componentes/Boton';

function App() {

  const manejarClic = () => {
    console.log ('Clic');
  }

  const reiniciarContador = () => {
    console.log('Reiniciar');
  }
  return (
    <div className="App">
      <div className='freecodecamp-logo-contenedor'>
        <img
          className='freecodecamp-logo'
          src={freeCodeCamp_logo}
          alt="freecodecamp"
        />
        <div className='contenedor-principal'>
          <Boton
            texto='Clic'
            esBotonDeClic={true}
            manejarClic={manejarClic} />
          <Boton
            texto='Reiniciar'
            esBotonDeClic={false}
            manejarClic={reiniciarContador} />
        </div>
      </div>
    </div>
  );
}

export default App;
