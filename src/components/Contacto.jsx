import React, { Component } from 'react'
import "./Contacto.css"
import background from "../images/fondoCreaMenu.jpg";
import img from "../images/bg_2.jpg"
import {NotificationManager, NotificationContainer} from 'react-notifications'
import 'react-notifications/lib/notifications.css'

export class Contacto extends Component {

    constructor() {
      super();
      this.state = {
        nombre: '',
        apellido: '',
        mensaje: ''
      };

      this.handleInputChange = this.handleInputChange.bind(this);
      this.handleSubmit = this.handleSubmit.bind(this);
    }

    lanzarNotificacion(){
      let timeout = 10000;
      let prioridad = true;
                  NotificationManager.info("Muchas gracias por su tiempo, que aproveche!", "Comentario recibido", timeout, 
                  null, prioridad);
    }

    handleInputChange(event) {

      const target = event.target;
      const value = target.type === 'checkbox' ? target.checked : target.value;
      const name = target.name;

      this.setState({
        [name]: value
      });
    }
  
    handleSubmit(event) {
      //alert('A name was submitted: ' + this.state.value);
      event.preventDefault();
      this.lanzarNotificacion() ;
    }

  render() {
    return (
      <div style={{ backgroundImage: `url(${background})` , backgroundPosition: 'center',
      backgroundRepeat: 'no-repeat',
      backgroundAttachment: 'fixed',
      backgroundSize: 'cover'}}>

        <br /> <br />

        <div>
          <NotificationContainer />
        </div>

        <div className="divContacto">
            
            <p className="textoContacto">Mc Anabel: "La mejor forma de mejorar nuestro servicio es escuchar a los clientes" </p>

            <div className="center">
                <img className="" src={img} 
                        style={{ height: '50%', width: '50%'}} alt="img Contacto" />
            </div>

            <br />

            <div className='row center' style={{ marginTop:'50px'}} >
                <hr style={{ color: '#b48608', backgroundColor: '#b48608', height: 3, width: '70%'}}/>
                <hr style={{ color: '#b48608', backgroundColor: '#b48608', height: 3, width: '80%'}}/>
                <hr style={{ color: '#b48608', backgroundColor: '#b48608', height: 3, width: '70%'}}/>
            </div>

            <br />

            <div className="divCuestionario center">
              <br /> <br />
              <h1 className="titulo">Danos tu opinión</h1>
              <br />
              <form onSubmit={this.handleSubmit}>
                <input className="campoCuestionario" type="text" name="nombre" value={this.state.nombre} onChange={this.handleInputChange} placeholder="Nombre"/> <br />
                <input className="campoCuestionario" type="text" name="apellido" value={this.state.apellido} onChange={this.handleInputChange} placeholder="Apellidos"/> <br />
                <textarea rows="5" className="campoCuestionario" type="text" name="mensaje" value={this.state.mensaje} onChange={this.handleInputChange} placeholder="Mensaje"/> <br />
                <button className="botonEnviar" type="submit">Enviar reseña</button>
              </form>
            </div>
        </div>

        <br />

      </div>
    )
  }
}

export default Contacto