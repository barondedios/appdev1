import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { getTodos } from "../../api/todosApi";

export const fetchTodos = createAsyncThunk("todos/fetchTodos", async () => {
  const res = await getTodos();
  return res.data.slice(0, 10); // first 10 todos
});

const todosSlice = createSlice({
  name: "todos",
  initialState: {
    items: [],
    status: "idle",
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchTodos.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchTodos.fulfilled, (state, action) => {
        state.status = "success";
        state.items = action.payload;
      })
      .addCase(fetchTodos.rejected, (state) => {
        state.status = "error";
      });
  },
});

export default todosSlice.reducer;
