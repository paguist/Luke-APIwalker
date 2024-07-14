import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Resultado = ({ recurso, id, data }) => {
  const [mundoNatal, setMundoNatal] = useState('');

  useEffect(() => {
    const fetchMundoNatal = async () => {
      if (recurso === 'people') {
        try {
          const response = await axios.get(data.homeworld);
          setMundoNatal(response.data.name);
        } catch (error) {
          console.error('Error al obtener el mundo natal:', error);
        }
      }
    };

    fetchMundoNatal();
  }, [recurso, data]);

  return (
    <div>
      <h2>Resultados:</h2>
      {recurso === 'people' && (
        <div>
          <p>Nombre: {data.name}</p>
          <p>Altura: {data.height}</p>
          <p>Peso: {data.mass}</p>
          <p>Mundo Natal: {mundoNatal}</p>
        </div>
      )}
      {recurso === 'films' && (
        <div>
          <p>Título: {data.title}</p>
          <p>Director: {data.director}</p>
          <p>Episodio: {data.episode_id}</p>
        </div>
      )}
    </div>
  );
};

export default Resultado;
