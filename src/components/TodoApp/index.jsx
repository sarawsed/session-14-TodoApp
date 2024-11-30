import React, { useState, useContext } from "react";
import TodoForm from "./TodoForm";
import TodoList from "./TodoList";
import { ThemeContext } from "../../context/ThemeProvider.jsx";
const TodoApp = () => {
  const { isDark, toggleTheme } = useContext(ThemeContext);
  const [todoList, setTodoList] = useState([]);
  const addToList = (newItem) => {
    setTodoList([newItem, ...todoList]);
  };
  const handleDeleteItem = (index) => {
    setTodoList(todoList.filter((_, i) => i !== index));
  };

  const handleEditItem = (index, updatedValue) => {
    const updatedList = [...todoList];
    updatedList[index] = updatedValue;
    setTodoList(updatedList);
  };
  return (
    <div
      className={`w-full sm:w-full p-8 rounded-md border-2 border-gray-800  ${
        isDark ? "bg-gray-900 text-white " : "bg-white text-black "
      }`}
    >
      <button
        onClick={toggleTheme}
        className="mb-4 p-2 bg-gray-600 text-white rounded "
      >
        {isDark ? "Change to Light Theme" : "Change to Dark Theme"}
      </button>
      <TodoForm handleAddItem={addToList} />
      <TodoList
        list={todoList}
        handleDeleteItem={handleDeleteItem}
        handleEditItem={handleEditItem}
      />
    </div>
  );
};

export default TodoApp;
