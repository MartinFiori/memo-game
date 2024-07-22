import { ReactElement } from "react";
import { IAnimal } from "../../types";
import './AnimalCard.scss'

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
    <section
      onClick={() => handleSetPairs(animal)}
      className={`animalCard ${animal.match_found ? "match" : ""} ${pair.some((p) => p.id === animal.id) ? "selected" : ""
        } `}
    >
      {animal.name}
    </section>
  );
}
