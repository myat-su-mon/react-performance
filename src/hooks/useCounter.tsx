import { useState } from "react";

const useCounter = (defaultValue: number) => {
  const [count, setCount] = useState<number>(defaultValue);
  const increment = () => setCount(count + 1);
  const decrement = () => setCount(count - 1);

  return { count, increment, decrement };
};

export default useCounter;
