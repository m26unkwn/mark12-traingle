import "./styles/global.scss";
import Routes from "./Routes";
import { NavLink, useLocation } from "react-router-dom";

function App() {
  const location = useLocation();
  return (
    <div className="wrapper">
      <div className="navbar">
        <NavLink
          to="/"
          className={`${location.pathname === "/" && "navbar-active"}`}
        >
          Is A Triangle?
        </NavLink>
        <NavLink
          to="/hypotenuse"
          className={`${
            location.pathname === "/hypotenuse" && "navbar-active"
          }`}
        >
          Calculate Hypotenuse.
        </NavLink>
        <NavLink
          to="/area"
          className={`${location.pathname === "/area" && "navbar-active"}`}
        >
          Calculate Area.
        </NavLink>
        <NavLink
          to="/triangle-quiz"
          className={`${
            location.pathname === "/triangle-quiz" && "navbar-active"
          }`}
        >
          Triangle Quiz
        </NavLink>
      </div>
      <Routes />
    </div>
  );
}

export default App;
