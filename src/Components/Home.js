import React from "react";
import "../Styles/Components/_Home.scss";
import { Link } from "react-router-dom";

function Home() {
  return (
    <div className="home wrapper">
      <div className="text">
        <h4>SO, YOU WANT TO TRAVEL TO</h4>
        <h1>SPACE</h1>
        <p>
          Let’s face it; if you want to go to space, you might as well genuinely
          go to outer space and not hover kind of on the edge of it. Well sit
          back, and relax because we’ll give you a truly out of this world
          experience!
        </p>
      </div>
      <div className="exp">
        <Link to="/destination">
          <span>E X P L O R E</span>
        </Link>
      </div>
    </div>
  );
}

export default Home;
