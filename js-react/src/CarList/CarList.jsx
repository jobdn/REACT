import React from "react";
import { Car } from "./Car";
import { initialCars } from "./cars.contant";
import { useMyCallback } from "./useMyCallback";

export const CarList = () => {
  const [cars, setCars] = React.useState(initialCars);

  const onCarClick = useMyCallback((carId) => {
    setCars((prevCars) => {
      const newCars = prevCars.map((car) =>
        car.id === carId
          ? {
              ...car,
              countClicked: car.countClicked + 1,
            }
          : car
      );
      return newCars;
    });
  }, []);

  return (
    <div>
      {cars.map((car) => (
        <Car
          key={car.id}
          id={car.id}
          carName={car.carName + car.countClicked}
          onCarClick={onCarClick}
        />
      ))}
    </div>
  );
};
