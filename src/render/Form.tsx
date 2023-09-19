import React, {
  ChangeEvent,
  FormEvent,
  ReactNode,
  useCallback,
  useState,
} from "react";

interface PropsType {
  render: (
    inputHandler: (e: ChangeEvent<HTMLInputElement>) => void,
    values: { [key: string]: string }
  ) => ReactNode;
  initialState: {};
  onSubmit: (values: { [key: string]: string }) => void;
}
const Form = ({ render, initialState, onSubmit }: PropsType) => {
  const [values, setValues] = useState(initialState);

  const inputHandler = useCallback((e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setValues((prev) => ({
      ...prev,
      [name]: value,
    }));
  }, []);

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    onSubmit(values);
  };

  return <form onSubmit={handleSubmit}>{render(inputHandler, values)}</form>;
};

export default Form;
