import React from "react";
import { Car } from "./Vehicle"; // Import the Car class

const App: React.FC = () => {
  // Create an instance of the Car class
  const myCar = new Car("Toyota", "Corolla", 2022);

  // Call the start method on the car instance
  myCar.start(); // This will log "Car engine started" to the console

  return (
    <div>
      <h1>My Car</h1>
      <p>Make: {myCar.make}</p>
      <p>Model: {myCar.model}</p>
      <p>Year: {myCar.year}</p>
    </div>
  );
};

export default App;
