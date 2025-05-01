import React from 'react';

function CarSelect({ myCar, setMyCar }) {
  return (
    <label>
      Select your car: <br />
      <select value={myCar} onChange={(e) => setMyCar(e.target.value)}>
        <option value="Ford">Ford</option>
        <option value="INNOSON">INNOSSON</option>
        <option value="Benz">Benz</option>
        <option value="Toyota">Toyota</option>
        <option value="Lexus">Lexus</option>
      </select>
    </label>
  );
}

export default CarSelect;