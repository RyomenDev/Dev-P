import { useState, useEffect } from "react";

const Style_1 = () => {
  const [height, setHeight] = useState({
    red: 100,
    green: 100,
    blue: 100,
  });

  useEffect(() => {
    const interval = setInterval(() => {
      setHeight((prevHeight) => ({
        red: Math.floor(Math.random() * 81) + 20, // Between 20% and 100%
        green: Math.floor(Math.random() * 81) + 20,
        blue: Math.floor(Math.random() * 81) + 20,
      }));
    }, 1000);
    // Clear the interval when component unmounts
    return () => clearInterval(interval);
  }, []);

  console.table(height.red, height.blue, height.green);

  return (
    <>
      <div className="flex flex-row gap-2 h-60 w-auto justify-center bg-slate-200 transform -rotate-180 ">
        <div
          className="bg-red-500 p-5 border-s-4-black rounded-xl"
          style={{ height: `${height.red}%` }}
        ></div>
        <div
          className="bg-green-500 p-5 rounded-xl"
          style={{ height: `${height.green}%` }}
        ></div>
        <div
          className="bg-blue-500 p-5 rounded-xl"
          style={{ height: `${height.blue}%` }}
        ></div>
      </div>
    </>
  );
};

export default Style_1;
