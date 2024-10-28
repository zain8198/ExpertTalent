import React from 'react';
import style from "./style.module.css";
import footerlogo from "../../../assets/footerlogo.png";
import Minar from "../../../assets/minar.png";
import Map from "../../../assets/map.png";
import PhoneIcon from "../../../assets/PhoneIcon.png";
import pakistanIcon from "../../../assets/pakistanIcon.png";
import mosqueIcon from "../../../assets/mosqueIcon.png";
import wmap from "../../../assets/wmap.png";
import FedumanLogo from "../../../assets/FeduManLogo.png";
import GetitonIcon from '../../../assets/GetitonIcon.png';
import apple_playstore from "../../../assets/apple_playstore.jpg"

const Footer = () => {
    const { footer_container, containerOne, containerOnePiece, containerTwo } = style;
    const socialLinks = [{
        platform: "Facebook",
        link: "https://www.facebook.com/share/DuezdWqvykpw5pyM/?mibextid=LQQJ4d"
    }
        , {
        platform: "Youtube",
        link: "https://youtu.be/pouatBcg9FA?si=5avikfgrnWtSHWyd"
    },
    {
        platform: "Instagram",
        link: "https://www.instagram.com/ashrei.tech?igsh=MXJueWVmbXh5M2l1YQ=="
    }
        , {
        platform: "LinkedIn",
        link: "https://www.linkedin.com/company/ashrei-tech/"
    },]

    const linkOne = [
        { name: "Customer Support", url: "/#/aboutthecompany" },
        { name: "Contact Us", url: "/#/teams" },
        { name: "Terms & Conditions", url: "/#/BookaRoom" },
        { name: "Privacy Policy", url: "/#/CorporateTrainings" }
    ];
    const linkTwo = [
        { name: "About Us", url: "/#/GetInTouch" },
        { name: "Services", url: "/#/CommingSoonPage" },
        { name: "Career", url: "/#/CommingSoonPage" },
        { name: "Blog", url: "/#/WhatWeDo" }
    ];

    return (
        <div className={`${footer_container} container-fluid  px-3 px-md-3 px-lg-5  pt-0 pt-md-5 pb-2`} style={{ backgroundColor: "#F8F8F4" }}>
            <div className="row px-0 px-md- py-0  " >
                <div className="col-lg-6 col-md-6 col-sm-12 " >
                    <div className="row pb-4 mb-4  pl-0 pl-lg-3 d-flex justify-content-center justify-content-lg-start" >
                        <img src={footerlogo} alt="Talent Expert" className=" pt-lg-0" />
                    </div>
                    <div className="row  justify-content-center justify-content-lg-start d-none d-md-flex">
                        <div className="col-4 ">
                            <ul>
                                {linkOne.map((link, index) => (
                                    <li key={index} className="pb-3">
                                        <a href={link.url} style={{ color: '#160A54' }}>{link.name}</a>
                                    </li>
                                ))}
                            </ul>
                        </div>
                        <div className="col-3 ">
                            <ul>
                                {linkTwo.map((link, index) => (
                                    <li key={index} className="pb-3">
                                        <a href={link.url} style={{ color: '#160A54' }}>{link.name}</a>
                                    </li>
                                ))}
                            </ul>
                        </div>
                        <div className="col-4 ">
                            <ul>
                                {socialLinks.map(({ platform, link, }, index) => (
                                    <li key={index} className="pb-3">

                                        <a href={link} style={{ color: "#160A54" }} target='_blank'>
                                            <i className={`fab fa-${platform.toLowerCase()} mr-3`} style={{ color: '#160A54' }}></i>
                                            {platform}
                                        </a>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                    <div className="row d-flex justify-content-center justify-content-lg-start  d-md-none">
                        <div className="col-4">
                            <ul>
                                {linkOne.map((link, index) => (
                                    <li key={index} className="pb-3">
                                        <a href={link.url} style={{ color: '#160A54' }}>{link.name}</a>
                                    </li>
                                ))}

                            </ul>
                        </div>
                        <div className="col-4">
                            <ul>
                                {linkTwo.map((link, index) => (
                                    <li key={index} className="pb-3">
                                        <a href={link.url} style={{ color: '#160A54' }}>{link.name}</a>
                                    </li>
                                ))}
                            </ul>
                        </div>
                        <div className="col-4">
                            <ul>
                                {socialLinks.map(({ platform, link, }, index) => (
                                    <li key={index} className="pb-3">

                                        <a href={link} style={{ color: "#160A54" }} target='_blank' >
                                            <i className={`fab fa-${platform.toLowerCase()} mr-2`} style={{ color: '#160A54' }}></i>
                                            {platform}
                                        </a>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </div>
                <div className="col-lg-6 col-md-6 col-sm-12 px-5 px-md-0 "
                    style={{
                        backgroundImage: `url(${wmap})`,
                        backgroundRepeat: 'no-repeat',
                        backgroundSize: 'cover',
                        backgroundPosition: 'top center',
                        width: '100%',
                        height: 'auto',

                    }}
                >
                    <div className='row'>
                        <div className='col-lg-12 mt-3 text-center text-md-left px-2' style={{ color: "#160A54" }}><h3>Our Branches</h3></div>
                    </div>
                    <div className="row p-0" style={{ color: "#160A54" }}>
                        <div className="col-12 col-md-4 my-4" >
                            <div className="row align-items-baseline">
                                <div className="col-2 p d-flex justify-content-center align-items-start"><img src={Minar} alt="minar" className="" style={{ height: "31px" }} /></div>
                                <div className="col-10" style={{ color: "#160A54" }}><h6>1st Branch</h6></div>
                            </div>
                            <div className="row my-3 align-items-baseline">
                                <div className="col-2 d-flex justify-content-center align-items-start"><img src={Map} alt="Map" className="" style={{ height: "17px" }} /></div>
                                <div className="col-10 font15"> <div style={{ color: "#160A54" }}>
                                    House No A-201 SMCHS Block A  Karachi
                                </div></div>
                            </div>
                            <div className="row ">
                                <div className="col-2 d-flex justify-content-center align-items-center"><img src={PhoneIcon} alt="PhoneIcon" className="" style={{ height: "17px" }} /></div>
                                <div className="col-10 font15"> <div style={{ color: "#160A54" }}>   03xxxxxxxxx</div></div>
                            </div>
                        </div>
                        <div className="col-12 col-md-4 my-4">
                            <div className="row align-items-baseline">
                                <div className="col-2 d-flex justify-content-center align-items-start"><img src={pakistanIcon} alt="minar" className="" style={{ height: "31px" }} /></div>
                                <div className="col-10 "><h6>2st Branch</h6></div>
                            </div>
                            <div className="row my-3 align-items-baseline">
                                <div className="col-2 d-flex justify-content-center align-items-start"><img src={Map} alt="Map" className="" style={{ height: "17px" }} /></div>
                                <div className="col-10 font15"> <div> NASTP Building, Main Shahrah-e-Faisal Rd,  Karachi</div></div>
                            </div>
                            <div className="row ">
                                <div className="col-2 d-flex justify-content-center align-items-center"><img src={PhoneIcon} alt="PhoneIcon" className="" style={{ height: "17px" }} /></div>
                                <div className="col-10 font15"> <div>03332775771</div></div>
                            </div>
                        </div>
                        {/* <div className="col-12 col-md-4 my-4">
                            <div className="row align-items-baseline">
                                <div className="col-2 d-flex justify-content-center align-items-start"><img src={mosqueIcon} alt="minar" className="" style={{ height: "31px" }} /></div>
                                <div className="col-10"><div>Islamabad</div></div>
                            </div>
                            <div className="row my-3 align-items-baseline">
                                <div className="col-2 d-flex justify-content-center align-items-start"><img src={Map} alt="Map" className="" style={{ height: "17px" }} /></div>
                                <div className="col-10 font15"> <div>
                                    NASTP Alpha, Main Terminal Complex, Chaklala Cantt.
                                </div></div>
                            </div>
                            <div className="row">
                                <div className="col-2 d-flex justify-content-center align-items-center"><img src={PhoneIcon} alt="PhoneIcon" className="" style={{ height: "17px" }} /></div>
                                <div className="col-10 font15"> <div>03004406163</div></div>
                            </div>
                        </div> */}
                    </div>
                    <div className="row " style={{ color: "#160A54"}}>
                        <div className="col-12 col-md-4 p-0" >
                            <h5 className='text-start' style={{ color: "#160A54", paddingTop: "8px",  }}>Newsletter Sign Up</h5>

                        </div>
                        <div className="col-12 col-md-8">
                            <div className="input-group" style={{
                                maxWidth: '450px',
                                border: '2px solid #160A54', // Border color and thickness
                                borderRadius: '50px',// Match border radius with the input group
                                overflow: 'hidden' // Prevents corners from showing sharp edges
                            }}>
                                <input
                                    type="email"
                                    className="form-control"
                                    placeholder="Enter your email here..."
                                    aria-label="Email"
                                    required
                                    style={{ border: 'none', color: "#160A54", fontSize: "15px", }} // Remove default input border
                                />
                                <button
                                    className="btn "
                                    type="button"
                                    style={{
                                        fontSize: "11px",
                                        backgroundColor: "#160A54",
                                        margin: "5px",
                                        padding: '4px 20px',
                                        color: "white",
                                        borderRadius: '50px' // Match border radius with the input group
                                    }}>
                                    Submit
                                </button>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
            {/* <div className="container-fluid p-0 my-5 my-md-0">
                <div className="row p-0">
                    <div className="col-6 d-none d-md-block">
                        <a href="https://play.google.com/store/apps/details?id=com.ashreitechapp&pcampaignid=web_share" target="_blank" rel="noopener noreferrer">
                            <img src={GetitonIcon} alt="" style={{ height: 31, marginRight: 16 }} />
                        </a>
                        <a href="https://apps.apple.com/pk/app/ashreitech/id6466579678" target="_blank" rel="noopener noreferrer">
                            <img src={apple_playstore} alt="" srcset="" style={{ height: 31 ,borderRadius:4}} />
                        </a>

                    </div>
                    <div className="col-12 col-md-6  d-flex justify-content-center justify-content-md-end align-items-center ">
                        <h3 className='text-center text-md-left d-flex flex-column flex-md-row justify-content-md-end align-items-center font15'>POWERED <br className='d-block d-md-none' /> BY <br className='d-block d-md-none' /><img src={FedumanLogo} alt="" className='ml-md-3 mx-0' style={{ width: '35%', height: 'auto' }} /> </h3>
                    </div>
                </div>
            </div> */}


            {/* <div className="container-fluid p-4">
                <div className="row justify-content-center align-items-center">
               
                    <div className="col-md-12 d-flex justify-content-center">
                    <h5 className='pr-5  text-center' style={{color :"#160A54", paddingTop:"8px"}}>Newsletter Sign Up</h5>

                        <div className="input-group" style={{
                            maxWidth: '600px',
                            // maxHeight :"70px",
                            // height: "70px",
                            border: '2px solid #160A54', // Border color and thickness
                                    borderRadius: '50px' ,// Match border radius with the input group
                            overflow: 'hidden' // Prevents corners from showing sharp edges
                        }}>
                            <input
                                type="email"
                                className="form-control"
                                placeholder="Enter your email here..."
                                aria-label="Email"
                                required
                                style={{ border: 'none', color:"#160A54" ,  fontSize:"16px",}} // Remove default input border
                            />
                            <button
                                className="btn "
                                type="button"
                                style={{
                                    fontSize:"11px",
                                    backgroundColor :"#160A54",
                                    margin:"6px",
                                    padding: '5px 20px',
                                    color:"white",
                                    borderRadius: '50px' // Match border radius with the input group
                                }}>
                                Submit
                            </button>
                        </div>
                    </div>
                </div>
            </div> */}
            {/* <div className="container-fluid pr-5">
                <div className="row justify-content-end">
                    <div className="col-12 d-flex justify-content-end pr-4">
                        <hr
                            style={{
                                color: "#160A54",
                                background: "#160A54",
                                width: "30%",
                                margin: "0" // Remove default margin
                            }}
                            className="p-0"
                        />
                    </div>
                </div>

                <div className="row d-flex justify-content-end mt-3"> 
                    <div className="col-12 col-md-6 d-flex justify-content-end justify-content-md-end">
                        <ul style={{ listStyle: 'none', padding: 0 }}> 
                            <li style={{ display: 'flex', alignItems: 'end' }}>
                                
                                <i className="fa-solid fa-circle p-2" style={{ color: '#160A54', fontSize: '24px' }}></i>
                                <i className="fa-solid fa-circle p-2" style={{ color: '#160A54', fontSize: '24px' }}></i>
                                <i className="fa-solid fa-circle p-2" style={{ color: '#160A54', fontSize: '24px' }}></i>
                                <i className="fa-solid fa-circle p-2" style={{ color: '#160A54', fontSize: '24px' }}></i>
                            </li>
                        </ul>
                    </div>
                </div>


            </div> */}

        </div>
    );
}

export default Footer;
