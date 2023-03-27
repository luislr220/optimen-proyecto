import React from "react";
import "./Customers.css";
import {useTranslation} from 'react-i18next'
import CarouselC from "./CaruoselCustomers";
import CarouselC2 from "./Carousel3";


export default function Customers () {

  const [t] = useTranslation("global");

    return (
      <div className="header">
        <h1 className="titleC">
        {t("navbar.Our-Customers")}
          <p class="textC">
          {t("navbar.Our-Customers_P")}</p>
        </h1>
        <div className="CBody" >
          <CarouselC/>
        </div>
        <h1 className="titleC">
        {t("navbar.Our-Project-Experience")}
          <p class="textC">
          {t("navbar.Our-Project-Experience_P")} </p>
        </h1>
        <div className="CBody" >
          <CarouselC2/>
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
