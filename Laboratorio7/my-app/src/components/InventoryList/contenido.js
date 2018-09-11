import React, { Component } from 'react';
import './comentarios.css';
import Counter from  './contador';

class Contenido extends Component {
    render () {
      return <div>
        <h2>La casa del Lago</h2>
        <h4>El arquitecto empieza a restaurar la casa y su perro pisa pintura negra y deja las huellas a las que se refería Kate. Ambos siguen enviándose correspondencia, pero descubren que la bandera del buzón sube y baja sola, sin que haya nadie alrededor. Desconcertado Alex pregunta a Kate que cómo podía saber que ocurriría lo de las huellas de su perro si cuando él llegó la casa estaba deshabitada. Kate, también sorprendida, contesta y ambos se dan cuenta de que están viviendo en el mismo lugar, pero con dos años de diferencia.</h4>
        <Counter />
      </div>
    }
  }
  
  export default Contenido