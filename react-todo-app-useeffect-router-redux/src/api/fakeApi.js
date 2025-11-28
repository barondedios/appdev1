import { users, todos } from "../data/dummyData";

export const fetchUsers = () => {
  return new Promise((resolve) => {
    setTimeout(() => resolve(users), 500);
  });
};

export const fetchTodosByUser = (userId) => {
  return new Promise((resolve) => {
    setTimeout(
      () => resolve(todos.filter((todo) => todo.userId === userId)),
      500
    );
  });
};
