import React, { useState } from "react";

const useToggle = () => {
  const [toggle, setToggle] = useState<boolean>(false);

  const changeHandler = () => setToggle(!toggle);
  return { toggle, changeHandler };
};

export default useToggle;
