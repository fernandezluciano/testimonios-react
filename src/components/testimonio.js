import React from "react";
import '../styles/Testimonio.css';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

function Testimonio(props) {
  return (
    <Container className='contenedor-testimonio'>
  
        <Col>
          <img 
            className='imagen-testimonio'
            src={require(`../images/testimonio-${props.imagen}.png`)}
            alt={`Imagen de ${props.nombre}`}
          />
        </Col>

        <Col className='contenedor-textos-testimonio' xs={12}>
        
            <p className='nombre-testimonio'> 
              <strong>{props.nombre}</strong> en {props.pais} 
            </p>
            <p className='cargo-testimonio'>
              {props.cargo} en <strong>{props.empresa}</strong>
            </p>
            <p className='texto-testimonio'>
              "{props.testimonio}" 
            </p>
        </Col>
    </Container>
  );
};

export default Testimonio;