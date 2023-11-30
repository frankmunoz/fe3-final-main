import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ContextGlobal } from '../Components/utils/global.context'

const Card = ({ dentist }) => {
  const { state, dispatch } = ContextGlobal();
  const isFavorite = state.favorites.includes(dentist.id);  
  
  const toggleFavorite = () => {
    dispatch({ type: 'TOGGLE_FAVORITE', payload: dentist.id });
    const favorites = JSON.parse(localStorage.getItem('favorites')) || {};
    favorites[dentist.id] = dentist;
    localStorage.setItem('favorites', JSON.stringify(favorites));
  };

  const addFav = () => {
    const favorites = JSON.parse(localStorage.getItem('favorites')) || {};
    favorites[dentist.id] = dentist;
    localStorage.setItem('favorites', JSON.stringify(favorites));

  };

  return (
    <div className="card">
      <Link to={`/dentist/${dentist.id}`}>
        <img
          src='./img/doctor.jpg'
          alt='doctor'
        />
        <h3>{dentist.name}</h3>
        <p>Username: {dentist.username}</p>
        <p>ID: {dentist.id}</p>
      </Link>
      <button onClick={toggleFavorite} className="favButton">
        {isFavorite ? '❤️' : '🤍'}
      </button>
      </div>
  );
};

export default Card;