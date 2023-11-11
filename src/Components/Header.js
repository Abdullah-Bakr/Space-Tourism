import { Link } from "react-router-dom";
import "../Styles/Components/_App.scss";
import { useState } from "react";

function Header({ currentRoute }) {
  const [showMenu, setShowMenu] = useState(false);
  return (
    <header className="header">
      <div className="left-header">
        <img src="/starter-code/assets/shared/logo.svg" alt="" />
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
          src="/starter-code/assets/shared/icon-hamburger.svg"
          alt=""
        />
        {showMenu ? (
          <div className="hamburger">
            <img
              onClick={() => setShowMenu(false)}
              className="close"
              src="/starter-code/assets/shared/icon-close.svg"
              alt=""
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
