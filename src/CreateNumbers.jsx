import React, { useEffect } from 'react';
import { db } from './firebase-config';
import { collection, setDoc, doc } from 'firebase/firestore';

const CreateNumbers = () => {
  
  const createNumbers = async () => {
    const numbersCollection = collection(db, 'numbers');

    // Crear números del 2 al 100
    for (let i = 2; i <= 100; i++) {
      try {
        // Usar el número como ID del documento
        const docRef = doc(numbersCollection, `${i}`);
        await setDoc(docRef, {
          value: i,            // El número del boleto
          status: 'available', // Estado inicial del boleto
        });
        console.log(`Número ${i} agregado correctamente con ID ${i}`);
      } catch (error) {
        console.error('Error al agregar el número: ', error);
      }
    }
  };

  useEffect(() => {
    createNumbers(); // Ejecuta la función al montar el componente
  }, []);

  return (
    <div>
      <h1>Creando números de rifa...</h1>
      <p>Revisa la consola para ver el progreso.</p>
    </div>
  );
};

export default CreateNumbers;
