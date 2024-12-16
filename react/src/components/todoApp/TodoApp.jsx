import { useState } from "react";

export const TodoApp = () => {
  const [todos, setTodos] = useState(["Todo-1", "Todo-2", "Todo-3"]);
  const [todoInput, setTodoInput] = useState("");
  //   const [editMode, setEditMode] = useState(false);
  const [editIndex, setEditIndex] = useState(null);

  const handleInputChange = (e) => {
    setTodoInput(e.target.value);
  };

  const handleAddNewButton = () => {
    if (todoInput.trim().length) {
      setTodos([...todos, todoInput]);
      setTodoInput("");
    }
  };

  const handleRemoveButton = (index) => {
    setTodos(todos.filter((_, idx) => idx !== index));
  };

  const handleEditButton = (index) => {
    setEditIndex(index);
    setTodoInput(todos[index]);
    // setEditMode(true);
  };

  const handleEditSaveButton = () => {
    if (todoInput.trim().length && editIndex !== null) {
      setTodos(
        todos.map((todo, idx) => (idx === editIndex ? todoInput : todo))
      );
      setTodoInput("");
      setEditIndex(null);
      //   setEditMode(false);
    }
  };

  return (
    <div className="flex flex-col justify-center p-4">
      <div className="text-center text-xl font-bold mb-4 bg-red-500 text-white p-2">
        TODO-APP
      </div>

      <div className="w-full flex justify-center mb-4">
        <input
          type="text"
          value={todoInput}
          onChange={handleInputChange}
          className="border-2 border-black p-2 mr-2"
          placeholder="Enter a todo..."
        />
        {/* {!editMode ? ( */}
        {editIndex === null ? (
          <button
            className="bg-green-500 text-white px-4 py-1"
            onClick={handleAddNewButton}
          >
            Add Todo
          </button>
        ) : (
          <button
            className="bg-blue-500 text-white px-4 py-1"
            onClick={handleEditSaveButton}
          >
            Save
          </button>
        )}
      </div>

      <ul className="flex flex-col gap-4">
        {todos.map((todo, index) => (
          <li
            key={index}
            className="flex flex-row gap-4 items-center justify-center border-b pb-2"
          >
            <span className="flex-1">{todo}</span>
            <button
              className="bg-blue-400 hover:bg-blue-800 text-white px-2 py-1"
              onClick={() => handleEditButton(index)}
            >
              Edit
            </button>
            <button
              className="bg-red-400 hover:bg-red-800 text-white px-2 py-1"
              onClick={() => handleRemoveButton(index)}
            >
              Remove
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

// export default TodoApp;
