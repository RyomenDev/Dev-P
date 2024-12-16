import { Link } from "react-router-dom";
import { AppProvider } from "./useHooks//useContext";
import App from "./useHooks";
// import { TodoApp } from "./todoApp/TodoApp";
const Home = () => {
  return (
    <>
      <h1 className="w-full flex justify-center text-blue-700">Home</h1>
      <AppProvider>
        {/* <TodoApp /> */}
        <div className="w-full flex justify-center ">
          <Link to="/todoApp">
            <button className="bg-white rounded-2xl h-8 w-14 px-20 flex justify-center border-4 m-4">
              TodosApp
            </button>
          </Link>
        </div>
        <App />
        {/* <Link to="/useHooks">
          <button className="bg-white rounded-2xl h-8 w-14">useHooks</button>
        </Link> */}
      </AppProvider>
    </>
  );
};

export default Home;
