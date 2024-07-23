import { ReactElement, useEffect, useRef, useState } from "react";
import { IAnimal } from "../../types";
import AnimalCard from "../AnimalCard/AnimalCard";
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
  const ref = useRef<HTMLDivElement>(null)

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
    if (animal.match_found) return;
    if (pair.length === 2) return;
    if (pair.find((a) => a.id === animal.id)) return;
    setPair((p) => [...p, animal]);
  }

  function renderTemplateGrid(amount: number): { [key: number]: string } {
    const columns: { [key: number]: number } = {
      12: 6,
      18: 6,
      24: 8,
      30: 6,
      36: 9,
      42: 7,
      48: 8,
    }

    const rows: { [key: number]: number } = {
      12: 2,
      18: 3,
      24: 3,
      30: 5,
      36: 4,
      42: 6,
      48: 6,
    }
    const node = ref.current
    let style: { [key: string]: string } = {}
    if (node) {
      const { offsetWidth } = ref.current
      if (offsetWidth > 920) {
        style['gridTemplateColumns'] = `repeat(${columns[amount]}, 1fr)`
        style['gridTemplateRows'] = `repeat(${rows[amount]}, 1fr)`
      } else {
        style['gridTemplateColumns'] = `repeat(${rows[amount]}, 1fr)`
        style['gridTemplateRows'] = `repeat(${columns[amount]}, 1fr)`
      }
    }
    return style
  }

  return (
    <div ref={ref} className="animal-container" style={renderTemplateGrid(animals.length)}>
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
