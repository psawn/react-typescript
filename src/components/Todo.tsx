import { PropsWithChildren } from "react";
import { Todo } from "../models/todo";

// export function Todos(props: { items: string[]; children: ReactNode }) {
//   return <ul>{}</ul>;
// }

export const Todos: React.FC<PropsWithChildren<{ items: Todo[] }>> = (
  props
) => {
  return (
    <ul>
      {props.items.map((item) => (
        <li key={item.id}>{item.text}</li>
      ))}
    </ul>
  );
};
