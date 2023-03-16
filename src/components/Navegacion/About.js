import React, { Component } from "react";
import "./About.css";
import Carousel from './Carousel';


export default class About extends Component {
  render() {
    return (
      <div className="header">
        <h1 className="h1C">
          What is Optimen?
          <p class="box0">
            Optimen is a Mexican Software Development company that provides
            resources management and optimization services to different
            industries. The company was designated and approved as an
            International Service Contractor for Jeppesen and Boeing.
          </p>
        </h1>

        <div className="body">
          <div>
            <p className="purpo"> Our Purpose</p>
          </div>
          <div>
            <p className="title"> Mission</p>

            <p class="box1">
              Support and facilitate Air Lines around the world to maintain
              reliable and sustainable operations through Technology, Innovation
              and living our Values.
            </p>
          </div>

          <div>
            <p className="title"> Vision</p>
            <p class="box1">
              To be the First option in Software, Technology and Innovation
              services for the global Airlines in the area of Aeronautical
              operational control.
            </p>
          </div>
          <div>
            <p className="title"> Values</p>
            <p class="box1">
              Trustworthy Respect Integrity Teamwork Innovation
            </p>
          </div>
        </div>
        <div className="container">
          <div className="padre">
            <div>
              <h1 className="tituloPart">Airline Experience</h1>
              <Carousel />
            </div>
          </div>
        </div>
        <div classname="body">
                              <p class="Tp">Our Story Through the Time</p>
          <div class="recuadro">
            <p>The beginning</p>
          </div>
          <div class="recuadro">
            <p>2009</p>
          </div>
          <div class="recuadro">
            <p>2014</p>
          </div>
          <div class="recuadro">
            <p>2016</p>
          </div>
          <div class="recuadro">
            <p>2017</p>
          </div>
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
