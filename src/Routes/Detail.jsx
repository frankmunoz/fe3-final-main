import React from 'react'
import { useParams } from 'react-router-dom';
import { ContextGlobal } from '../Components/utils/global.context';

import Card from '../Components/Card';

//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context

const Detail = () => {
 
  // Consumiendo el parametro dinamico de la URL deberan hacer un fetch a un user en especifico
  const { state } = ContextGlobal();
  const { id } = useParams();
  const dentist = state.data.find((d) => d.id === Number(id));

  if (!dentist) {
    return <div>No se encontró información para este dentista.</div>;
  }
  return (
    <>
      <h1>Detail Dentist id </h1>
      {/* aqui deberan renderizar la informacion en detalle de un user en especifico */}
      <Card key={dentist.id} dentist={dentist}/>
      {/* Deberan mostrar el name - email - phone - website por cada user en especifico */}
      <div className={`dentist-detail ${state.theme}`}>
        <h2>{dentist.name}</h2>
        <p>Username: {dentist.username}</p>
        <p>Email: {dentist.email}</p>
        <p>Teléfono: {dentist.phone}</p>
        <p>Sitio web: {dentist.website}</p>
      </div>
    </>
  )
}

export default Detail