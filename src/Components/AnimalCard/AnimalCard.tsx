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
    <div
      className={`flip-card ${animal.match_found ? "match selected" : ""} ${pair.some((p) => p.id === animal.id) ? "selected" : ""
        }`}
      onClick={() => handleSetPairs(animal)}
    >
      <div className="flip-card-inner">
        <div className="flip-card-front"></div>
        <div className="flip-card-back">
          <img src={`/assets/animals${animal.src}`} alt={animal.name} />
        </div>
      </div>
    </div>
  );
}
