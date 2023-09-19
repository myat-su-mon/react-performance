import { FC, useState } from "react";

export interface PropsType {
  count: number;
  increment: () => void;
  decrement: () => void;
}

const withCounter = (WrappedComponent: FC<PropsType>) => {
  const WithCounter = () => {
    const [count, setCount] = useState<number>(0);

    const increment = () => setCount(count + 1);
    const decrement = () => setCount(count - 1);

    return (
      <WrappedComponent
        count={count}
        increment={increment}
        decrement={decrement}
      />
    );
  };

  return WithCounter;
};

export default withCounter;
