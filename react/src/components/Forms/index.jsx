import { Link } from "react-router-dom";
import { Outlet } from "react-router-dom";

const Forms = () => {
  return (
    <>
      <div className=" flex flex-col p-3  justify-around ">
        <h1 className="text-4xl">Forms</h1>
        <Link to="/forms/form_1">
          <button className="bg-white rounded-2xl h-8 w-14">Form_1</button>
        </Link>
        <Outlet />
      </div>
    </>
  );
};

export default Forms;
