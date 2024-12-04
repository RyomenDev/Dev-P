import { Link } from "react-router-dom";

const Header = () => {
  return (
    <>
      <div className="bg-slate-300 flex flex-auto p-3  justify-around ">
        <h1 className="text-4xl">Learning Zone</h1>
        <Link to="/forms">
          <button className="bg-white rounded-2xl h-8 w-14">Form</button>
        </Link>
        <Link to="/styles">
          <button className="bg-white rounded-2xl h-8 w-14">Styles</button>
        </Link>
      </div>
    </>
  );
};

export default Header;
