// // import React from "react";
// // import styled from "styled-components";
// // import FullButton from "../Buttons/FullButton";
// // import HeaderImage from "../../assets/img/header-img.png";
// // import QuotesIcon from "../../assets/svg/Quotes";
// // import Dots from "../../assets/svg/Dots";
// // import slider1 from "../../assets/slider1.png";
// // import slider2 from "../../assets/slider2.png";
// // import slider3 from "../../assets/slider3.png";
// // import newSlider1 from "../../assets/HeroHome1.png";
// // import homebannervideo from '../../assets/video/headervideo.mp4'
// // import InfoCard from "../../screens/InfoCard/InfoCard";
// // import { infoCardData } from "../../constant";

// // export default function Header() {
// //   return (
// //     <>
// //       <div id="carouselExampleIndicators" className="carousel slide" data-ride="carousel">
// //         <ol className="carouse-indicators">
// //           <li data-target="#carouselExampleIndicators" data-slide-to="0" className=" ative"></li>
// //           {/* <li data-target="#arouselExampleIndicators" data-slide-to="1" cl></li>
// //           <li data-target="#carouselExampleIndicators" data-slide-to="2"></li> */}
// //         </ol>
// //         <div className="carousel-inner"> 
// //           <div className="carousel-item active  mb-3  " style={{  width: '100%', background:"transparent",height: 'auto',backgroundRepeat:'no-repeat', backgroundSize:'cover', backgroundPosition:'center' }}>
// //           <video autoPlay loop muted style={{width:"100%",height:"100%"}}>
// //           <source src={homebannervideo} type="video/mp4" style={{width:"100%",height:"100%"}} />
// //           Your Browser Does Not Support The Video Tag.
// //         </video>
// //             {/* <div className="d-flex flex-column justify-content-center align-items-center py-5 my-5 ">
// //               <h1 className="pt-3 text-center text-md-left">
// //                 Complexity <span style={{ color: "#008F71" }}>Simplified,</span>
// //                 <br /> Globally
// //               <div className="mb-5 pb-5 pl-0">
// //                 <button className="slider_btn py-3 ">Register Now</button>
// //                 <button className="slider_btn mx-3 py-3">Explore More</button>
// //               </div>
// //               </h1>
// //             </div> */}
// //           </div>
// //           {/* <div className="carousel-item bg-white p-5">
// //             <div className="d-flex justify-content-center align-items-center row">
// //               <div className="col-lg-6 col-sm-12 col-md-6 p-5 text-center text-md-left">
// //                 <h1>
// //                   Ready To Become <span style={{ color: "#008F71" }}>Data Detective</span>
// //                 </h1>
// //                 <p className="slider_description">
// //                   Dolorum soluta maiores repudiandae. Soluta architecto quasi quis recusandae eum laboriosam, optio alias ut harum, eaque consequuntur tempora, nam rem in inventore laborum. Ad voluptates magni ab maxime obcaecati amet ullam!
// //                 </p>
// //                 <button className="slider_btn">Getting Started</button>
// //               </div>
// //               <div className="col-lg-6 col-sm-12 col-md-6  ">
// //                 <img src={slider2} alt="" className="img-fluid  pt-5 pt-lg-0" />
// //               </div>
// //             </div>
// //           </div>
// //           <div className="carousel-item bg-white p-5">
// //             <div className="d-flex justify-content-center align-items-center row">
// //               <div className="col-lg-6 col-sm-12 col-md-6 p-5 text-center text-md-left">
// //                 <h1>
// //                   Complexity <span style={{ color: "#008F71" }}>Simplified,</span> Globally
// //                 </h1>
// //                 <p className="slider_description">
// //                   Dolorum soluta maiores repudiandae. Soluta architecto quasi quis recusandae eum laboriosam, optio alias ut harum, eaque consequuntur tempora, nam rem in inventore laborum. Ad voluptates magni ab maxime obcaecati amet ullam!
// //                 </p>
// //                 <button className="slider_btn">Getting Started</button>
// //               </div>
// //               <div className="col-lg-6 col-sm-12 col-md-6 ">
// //                 <img src={slider3} alt="" className="img-fluid pt-5 pt-lg-0" />
// //               </div>
// //             </div>
// //           </div> */}
// //         </div>
// //         <a className="carousel-control-prev d-none" href="#carouselExampleIndicators" role="button" data-slide="prev">
// //           <span className="carousel-control-prev-icon" aria-hidden="true"></span>
// //           <span className="sr-only">Previous</span>
// //         </a>
// //         <a className="carousel-control-next  d-none" href="#carouselExampleIndicators" role="button" data-slide="next">
// //           <span className="carousel-control-next-icon" aria-hidden="true"></span>
// //           <span className="sr-only">Next</span>
// //         </a>
// //       </div>
// //       <InfoCard data={infoCardData}   count={true}/>
// //     </>
// //   );
// // }
// import React, { useState } from "react";
// // import homebannervideo from '../../assets/video/headervideo.webm';
// import homebannervideo from '../../assets/video/headervideo1.mp4';
// import InfoCard from "../../screens/InfoCard/InfoCard";
// import { infoCardData } from "../../constant";
// import { useNavigate } from "react-router-dom";

