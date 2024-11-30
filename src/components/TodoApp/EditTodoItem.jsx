import React, { useState } from "react";

const EditTodoItem = ({ item, index, handleUpdateItem }) => {
  const [editValue, setEditValue] = useState(item);

  const handleChange = (e) => {
    setEditValue(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (editValue.trim() !== "") {
      handleUpdateItem(index, editValue);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="flex justify-between flex-wrap gap-3 mt-4 w-[100%]">
      <input
        type="text"
        value={editValue}
        onChange={handleChange}
        className="border border-gray-300 rounded p-2 focus:outline-none focus:ring-2 focus:ring-blue-500 text-black"
      />
      <button
        type="submit"
        className="bg-green-500 text-white rounded p-2 hover:bg-green-600"
      >
        Update
      </button>
    </form>
  );
};

export default EditTodoItem;
