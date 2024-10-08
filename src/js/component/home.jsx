import React, { useState } from 'react';
import '../../styles/index.css'; 

const Semaforo = () => {
  const [luzActiva, setLuzActiva] = useState(null);

  const manejarClick = (luz) => {
    setLuzActiva(luz);
  };

  return (
    <div className="semaforo">
      <div
        className={`luz roja ${luzActiva === 'roja' ? 'activa' : ''}`}
        onClick={() => manejarClick('roja')}
      />
      <div
        className={`luz amarilla ${luzActiva === 'amarilla' ? 'activa' : ''}`}
        onClick={() => manejarClick('amarilla')}
      />
      <div
        className={`luz verde ${luzActiva === 'verde' ? 'activa' : ''}`}
        onClick={() => manejarClick('verde')}
      />
    </div>
  );
};

export default Semaforo;

