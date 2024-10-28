import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import cardImage1 from "../../../assets/hero/hero1.png";
import cardImage2 from "../../../assets/hero/hero2.png";
import svg1 from "../../../assets/hero/hero1.svg";
import svg2 from "../../../assets/hero/hero2.svg";
import svg3 from "../../../assets/hero/hero3.svg";
import svg4 from "../../../assets/hero/hero4.svg";

const Hero = () => {
  const navigate = useNavigate();
  const [activeCard, setActiveCard] = useState(null); // Tracks the active card
  const cardData = [
    {
      src: cardImage1,
      svgpicture: svg1,
      title: "Suite Placement Services",
      longText:
        "We connect you with top-tier executives who drive strategic growth. Our focus is on finding leadership that aligns with your vision and goals",
    },
    {
      src: cardImage2,
      svgpicture: svg2,
      title: "Learning & Development",
      longText:
        "We offer tailored training programs to enhance employee skills and foster professional growth. Empower your teams to achieve their full potential",
    },
    {
      src: cardImage1,
      svgpicture: svg3,
      title: "Recruitment Search",
      longText:
        "Our recruitment experts find the right talent to meet your business needs. We ensure a seamless process from sourcing to onboarding",
    },
    {
      src: cardImage1,
      svgpicture: svg4,
      title: "Staff Outsourcing",
      longText:
        "We provide flexible staffing solutions to manage your workforce efficiently. From temporary to permanent, we ensure the right fit for your organization",
    },
  ];

  const handleExpandClick = (index) => {
    setActiveCard((prev) => (prev === index ? null : index)); // Toggle between expanded and collapsed
  };

  
  return (
    <div
      className="container-fluid"
      style={{ padding: 0, backgroundColor: "#d5d0ef" }}
    >
      <div
        className="mx-lg-4 p-5"
        style={{
          backgroundColor: "#F8F8F4",
          padding: "60px",
          borderRadius: "0 0 50px 50px",
          position: "relative",
          zIndex: 1,
          paddingTop: 35,
        }}
      >
        <div className="row  mb-5 d-flex justify-content-start">
          <div className="col-12 col-md-6  d-flex text-center text-md-left align-items-start">
            <div className="row pl-5 align-items-start">
              <h1
                className="orange-color slide-in"
                style={{
                  fontFamily: "Barlow, sans-serif",
                  fontWeight: 700,
                  marginBottom: 0,
                }}
              >
                Our Services
              </h1>
              <h1 className="my-2 slide-in" style={{ lineHeight: 1.5 }}>
                Complete Workforce Solutions:
                <br />
                Hire, Vet, and Grow
              </h1>
            </div>
          </div>
          <div className="col-12 col-md-6 d-flex justify-content-center align-items-start">
            <p
              className="text-center slide-in font18"
              style={{
                fontFamily: "Barlow, sans-serif",
                fontWeight: 400,
                color: "#1C1C1C",
              }}
            >
              Our dedication is to cultivate strategic human acumen, nurturing
              professional competence to unlock individual potential. We empower
              employees to climb their chosen ladders through career development
              programs and initiatives.
            </p>
          </div>
        </div>

        {/* Cards Row */}
        <div className="row pt-sm-4 d-flex justify-content-center">
          {cardData.map((card, index) => (
            <div
              key={index}
              className="col-lg-3 col-md-4 col-sm-6 col-12 mb-5 d-flex justify-content-center"
            >
              <div
                className="card"
                style={{
                  width: "350px",
                  borderRadius: "40px 40px 0px 0px",
                  overflow: "hidden",
                  backgroundColor: "#F8F8F4",
                  position: "relative",
                }}
              >
                <img
                  className="card-img-top"
                  src={card.src}
                  alt={card.title}
                  style={{ width: "100%" }}
                />

                <div
                  style={{
                    position: "absolute",
                    top: "80px",
                    right: "19px",
                    width: "90px",
                    height: "90px",
                    backgroundColor: "#FFFFFF",
                    borderRadius: "20px",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                >
                  <img
                    src={card.svgpicture}
                    alt="Services Icon"
                    style={{
                      width: "63px",
                      height: "150px",
                    }}
                  />
                </div>

                <div
                  className="card-body"
                  style={{ height: "40%", backgroundColor: "#efddc7" }}
                >
                  <h5
                    className="card-title font18 mt-5 text-center"
                    style={{ color: "#7A490C" }}
                  >
                    {card.title}
                  </h5>

                  {/* Conditionally render the longText with max height when expanded */}
                  <div
                    className={`card-text ${activeCard === index ? "expanded" : ""
                      }`}
                    style={{
                      maxHeight: activeCard === index ? "150px" : "0", // Toggle height
                      overflow: "hidden",
                      transition: "max-height 0.3s ease",
                      paddingTop: activeCard === index ? "12px" : "0",
                      paddingLeft: activeCard === index ? "20px" : "0",
                      fontSize: "20px",
                      fontWeight: "400",
                      fontFamily: "Open Sans, sans-serif",
                      color: "#7A490C",
                      textAlign: "center",
                    }}
                  >
                    {card.longText}
                  </div>

                  {/* READ MORE link with an arrow, positioned at the bottom right */}
                  <div
                    style={{
                      position: "",
                      bottom: "10px",
                      right: "10px",
                      cursor: "pointer",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "end",
                    }}
                    onClick={() => handleExpandClick(index)} // Toggle expand/collapse
                  >
                    <p
                      className="font14 my-2"
                      style={{
                        color: "#7A490C",
                        textUnderlineOffset: "4px",
                        textDecoration: "underline",
                      }}
                    >
                      READ MORE{" "}
                      <span
                        style={{
                          display: "inline-block", // Ensure the element can rotate
                          fontSize: "16px",
                          fontWeight: "bold",
                          color: "#7A490C",
                          transform: activeCard === index ? "rotate(20deg)" : "rotate(-46deg)", // Rotate the element
                          transition: "transform 0.3s ease", // Smooth rotation animation
                        }}
                      >
                        {activeCard === index ? "↑" : "↓"}
                      </span>
                    </p>

                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
   
    </div>
  );
};

export default Hero;
