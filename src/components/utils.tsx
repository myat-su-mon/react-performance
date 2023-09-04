import { Todo } from "./TodoList";

export const createTodos = () => {
  const todos = [];

  for (let i = 0; i < 50000; i++) {
    todos.push({
      id: i,
      text: `Todo ${i + 1}`,
      completed: Math.random() > 0.5,
    });
  }

  return todos;
};

export const filterTodo = (todos: Todo[], tab: string) => {
  let startTime = performance.now();

  while (performance.now() - startTime < 500) {
    console.log("in filterTodo");
  }

  return todos.filter((todo: Todo) => {
    if (tab === "all") return true;
    else if (tab === "active") return !todo.completed;
    else return todo.completed;
  });
};
