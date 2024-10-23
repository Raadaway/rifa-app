// SelectedNumbers.jsx (Ejemplo)

import React from 'react';
import { useLocation } from 'react-router-dom';

const SelectedNumbers = () => {
  const location = useLocation();
  const { selectedNumbers, totalCost } = location.state || {};

  return (
    <div>
      <h1>Usted ha seleccionado los siguientes números:</h1>
      <ul>
        {selectedNumbers && selectedNumbers.length > 0 ? (
          selectedNumbers.map((number) => (
            <li key={number.id}>{number.value}</li>
          ))
        ) : (
          <p>No se seleccionaron números.</p>
        )}
      </ul>
      <h1>Total a pagar: ${totalCost}</h1> {/* Muestra el total a pagar */}
    </div>
  );
};

export default SelectedNumbers;
