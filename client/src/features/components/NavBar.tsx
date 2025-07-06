import { NavLink } from "react-router";
import style from "./NavBar.module.css";

export default function NavBar(props: { isLogged: boolean }) {
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
      {!props.isLogged ? (
        <>
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
        </>
      ) : (
        <>
          <NavLink
            to="/logout"
            className={({ isActive }) => {
              return isActive
                ? `${style.navItemActive} ${style.navItem}`
                : style.navItem;
            }}
          >
            Logout
          </NavLink>
        </>
      )}
    </nav>
  );
}
