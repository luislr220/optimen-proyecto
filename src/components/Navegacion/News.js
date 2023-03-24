import React, { useEffect, useState } from 'react';
import './News.css';
import CommentForm from './CommentForm';

export default function News() {
  const [news, setNews] = useState([]);

  // Definimos fetchData fuera del hook useEffect
  const fetchData = async () => {
    const response = await fetch('http://localhost:3002/news');
    const data = await response.json();
    setNews(data);
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div>
      <div className='padreNews'>
        {news.map((noticia, notica) => (
          <div key={noticia._id} className= "NewsContainer">
            <h2 className='Titulo'>{noticia.title} </h2>
            <img src={noticia.images} alt={noticia.title} className='imgNews' />
            <p>{noticia.content}</p>
            <p>{noticia.date}</p>
            <CommentForm newsId={noticia._id} updateComments={fetchData} />
            <div className='linea-horizontal'></div>
          </div>
        ))}
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
