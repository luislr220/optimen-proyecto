import React, { Component } from 'react';
import './ContactUs.css';

export default class ContactUs extends Component {
  render() {
    return (
      <div>
        <h1 className='h1C'>Contact Us</h1>
        <div className='ContactForm'>
          <div className="contact_form">
            <div>
            <p className='Pc2'>Av. León 119. <br/>
              León Guanajuato<br/>
              Mexico<br/>
              info@optimen.com.mx<br/>
            </p>
            </div>
            <div className="formulario">
              <form>       
                <p className='Pc'>
                    <label for="nombre" className="colocar_nombre">First Name
                      <span className="obligatorio">*</span>
                    </label>
                    <input type="text" name="introducir_nombre" id="nombre" required="obligatorio" placeholder="write your First name"/>
                </p>

                <p className='Pc'>
                    <label for="nombre" className="colocar_nombre">Last Name
                      <span className="obligatorio">*</span>
                    </label>
                    <input type="text" name="introducir_nombre" id="nombre" required="obligatorio" placeholder="write your Last name"/>
                </p>
                        
                <p className='Pc'>
                  <label for="email" className="colocar_email">Email
                    <span className="obligatorio">*</span>
                  </label>
                  <input type="email" name="introducir_email" id="email" required="obligatorio" placeholder="write your email"/>
                </p>
                      
                <p className='Pc'>
                  <label for="mensaje" className="colocar_mensaje">Mensaje
                              <span class="obligatorio">*</span>
                  </label>                     
                  <textarea name="introducir_mensaje" className="texto_mensaje" id="mensaje" required="obligatorio" placeholder="Deja aquí tu comentario..."></textarea> 
                </p>                    
                        
                <button type="submit" name="enviar_formulario" id="enviar"><p>Send</p></button>

              </form>
            </div>  
          </div>
        </div>
        
        <footer className='foo'>
          <p className='PcFooter'>
            Av. León 119. <br/>
            León Guanajuato<br/>
            Mexico<br/>
            info@optimen.com.mx<br/>
          </p>
        </footer>
      </div>
    )
  }
}
