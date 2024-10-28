



import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { Link, NavLink } from "react-router-dom";
import Sidebar from "../Nav/Sidebar";
import Backdrop from "../Elements/Backdrop";
import Logo from "../../assets/logo.png";
import BurgerIcon from "../../assets/svg/BurgerIcon";
import { useNavigate } from "react-router-dom";
import QRTopNav from '../../assets/QRTopNav.png'
import Androi_QR from '../../assets/Android.png'
import IOS_QR from '../../assets/IOS.png'
import { Tooltip, tooltipClasses, TooltipProps } from "@mui/material";
import { blue } from "@mui/material/colors";

export default function TopNavbar() {
  const navigate = useNavigate();
  const [y, setY] = useState(window.scrollY);
  const [sidebarOpen, toggleSidebar] = useState(false);
  const [hoveredIndex, setHoveredIndex] = useState(null); // State for hover
  const [dropdownOpen, setDropdownOpen] = useState(false); // State for dropdown

  useEffect(() => {
    window.addEventListener("scroll", () => setY(window.scrollY));
    return () => {
      window.removeEventListener("scroll", () => setY(window.scrollY));
    };
  }, [y]);

  const handleMouseEnter = (index) => {
    setHoveredIndex(index);
  };

  const handleMouseLeave = () => {
    setHoveredIndex(null);
  };

  const toggleDropdown = () => {
    setDropdownOpen(!dropdownOpen);
  };

  const LightTooltip = styled(({ className, ...props }) => (
    <Tooltip {...props} classes={{ popper: className }} />
  ))(() => ({
    [`& .${tooltipClasses.tooltip}`]: {
      backgroundColor: 'rgb(236, 246, 244)',
      color: '#008f71',
      border: '1px solid #008f71',
    },
    [`& .${tooltipClasses.arrow}`]: {
      color: 'rgb(236, 246, 244)',
      color: '#008f71',
      top: '25px'
    },
  }));

  const links = [
    { to: "/WhatWeDo", text: "About us" },
    { to: "/BookaRoom", text: "Services" },
    { to: "/CorporateTrainings", text: "Career" },
    { to: "/", text: "Blog"},
    { to: "/", text: "Contact us"},
  ];
 
 

  return (
    <>
      <Sidebar sidebarOpen={sidebarOpen} toggleSidebar={toggleSidebar} />
      {sidebarOpen && <Backdrop toggleSidebar={toggleSidebar} />}
      <div className="d-flex justify-content-center justify-content-md-between align-items-center py-3 px-md-5 px-2 "
        style={{ backgroundColor: '#d5d0ef' }}>
        <div className="row" style={{ backgroundColor: '#d5d0ef' }}>
          <div className="col-8 pl-5">
            <Link className="pointer" to={"/"} smooth={true}>
              <img src={Logo} className="" alt="" srcSet="" style={{ width: '75%', height: 'auto' }} />
            </Link>
          </div>
          <div className="col-2"></div>
          <div className="col-2 d-flex justify-content-center p-0 align-items-center">
            <BurderWrapper className="pointer p-0" onClick={() => toggleSidebar(!sidebarOpen)}>
              <BurgerIcon className="p-0 " />
            </BurderWrapper>
          </div>
        </div>
        <div className="d-flex"  style={{ backgroundColor: '#d5d0ef'  }}>
          <UlWrapper className="flexNullCenter header_menu " style={{gap: "79px"}}>
            {links.slice().map((link, index) => (
              <li key={index} className=" pointer ">
                <NavLink
                
                  to={link.to}
                  spy={true}
                  smooth={true}
               
                  // onMouseEnter={() => handleMouseEnter(index + 3)}
                  // onMouseLeave={handleMouseLeave}
                >
                  <span
                  style={{ backgroundColor: '#d5d0ef',
                    fontSize: '30'
                   }}
                    className="animated_link"
                    // style={{
                    //   color: hoveredIndex === index + 3 ? '#000000' : hoveredIndex !== null ? '#808080' : '#000000',
                    // }}
                  >
                    {link.text}
                  </span>
                </NavLink>
              </li>
            ))}
          </UlWrapper>
        </div>
      </div>
    </>
  );
}

// Add your styled-components here
const BurderWrapper = styled.button`
  outline: none;
  border: 0px;
  background-color: transparent;
  height: 100%;
  padding: 0 15px;
  display: none;
  @media (max-width: 760px) {
    display: block;
  }
`;

const UlWrapper = styled.ul`
  display: flex;
  @media (max-width: 760px) {
    display: none;
  }
`;

const UlWrapperRight = styled.ul`
  @media (max-width: 760px) {
    display: none;
  }
`;






