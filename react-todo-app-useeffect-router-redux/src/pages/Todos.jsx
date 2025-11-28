// src/pages/Todos.jsx
import { useState } from "react";
import { users, todos } from "../data/dummyData";
import TodoList from "../components/TodoList";

export default function Todos() {
  const [selectedUserId, setSelectedUserId] = useState(users[0].id);

  const userTodos = todos.filter((t) => t.userId === selectedUserId);

  return (
    <div>
      <h1>Todos</h1>

      <div>
        <h2>Users</h2>
        {users.map((u) => (
          <button key={u.id} onClick={() => setSelectedUserId(u.id)}>
            {u.name}
          </button>
        ))}
      </div>

      <h2>Todos for {users.find(u => u.id === selectedUserId).name}</h2>
      <TodoList todos={userTodos} />
    </div>
  );
}
