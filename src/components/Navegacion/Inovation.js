import React from 'react';
import './Inovaton.css';
import ana from '../../img/inovation/ana-avatar-xprize.jpeg';
import awsGto from '../../img/inovation/awsGto.jpg';
import Educate from '../../img/inovation/Educate_Opti.png';
import Hannover from '../../img/inovation/Hannover Messe.png';
import Innovation from '../../img/inovation/Innovation Hub.jpg';

export default function Inovation() {
    return (
        <div>

            <div className='ftInovation'>
                <h1>
                    Innovation Hub
                </h1>
            </div>

            <div className='InovationContenedor'>
                <div className='Inovation-container'>

                    <div className='Inovation'>
                        <img src={Hannover} alt='Service 1' />
                        <div className='Inovation-text-container'>
                            <div className='Inovation-text'>
                                <h3>Hannover Messe</h3>
                                <p>Optimen family present at " Industrial Transformation Mexico, Hannover Messe "
                                    HANNOVER MESSE is the most important international platform and hot spot for industrial transformation - with excellent innovations or unusual products.</p>
                            </div>
                        </div>
                    </div>

                    <div className='Inovation'>
                        <div className='Inovation-text-container'>
                            <div className='Inovation-text'>
                                <h3>Ana Avatar XPrice</h3>
                                <p>Optimen teamed up with Inbiodroid are working together on ANA Avatar XPRIZE challenge that aims to create an Avatar system that can transport human presence to a remote location in real time.</p>
                            </div>
                        </div>
                        <img src={ana} alt='Service 2' />
                    </div>

                    <div className='Inovation'>
                        <img src={Innovation} alt='Service 3' />
                        <div className='Inovation-text-container'>
                            <div className='Inovation-text'>
                                <h3>
                                    Innovation Hub</h3>
                                <p>Optimen inaugurated its innovation center, a space focus on competencies development for the aeronautical sector.</p>
                            </div>
                        </div>
                    </div>

                    <div className='Inovation'>
                        <div className='Inovation-text-container'>
                            <div className='Inovation-text'>
                                <h3>
                                    AWS Mentefactura
                                    GTO Challenge</h3>
                                <p>Hackathon organized by the alliance between AWS, Optimen, Educafin, IdeaGTO, SEG and GAP with the purpose that students, Guanajuato talent, will execute innovative projects aimed at improving airport services.</p>
                            </div>
                        </div>
                        <img src={awsGto} alt='Service 3' />
                    </div>

                    <div className='Inovation'>
                        <img src={Educate} alt='Service 1' />
                        <div className='Inovation-text-container'>
                            <div className='Inovation-text'>
                                <h3>
                                    EDUCATE OPTIMEN</h3>
                                <p>
                                    EDUCATE OPTIMEN.</p>
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
