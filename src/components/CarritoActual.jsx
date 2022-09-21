import { now } from 'jquery';
import React, { Component } from 'react'
import "./CreaPedido.css"
import Progressbar from './Progress_bar';
import {NotificationManager, NotificationContainer} from 'react-notifications'
import 'react-notifications/lib/notifications.css'
import imgCasa from "../images/casa.png";
import imgRestaurante from "../images/restaurante.png";
//rce
export class carritoActual extends Component {

  constructor(){
    super();

    this.state = {
      productos: [],
      cantidad: [],
      progress: 0,
      horaPedido: now,
      horaEntrega: now,
      realizandoEnvio: false,
      estadoPedido: "Gestionando...",
      direccion: '',
      numeroTelefono: '',
      rutaPedido: "https://private-anon-daf4fe63f9-pizzaapp.apiary-mock.com/orders/"
    }

    this.handleInputChange = this.handleInputChange.bind(this);
  }

  
  lanzarNotificacion(minutos){
    let timeout = 10000;
    let prioridad = true;
                NotificationManager.info("El pedido se entregará en aproximadamente " + minutos + " minutos.", "Pedido realizado", timeout, 
                null, prioridad);
  }

  render() {
    return (
      <div>
          <div className="carrito">
              <h1 className="titulo2">Menú actual</h1>
              {this.state.productos.map((producto, index) => {
                  if( this.state.cantidad[index] > 0)
                  return(
                        
                        <div className="productoCarrito" key={index}>

                              <img className="imagenCarrito" src={producto.imagen} alt="producto.imagen no encontrada"></img>
                              {producto.nombre} - {producto.precio} € - {this.state.cantidad[index]} unds
                              <button className="botonAumentarCantidad" onClick={ (e) => { this.setCantidad(e,index,1) } }>+</button>
                              <button className="botonDisminuirCantidad" onClick={ (e) => { this.setCantidad(e,index,-1) } }>-</button>
                                    
                        </ div>
                  )
                  return(<div></div>)
              })}    
              { (this.state.productos.length > 0) && 
                      <div className="center precioTotal"> <br></br>Coste total: {this.getPrecioTotal()} €</div>   
              }     
          </div>

          <div className="envioInfo center">
                <h1 className="titulo2">Información de envio</h1>
                <form>
                <br />
                  <input className="inputCreaPedido" type="text" name="direccion" value={this.state.direccion} placeholder="Direccion de envio" onChange={this.handleInputChange}/>  <br />  <br /> 
                  <input className="inputCreaPedido" type="number" name="numeroTelefono" value={this.state.numeroTelefono} placeholder="Número de teléfono" onChange={this.handleInputChange}/>  <br />  <br />  <br /> 
                  <button type="button" className="btn btn-outline-success" onClick={ (e) => {this.realizarPedido(e);  }}>Confirmar pedido</button>
                  <div>
                    <NotificationContainer />
                  </div>
                </form>  
          </div>

          { this.state.realizandoEnvio === true && 
          <div className="envioEstado center">
                <h1 className="titulo2">Estado del envio</h1>

                <div className="center">
                     Hora del pedido: {this.state.horaPedido} <br />
                     Hora prevista de entrega: {this.state.horaEntrega} <br />
                     Estado: {this.state.estadoPedido} <br /> 

                     <div className="row center" style={{display: "flex", marginTop: "30px"}}>

                          <div className="col-md-3 center">
                                <img src={imgRestaurante} alt="restaurante" style={{width: "50%", height: "50%"}}/>
                          </div>

                          <div className="col-md-6 center">
                                <Progressbar bgcolor="orange" progress={this.state.progress}  height={30} />
                          </div>

                          <div className="col-md-3 center">
                                <img src={imgCasa} alt="casa" style={{width: "50%", height: "50%"}}/>
                          </div>
                          
                          
                     </div>
                    
                </div>    
          </div>}
      </div>
    )
  }

