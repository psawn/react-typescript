import { Todos } from "./components/Todo";
import { Todo } from "./models/todo";

function App() {
  const todos = [
    new Todo("Learn React"),
    new Todo("Learn typescript"),
  ]

  return (
    <>
      <Todos items={todos} />
    </>
  );
}

export default App;
