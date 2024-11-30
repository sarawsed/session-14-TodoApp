import React, { useState, useContext } from "react";
import DeleteTodoItem from "./DeleteTodoItem";
import EditTodoItem from "./EditTodoItem";
import { ThemeContext } from "../../context/ThemeProvider.jsx";

const TodoList = ({ list, handleDeleteItem, handleEditItem }) => {
  const { isDark } = useContext(ThemeContext);

  const [editIndex, setEditIndex] = useState(null);
  const handleUpdateItem = (index, updatedValue) => {
    handleEditItem(index, updatedValue);
    setEditIndex(null);
  };
  return (
    <div>
      <ul className="space-y-2 mx-auto">
        {list.map((item, index) => (
          <li
            key={index}
            className={` mx-auto flex justify-between items-center p-4 rounded shadow mt-4  ${
              isDark ? " text-black bg-white" : " text-white bg-blue-900 "
            }`}
          >
            {editIndex === index ? (
              <EditTodoItem
                item={item}
                index={index}
                handleUpdateItem={handleUpdateItem}
              />
            ) : (
              <>
                <span
                  className={`truncate w-[50%] ${
                    isDark ? " text-black" : " text-white  "
                  }`}
                >
                  {item}
                </span>
                <div className="space-x-2">
                  <button
                    onClick={() => setEditIndex(index)}
                    className="bg-yellow-500 text-white rounded p-2 hover:bg-yellow-600"
                  >
                    Edit
                  </button>
                  <DeleteTodoItem
                    handleDeleteItem={handleDeleteItem}
                    index={index}
                  />
                </div>
              </>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TodoList;
