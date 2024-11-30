import React, { useState } from "react";
const TodoForm = ({ handleAddItem }) => {
  const [inputValue, setInputValue] = useState("");
  const handleChangeInput = (event) => {
    setInputValue(event.target.value);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    if (inputValue !== "") {
      handleAddItem(inputValue);
      setInputValue("");
    }
  };
  return (
    <div>
      <form
        className=" flex justify-between gap-3 w-[100%] mx-auto"
        onSubmit={handleSubmit}
      >
        <input
          onChange={handleChangeInput}
          value={inputValue}
          type="text"
          placeholder="Enter Something"
          className="w-[100%] border text-black border-gray-300 rounded p-2 focus:outline-none focus:ring-2 focus:ring-blue-500 "
        />
        <button
          type="submit"
          className="bg-blue-500 text-white  rounded p-2 hover:bg-blue-600  "
        >
          {" "}
          Add
        </button>
      </form>
    </div>
  );
};

export default TodoForm;
