import { useState } from "react";

const Style_1 = () => {
  // State to manage RGB values for each div
  const [colors, setColors] = useState({
    red: "rgb(255, 0, 0)",
    green: "rgb(0, 255, 0)",
    blue: "rgb(0, 0, 255)",
  });

  // Function to generate random RGB color
  const getRandomColor = () => {
    const redValue = Math.floor(Math.random() * 256);
    const greenValue = Math.floor(Math.random() * 256);
    const blueValue = Math.floor(Math.random() * 256);
    return `rgb(${redValue}, ${greenValue}, ${blueValue})`;
  };

  // Handler to update colors
  const handleChange = () => {
    setColors({
      red: getRandomColor(),
      green: getRandomColor(),
      blue: getRandomColor(),
    });
  };

  return (
    <>
      <div
        className="flex flex-row justify-center gap-5 bg-slate-200"
        style={{ height: 200 }}
      >
        <div className="flex flex-row gap-5">
          <div className="p-5" style={{ backgroundColor: colors.red }}></div>
          <div className="p-5" style={{ backgroundColor: colors.green }}></div>
          <div className="p-5" style={{ backgroundColor: colors.blue }}></div>
        </div>
      </div>
      {/*  */}
      <div className="flex flex-col justify-center items-center h-60">
        <button
          onClick={handleChange}
          className="px-4 py-2 bg-gray-800 text-white rounded flex justify-center items-center"
        >
          Change Colors
        </button>
      </div>
    </>
  );
};

export default Style_1;
