import React, { Component } from 'react';
import './Partnerships.css';
import Carousel from './Carousel';


export default class Partnerships extends Component {
  render() {
    
    return (
      <div  className='padre'>

        <div>
        <h1 className='tituloPart'>
          Partnerships and Affiliations
        </h1>
        
          <Carousel/>
        </div>

      </div>

    )
  }
}
