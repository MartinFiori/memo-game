import { ReactElement, useState } from "react";
import { IAnimal } from "../../types";
import pairGenerator from "../../utils/getRandomAnimals";
import AmountSelector from "../AmountSelector/AmountSelector";
import AnimalList from "../AnimalList/AnimalList";

export default function Board(): ReactElement {
  const [animals, setAnimals] = useState<IAnimal[]>([]);

  function updateMatchAnimals(newAnimals: IAnimal[]): void {
    setAnimals(newAnimals);
  }

  function handleSetAnimals(amount: number): void {
    const data = pairGenerator(amount);
    setAnimals(data);
  }

  return (
    <div>
      <AmountSelector handleSetAnimals={handleSetAnimals} />
      <AnimalList animals={animals} updateMatchAnimals={updateMatchAnimals} />
    </div>
  );
}
