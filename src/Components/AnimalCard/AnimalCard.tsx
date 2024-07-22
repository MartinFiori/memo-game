import { ReactElement } from "react";
import { IAnimal } from "../../types";
import "./AnimalCard.scss";
import img from "../../assets/animals/Ant.png";

interface Props {
  animal: IAnimal;
  handleSetPairs: (animal: IAnimal) => void;
  pair: IAnimal[];
}

export default function AnimalCard({
  animal,
  handleSetPairs,
  pair,
}: Props): ReactElement {
  return (
    // <div className="flip-card">
    //   <div className="flip-card-inner">
    //     <div className="flip-card-front">
    //       <img src={`/assets/animals${animal.src}`} alt={animal.name} />
    //     </div>
    //     <div className="flip-card-back">
    //       <h1>John Doe</h1>
    //       <p>Architect & Engineer</p>
    //       <p>We love that guy</p>
    //     </div>
    //   </div>
    // </div>
    <section
      onClick={() => handleSetPairs(animal)}
      className={`animal-card ${animal.match_found ? "match" : ""} ${
        pair.some((p) => p.id === animal.id) ? "selected" : ""
      } `}
    >
      <img src={`/assets/animals${animal.src}`} alt={animal.name} />
      <h2>{animal.name}</h2>
    </section>
  );
}
