import React from "react";

const DeleteTodoItem = ({ handleDeleteItem, index }) => {
  return (
    <button
      onClick={() => handleDeleteItem(index)}
      className="text-red-500 hover:text-red-700"
    >
      Delete
    </button>
  );
};

export default DeleteTodoItem;