// const videoStyles = {
//   container: {
//     position: 'relative',
//     top: 0,
//     left: 0,
//     width: '100%',
//     height: '100%',
//     overflow: 'hidden',
//     zIndex: 1,
//   },
//   video: {
//     width: '100%',
//     height: '100%',
//     objectFit: 'cover',
//   },
//   loader: {
//     position: 'absolute',
//     top: '50%',
//     left: '50%',
//     transform: 'translate(-50%, -50%)',
//     zIndex: 2,
//     color: 'black', // Adjust this based on your loader style
//   },
// };

// export default function Header() {
//   const [isLoading, setIsLoading] = useState(true);

//   const handleCanPlay = () => {
//     debugger;
//     setIsLoading(false);
//   };

//   const handleError = (e) => {
//     debugger;

//     console.error('Video error:', e);
//   };

//   const handleLoadedMetadata = (e) => {
//     debugger;

//     console.log('Video metadata loaded:', e);
//   };
//   const navigate=useNavigate()

//   return (
//     <>
//       <div className="container-fluid p-1 p-md-0 postion-relative">
//       <div style={videoStyles.container}>
//         {isLoading && <div style={videoStyles.loader}>Loading...</div>}
//         <video
//           autoPlay
//           loop
//           muted
//           playsInline
//           style={videoStyles.video}
//           onCanPlay={handleCanPlay}
//           onError={handleError}
//           onLoadedMetadata={handleLoadedMetadata}
//         >
//           <source src={homebannervideo} type="video/mp4" />
//           Your Browser Does Not Support The Video Tag.
//         </video>
//         <div className="col-12 d-flex  align-items-center my-4 " style={{position:"absolute" ,bottom:"20%",marginLeft:"7%"}}>
//                         <button className='slider_btn ' onClick={()=> navigate('/GetInTouch')}>Upcoming Courses</button>
//                     </div>
//       </div>
//       </div>

//       <InfoCard data={infoCardData} count={true} />
//     </>
//   );
// }

import React from "react";
import homeBannerGif from '../../assets/gifs/headervideo.gif'; // Update this with your actual GIF path
import union from '../../assets/Union.png';
import vector from '../../assets/Vector.png';
import bg_purple from '../../assets/bg_purple.png';
import { useNavigate } from "react-router-dom";
// import wave from '../../assets/WhatWeDo/Wave.png'
import wave from '../../assets/WhatWeDo/wave.png'
import WeD1 from '../../assets/WhatWeDo/WeD1.png'
import InfoCard from "../../screens/InfoCard/InfoCard";
import { courseInfoCardData, infoCardData } from "../../constant";

