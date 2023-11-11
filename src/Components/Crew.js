import React, { useEffect } from "react";
import "@glidejs/glide/src/assets/sass/glide.core.scss";
import Glide from "@glidejs/glide";

import "../Styles/Components/_Crew.scss";

// Import my images
import img_0 from "../assets/crew/image-douglas-hurley.png";
import img_1 from "../assets/crew/image-mark-shuttleworth.png";
import img_2 from "../assets/crew/image-victor-glover.png";
import img_3 from "../assets/crew/image-anousheh-ansari.png";

function Crew({ data }) {
  useEffect(() => {
    const glide = new Glide(".glide", {
      type: "carousel",
      perView: 1,
    });

    glide.mount();

    return () => {
      glide.destroy();
    };
  }, []);

  const imgIndex = (index) => {
    switch (index) {
      case 0:
        return img_0;
      case 1:
        return img_1;
      case 2:
        return img_2;
      case 3:
        return img_3;
      default:
        return false;
    }
  };
  return (
    <div className="crew wrapper">
      <div className="glide">
        <div className="glide__track" data-glide-el="track">
          <ul className="glide__slides">
            {data.crew.map((item, index) => (
              <li className="glide__slide" key={index}>
                <div className="content crew">
                  <div className="title-img">
                    <h1>
                      <span>0 2 </span> M E E T &nbsp;&nbsp;&nbsp;Y O U R
                      &nbsp;&nbsp;&nbsp;C R E W
                    </h1>
                    <div className="img-mobile">
                      <img src={imgIndex(index)} alt="" />
                    </div>
                    <div className="header-slider">
                      <h2>{item.role.toUpperCase()}</h2>
                    </div>
                    <div className="slider">
                      <div className="content-slider">
                        <h1>{item.name.toUpperCase()}</h1>
                        <p>{item.bio}</p>
                        <div className="mobile-slider-header">
                          <h2>{item.role.toUpperCase()}</h2>
                          <h3>{item.name.toUpperCase()}</h3>
                        </div>
                        <div className="bullets" data-glide-el="controls[nav]">
                          <button data-glide-dir="=0"></button>
                          <button data-glide-dir="=1"></button>
                          <button data-glide-dir="=2"></button>
                          <button data-glide-dir="=3"></button>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="wrapper-slider">
                    <img src={imgIndex(index)} alt={item.name} />
                  </div>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Crew;
