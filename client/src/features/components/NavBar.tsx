import { NavLink, useNavigate } from "react-router";
import style from "./NavBar.module.css";
import { eraseCookies } from "../../lib/getCookie";

export default function NavBar(props: { isLogged: boolean }) {
  const navigator = useNavigate();
  return (
    <nav className={style.nav}>
      <div>
        <NavLink to="/" className={style.navTitle}>
          FocusFlow
        </NavLink>
      </div>
      <div className={style.navLinks}>
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
              to="/"
              className={({ isActive }) => {
                return isActive
                  ? `${style.navItemActive} ${style.navItem}`
                  : style.navItem;
              }}
            >
              Home
            </NavLink>
            <a
              className={`${style.navItem}`}
              onClick={() => {
                eraseCookies("jwtToken");
                navigator("/login");
              }}
            >
              Logout
            </a>
          </>
        )}
      </div>
    </nav>
  );
}
