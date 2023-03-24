import React, { useState } from 'react';

export default function CommentForm(props) {
  const [comment, setComment] = useState('');

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      const response = await fetch(`http://localhost:3002/news/${props.newsId}`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          comment: comment
        })
      });

      if (!response.ok) {
        const error = await response.text();
        throw new Error(error || 'Error desconocido');
      }

      const contentType = response.headers.get('content-type');
      if (!contentType || !contentType.includes('application/json')) {
        throw new TypeError("La respuesta recibida no es JSON");
      }

      const data = await response.json();

      console.log(data);

      // Actualizar los comentarios después de enviar uno nuevo
      props.updateComments();
    } catch (error) {
      console.error(error);
      alert('Hubo un error al enviar el comentario');
    }
  };

  return (
    <div className='CommentFormContainer'>
      <h3 className='CommentFormTitle'>Deja tu comentario</h3>

      <form className='CommentForm' onSubmit={handleSubmit}>

        <div className='CommentFormField'>
          <label htmlFor='comment'>Comentario:</label>
          <textarea
            id='comment'
            value={comment}
            onChange={(event) => setComment(event.target.value)}
          ></textarea>
        </div>

        <button type='submit'>Enviar</button>
      </form>
    </div>
  );
}
