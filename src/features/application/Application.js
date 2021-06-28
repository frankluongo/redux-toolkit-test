import React from 'react';
import { useGetAllPokemonQuery } from './applicationSlice';
import { PokeCard } from '../pokeCard/PokeCard';
import * as css from './Application.module.css';

export const Application = () => {
  const { data, error, isLoading } = useGetAllPokemonQuery();
  if (isLoading) return <div>loading...</div>;
  if (error)
    return <div>Oh no! There was an error, please refresh the page.</div>;
  return (
    <div className={css.Cards}>
      {data.results.map((item) => (
        <PokeCard key={item.url} data={item} />
      ))}
    </div>
  );
};
