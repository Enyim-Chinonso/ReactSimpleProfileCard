import React from 'react'
import { useState } from 'react'

const Car = () => {
    const [car, setCar] = useState ({
      brand: "Mercedes Benz",
      model: "Chasis",
      year: "2025",
      color: "red",
    });


    const updateColor = () => {
        setCar (previousState => {
            return { ...previousState, color: "blue"}
        });
    }
   


    return (
        <>
          <h1>My {car.brand} </h1>
          <p>It is a {car.color}, {car.brand}, {car.year} make. And I love it.</p>
          <button type='button' onClick={updateColor}>Click to change color</button>
        </>
    );
}


export default Car;