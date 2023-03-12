import React, { Component } from 'react'
import './HomeServices.css';


export default class HomeServices extends Component {
  render() {
    return (

      <div>
        <div className='HomeSer'>
          <div className='Aworld'>
            <div>
              <div>
                <div>
                  <h1 className='textS'>A World Class Global Enterprise</h1>
                </div>
              </div>

              <div>
                <p className='textSP'>
                  Mexican Company with the following experience since 2006:
                  Resource Optimization
                  Consultancy and Configuration Support Services
                  IT Software Solutions Development
                </p>
              </div>
            </div>
          </div>

          <div className='fondoCard'>
          <h1 className='textservicesh1'>Services</h1>
            <div className='pad'>
              <div>
                <div class="card">
                  <ul>
                    <li class="list-group-item">Consultancy</li>
                  </ul>
                </div>
              </div>
            </div>
            <div className='pad'>
              <div>
                <div class="card">
                  <ul>
                    <li class="list-group-item">Auditing</li>
                  </ul>
                </div>
              </div>
            </div>
            <div className='pad'>
              <div>
                <div class="card">
                  <ul>
                    <li class="list-group-item">Business Rules Development</li>
                  </ul>
                </div>
              </div>
            </div>
            <div className='pad'>
              <div>
                <div class="card">
                  <ul>
                    <li class="list-group-item">Implementation Outsorsing</li>
                  </ul>
                </div>
              </div>
            </div>
            <div className='pad'>
              <div>
                <div class="card">
                  <ul>
                    <li class="list-group-item">Innovation</li>
                  </ul>
                </div>
              </div>
            </div>
            <div className='pad'>
              <div>
                <div class="card">
                  <ul>
                    <li class="list-group-item">Interfaces Development</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

    )
  }
}
