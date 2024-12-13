import { useMemo, useState } from "react";

export const useCustomMemo = () => {
  const [number, setNumber] = useState(0);

  const factorial = useMemo(() => {
    const computeFactorial = (n) => (n <= 1 ? 1 : n * computeFactorial(n - 1));
    console.log("memo used");

    return computeFactorial(number);
  }, [number]);

  return { number, setNumber, factorial };
};
