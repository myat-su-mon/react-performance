import { ChangeEvent, ReactNode, useCallback, useState } from "react";

interface PropsType {
  defaultValue: { [key: string]: string };
  render: (
    values: { [key: string]: string },
    inputHandler: (e: ChangeEvent<HTMLInputElement>) => void
  ) => ReactNode;
}
const Input = ({ render, defaultValue }: PropsType) => {
  const [values, setValues] = useState(defaultValue);

  const inputHandler = useCallback((e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setValues((prev) => ({
      ...prev,
      [name]: value,
    }));
  }, []);

  return <div>{render(values, inputHandler)}</div>;
};

export default Input;
