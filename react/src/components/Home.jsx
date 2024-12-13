import { Link } from "react-router-dom";
import { AppProvider } from "./useHooks//useContext";
import App from "./useHooks";
const Home = () => {
  return (
    <>
      <h1>Home</h1>
      <AppProvider>
        <App />
        {/* <Link to="/useHooks">
          <button className="bg-white rounded-2xl h-8 w-14">useHooks</button>
        </Link> */}
      </AppProvider>
    </>
  );
};

export default Home;
