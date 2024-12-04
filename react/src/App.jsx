// App.jsx
import React from "react";
import { RouterProvider } from "react-router-dom"; // Import RouterProvider
import { router } from "./routes";

const App = () => {
  return (
    <>
      <div>
        <RouterProvider router={router} />
      </div>
    </>
  );
};

export default App;
