// import { useAppSelector } from "@/redux/hook";
import { useState } from "react";
import AddTodoModal from "./AddTodoModal";
import TodoCard from "./TodoCard";
import TodoFilter from "./TodoFilter";
import { useGetTodosQuery } from "@/redux/api/api";

const TodoContainer = () => {
  const [priority, setPriority] = useState("");
  // from local state
  // const { todos } = useAppSelector((state) => state.todos);

  const { data: todos, isLoading, isError } = useGetTodosQuery(priority);

  if (isLoading) {
    return <p>Loading...</p>;
  }

  return (
    <div>
      <div className="flex justify-between mb-5">
        <AddTodoModal />
        <TodoFilter priority={priority} setPriority={setPriority} />
      </div>
      <div className="bg-red-500 bg-primary-gradient w-full h-full p-[5px] rounded-xl ">
        {todos.length && (
          <div className="bg-white p-5 w-full h-full rounded-lg space-y-3">
            {todos?.data.map((item) => (
              <TodoCard {...item} />
            ))}
          </div>
        )}
        {!todos.length && (
          <div className="bg-white p-5 text-2xl font-bold flex justify-center items-center rounded-md">
            <p>There is no task pending</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default TodoContainer;
