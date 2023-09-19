import { ChangeEvent, FC, useState } from "react";
interface StateType {
  [key: string]: string;
}
export interface PropsInputType {
  values: { [key: string]: string };
  handleInputChange: (e: ChangeEvent<HTMLInputElement>) => void;
}

const withInput = (
  WrappedComponent: FC<PropsInputType>,
  initialState: StateType
) => {
  const WithInput = () => {
    const [values, setValues] = useState(initialState);

    const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
      const { name, value } = e.target;
      setValues((prev) => ({
        ...prev,
        [name]: value,
      }));
    };

    return (
      <WrappedComponent values={values} handleInputChange={handleInputChange} />
    );
  };

  return WithInput;
};

export default withInput;