export default function Header() {
  const navigate = useNavigate();

  return (
    <>
      <div className="" style={{ backgroundColor: '#d5d0ef' }}>
        <div className="bg-cover bg-center d-flex align-items-center justify-content-center p-2 pl-5">
          <div
            className="row align-items-center justify-content-between w-100"
            style={{
              position: 'relative',
              height: '688px',
              backgroundImage: `url(${union})`,
              zIndex: 0,
              backgroundRepeat: 'no-repeat',
              backgroundPosition: 'center top',
            }}
          >
            {/* Left side text content */}
            <div className="col-md-6 mb-4 mb-md-0">
              <h3 className="mb-4 font-weight-bold" style={{ fontFamily: 'Barlow, sans-serif', fontSize: '50px', color: '#160A54', lineHeight: '1.2' }}>
                Building Teams, <br /> Driving Business Growth
              </h3>
              <p className="mb-4" style={{ fontSize: '26px', color: '#160A54' }}>
                Find skilled candidates, in-demand jobs, and the solutions you need to help you do your best work yet.
              </p>

              <div className="d-flex flex-column flex-md-row align-items-start align-items-md-center">
                {/* First Column: FOR JOB SEEKERS */}
                <div className="mr-md-4 mb-4 mb-md-0">
                  <h2 className="mb-3" style={{ fontSize: '28px', color: '#160A54', fontWeight: 500 }}>FOR JOB SEEKERS</h2>
                  <button className="btn "
                    style={{
                      backgroundColor: '#160A54',
                      borderRadius: '50px',
                      color: 'white',
                      fontSize: '20px',
                      fontWeight: '500',
                      padding: '15px 30px',
                      marginRight: '10px',
                    }} onClick={() => navigate('/GetInTouch')}>
                    Find your next job
                  </button>
                </div>

                {/* Vertical Line */}
                <div className="border-right d-none d-md-block" style={{ height: '150px', width: '3px', backgroundColor: '#160A54', margin: '0 20px' }}></div>

                {/* Second Column: FOR BUSINESS */}
                <div className="mb-4 mb-md-0">
                  <h2 className="mb-3" style={{ fontSize: '28px', color: '#160A54', fontWeight: 500 }}>FOR BUSINESS</h2>
                  <div>
                    <button
                      className="btn"
                      style={{
                        backgroundColor: '#c2bde0',
                        color: '#160a54',
                        borderRadius: '50px',
                        fontSize: '20px',
                        fontWeight: '500',
                        padding: '15px 30px',
                        borderWidth: '3px',  // Set border width
                        borderColor: '#160A54',
                        marginRight: '10px',
                      }}
                      onClick={() => navigate('/GetInTouch')}
                    >
                      Preview candidates
                    </button>

                    <button
                      className="btn"
                      style={{
                        backgroundColor: '#c2bde0',
                        color: '#160a54',
                        borderRadius: '50px',
                        fontSize: '20px',
                        fontWeight: '500',
                        padding: '15px 30px',
                        borderWidth: '3px',  // Set border width
                        borderColor: '#160A54',
                        marginRight: '10px',
                      }}
                      onClick={() => navigate('/GetInTouch')}
                    >
                      Hire now
                    </button>
                  </div>

                </div>
              </div>
            </div>
            {/* Right side GIF with responsive background and rounded corners */}
            <div className="col-md-6 position-relative order-1 order-md-2 mb-4 mb-md-0">
              {/* Background vector image positioned at the top left, outside the wrapping div */}
              <div
                style={{
                  position: 'absolute',
                  top: '-25px', // Move it up slightly outside the container
                  left: '-19px', // Move it left slightly outside the container
                  backgroundImage: `url(${vector})`,
                  backgroundSize: 'contain', // Adjust as needed
                  backgroundRepeat: 'no-repeat', // Prevent repeating the image
                  width: '200px', // Set a width for the vector image (adjust as needed)
                  height: '200px', // Set a height for the vector image (adjust as needed)
                  zIndex: 3,
                }}
              ></div>

              {/* Wrapping div for stacking */}
              <div style={{ position: 'relative', width: '100%', height: '100%' }}>
                {/* Background color div with shadow effect */}
                <div
                  style={{
                    position: 'absolute',
                    borderRadius: '105px',
                    marginTop: '20px',
                    marginLeft: '18px',
                    backgroundColor: '#837bad',
                    // width: '87%',
                    height: '98%',
                    width: '90%',
                    zIndex: 1,
                  }}
                ></div>

                {/* GIF positioned on top of the background */}
                <div className="position-relative" style={{ zIndex: 2 }}>
                  <img
                    src={homeBannerGif}
                    alt="Header GIF"
                    className="img-fluid"
                    style={{
                      borderRadius: '105px',
                      width: '90%',
                      maxWidth: '90%',
                      marginTop: '0px',
                      height: '100%', // Set to fill the container
                      maxHeight: '100%', // Ensure it won't exceed this height
                    }}
                  />
                </div>
              </div>
            </div>

          </div>
        </div>
        <InfoCard data={infoCardData} count={false} gradient={false}/>
        <div
          className="container-fluid mt-5 pl-4"
          style={{
            // backgroundColor: '#5A8C75',
            backgroundImage: `url(${wave})`,
            backgroundSize: 'cover',
            backgroundRepeat: 'no-repeat',
            padding: 0,
          }}
        >
          <div className=" py-2 ">
            <div className="row   align-items-center">
              <div className="col-lg-6 p-0 col-md-6 col-sm-12">
                  <img src={WeD1} alt="" className="img-container w-100 pr-5" />
              </div>
              {/* <div className="col-1"></div> */}
              <div className="pl-sm-5 col-lg-6 col-md-6 col-sm-12 pb-4 pb-lg-0 text-center text-lg-left ">
                <h1 className="mb-5" style={{fontWeight:400,fontSize:"3.2rem"}}>  <span style={{ color: '#160A54' }}>Find your   </span><span style={{ color: '#04642D' }}> next hire</span></h1>
                <div className="row mt-3 font20 align-items-center">
                  <div className="col-1"><i className="fa-regular fa-circle-check mr-4" style={{ fontWeight:'200 !important',fontSize:40,color: '#3DCA89' }}></i></div>
                  <div className="col-11"><p style={{fontWeight:400,color:'#3F3F3F'}} className="font18"> Access a curated pool of qualified, vetted candidates</p></div>
                </div>
                <div className="row mt-3 font20 align-items-center">
                  <div className="col-1"><i className="fa-regular fa-circle-check mr-4" style={{ fontWeight:'200 !important',fontSize:40,color: '#3DCA89' }}></i></div>
                  <div className="col-11"><p style={{fontWeight:400,color:'#3F3F3F'}} className="font18"> Share your job requirements to get instant matches</p></div>
                </div>
                <div className="row mt-3 font20 align-items-center">
                  <div className="col-1"><i className="fa-regular fa-circle-check mr-4" style={{ fontWeight:'200 !important',fontSize:40,color: '#3DCA89' }}></i></div>
                  <div className="col-11"><p style={{fontWeight:400,color:'#3F3F3F'}} className="font18"> Share your job requirements to get instant matches</p></div>
                </div>
                <div className="row mt-3 font20 align-items-center">
                  <div className="col-1"><i className="fa-regular fa-circle-check mr-4" style={{ fontWeight:'200 !important',fontSize:40,color: '#3DCA89' }}></i></div>
                  <div className="col-11">
                <p style={{fontWeight:400,color:'#3F3F3F'}} className="font18"> Collaborate with our recruitment specialists for
                seamless hiring</p>

                </div>
                </div>
                <button className="Preview_candidates_btn mr-4 mt-5" onClick={() => navigate('/#coursesWeOffer')} >Preview candidates</button>
                <button className="hire_now_btn" onClick={() => navigate('/#coursesWeOffer')} >Hire Now</button>
              </div>
            </div>
          </div>
        </div>

      </div>

      {/* Media query for small devices */}
      <style>
        {`
          @media (max-width: 768px) {
            .container-fluid {
              padding: 20px !important;
            }
            h3 {
              font-size: 36px !important;
            }
            p {
              font-size: 20px !important;
            }
            .mr-4 h2, .mb-3 {
              font-size: 24px !important;
            }
            .btn {
              padding: 10px 20px !important;
            }
            .border-right {
              display: none !important;
            }
          }

          @media (max-width: 576px) {
            h3 {
              font-size: 28px !important;
            }
            p {
              font-size: 18px !important;
            }
            .mr-4 h2, .mb-3 {
              font-size: 20px !important;
            }
            .btn {
              padding: 8px 15px !important;
            }
          }
        `}
      </style>
    </>
  );
}
