import { ReactElement, useEffect, useState } from "react";
import { IAnimal } from "../types";
import pairGenerator from "../utils/getRandomAnimals";

export default function Board(): ReactElement {
  const [animals, setAnimals] = useState<IAnimal[]>([]);
  const data = pairGenerator(10);
  useEffect(() => {
    if (animals.length) handleSetAnimals();
  }, []);

  function handleSetAnimals() {
    setAnimals(data);
  }

  return (
    <div>
      <button onClick={handleSetAnimals}>change</button>
      {animals?.map((animal) => (
        <p key={animal.id}>{animal.name}</p>
      ))}
    </div>
  );
}
