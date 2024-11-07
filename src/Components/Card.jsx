import React from "react";

const Card = ({ datos }) => {
  const cardStyle = {
    textAlign: 'center',
    padding: '20px',
    border: '1px solid #ccc',
    borderRadius: '8px',
    backgroundColor: '#7c8ebb',
  };

  const headingStyle = {
    color: '#07163c',
  };

  return (
    <div style={cardStyle}>
      <h3 style={headingStyle}>Saludos, {datos.nombre}.</h3>
      <h3 style={headingStyle}>
        Tu pasaporte {datos.pasaporte} está vigente.
      </h3>
      <h3 style={headingStyle}>
        Tu vuelo está programado para el {datos.fecha}.
      </h3>
    </div>
  );
};

export default Card;
