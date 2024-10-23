// App.jsx

import React, { useState, useEffect } from 'react';
import { db } from './firebase-config';
import { collection, getDocs } from 'firebase/firestore';
import { useNavigate } from 'react-router-dom';
import './App.css';

const MainPage = () => {
  const [numbers, setNumbers] = useState([]);
  const [selectedNumbers, setSelectedNumbers] = useState([]);
  const navigate = useNavigate();
  
  const PRICE_PER_NUMBER = 2000; // Precio por número

  useEffect(() => {
    const fetchNumbers = async () => {
      const numbersCollection = collection(db, 'numbers');
      const numberSnapshot = await getDocs(numbersCollection);
      const numberList = numberSnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));

      numberList.sort((a, b) => Number(a.value) - Number(b.value));
      setNumbers(numberList);
    };

    fetchNumbers();
  }, []);

  const selectNumber = (number) => {
    if (selectedNumbers.includes(number)) {
      // Si el número ya está seleccionado, lo deselecciona
      setSelectedNumbers(selectedNumbers.filter(num => num.id !== number.id));
      setNumbers(numbers.map(num => (num.id === number.id ? { ...num, isBought: false } : num)));
    } else {
      // Si el número no está seleccionado, lo selecciona
      const updatedNumber = { ...number, isBought: true };
      setSelectedNumbers([...selectedNumbers, updatedNumber]);
      setNumbers(numbers.map(num => (num.id === number.id ? updatedNumber : num)));
    }
  };

  const totalCost = selectedNumbers.length * PRICE_PER_NUMBER; // Calcula el total

  const handleContinue = () => {
    navigate('/selected-numbers', { state: { selectedNumbers, totalCost } }); // Envía el total al siguiente componente
  };

  return (
    <div>
      <h1>Bienvenido/a!</h1>
      <p>¡Participa y ayuda a una buena causa! Selecciona tus números a continuación.</p>
      <p>Contamos con los siguientes premios para quienes participen en la rifa:</p>
      <ul>
        <li>1er Lugar: Limpieza Dental</li>
        <li>2do Lugar : Trekking Cerro La Ballena</li>
        <li>Y más premios sorpresa!</li>
      </ul>
      <div className="number-grid">
        {numbers.length > 0 ? (
          numbers.map((number) => (
            <div
              key={number.id}
              className={`circle ${selectedNumbers.includes(number) ? 'selected' : ''}`} // Cambia la clase para el color amarillo
              onClick={() => selectNumber(number)}
            >
              {number.value}
            </div>
          ))
        ) : (
          <p>No hay números disponibles.</p>
        )}
      </div>
      <p>Total a pagar: ${totalCost}</p> {/* Muestra el total a pagar */}
      <button onClick={handleContinue}>Continuar</button>
    </div>
  );
};

export default MainPage;
