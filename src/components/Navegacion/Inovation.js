import React from 'react';
import './Inovaton.css';
import ana from '../../img/inovation/ana-avatar-xprize.jpeg';
import awsGto from '../../img/inovation/awsGto.jpg';
import Educate from '../../img/inovation/Educate_Opti.png';
import Hannover from '../../img/inovation/Hannover Messe.png';
import Innovation from '../../img/inovation/Innovation Hub.jpg';

import {useTranslation} from 'react-i18next'

export default function Inovation() {

    const [t] = useTranslation("global");

    return (
        <div>

            <div className='ftInovation'>
                <h1>
                    {t("navbar.innovation-Hub")}
                </h1>
            </div>

            <div className='InovationContenedor'>
                <div className='Inovation-container'>

                    <div className='Inovation'>
                        <img src={Hannover} alt='Service 1' />
                        <div className='Inovation-text-container'>
                            <div className='Inovation-text'>
                                <h3>{t("navbar.Hannover-Messe")}</h3>
                                <p>{t("navbar.Hannover-Messe_P")}</p>
                            </div>
                        </div>
                    </div>

                    <div className='Inovation'>
                        <div className='Inovation-text-container'>
                            <div className='Inovation-text'>
                                <h3>{t("navbar.Ana-Avatar-XPrice")}</h3>
                                <p>{t("navbar.Ana-Avatar-XPrice_P")}</p>
                            </div>
                        </div>
                        <img src={ana} alt='Service 2' />
                    </div>

                    <div className='Inovation'>
                        <img src={Innovation} alt='Service 3' />
                        <div className='Inovation-text-container'>
                            <div className='Inovation-text'>
                                <h3>{t("navbar.innovation-Hub")}</h3>
                                <p>{t("navbar.innovation-Hub_P")}</p>
                            </div>
                        </div>
                    </div>

                    <div className='Inovation'>
                        <div className='Inovation-text-container'>
                            <div className='Inovation-text'>
                                <h3>{t("navbar.AWS-Mentefactura-GTO-Challenge")}</h3>
                                <p>{t("navbar.AWS-Mentefactura-GTO-Challenge_P")}.</p>
                            </div>
                        </div>
                        <img src={awsGto} alt='Service 3' />
                    </div>

                    <div className='Inovation'>
                        <img src={Educate} alt='Service 1' />
                        <div className='Inovation-text-container'>
                            <div className='Inovation-text'>
                                <h3>{t("navbar.EDUCATE OPTIMEN")}</h3>
                                <p>{t("navbar.EDUCATE OPTIMEN")}</p>
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
