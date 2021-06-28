import React from 'react';
import { Link } from 'react-router-dom';
import * as css from './PokeCard.module.css';

export const PokeCard = ({ data }) => {
  return (
    <Link className={css.Card} to={`/pokemon/${data.name}`}>
      {data.name}
    </Link>
  );
};
