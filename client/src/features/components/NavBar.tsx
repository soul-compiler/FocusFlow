import { NavLink } from "react-router";
import style from "./NavBar.module.css";
import { eraseCookies } from "../../lib/getCookie";

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
          <a
            className={`${style.navItem}`}
            onClick={() => {
              eraseCookies("jwtToken");
              console.log("Hola");
            }}
          >
            Logout
          </a>
        </>
      )}
    </nav>
  );
}
