import React from "react";
import Form from "./render/Form";
import CompoC from "./components/CompoC";

const App = () => {
  const initialState = { user: "", password: "" };

  const handleSubmit = (values: { [key: string]: string }) => {
    console.log(values);
  };

  return (
    <div>
      <Form
        onSubmit={handleSubmit}
        initialState={initialState}
        render={(inputHandler, values) => (
          <div>
            <input
              type="text"
              name="user"
              value={values.user}
              onChange={inputHandler}
            />
            <input
              type="text"
              name="password"
              value={values.password}
              onChange={inputHandler}
            />
            <button type="submit" className="bg-black w-32 text-white">
              Submit
            </button>
          </div>
        )}
      />
    </div>
  );
};

export default App;
