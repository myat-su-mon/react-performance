import { useCallback, useState } from "react";
import Child from "./Child";

const App = () => {
  const [count, setCount] = useState(0);
  const [userNo, setUserNo] = useState(1);

  const fetchData = useCallback(async () => {
    return await fetch(`https://dummyjson.com/users/${userNo}`).then((res) =>
      res.json()
    );
  }, [userNo]);

  return (
    <div>
      <div>
        <h2>{userNo}</h2>
        <button onClick={() => setUserNo((prev) => prev - 1)}>decrease</button>
        <button onClick={() => setUserNo((prev) => prev + 1)}>increase</button>
        <h2>{count}</h2>
        <button onClick={() => setCount((prev) => prev + 1)}>update</button>
      </div>
      <Child fetchData={fetchData} />
    </div>
  );
};

export default App;
