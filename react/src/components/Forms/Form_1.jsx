import { useState } from "react";

const Form_1 = () => {
  const [age, setAge] = useState(18); // Manage age state
  const [username, setUsername] = useState(""); // Manage username state

  const handleBlur = (e) => {
    const value = parseInt(e.target.value, 10);
    if (value < 12) setAge(12); // Set to min if below range
    else if (value > 120) setAge(120); // Set to max if above range
    else setAge(value); // Keep valid input
  };

  const handleChange = (e) => {
    setAge(e.target.value); // Allow user to input freely
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Submitted data:", { username, age });
  };

  return (
    <>
      <h1 className="flex justify-center text-lg font-bold mb-4">Form</h1>
      <form
        className="gap-4 flex flex-row w-1/2 mx-auto p-4 border rounded shadow-lg"
        onSubmit={handleSubmit} // Attach form submit handler
      >
        <div className="gap-4 flex flex-col">
          <label htmlFor="username" className="font-medium">
            Username
          </label>
          <input
            type="text"
            id="username"
            placeholder="john"
            value={username}
            onChange={(e) => setUsername(e.target.value)} // Update username state
            className="border rounded px-2 py-1"
          />

          <label htmlFor="age" className="font-medium">
            Select Age
          </label>
          <input
            type="number"
            id="age"
            value={age}
            onChange={handleChange}
            onBlur={handleBlur}
            className="border rounded px-2 py-1"
          />

          <label htmlFor="ageRange" className="font-medium">
            Horizontal Age Range
          </label>
          <input
            type="range"
            id="ageRange"
            value={age}
            max="120"
            min="12"
            onChange={(e) => setAge(e.target.value)} // Sync range slider
            className="w-full"
          />
        </div>
        <div className="gap-4 flex flex-col">
          <label htmlFor="ageRangeVertical" className="font-medium">
            Vertical Age Range
          </label>
          <div className="flex justify-center">
            <input
              type="range"
              id="ageRangeVertical"
              value={age}
              max="120"
              min="12"
              onChange={(e) => setAge(e.target.value)}
              className="h-96 w-full transform -rotate-90" // Make vertical range taller
            />
          </div>
          <button
            type="submit"
            className="border-2 border-blue-500 text-blue-500 font-semibold px-4 py-2 rounded hover:bg-blue-500 hover:text-white"
          >
            Submit
          </button>
        </div>
      </form>
    </>
  );
};

export default Form_1;
