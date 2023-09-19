import withInput, { PropsInputType } from "../hoc/withInput";

const initialState = { user: "", password: "" };

const CompoC = ({ values, handleInputChange }: PropsInputType) => {
  return (
    <div>
      <h2>{values.user}</h2>
      <input
        type="text"
        name="user"
        value={values.user}
        onChange={handleInputChange}
      />
      <h2>{values.password}</h2>
      <input
        type="text"
        name="password"
        value={values.password}
        onChange={handleInputChange}
      />
    </div>
  );
};

export default withInput(CompoC, initialState);
