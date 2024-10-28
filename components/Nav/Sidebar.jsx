import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
// Assets
import CloseIcon from "../../assets/svg/CloseIcon";
import LogoIcon from "../../assets/logo.png";

export default function Sidebar({ sidebarOpen, toggleSidebar }) {
  return (
    <Wrapper className="text-white" sidebarOpen={sidebarOpen}>
      <SidebarHeader className="flexSpaceCenter">
        <div className="flexNullCenter">
          <img src={LogoIcon} alt="" style={{height:35,width:"auto"}}/>
        </div>
        <CloseBtn onClick={() => toggleSidebar(!sidebarOpen)} className="animate pointer">
          <CloseIcon />
        </CloseBtn>
      </SidebarHeader>
<div className="row">
  <div className="col">
  <UlStyle className="flexNullCenter flexColumn">
        {/* <li className="semiBold font15 pointer">
          <Link to="/CommingSoonPage" className="whiteColor">
            Sign In
          </Link>
        </li> */}
             
             <li className="semiBold font15 pointer">
          <Link to="/" className="whiteColor">
            Home
          </Link>
        </li>
        <li className="semiBold font15 pointer">
          <Link to="/aboutthecompany" className="whiteColor">
            About The Company
          </Link>
        </li>
        <li className="semiBold font15 pointer">
          <Link to="/teams" className="whiteColor">
            About The Team
          </Link>
        </li>
        <li className="semiBold font15 pointer">
          <Link to="/BookaRoom" className="whiteColor">
            Book a Room
          </Link>
        </li>
        <li className="semiBold font15 pointer">
          <Link to="/WhatWeDo" className="whiteColor">
            What We Do
          </Link>
        </li>
        <li className="semiBold font15 pointer">
          <Link to="/CommingSoonPage" className="whiteColor">
            Find Tech Talent
          </Link>
        </li>
        <li className="semiBold font15 pointer">
          <Link to="/CommingSoonPage" className="whiteColor">
            Digital Academy
          </Link>
        </li>
      </UlStyle>
  </div>
  <div className="col p-0">
  <UlStyle className="flexSpaceCenter">
        <li className="semiBold font15 pointer">
        <Link to="/CommingSoonPage" className="whiteColor" style={{ padding: "10px 30px 10px 0" }}>
        Log In
          </Link>
        </li>
        <li className="semiBold font15 pointer flexCenter">
        <Link to="/GetInTouch" className="radius8 lightBg" style={{ padding: "10px 15px" }}>
        Get in Touch
          </Link>
        </li>
      </UlStyle>
  </div>
</div>
    
     
    </Wrapper>
  );
}

const Wrapper = styled.nav`
  width: 400px;
  background-color: #008f71;
  // height: 100vh;
  position: fixed;
  top: 0;
  padding: 0 30px;
  overflow-y: scroll;
  right: ${(props) => (props.sidebarOpen ? "0px" : "-400px")};
  z-index: 9999;
  @media (max-width: 400px) {
    width: 100%;
  }
`;
const SidebarHeader = styled.div`
  padding: 20px 0;
`;
const CloseBtn = styled.button`
  border: 0px;
  outline: none;
  background-color: transparent;
  padding: 10px;
`;
const UlStyle = styled.ul`
  padding: 40px;
  li {
    margin: 20px 0;
  }
`;
