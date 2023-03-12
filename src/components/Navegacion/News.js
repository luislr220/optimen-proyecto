import React, { Component } from 'react';
import './News.css';

/**IMAGENES PARA LAS NOTICIAS */
import clusterAero from '../../img/news/clusterAero.jpg';
import aniversario from '../../img/news/aniversario.jpeg'

const noticias = [
  {
    id: 1,
    titulo: "Forum BJXAEROSPACE",
    descripcion: <p>We invite you to participate in the 2nd Business Forum of the Bajìo A.C Aerospace Cluster,
      follow the conferences, panels, and meetups of the event on our platform and social networks.
    </p>,
    imagen: clusterAero,
    fecha: "Oct 31, 2020",
  },
];
const noticias2 = [
  {
    id: 1,
    titulo: "14th Anniversary OPTIMEN",
    descripcion: <p>14 years streamlining global mobility through
      a passionate software developers team. Congratulations TEAM Optimen!
    </p>,
    imagen: aniversario,
    fecha: "Oct 19, 2020",
  },
  

];


export default class News extends Component {
  render() {
    return (
      <div>
        <div className='padreNews'>
          <div className='News'>
            {noticias.map((noticia) => (
              <div key={noticia.id} className='NewsNoticias'>
                <h2 className='Titulo'>{noticia.titulo} </h2>
                <img src={noticia.imagen} alt={noticia.titulo} className='imgNews' />
                <p>{noticia.descripcion}</p>
                <p>{noticia.fecha}</p>
              </div>
            ))}
          </div>

          <div className="linea-vertical" />

          <div className='News'>
            {noticias2.map((noticia) => (
              <div key={noticia.id} className='NewsNoticias'>
                <h2 className='Titulo'>{noticia.titulo}</h2>
                <img src={noticia.imagen} alt={noticia.titulo} className='imgNews' />
                <p>{noticia.descripcion}</p>
                <p>{noticia.fecha}</p>
              </div>
            ))}
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
}
