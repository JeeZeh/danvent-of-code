const partTwo = (numbers: number[]): number => {
  let current = 0;
  const seen = new Set<number>([current]);
  while (true) {
    for (const n of numbers) {
      current += n;

      if (seen.has(current)) {
        return current;
      }

      seen.add(current);
    }
  }
};

const Day01 = (input: string) => {
  const numbers = input.split("\n").map((x) => parseInt(x));
  const part_one = numbers.reduce((a, b) => a + b, 0);

  return `Part 1: ${part_one}\nPart 2: ${partTwo(numbers)}`;
};

export { Day01 };
