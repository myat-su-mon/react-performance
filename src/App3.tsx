import CompoA from "./components/CompoA";
import useCounter from "./hooks/useCounter";
import useToggle from "./hooks/useToggle";
import useInput from "./hooks/useInput";
import useFetch from "./hooks/useFetch";

interface InputType {
  [key: string]: string;
}

const App = () => {
  const { count, increment, decrement } = useCounter(1);
  const { toggle, changeHandler } = useToggle();
  const { input, changeInputHandler } = useInput({ name: "", password: "" });
  const { items, loading, error } = useFetch(
    "https://api.escuelajs.co/api/v1/products"
  );

  return (
    <div>
      <h2>{toggle ? "true" : "false"} </h2>
      <button onClick={changeHandler} className="bg-gray-500 mr-3">
        Toggle
      </button>
      <h2>AppCount: {count}</h2>
      <button onClick={increment} className="bg-gray-500 mr-3">
        Increment
      </button>
      <button onClick={decrement} className="bg-gray-500">
        Decrement
      </button>
      <h2>
        {input.name}
        {input.password}
      </h2>
      <input
        type="text"
        placeholder="typing..."
        name="name"
        value={input.name}
        onChange={changeInputHandler}
      />
      <input
        type="text"
        placeholder="typing..."
        name="password"
        value={input.password}
        onChange={changeInputHandler}
      />
      <CompoA />
    </div>
  );
};

export default App;
