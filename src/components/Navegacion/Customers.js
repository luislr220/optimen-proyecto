import React, { Component } from "react";
import "./Customers.css";
import Carousel from './Carousel';


export default class Customers extends Component {
  render() {
    return (
      <div className="header">
        <h1 className="titleC">
        Our Customers
          <p class="textC">
          Through our capabilities, the services we provide, and our commitment, 
          we implement projects resulting in satisfied clients and success stories.
          </p>
        </h1>
        <div className="CBody" >
          <Carousel/>
        </div>
        <h1 className="titleC">
        Our Project Experience
          <p class="textC">
          Through our experience as certified Jeppesen/Boeing consultants, we contribute to the support of the configuration and customization of state-of-the-art optimization software for several key airlines in the aeronautical sector at an international level.
          </p>
        </h1>
        <div className="CBody" >
          <Carousel/>
        </div>
        <footer className="foo">
          <p className="PcFooter">
            Av. León 119. <br />
            León Guanajuato
            <br />
            Mexico
            <br />
            info@optimen.com.mx
            <br />
          </p>
        </footer>
      </div>
    );
  }
}
