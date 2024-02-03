import { useState } from "react";
import "bulma/css/bulma.css";
import ImageShow from "./components/ImageShow.js";
import bird from "./images/bird.svg";
import cat from "./images/cat.svg";
import cow from "./images/cow.svg";
import dog from "./images/dog.svg";
import gator from "./images/gator.svg";
import horse from "./images/horse.svg";

const animals = [bird, cat, cow, dog, gator, horse];

function getRandomAnimal() {
  return animals[Math.floor(Math.random() * animals.length)];
}

function App() {
  const [animalsAdded, setAnimals] = useState([]);

  const handleAdd = () => {
    setAnimals([...animalsAdded, getRandomAnimal()]);
  };
  const handleClear = () => {
    setAnimals([]);
  };
  const renderedAnimals = animalsAdded.map((animal, index) => {
    return <ImageShow imageSrc={animal} id={index} />;
  });

  return (
    <div className="columns is-desktop">
      <button className="button is-primary is-info" onClick={handleAdd}>
        {" "}
        Add Animal{" "}
      </button>
      <button className="button is-primary is-info" onClick={handleClear}>
        {" "}
        Clear animals{" "}
      </button>
      <div>{renderedAnimals}</div>
    </div>
  );
}

export default App;
