import { IAnimal } from "../types";
import animals from '../data.json'

export default function pairGenerator(amount: number): IAnimal[] {
  if (!amount) return [];

  const sortedAnimals = randomSort(animals);

  const selectedAmountOfAnimals = sortedAnimals.slice(0, amount);

  const pairs = new Array(amount * 2);

  for (let i = 0; i < amount; i++) {
    const animal = selectedAmountOfAnimals[i];
    const id1 = i;
    const id2 = i + amount;
    pairs[id1] = { ...animal, id: id1, };
    pairs[id2] = { ...animal, id: i + amount, };
  }

  const sortedPairs = randomSort(pairs) as IAnimal[];
  return sortedPairs;
}

function randomSort<T>(arr: T[]): T[] {
  return arr.sort(() => Math.random() - 0.5);
}
