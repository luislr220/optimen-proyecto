import React from "react";
import "./About.css";
import Carousel from './Carousel';
import {useTranslation} from 'react-i18next'


export default function About () {

  const [t] = useTranslation("global");

    return (
      <div className="header">
        <h1 className="h1C">
          {t("navbar.What-is-Optimen?")}
          <p class="box0">
          {t("navbar.What-is-Optimen?_P")}
          </p>
        </h1>

        <div className="bodyT">
          <div>
            <p className="purpo"> {t("navbar.Our-Purpose")}</p>
          </div>
          <div>
            <p className="title"> {t("navbar.Mission")}</p>

            <p class="box1">
            {t("navbar.Mission_P")}
            </p>
          </div>

          <div>
            <p className="title">{t("navbar.Vision")}</p>
            <p class="box1">
            {t("navbar.Vision_P")}
            </p>
          </div>
          <div>
            <p className="title"> {t("navbar.Values")}</p>
            <p class="box1">
            {t("navbar.Values_P")}
            </p>
          </div>
        </div>

        <div className="container">
          <div className="padre">
            <div>
              <h1 className="tituloPart">{t("navbar.Airline-Experience")}</h1>
              <Carousel />
            </div>
          </div>
        </div>

        <div classname="bodyT">
          <p class="Tp">{t("navbar.Our-Story-Through-the-Time")}</p>
          <div class="recuadro">
            <p>{t("navbar.The-beginning")}</p>
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
