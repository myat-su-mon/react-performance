import { useMemo } from "react";
import { filterTodo } from "./utils";

export interface Todo {
  id: number;
  text: string;
  completed: boolean;
}

interface PropsType {
  isDark: boolean;
  todos: Todo[];
  tab: string;
}

const TodoList = ({ isDark, todos, tab }: PropsType) => {
  const filterTodos = useMemo(() => filterTodo(todos, tab), [todos, tab]);
  // const filterTodos = filterTodo(todos, tab);

  return (
    <div className={`${isDark ? "bg-gray-600" : "bg-gray-100"}`}>
      {filterTodos.map((todo) => (
        <p key={todo.id}>
          {todo.completed ? <s>{todo.text}</s> : <i>{todo.text}</i>}
        </p>
      ))}
    </div>
  );
};

export default TodoList;
