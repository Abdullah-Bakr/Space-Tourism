import React from "react";
import { useState } from "react";

import "../Styles/Components/_Tech.scss";

import img_0 from "../assets/technology/image-launch-vehicle-portrait.jpg";
import img_1 from "../assets/technology/image-spaceport-portrait.jpg";
import img_2 from "../assets/technology/image-space-capsule-portrait.jpg";
import img_3 from "../assets/technology/image-launch-vehicle-landscape.jpg";
import img_4 from "../assets/technology/image-spaceport-landscape.jpg";
import img_5 from "../assets/technology/image-space-capsule-landscape.jpg";

const TechComponent = ({ data }) => {
  const [selectedNumber, setSelectedNumber] = useState(1);

  const handleNumberClick = (number) => {
    setSelectedNumber(number);
  };

  const numberData = {
    1: {
      paragraph: data.technology[0].description,
      imageSrc: img_0,
      name: data.technology[0].name,
    },
    2: {
      paragraph: data.technology[1].description,
      imageSrc: img_1,
      name: data.technology[1].name,
    },
    3: {
      paragraph: data.technology[2].description,
      imageSrc: img_2,
      name: data.technology[2].name,
    },
  };
  const numberMobileData = {
    1: {
      paragraph: data.technology[0].description,
      imageSrc: img_3,
      name: data.technology[0].name,
    },
    2: {
      paragraph: data.technology[1].description,
      imageSrc: img_4,
      name: data.technology[1].name,
    },
    3: {
      paragraph: data.technology[2].description,
      imageSrc: img_5,
      name: data.technology[2].name,
    },
  };

  return (
    <>
      <div className="technology">
        <h2 className="header-title" style={{ color: "white" }}>
          <span>03 &nbsp;</span>S P A C E &nbsp;&nbsp;&nbsp; L A U N C
          H&nbsp;&nbsp;&nbsp; 1 0 1
        </h2>
        <div className="tech-body">
          <div className="left-two">
            <ul className="left-tech">
              {Array.from({ length: 3 }, (_, index) => (
                <li key={index} style={{ listStyle: "none" }}>
                  <button
                    onClick={() => handleNumberClick(index + 1)}
                    style={{
                      background:
                        selectedNumber === index + 1 ? "white" : "unset",
                      color: selectedNumber === index + 1 ? "black" : "unset",
                    }}
                  >
                    {index + 1}
                  </button>
                </li>
              ))}
            </ul>
            <div className={`info ${selectedNumber ? "fade-in" : ""}`}>
              <span>THE TERMINOLOGY ...</span>
              <h1>{numberData[selectedNumber].name}</h1>
              <p style={{ maxWidth: "40vw", marginRight: "50px" }}>
                {numberData[selectedNumber].paragraph}
              </p>
            </div>
          </div>

          {selectedNumber && (
            <div
              className="right-tech"
              style={{
                display: "flex",
                flexDirection: "row",
                flexWrap: "nowrap",
                alignItems: "center",
                justifyContent: "space-between",
              }}
            >
              <img
                className="desktop"
                style={{ height: "60vh" }}
                src={numberData[selectedNumber].imageSrc}
                alt={`Number ${selectedNumber}`}
              />
              <img
                className="tablet"
                src={numberMobileData[selectedNumber].imageSrc}
                alt={`Number ${selectedNumber}`}
              />
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default TechComponent;
