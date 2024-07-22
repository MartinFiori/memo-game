import { ReactElement, useEffect, useState } from "react";
import { IAnimal } from "../../types";
import "./AnimalList.scss";
import AnimalCard from "../AnimalCard/AnimalCard";

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

  useEffect(() => {
    if (matches.length === animals.length && animals.length !== 0) {
      setMatches([]);
      alert("terminó el juego");
    }
  }, [matches]);

  function checkItems(animalsSelected: IAnimal[]): void {
    const [firstAnimal, secondAnimal] = animalsSelected;
    if (firstAnimal.name === secondAnimal.name) {
      const newAnimals = animals.map((animal) =>
        animal.name === firstAnimal.name
          ? { ...animal, match_found: true }
          : animal
      );
      const newMatches = newAnimals.filter(
        (animal) => animal.name === firstAnimal.name
      );
      setMatches((m) => [...m, ...newMatches]);
      updateMatchAnimals(newAnimals);
    }
    setTimeout(() => {
      setPair([]);
    }, 1000);
  }

  function handleSetPairs(animal: IAnimal): void {
    if (pair.length === 2) return;
    if (pair.find((a) => a.id === animal.id)) return;
    setPair((p) => [...p, animal]);
  }

  return (
    <div className="animal-container">
      {animals?.map((animal: IAnimal) => (
        <AnimalCard
          key={animal.id}
          animal={animal}
          handleSetPairs={handleSetPairs}
          pair={pair}
        />
      ))}
    </div>
  );
}
