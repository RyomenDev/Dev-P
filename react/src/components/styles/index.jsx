import { Link } from "react-router-dom";
import { Outlet } from "react-router-dom";

const Styles = () => {
  return (
    <>
      <div className=" flex flex-col p-3  justify-around ">
        <h1 className="text-4xl">Styles</h1>
        <Link to="/styles/style_1">
          <button className="bg-white rounded-2xl h-8 w-14">Style_1</button>
        </Link>
        <Link to="/styles/style_2">
          <button className="bg-white rounded-2xl h-8 w-14">Style_2</button>
        </Link>
        <Outlet />
      </div>
    </>
  );
};

export default Styles;
