import { useAppSelector } from "@/redux/hook";
import AddTodoModal from "./AddTodoModal";
import TodoCard from "./TodoCard";
import TodoFilter from "./TodoFilter";

const TodoContainer = () => {
  const { todos } = useAppSelector((state) => state.todos);
  return (
    <div>
      <div className="flex justify-between mb-5">
        <AddTodoModal />
        <TodoFilter />
      </div>
      <div className="bg-red-500 bg-primary-gradient w-full h-full p-[5px] rounded-xl ">
        {todos.length && (
          <div className="bg-white p-5 w-full h-full rounded-lg space-y-3">
            {todos.map((item) => (
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
