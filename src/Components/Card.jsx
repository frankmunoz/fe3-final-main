import React from 'react';
import { Link } from 'react-router-dom';
import { ContextGlobal } from '../Components/utils/global.context'

const Card = ({ dentist }) => {
  const { state, dispatch } = ContextGlobal();

  const addFav = () => {
    const favorites = JSON.parse(localStorage.getItem('favorites')) || {};
    favorites[dentist.id] = dentist;
    localStorage.setItem('favorites', JSON.stringify(favorites));
  };

  return (
    <div className="card">
      <h3>{dentist.name}</h3>
      <p>Username: {dentist.username}</p>
      <p>ID: {dentist.id}</p>
      <Link to={`/dentist/${dentist.id}`}>Ver Detalles</Link>
      <button onClick={addFav} className="favButton">
        Add fav
      </button>
    </div>
  );
};

export default Card;