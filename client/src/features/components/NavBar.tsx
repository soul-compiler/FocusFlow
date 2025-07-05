import { NavLink } from "react-router";
import style from "./NavBar.module.css";

export default function NavBar() {
  return (
    <nav className={style.nav}>
      <NavLink
        to="/"
        className={({ isActive }) => {
          return isActive
            ? `${style.navItemActive} ${style.navItem}`
            : style.navItem;
        }}
      >
        Home
      </NavLink>
      <NavLink
        to="/register"
        className={({ isActive }) => {
          return isActive
            ? `${style.navItemActive} ${style.navItem}`
            : style.navItem;
        }}
      >
        Register
      </NavLink>
      <NavLink
        to="/login"
        className={({ isActive }) => {
          return isActive
            ? `${style.navItemActive} ${style.navItem}`
            : style.navItem;
        }}
      >
        Login
      </NavLink>
    </nav>
  );
}
