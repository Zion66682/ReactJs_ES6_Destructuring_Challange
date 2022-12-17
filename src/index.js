//import Animal, { useAnmials } from "./data";

//console.log(Animal);

//const [cat, dog] = Animal; //destructuring an array
//console.log(cat);

//const { name: catName, sound: catSound } = cat; //destructuring an object
//console.log(catSound);

// const {
//   name,
//   sound,
//   diet: { food, water }
// } = cat;
// console.log(food);

//const [animal, makeSound] = useAnmials(cat);
//console.log(animal);
//makeSound();

// CHALLENGE: uncomment the code below and see the car stats rendered
import React from "react";
import ReactDOM from "react-dom";
import Car from "./practice";

console.log(Car);

const [honda, tesla] = Car;
console.log(tesla);
console.log(honda);

//const [teslaTopColour] = tesla.coloursByPopularity;
//const [hondaTopColour] = honda.coloursByPopularity;

//console.log({ teslaTopColour });
//console.log({ hondaTopColour });

const {
  speedStats: { topSpeed: teslaTopSpeed }
} = tesla;

const {
  speedStats: { topSpeed: hondaTopSpeed }
} = honda;

console.log({ teslaTopSpeed });
console.log({ hondaTopSpeed });

const {
  coloursByPopularity: [teslaTopColour]
} = tesla;
const {
  coloursByPopularity: [hondaTopColour]
} = honda;

ReactDOM.render(
  <table>
    <thead>
      <tr>
        <th>Brand</th>
        <th>Top Speed</th>
        <th>Top Color</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td>{tesla.model}</td>
        <td>{teslaTopSpeed}</td>
        <td>{teslaTopColour}</td>
      </tr>
      <tr>
        <td>{honda.model}</td>
        <td>{hondaTopSpeed}</td>
        <td>{hondaTopColour}</td>
      </tr>
    </tbody>
  </table>,
  document.getElementById("root")
);
