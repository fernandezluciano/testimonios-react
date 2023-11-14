import './App.css';
import Testimonio from './components/testimonio'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Testimonios from './data/Testimonios';

function App() {
  return (
    <div className="App">
      
        <Container>
          <Row>
            <h1>Esto es lo que dicen nuestros alumnos sobre freeCodeCamp:</h1>
          </Row>
        </Container>

          {Testimonios.map((testimonio) => {
            return (
              <Testimonio 
                nombre={testimonio.nombre}
                pais={testimonio.pais}
                imagen={testimonio.imagen}
                cargo={testimonio.cargo}
                empresa={testimonio.empresa}
                testimonio={testimonio.testimonio}
              />
            );
          })}
          
    </div>
  );
}

export default App;