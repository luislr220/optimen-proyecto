import React, { Component } from 'react';
import './Services.css';

/**IMAGENES */
import consultancy from '../../img/ourServices/consultancy.png';
import auditing from '../../img/ourServices/auditing.png';
import buss from '../../img/ourServices/buss.png';
import implementation from '../../img/ourServices/implementation.png';
import innovation from '../../img/ourServices/innovation.png';
import interfaces from '../../img/ourServices/interfaces.png';

export default class Services extends Component {
  render() {
    return (
      <div>
        <div className='ftServices'>
          <h1>
            Our Services
          </h1>
        </div>

        <div className='ServicesContenedor'>
          <div className='services-container'>

            <div className='service'>
              <img src={consultancy} alt='Service 1' />
              <div className='service-text-container'>
                <div className='service-text'>
                  <h3>Consultancy</h3>
                  <p>Consultancy Services</p>
                </div>
              </div>
            </div>

            <div className='service'>
              <img src={auditing} alt='Service 2' />
              <div className='service-text-container'>
                <div className='service-text'>
                  <h3>Auditing</h3>
                  <p>Auditing and procces improvement</p>
                </div>
              </div>
            </div>

            <div className='service'>
              <img src={buss} alt='Service 3' />
              <div className='service-text-container'>
                <div className='service-text'>
                  <h3>
                    Business Rules Development</h3>
                  <p>Development of business rules for resource management</p>
                </div>
              </div>
            </div>

            <div className='service'>
              <img src={implementation} alt='Service 3' />
              <div className='service-text-container'>
                <div className='service-text'>
                  <h3>
                  Implementation Outsorsing</h3>
                  <p>Implement Aircraft and Crew Tracking Systems and Optimizers</p>
                </div>
              </div>
            </div>

            <div className='service'>
              <img src={innovation} alt='Service 3' />
              <div className='service-text-container'>
                <div className='service-text'>
                  <h3>
                  Innovation</h3>
                  <p>Innovation and Development of new systems </p>
                </div>
              </div>
            </div>

            <div className='service'>
              <img src={interfaces} alt='Service 3' />
              <div className='service-text-container'>
                <div className='service-text'>
                  <h3>
                  Interfaces Development</h3>
                  <p>Development of Integrations / Interfaces for computer systems</p>
                </div>
              </div>
            </div>

          </div>
        </div>

        <footer className='foo'>
          <p className='PcFooter'>
            Av. León 119. <br />
            León Guanajuato<br />
            Mexico<br />
            info@optimen.com.mx<br />
          </p>
        </footer>
      </div>
    )
  }
}