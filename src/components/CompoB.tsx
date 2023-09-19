import React from "react";
import Input from "../render/Input";

const CompoB = () => {
  const initialValues = { user: "", password: "" };
  return (
    <div>
      <Input
        defaultValue={initialValues}
        render={(values, inputHandler) => (
          <div>
            <h2>User: {values.user}</h2>
            <input
              className="outline-none mr-2 border-b-2 border-black"
              type="text"
              name="user"
              value={values.user}
              onChange={inputHandler}
            />
            <br />
            <h2>Password: {values.password}</h2>
            <input
              className="outline-none border-b-2 border-black"
              type="text"
              name="password"
              value={values.password}
              onChange={inputHandler}
            />
          </div>
        )}
      />
    </div>
  );
};

export default CompoB;
