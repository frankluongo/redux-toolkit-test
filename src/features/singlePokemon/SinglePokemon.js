import React from 'react';
import { useParams } from 'react-router-dom';
import { useGetPokemonByNameQuery } from '../application/applicationSlice';

export const SinglePokemon = () => {
  const { id } = useParams();
  const { data, isLoading } = useGetPokemonByNameQuery(id);
  if (isLoading) return null;
  console.log(data);

  const images = getImages();

  function getImages() {
    const sprites = data?.sprites;
    if (!sprites) return [];
    return Object.keys(sprites)
      .map((key) => sprites[key])
      .filter((it) => typeof it === 'string');
  }

  return (
    <article>
      <header>
        {images.map((img) => (
          <img key={img} src={img} alt={data?.name} />
        ))}
      </header>
      <header>
        <h2>{data?.name}</h2>
      </header>
    </article>
  );
};
