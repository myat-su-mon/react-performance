import React from "react";
import Counter from "./render/Counter";
import CompoB from "./components/CompoB";

const App = () => {
  return (
    <div className="flex gap-3">
      <Counter
        defaultValue={10}
        render={(increment, decrement, count) => (
          <>
            <div>
              <h3 className={`${count > 5 ? "text-teal-300" : "text-red-300"}`}>
                {count}
              </h3>
              <button
                className="bg-violet-600 text-white w-20 mr-3"
                onClick={decrement}
              >
                -
              </button>
              <button
                className="bg-violet-600 text-white w-20 mr-3"
                onClick={increment}
              >
                +
              </button>
            </div>
            <div>
              <CompoB />
            </div>
          </>
        )}
      />
    </div>
  );
};
