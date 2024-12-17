import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { newInput, clear } from "./store/inputSlice.js";

function App() {
  const [value, setValue] = useState("");
  const dispatch = useDispatch();
  const inputValue = useSelector((state) => state.input.inputNumber);

  const handleInputChange = (e) => {
    setValue(e.target.value);
  };

  const handleButtonClick = () => {
    dispatch(newInput(Number(value)));
    setValue("");
    console.log(value);
  };

  const handleClearButton = () => {
    dispatch(clear());
    setValue("");
  };

  return (
    <>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          height: "100vh",
          backgroundColor: "#f8fafc",
        }}
      >
        <h1
          style={{
            fontSize: "2rem",
            fontWeight: "bold",
            backgroundColor: "slategray",
            color: "white",
            padding: "10px 20px",
            borderRadius: "8px",
            textAlign: "center",
          }}
        >
          Redux Toolkit
        </h1>
        <div
          style={{
            display: "flex",
            gap: "10px",
            marginTop: "20px",
          }}
        >
          <input
            type="number"
            onChange={handleInputChange}
            placeholder="Enter a number"
            value={value}
            style={{
              border: "2px solid gray",
              padding: "8px 12px",
              borderRadius: "6px",
              outline: "none",
              fontSize: "1rem",
            }}
          />
          <button
            onClick={handleButtonClick}
            style={{
              backgroundColor: "green",
              color: "white",
              border: "none",
              padding: "8px 16px",
              borderRadius: "6px",
              cursor: "pointer",
              fontSize: "1rem",
              transition: "background 0.3s",
            }}
            onMouseOver={(e) => (e.target.style.backgroundColor = "#228B22")}
            onMouseOut={(e) => (e.target.style.backgroundColor = "green")}
          >
            Change
          </button>
          <button
            onClick={handleClearButton}
            style={{
              backgroundColor: "red",
              color: "white",
              border: "none",
              padding: "8px 16px",
              borderRadius: "6px",
              cursor: "pointer",
              fontSize: "1rem",
              transition: "background 0.3s",
            }}
            onMouseOver={(e) => (e.target.style.backgroundColor = "#B22222")}
            onMouseOut={(e) => (e.target.style.backgroundColor = "red")}
          >
            Clear
          </button>
        </div>
        <h1
          style={{
            marginTop: "20px",
            fontSize: "1.5rem",
            fontWeight: "bold",
            color: "black",
          }}
        >
          {inputValue}
        </h1>
      </div>
    </>
  );
}

export default App;
