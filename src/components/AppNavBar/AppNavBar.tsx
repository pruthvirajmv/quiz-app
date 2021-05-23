import "./appNavBar.css";
import "../../App.css";

import { NavLink } from "react-router-dom";

export function AppNavBar() {
  return (
    <>
      <nav className="nav nav-dark">
        <div>
          <NavLink end to="/home" activeClassName="active-page">
            <span>Home</span>
          </NavLink>
        </div>
        <div className="nav-list">
          <span>Highscore</span>
          <span>Standings</span>
          <i className="fa fa-user fa-lg" aria-hidden="true"></i>
        </div>
      </nav>
    </>
  );
}
