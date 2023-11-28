import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ContextGlobal } from '../Components/utils/global.context'

const Card = ({ dentist }) => {
  const { state, dispatch } = ContextGlobal();
  const [confirmationVisible, setConfirmationVisible] = useState(false);

  const addFav = () => {
    const favorites = JSON.parse(localStorage.getItem('favorites')) || {};
    favorites[dentist.id] = dentist;
    localStorage.setItem('favorites', JSON.stringify(favorites));
    setConfirmationVisible(true);

    setTimeout(() => {
      setConfirmationVisible(false);
    }, 3000);    
  };

  return (
    <div className="card">
      <h3>{dentist.name}</h3>
      <p>Username: {dentist.username}</p>
      <p>ID: {dentist.id}</p>
      <Link to={`/dentist/${dentist.id}`}>View Details</Link>
      <button onClick={addFav} className="favButton">
        Add fav
      </button>
      {confirmationVisible && (
        <div className="confirmation-message">
          Dentist added to favorites!
        </div>
      )}
      </div>
  );
};

export default Card;