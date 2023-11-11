import React, { useEffect } from "react";
import "@glidejs/glide/src/assets/sass/glide.core.scss";
import Glide from "@glidejs/glide";

import "../Styles/Components/_Destination.scss";

// Import my images
import img_0 from "../assets/destination/image-moon.png";
import img_1 from "../assets/destination/image-mars.png";
import img_2 from "../assets/destination/image-europa.png";
import img_3 from "../assets/destination/image-titan.png";

function Destination({ data }) {
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
        return img_0;
    }
  };

  return (
    <div className="destination wrapper">
      <div className="glide">
        <div className="glide__track" data-glide-el="track">
          <ul className="glide__slides">
            {data.destinations.map((item, index) => (
              <li className="glide_slide" key={index}>
                <div className="content destin">
                  <div className="title-img">
                    <h1>
                      <span>0 1 </span> P I C K&nbsp;&nbsp;&nbsp;Y O U
                      R&nbsp;&nbsp;&nbsp;D E S T I N A T I O N
                    </h1>
                    <img src={imgIndex(index)} alt={item.name} />
                  </div>
                  <div className="wrapper-slider">
                    <div
                      className="header-slider"
                      data-glide-el="controls[nav]"
                    >
                      {data.destinations.map((dest, idx) => (
                        <button key={idx} data-glide-dir={`=${idx}`}>
                          {dest.name.toUpperCase()}
                        </button>
                      ))}
                    </div>
                    <div className="slider">
                      <div className="content-slider">
                        <h1>{item.name.toUpperCase()}</h1>
                        <p>{item.description}</p>
                        <hr />
                        <div className="info-slider">
                          <div className="info-box">
                            <h2>AVG. DISTANCE</h2>
                            <span>{item.distance.toUpperCase()}</span>
                          </div>
                          <div className="info-box">
                            <h2>EST. TRAVEL TIME</h2>
                            <span>{item.travel.toUpperCase()}</span>
                          </div>
                        </div>
                      </div>
                    </div>
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

export default Destination;
