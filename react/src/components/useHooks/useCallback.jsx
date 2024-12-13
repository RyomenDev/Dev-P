import { useCallback, useState } from "react";

export const useCustomCallback = () => {
  const [count, setCount] = useState(0);

  const increment = useCallback(() => {
    setCount((prev) => prev + 1);
    console.log("callBack used");
  }, []);

  return { count, increment };
};
