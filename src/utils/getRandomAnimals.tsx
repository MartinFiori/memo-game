import { IAnimal } from "../types";

export default function pairGenerator(amount: number): IAnimal[] {
  if (!amount) return [];
  const animals = [
    "Lion",
    "Zebra",
    "Dolphin",
    "Penguin",
    "Giraffe",
    "Koala",
    "Elephant",
    "Tiger",
    "Snake",
    "Eagle",
    "Wolf",
    "Bear",
    "Butterfly",
    "Bee",
    "Ant",
    "Clownfish",
    "Seahorse",
    "Octopus",
    "Whale",
    "Shark",
    "Hippopotamus",
    "Gorilla",
    "Panda",
    "Kangaroo",
    "Camel",
  ];
  const sortedAnimals = randomSort(animals);

  const selectedAmountOfAnimals = sortedAnimals.slice(0, amount);

  const pairs = new Array(amount * 2);

  for (let i = 0; i < amount; i++) {
    const animal = selectedAmountOfAnimals[i];
    const id1 = i;
    const id2 = i + amount;
    pairs[id1] = { id: id1, name: animal, id_match: id2 };
    pairs[id2] = { id: i + amount, name: animal, id_match: id1 };
  }

  const sortedPairs = randomSort(pairs) as IAnimal[];
  return sortedPairs;
}

function randomSort(arr: string[] | IAnimal[]) {
  return arr.sort(() => Math.random() - 0.5);
}
