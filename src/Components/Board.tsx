import React, { useEffect, useState } from 'react'
import data from '../data.json';
// interface IAnimal {
//   id: number;
//   name: string;
//   id_match: number
// }

// function pairGenerator(amount) {
//   if (!amount) return console.log("error");
//   const animals = [
//     "Lion",
//     "Zebra",
//     "Dolphin",
//     "Penguin",
//     "Giraffe",
//     "Koala",
//     "Elephant",
//     "Tiger",
//     "Snake",
//     "Eagle",
//     "Wolf",
//     "Bear",
//     "Butterfly",
//     "Bee",
//     "Ant",
//     "Clownfish",
//     "Seahorse",
//     "Octopus",
//     "Whale",
//     "Shark",
//     "Hippopotamus",
//     "Gorilla",
//     "Panda",
//     "Kangaroo",
//     "Camel",
//   ];
//   const sortedAnimals = randomSort(animals)

//   const selectedAmountOfAnimals = sortedAnimals.slice(0, amount)

//   const pairs = new Array(amount * 2);

//   for (let i = 0; i < amount; i++) {
//     const animal = selectedAmountOfAnimals[i];
//     const id1 = i;
//     const id2 = i + amount;
//     pairs[id1] = { id: id1, name: animal, id_match: id2 };
//     pairs[id2] = { id: i + amount, name: animal, id_match: id1 };
//   }

//   const sortedPairs = randomSort(pairs)
//   console.log(sortedPairs);

// }

// function randomSort(arr) {
//   return arr.sort(() => Math.random() - 0.5)
// }

// pairGenerator(5);


export default function Board() {
  const [animals, setAnimals] = useState<string[]>([])
  useEffect(() => {
    if (data.length) setAnimals(data)
    // console.log(data.length)
    // if (data) setAnimals(data)
  }, [])

  return (
    <div>{
      animals?.map(animal => <p key={animal}>{animal}</p>)
    }</div>
  )
}
