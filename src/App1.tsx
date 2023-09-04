import { useState } from "react";
import TodoList from "./components/TodoList";
import { createTodos } from "./components/utils";

const todos = createTodos();

const App = () => {
  const [isDark, setIsDark] = useState<boolean>(false);
  const [tab, setTab] = useState<string>("all");

  return (
    <>
      <div className="flex gap-3 items-center">
        <button
          onClick={() => setTab("all")}
          className="bg-gray-600 text-white w-32"
        >
          All
        </button>
        <button
          onClick={() => setTab("active")}
          className="bg-gray-600 text-white w-32"
        >
          Active
        </button>
        <button
          onClick={() => setTab("completed")}
          className="bg-gray-600 text-white w-32"
        >
          Completed
        </button>
        <button
          className="bg-gray-600 text-white w-32"
          onClick={() => setIsDark(!isDark)}
        >
          DarkMode
        </button>
      </div>
      <TodoList isDark={isDark} todos={todos} tab={tab} />
    </>
  );
};

export default App;
