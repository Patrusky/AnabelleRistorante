import React, { Component } from 'react'
import { Link } from 'react-router-dom';
import pizza1 from '../images/bg_1.png';
import pizza2 from '../images/bg_2.png';
import galery1 from '../images/gallery-1.jpg';
import galery2 from '../images/image_5.jpg';
import galery3 from '../images/gallery-3.jpg';
import galery4 from '../images/gallery-4.jpg';
import promocion from '../images/imgPromotions.webp'
import './Home.css'

export class Home extends Component {
  render() {
    

    return (
      <div>
        <section className="home-slider owl-carousel ">
          <div id="carouselExampleFade" className="carousel slide carousel-fade " data-ride="carousel" data-bs-ride="carousel">
            <div className="carousel-inner ">
              <div className="carousel-item active slider-item background-madera2 " data-bs-interval="3000">
                
                <div className="container bg-dark bg-opacity-25">
                  <div className="row slider-text align-items-center" data-scrollax-parent="true">
                    
                    <div className="col-md-7 col-sm-12  ftco-animate">
                      <span className="subheading ">Anabelle</span>
                      <h2 className="mb-4 ">PIZZA ESPECIAL</h2>
                      <h4 className="mb-4 mb-md-5 ">Prueba nuestra pizza Anabelle Speciale con jugosos pedacitos de <b>Tomahawk </b>extratierno</h4>
                    </div>
                    <div className="col-md-5 col-sm-12  ftco-animate">
                      <button className="btn btn-white p-3 px-xl-4 py-xl-3 enlace-pedido">
                        <Link to="/creaPedido" className='color-black'>Haz tu pedido</Link>
                      </button>
                      <button className="btn btn-white p-3 px-xl-4 py-xl-3 enlace-contacto">
                        <Link to="./contacto" className='color-black'>Contáctanos</Link>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
              <div className="carousel-item  slider-item background-madera ">
                <div className="container bg-dark bg-opacity-25">
                  <div className="row slider-text align-items-center" data-scrollax-parent="true">
                    <div className="col-md-6 col-sm-12 ftco-animate">
                      <span className="subheading">Deliciosa</span>
                      <h1 className="mb-4">Pizza Camprestre</h1>
                      <h5 className="mb-4 mb-md-5">Sentiras como te trasladas a la Toscana con nuestra pizza preparada con los productos más frescos</h5>
                      <button className="btn btn-white p-3 px-xl-4 py-xl-3 enlace-pedido">
                        <Link to="/creaPedido" className='color-black'>Haz tu pedido</Link>
                      </button>
                      <button className="btn btn-white p-3 px-xl-4 py-xl-3 enlace-contacto">
                        <Link to="./contacto" className='color-black' >Contáctanos</Link>
                      </button>
                    </div>
                    <div className="col-md-6 ftco-animate">
                      <img src={pizza1} className="img-fluid" alt="" />
                    </div>
                  </div>
                </div>
              </div>
              <div className="carousel-item  slider-item background-madera">
                <div className="container bg-dark bg-opacity-25">
                  <div className="row slider-text align-items-center " data-scrollax-parent="true">
                    <div className="col-md-6 ftco-animate">
                      <img src={pizza2} className="img-fluid" alt="" />
                    </div>
                    <div className="col-md-6 col-sm-12  ftco-animate">
                      <span className="subheading">Peperoni</span>
                      <h5 className="mb-4">Pizza picante</h5>
                      <p className="mb-4 mb-md-5">Si eres amante del picante, atrevete con nuestra pizza de peperoni picante.</p>
                      <button className="btn btn-white p-3 px-xl-4 py-xl-3 enlace-pedido">
                        <Link to="/creaPedido" className='color-black'>Haz tu pedido</Link>
                      </button>
                      <button className="btn btn-white p-3 px-xl-4 py-xl-3 enlace-contacto">
                        <Link to="./contacto" className='color-black'>Contáctanos</Link>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <Link className="carousel-control-prev" to="#carouselExampleFade" role="button" data-slide="prev">
              <span className="carousel-control-prev-icon" aria-hidden="true"></span>
            </Link>
            <Link className="carousel-control-next" to="#carouselExampleFade" role="button" data-slide="next">
              <span className="carousel-control-next-icon" aria-hidden="true"></span>
            </Link>

          </div>
        </section>
        <section className=''>
          <div className='row social-location'>
            <div className='social col-md-4'>
              <div className='row'>
                <h3 className='pb-3'>Síguenos</h3>
              </div>
              <div className='row p-3 '>
                <div className='col-md-4'>
                  <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor" className="bi bi-instagram" viewBox="0 0 16 16">
                    <path d="M8 0C5.829 0 5.556.01 4.703.048 3.85.088 3.269.222 2.76.42a3.917 3.917 0 0 0-1.417.923A3.927 3.927 0 0 0 .42 2.76C.222 3.268.087 3.85.048 4.7.01 5.555 0 5.827 0 8.001c0 2.172.01 2.444.048 3.297.04.852.174 1.433.372 1.942.205.526.478.972.923 1.417.444.445.89.719 1.416.923.51.198 1.09.333 1.942.372C5.555 15.99 5.827 16 8 16s2.444-.01 3.298-.048c.851-.04 1.434-.174 1.943-.372a3.916 3.916 0 0 0 1.416-.923c.445-.445.718-.891.923-1.417.197-.509.332-1.09.372-1.942C15.99 10.445 16 10.173 16 8s-.01-2.445-.048-3.299c-.04-.851-.175-1.433-.372-1.941a3.926 3.926 0 0 0-.923-1.417A3.911 3.911 0 0 0 13.24.42c-.51-.198-1.092-.333-1.943-.372C10.443.01 10.172 0 7.998 0h.003zm-.717 1.442h.718c2.136 0 2.389.007 3.232.046.78.035 1.204.166 1.486.275.373.145.64.319.92.599.28.28.453.546.598.92.11.281.24.705.275 1.485.039.843.047 1.096.047 3.231s-.008 2.389-.047 3.232c-.035.78-.166 1.203-.275 1.485a2.47 2.47 0 0 1-.599.919c-.28.28-.546.453-.92.598-.28.11-.704.24-1.485.276-.843.038-1.096.047-3.232.047s-2.39-.009-3.233-.047c-.78-.036-1.203-.166-1.485-.276a2.478 2.478 0 0 1-.92-.598 2.48 2.48 0 0 1-.6-.92c-.109-.281-.24-.705-.275-1.485-.038-.843-.046-1.096-.046-3.233 0-2.136.008-2.388.046-3.231.036-.78.166-1.204.276-1.486.145-.373.319-.64.599-.92.28-.28.546-.453.92-.598.282-.11.705-.24 1.485-.276.738-.034 1.024-.044 2.515-.045v.002zm4.988 1.328a.96.96 0 1 0 0 1.92.96.96 0 0 0 0-1.92zm-4.27 1.122a4.109 4.109 0 1 0 0 8.217 4.109 4.109 0 0 0 0-8.217zm0 1.441a2.667 2.667 0 1 1 0 5.334 2.667 2.667 0 0 1 0-5.334z" />
                  </svg>
                </div>
                <div className='col-md-4'>
                  <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor" className="bi bi-facebook" viewBox="0 0 16 16">
                    <path d="M16 8.049c0-4.446-3.582-8.05-8-8.05C3.58 0-.002 3.603-.002 8.05c0 4.017 2.926 7.347 6.75 7.951v-5.625h-2.03V8.05H6.75V6.275c0-2.017 1.195-3.131 3.022-3.131.876 0 1.791.157 1.791.157v1.98h-1.009c-.993 0-1.303.621-1.303 1.258v1.51h2.218l-.354 2.326H9.25V16c3.824-.604 6.75-3.934 6.75-7.951z" />
                  </svg>
                </div>
                <div className='col-md-4'>
                  <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor" className="bi bi-tiktok" viewBox="0 0 16 16">
                    <path d="M9 0h1.98c.144.715.54 1.617 1.235 2.512C12.895 3.389 13.797 4 15 4v2c-1.753 0-3.07-.814-4-1.829V11a5 5 0 1 1-5-5v2a3 3 0 1 0 3 3V0Z" />
                  </svg>
                </div>
              </div>
            </div>
            <div className='contacto col-md-8'>
              <div className='row' >
                <div className='col-md-4 text'>
                  <div className='row'>
                    <div className='col-md-11'>
                      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" className="bi bi-geo-alt-fill mb-3" viewBox="0 0 16 16">
                        <path d="M8 16s6-5.686 6-10A6 6 0 0 0 2 6c0 4.314 6 10 6 10zm0-7a3 3 0 1 1 0-6 3 3 0 0 1 0 6z" />
                      </svg>
                      <h5>Paseo de Echegaray, 21</h5>
                    </div>
                  </div>
                  <div className='row'>
                    <div className='col-md-11'>
                      <p>Zaragoza 50002</p>
                    </div>
                  </div>
                </div>
                <div className='col-md-4 text'>
                  <div className='row'>
                    <div className='col-md-11'>
                      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" className="bi bi-telephone-fill mb-3" viewBox="0 0 16 16">
                        <path fillRule="evenodd" d="M1.885.511a1.745 1.745 0 0 1 2.61.163L6.29 2.98c.329.423.445.974.315 1.494l-.547 2.19a.678.678 0 0 0 .178.643l2.457 2.457a.678.678 0 0 0 .644.178l2.189-.547a1.745 1.745 0 0 1 1.494.315l2.306 1.794c.829.645.905 1.87.163 2.611l-1.034 1.034c-.74.74-1.846 1.065-2.877.702a18.634 18.634 0 0 1-7.01-4.42 18.634 18.634 0 0 1-4.42-7.009c-.362-1.03-.037-2.137.703-2.877L1.885.511z" />
                      </svg>
                      <h5>956 56 22 20</h5>
                    </div>
                    <div className='row'>
                      <div className='col-md-11'>
                        <p>Tenemos Parking</p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className='col-md-4 text'>
                  <div className='row'>
                    <div className='col-md-11'>
                      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" className="bi bi-clock-fill mb-3" viewBox="0 0 16 16">
                        <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM8 3.5a.5.5 0 0 0-1 0V9a.5.5 0 0 0 .252.434l3.5 2a.5.5 0 0 0 .496-.868L8 8.71V3.5z" />
                      </svg>
                      <h5>Abierto Martes-Domingos</h5>
                    </div>
                  </div>
                  <div className='row'>
                    <div className='col-md-11'>
                      <p>13:00 - 23:00</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className='promocion'>
          <div className='row align-items-center'>
            <div className="col-sx-8 col-md-6 text-center p-4">
              <Link to="/creaPedido">
                <img src={promocion} alt="" className='img-fluid imgPromocion' />
              </Link>
            </div>
            <div className="col-sx-4  col-md-6 text-center ">
              <div className=' pb-3'>
                <span className='tituloPromo'>Promociones</span>
              </div>
              <div>
                <h4>Síguenos en las redes </h4>
                <h4>Verás las distintas ofertas que van saliendo cada mes</h4>
              </div>
            </div>
          </div>
        </section>
        <section className='fondo3'>
          <div className='row'>
            <div className='col-md-3'>
              <img src={galery1} className='galeria img-fluid' alt="" />
            </div>
            <div className='col-md-3'>
              <img src={galery2} className='galeria img-fluid ' alt="" />
            </div>
            <div className='col-md-3'>
              <img src={galery3} className='galeria img-fluid' alt="" />
            </div>
            <div className='col-md-3'>
              <img src={galery4} className='galeria img-fluid' alt="" />
            </div>
          </div>
        </section>


        {/* <CarouselFadeExample /> */}


      </div>
    )
  }
}

export default Home