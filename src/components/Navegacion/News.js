import React from 'react';
import './News.css';
import { useTranslation } from 'react-i18next'

/**IMAGENES PARA LAS NOTICIAS */
import clusterAero from '../../img/news/clusterAero.jpg';
import aniversario from '../../img/news/aniversario.jpeg'

export default function News() {

  const [t] = useTranslation("global");

  const noticias = [
    {
      id: 1,
      titulo: <h1>{t("navbar.titulo")}</h1>,
      descripcion: <p>{t("navbar.descripcion")}</p>,
      imagen: clusterAero,
      fecha: "Oct 31, 2020",
    },
  ];
  const noticias2 = [
    {
      id: 1,
      titulo: <h1>{t("navbar.titulo2")}</h1>,
      descripcion: <p>{t("navbar.descripcion2")}</p>,
      imagen: aniversario,
      fecha: "Oct 19, 2020",
    },
  ];

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
