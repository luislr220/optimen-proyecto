import React from 'react'
import './HomeServices.css';

import { useTranslation } from 'react-i18next';


export default function HomeServices() {
  const [t] = useTranslation("global");

  return (
    <div>
      <div className='HomeSer'>
        <div className='Aworld'>
          <div>
            <div>
              <div>
                <h1 className='textS'>{t("navbar.A-world")}</h1>
              </div>
            </div>

            <div>
              <p className='textSP'>
                {t("navbar.Mexican")}
              </p>
            </div>
          </div>
        </div>

        <div className='fondoCard'>
          <h1 className='textservicesh1'>{t("navbar.servicesC_H")}</h1>
          <div className='pad'>
            <div>
              <div class="card">
                <ul>
                  <li class="list-group-item">{t("navbar.Consultancy")}</li>
                </ul>
              </div>
            </div>
          </div>
          <div className='pad'>
            <div>
              <div class="card">
                <ul>
                  <li class="list-group-item">{t("navbar.Auditing")}</li>
                </ul>
              </div>
            </div>
          </div>
          <div className='pad'>
            <div>
              <div class="card">
                <ul>
                  <li class="list-group-item">{t("navbar.Business")}</li>
                </ul>
              </div>
            </div>
          </div>
          <div className='pad'>
            <div>
              <div class="card">
                <ul>
                  <li class="list-group-item">{t("navbar.Implementation")}</li>
                </ul>
              </div>
            </div>
          </div>
          <div className='pad'>
            <div>
              <div class="card">
                <ul>
                  <li class="list-group-item">{t("navbar.Innovation")}</li>
                </ul>
              </div>
            </div>
          </div>
          <div className='pad'>
            <div>
              <div class="card">
                <ul>
                  <li class="list-group-item">{t("navbar.Interfaces")}</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

  )
}
