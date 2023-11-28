
import React, { useEffect } from 'react';
import Card from '../Components/Card';
import { Link } from 'react-router-dom';

import { fetchData } from '../Components/services/api';
import { ContextGlobal } from '../Components/utils/global.context';

const Home = () => {
  const { state, dispatch } = ContextGlobal();

  useEffect(() => {
    fetchData()
      .then((data) => {
        dispatch({ type: 'SET_DENTIST_DATA', payload: data });
      })
      .catch((error) => {
        console.error('Error fetching data:', error);
      });
  }, [dispatch]);

  return (
    <main className={`home ${state.theme}`} >
      <h1>Lista de Dentistas</h1>
      <div className={`card-grid ${state.theme}`}>
        {state.data.map((dentist) => (
          <Link to={`/dentist/${dentist.id}`} key={dentist.id}>
            <Card key={dentist.id} dentist={dentist} />
          </Link>
        ))}
      </div>
    </main>
  );
};

export default Home;
