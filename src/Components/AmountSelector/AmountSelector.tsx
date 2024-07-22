interface Props {
  handleSetAnimals: (amount: number) => void;
}

export default function AmountSelector({ handleSetAnimals }: Props) {
  const pairAmount: number[] = [12, 18, 24, 30, 36, 42, 48];

  return (
    <select onChange={(e) => handleSetAnimals(parseInt(e.target.value))}>
      <option defaultValue={0} hidden>
        Choose
      </option>
      {pairAmount.map((num) => (
        <option key={num} value={num / 2}>
          {num}
        </option>
      ))}
    </select>
  );
}
