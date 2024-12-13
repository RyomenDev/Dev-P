import {
  createBrowserRouter,
  Route,
  createRoutesFromElements,
} from "react-router-dom";

import Layout from "../Layout";
import Home from "../components/Home";
import Login from "../components/Login";

// import App from "../components/useHooks";

import Forms from "../components/Forms";
import Form_1 from "../components/Forms/Form_1";

import Styles from "../components/styles";
import Style_1 from "../components/styles/Style_1";
import Style_2 from "../components/styles/Style_2";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Layout />}>
      <Route index element={<Home />} />
      {/* <Route path="/useHooks" element={<App />} /> */}
      <Route path="login" element={<Login />} />
      <Route path="logout" element={<Login />} />
      <Route path="forms" element={<Forms />}>
        <Route path="form_1" element={<Form_1 />} />
      </Route>
      <Route path="styles" element={<Styles />}>
        <Route path="style_1" element={<Style_1 />} />
        <Route path="style_2" element={<Style_2 />} />
      </Route>
    </Route>
  )
);

export { router };
