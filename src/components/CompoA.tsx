import useCounter from "../hooks/useCounter";
import useFetch from "../hooks/useFetch";
import useInput from "../hooks/useInput";

const CompoA = () => {
  const { count, increment, decrement } = useCounter(10);
  const { input, changeInputHandler } = useInput({ username: "" });
  const { items, loading, error } = useFetch("https://dummyjson.com/carts");

  return (
    <div>
      <h2>CompoCount: {count}</h2>
      <button onClick={increment} className="bg-green-300 mr-3">
        Increment
      </button>
      <button onClick={decrement} className="bg-green-300">
        Decrement
      </button>

      <h2>{input.username}</h2>
      <input
        className="outline-none border-2 border-green-300"
        type="text"
        placeholder="typing..."
        name="username"
        value={input.username}
        onChange={changeInputHandler}
      />
    </div>
  );
};

export default CompoA;
