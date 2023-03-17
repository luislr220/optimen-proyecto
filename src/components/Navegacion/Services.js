import React from 'react';
import './Services.css';

/**IMAGENES */
import consultancy from '../../img/ourServices/consultancy.png';
import auditing from '../../img/ourServices/auditing.png';
import buss from '../../img/ourServices/buss.png';
import implementation from '../../img/ourServices/implementation.png';
import innovation from '../../img/ourServices/innovation.png';
import interfaces from '../../img/ourServices/interfaces.png';
import {useTranslation} from 'react-i18next';

export default function Services () {

  const [t] = useTranslation("global");
   
    return (
      <div>
        <div className='ftServices'>
          <h1>
            {t("navbar.Our-Services")}
          </h1>
        </div>

        <div className='ServicesContenedor'>
          <div className='services-container'>

            <div className='service'>
              <img src={consultancy} alt='Service 1' />
              <div className='service-text-container'>
                <div className='service-text'>
                  <h3>{t("navbar.Consultancy")}</h3>
                  <p>{t("navbar.Consultancy-Services")}</p>
                </div>
              </div>
            </div>

            <div className='service'>
              <img src={auditing} alt='Service 2' />
              <div className='service-text-container'>
                <div className='service-text'>
                  <h3>{t("navbar.Auditing")}</h3>
                  <p>{t("navbar.Auditing-and")}</p>
                </div>
              </div>
            </div>

            <div className='service'>
              <img src={buss} alt='Service 3' />
              <div className='service-text-container'>
                <div className='service-text'>
                  <h3>{t("navbar.Business")}</h3>
                  <p>{t("navbar.Development-of")}</p>
                </div>
              </div>
            </div>

            <div className='service'>
              <img src={implementation} alt='Service 3' />
              <div className='service-text-container'>
                <div className='service-text'>
                  <h3>{t("navbar.Implementation")}</h3>
                  <p>{t("navbar.Implement-Aircraft")}</p>
                </div>
              </div>
            </div>

            <div className='service'>
              <img src={innovation} alt='Service 3' />
              <div className='service-text-container'>
                <div className='service-text'>
                  <h3>{t("navbar.Innovation")}</h3>
                  <p>{t("navbar.Innovation-and")}</p>
                </div>
              </div>
            </div>

            <div className='service'>
              <img src={interfaces} alt='Service 3' />
              <div className='service-text-container'>
                <div className='service-text'>
                  <h3>{t("navbar.Interfaces")}</h3>
                  <p>{t("navbar.Development")}</p>
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