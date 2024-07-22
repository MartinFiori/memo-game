import { ReactElement, useEffect, useState } from "react";
import { IAnimal } from "../../types";
import "./AnimalList.scss";

interface Props {
  animals: IAnimal[];
  updateMatchAnimals: (newAnimals: IAnimal[]) => void;
}

const STATE_PAIR = Object.freeze({
  IDLE: "IDLE",
  MATCH: "MATCH",
  NO_MATCH: "NO_MATCH",
});

export default function AnimalList({
  animals,
  updateMatchAnimals,
}: Props): ReactElement {
  const [pair, setPair] = useState<IAnimal[]>([]);
  const [matches, setMatches] = useState<IAnimal[]>([]);

  useEffect(() => {
    if (pair.length === 2) {
      checkItems(pair);
    }
  }, [pair]);

  function checkItems(animalsSelected: IAnimal[]): void {
    const firstAnimal: IAnimal = animalsSelected[0];
    const secondAnimal: IAnimal = animalsSelected[1];
    if (firstAnimal.name === secondAnimal.name) {
      const names = animals.map((el) => el.name);
      const firstIndex = names.indexOf(firstAnimal.name);
      const lastIndex = names.lastIndexOf(firstAnimal.name);
      const newAnimals = animals;
      newAnimals[firstIndex].match_found = true;
      newAnimals[lastIndex].match_found = true;
      setMatches((m) => [...m, newAnimals[firstIndex], newAnimals[lastIndex]]);
      updateMatchAnimals(newAnimals);
    } else {
    }

    setTimeout(() => {
      setPair([]);
    }, 10000);
  }

  function handleSetPairs(animal: IAnimal): void {
    console.log(animal);
    setPair((p) => [...p, animal]);
  }

  return (
    <div>
      {animals?.map((animal: IAnimal) => (
        <p
          onClick={() => handleSetPairs(animal)}
          className={`${animal.match_found ? "match" : ""}`}
          key={animal.id}
        >
          {animal.name}
        </p>
      ))}
    </div>
  );
}
