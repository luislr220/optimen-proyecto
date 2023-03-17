import React from 'react'
import './Home.css';

import {useTranslation} from 'react-i18next';
import HomeServices from './HomeServices';
import Partnerships from './Partnerships';
import Avion1 from '../../img/Avion1.jpg';

export default function Home() {

  const [t] = useTranslation("global");

  return (
    <div>

      {/*SECCIÓN WELCOME*/}
      <div className='WelcomeB'>
        <div className='Welcome'>
          <div>
            <div>
              <div>
                <h1 className='textWl'>{t("navbar.Welcome-to-Optimen")}</h1>
              </div>
            </div>

            <div>
              <p className='HtextP'>
                {t("navbar.Unique-Team")}
              </p>
            </div>
          </div>
        </div>
        <div>
          <div>
            <div>
              <img
                src={Avion1}
                width="80%"
                className='Avion1'
                alt=''
              />
            </div>
          </div>
        </div>
      </div>
      {/*SECCIÓN SERVICIOS*/}
      <HomeServices />
      {/*SECCIÓN PARTNERSHIPS*/}
      <Partnerships />

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

