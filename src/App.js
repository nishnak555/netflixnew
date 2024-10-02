import logo from "./logo.svg";
import "./App.css";
import { useRoutes } from "react-router-dom";
import CustomButton from "./components/button";
import ROUTES from "./utils/routes";

function App() {
  const routes = useRoutes([
    {
      path: ROUTES.BUTTON,
      element: <CustomButton />,
    },
  ]);
  return routes;
}

export default App;
