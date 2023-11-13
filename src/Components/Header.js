import { Link } from "react-router-dom";
import "../Styles/Components/_App.scss";
import { useState } from "react";
import logo from "../assets/shared/logo.svg";
import menuOpen from "../assets/shared/icon-hamburger.svg";
import close from "../assets/shared/icon-close.svg";

function Header({ currentRoute }) {
  const [showMenu, setShowMenu] = useState(false);

  return (
    <header className="header">
      <div className="left-header">
        <img src={logo} alt="" />
        <hr />
      </div>
      <div className="right-header">
        <nav>
          <ul>
            <li>
              <Link
                to="/"
                style={
                  currentRoute === ""
                    ? { borderBottom: "2px solid white" }
                    : { borderBottom: "2px solid transparent" }
                }
              >
                <strong>0 0&nbsp;&nbsp;</strong> H O M E
              </Link>
            </li>
            <li>
              <Link
                to="/destination"
                style={
                  currentRoute === "destination"
                    ? { borderBottom: "2px solid white" }
                    : { borderBottom: "2px solid transparent" }
                }
              >
                <strong>0 1&nbsp;&nbsp;</strong> D E S T I N A T I O N
              </Link>
            </li>
            <li>
              <Link
                to="/crew"
                style={
                  currentRoute === "crew"
                    ? { borderBottom: "2px solid white" }
                    : { borderBottom: "2px solid transparent" }
                }
              >
                <strong>0 2&nbsp;&nbsp;</strong>C R E W
              </Link>
            </li>
            <li>
              <Link
                to="/technology"
                style={
                  currentRoute === "technology"
                    ? { borderBottom: "2px solid white" }
                    : { borderBottom: "2px solid transparent" }
                }
              >
                <strong>0 3&nbsp;&nbsp;</strong>T E C H N O L O G Y
              </Link>
            </li>
          </ul>
        </nav>
      </div>

      <div className="menu mobile">
        <img
          onClick={() => setShowMenu(!showMenu)}
          className="open"
          src={menuOpen}
          alt="burger-menu"
        />
        {showMenu ? (
          <div className={`hamburger ${showMenu ? "opening" : ""}`}>
            <img
              onClick={() => setShowMenu(false)}
              className="close"
              src={close}
              alt="close-icon"
            />
            <ul>
              <li>
                <Link
                  to="/"
                  style={
                    currentRoute === ""
                      ? { borderBottom: "2px solid white" }
                      : { borderBottom: "2px solid transparent" }
                  }
                >
                  H O M E
                </Link>
              </li>
              <li>
                <Link
                  to="/destination"
                  style={
                    currentRoute === "destination"
                      ? { borderBottom: "2px solid white" }
                      : { borderBottom: "2px solid transparent" }
                  }
                >
                  D E S T I N A T I O N
                </Link>
              </li>
              <li>
                <Link
                  to="/crew"
                  style={
                    currentRoute === "crew"
                      ? { borderBottom: "2px solid white" }
                      : { borderBottom: "2px solid transparent" }
                  }
                >
                  C R E W
                </Link>
              </li>
              <li>
                <Link
                  to="/technology"
                  style={
                    currentRoute === "technology"
                      ? { borderBottom: "2px solid white" }
                      : { borderBottom: "2px solid transparent" }
                  }
                >
                  T E C H N O L O G Y
                </Link>
              </li>
            </ul>
          </div>
        ) : null}
      </div>
    </header>
  );
}

export default Header;