  handleInputChange(event) {

    const target = event.target;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    const name = target.name;

    this.setState({
      [name]: value
    });
  }

  realizarPedido(event){
    event.preventDefault();

    if( this.state.realizandoEnvio === false && this.state.productos.length !== 0 && this.state.direccion.length !== 0 && this.state.numeroTelefono.length == 9 ){
      this.setState({ realizandoEnvio: true });
      var request = new XMLHttpRequest();
      request.open('POST', 'https://private-anon-9b875335ce-pizzaapp.apiary-mock.com/orders/');
  
      request.onreadystatechange = () => {
        if (request.readyState === 4) {
  
            let data = JSON.parse(request.responseText);
            let newHoraPedido = data.orderedAt.split("T")[1].substring(0, 5);
            let newHoraEntrega = data.esitmatedDelivery.split("T")[1].substring(0, 5);
            this.setState({
              horaPedido: newHoraPedido,
              horaEntrega: newHoraEntrega,
            })
  
            let minutosCoste = Math.abs( ( parseInt(newHoraPedido.substring(0, 2), 10) - parseInt(newHoraEntrega.substring(0, 2), 10) ) * 60 +
                                      (parseInt(newHoraPedido.substring(3, 5), 10) - parseInt(newHoraEntrega.substring(3, 5), 10) ));

            this.lanzarNotificacion(minutosCoste) ;
            let aumentoXsegundo = 100/(minutosCoste*60);
  
            const randFinGestion = 1 + Math.random() * (4 - 1);
            const randFinCocinar = randFinGestion + Math.random() * (60 - randFinGestion);
            let newProgress = this.state.progress;
            var refreshIntervalId = setInterval(() => {
  
                newProgress = newProgress + aumentoXsegundo;
                this.setState({ progress: Number(newProgress).toFixed(2) })
  
                if( this.state.progress >= randFinCocinar ){
                    this.setState({ estadoPedido: "Entregando..." })
                }
                else if(this.state.progress >= randFinGestion){
                  this.setState({ estadoPedido: "Preparando..." })
                }
  
                if( this.state.progress >= 99){
                      this.setState({ realizandoEnvio: false })
                      clearInterval(refreshIntervalId);
                }
              
            }, 1000); 
        }
      };
  
      var body = "{ \
        'cart': [ \
          { \
            'menuItemId': 2, \
            'quantity': 2 \
          }, \
          { \
            'menuItemId': 3, \
            'quantity': 1 \
          }, \
          { \
            'menuItemId': 6, \
            'quantity': 2 \
          } \
        ], \
        'restuarantId': 3 \
      }";
  
      request.send(body);
    }

    
  
  }

  getPrecioTotal(){
      let total = 0;

      for (let index = 0; index < this.state.cantidad.length; index++) {
        total += this.state.cantidad[index] * this.state.productos[index].precio;
      }
      return total.toFixed(2);
  }

  setCantidad(event, index, cantidad){

    event.preventDefault();
    let cantidadNew = this.state.cantidad;

    if(cantidadNew[index] + cantidad <= 0){
      cantidadNew.splice(index, 1);

      let productosNew = this.state.productos.filter(item => item.nombre !== this.state.productos[index].nombre);
      this.setState( 
        { productos: productosNew }
      );

    }
    else{
      cantidadNew[index]+=cantidad;
    }

    this.setState( 
      { cantidad: cantidadNew }
    );
  }

  addProducto(producto){

    if( this.state.realizandoEnvio === false){
        let index = this.state.productos.indexOf(producto);
        if(index > -1){
          let cantidadNew = this.state.cantidad;
          cantidadNew[index]+=1;
          this.setState( 
            { cantidad: cantidadNew }
          );
        }
        else{

          this.state.productos.push(producto);

          let cantidadNew = this.state.cantidad;
          cantidadNew[cantidadNew.length] = 1;
          this.setState( 
            { cantidad: cantidadNew }
          );
        }

        
    }
  }
}

export default carritoActual