import withCounter, { PropsType } from "./hoc/withCounter";

const initialState = 10;
const App = ({ count, increment, decrement }: PropsType) => {
  return (
    <div>
      <h2 className="text-black">{count}</h2>
      <button onClick={decrement} className="bg-black text-white">
        -
      </button>
      <button onClick={increment} className="bg-black text-white">
        +
      </button>
    </div>
  );
};

export default withCounter(App, initialState);
