import { ReactNode, useState } from "react";

interface PropsType {
  defaultValue: number;
  render: (
    increment: () => void,
    decrement: () => void,
    count: number
  ) => ReactNode;
}
const Counter = ({ render, defaultValue }: PropsType) => {
  const [count, setCount] = useState<number>(0);

  const increment = () => {
    setCount(count + 1);
  };

  const decrement = () => {
    setCount(count - 1);
  };

  return <div>{render(increment, decrement, count)}</div>;
};

export default Counter;
