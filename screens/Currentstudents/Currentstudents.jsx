// import React from 'react';
// import style from './style.module.css';
// import styled from "styled-components";
// import "slick-carousel/slick/slick.css";
// import "slick-carousel/slick/slick-theme.css";
// import { useNavigate } from "react-router-dom";
// import wave3 from '../../assets/WhatWeDo/wave3.png'
// import wave4 from '../../assets/WhatWeDo/wave4.png'
// import wave5 from '../../assets/WhatWeDo/wave5.png'

// import WeD2 from '../../assets/WhatWeDo/WeD2.png'



// export default function OurTrainer() {
//   const navigate = useNavigate();
//   const settings = {
//     infinite: true,
//     speed: 500,
//     slidesToShow: 3,
//     slidesToScroll: 1,
//     arrows: true,
//     autoplay: true,
//     autoplaySpeed: 3000,
//     responsive: [
//       {
//         breakpoint: 1600,
//         settings: {
//           slidesToShow: 2,
//           slidesToScroll: 1,
//         },
//       },
//       {
//         breakpoint: 1200,
//         settings: {
//           slidesToShow: 1,
//           slidesToScroll: 1,
//         },
//       },
//       {
//         breakpoint: 800,
//         settings: {
//           slidesToShow: 1,
//           slidesToScroll: 1,
//         },
//       },
//     ],
//   };
//   const { TrainerContainer } = style;

//   return (
//     <div
//       className="container-fluid  bg_purple pt-5"
//       style={{
//         // backgroundColor: '#5A8C75',
//         backgroundImage: `url(${wave5})`,
//         backgroundSize: 'cover',
//         backgroundRepeat: 'no-repeat',
//         padding: 0,
//         marginLeft: -7,

//       }}
//     >
//       <div className=" py-2 ">
//         <div className="row   align-items-center ">
//           <div className="pl-sm-12 col-lg-12 col-md-12 col-sm-12 pb-4 pb-lg-0 text-center text-lg-left ">
//             <h1 className="mb-1 text-center" style={{ fontWeight: 700, fontSize: "1.7rem" }}>  <span style={{ color: '#160A54' }}>JOIN THE BEST</span></h1>

//             <div
//         className="mx-auto d-flex align-items-center justify-content-center"
//         style={{ width: '30%' }} // Adjust width as needed (e.g., 30%, 35%, or a fixed px value)
//       >
//         <h1 className="mb-5 text-center" style={{ fontWeight: 400, fontSize: "3.3rem" }}>
//           <span style={{ color: '#160A54' }}>
//             Powering 100,000+ of the best customer experiences
//           </span>
//         </h1>
//       </div>
//             <button className="Preview_candidates_btn mr-4 mt-5" style={{ backgroundColor: "#04642D" }} onClick={() => navigate('/#coursesWeOffer')} >Get job matches</button>
//             <button className="hire_now_btn" style={{ color: "#04642D", borderColor: "#04642D" }} onClick={() => navigate('/#coursesWeOffer')} >Learn more</button>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }

// const SliderWrapper = styled.div`
//   .slick-slide {
//     padding: 0 10px; /* Space between slides */
//     background-color: transparent;
    
//   }
//   .card-style1 {
//     height:400px;
//     width: 18rem;
//     border-radius: 16px;
//     border: 1px solid #FDD8A3;
//     background-color: white;
//   }
//   .card-style2 {
//     width: 18rem;
//     height:400px;
//     border-radius: 16px;
//     border: 1px solid #8FCEC1;
//     background-color: white;
//   }
//   .card-style3 {
//     width: 18rem;
//     height:400px;
//     border-radius: 16px;
//     border: 1px solid #c3b25a;
//     background-color: white;
//   }
//   .card-style4 {
//     width: 18rem;
//     height:400px;
//     border-radius: 16px;
//     border: 1px solid #60bd92;
//     background-color: white;
//   }
//   .card-style5 {
//     width: 18rem;
//     height:400px;
//     border-radius: 16px;
//     border: 1px solid #ac6558;
//     background-color: white;
//   }
//   .card-style6 {
//     width: 18rem;
//     height:400px;
//     border-radius: 16px;
//     border: 1px solid #81b5ad;
//     background-color: white;
//   }
//   .slick-prev, .slick-next {
//     /* background-color: white; */
//     border-radius: 50%;
//     width: 30px;
//     height: 30px;
//     display: flex;
//     justify-content: center;
//     align-items: center;
//   }
//   .slick-prev:before, .slick-next:before {
//     font-size: 20px;
//     color: rgb(90, 140, 117);
//   }
// `;

import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import left1 from '../../assets/join/left1.png';
import left2 from '../../assets/join/left2.png';
import left3 from '../../assets/join/left3.png';
import left4 from '../../assets/join/left4.png';
import left5 from '../../assets/join/left5.png';
import right1 from '../../assets/join/right1.png';
import right2 from '../../assets/join/right2.png';
import right3 from '../../assets/join/right3.png';
import right4 from '../../assets/join/right4.png';
import right5 from '../../assets/join/right5.png';

export default function OurTrainer() {
  const navigate = useNavigate();
  const [animate, setAnimate] = useState(false);

  useEffect(() => {
    // Trigger animations when component mounts
    setAnimate(true);
  }, []);

  return (
    <div className="container-fluid p-5" style={{ backgroundColor: "#d5d0ef" }}>
      <div className="row align-items-center">
        {/* Column with alternating images (Left) */}
        <div className="col-lg-4 col-md-4 col-sm-12">
          <div className="d-flex flex-column align-items-end">
            <div className={`col-12 text-right ${animate ? 'animated-left' : ''}`}> 
              <img src={left1} alt="Left 1" style={{ width: "30%" }} />
            </div>
            <div className={`col-12 text-left ${animate ? 'animated-right' : ''}`}>  
              <img src={left2} alt="Left 2" style={{ width: "35%" }} />
            </div>
            <div className={`col-12 text-right ${animate ? 'animated-left' : ''}`}> 
              <img src={left3} alt="Left 3" style={{ width: "40%" }} />
            </div>
            <div className={`col-12 text-left ${animate ? 'animated-right' : ''} pl-4`}>
              <img src={left4} alt="Left 4" />
            </div>
            <div className={`col-12 text-right ${animate ? 'animated-left' : ''}`}>
              <img src={left5} alt="Left 5" style={{ width: "30%" }} />
            </div>
          </div>
        </div>

        {/* Middle Column with Text */}
        <div className="col-lg-4 col-md-4 col-sm-12 text-center">
          <h1 className="mb-1 text-center" style={{ fontWeight: 700, fontSize: "1.7rem", fontFamily: "Inter, serif" }}>
            <span style={{ color: '#160A54' }}>JOIN THE BEST</span>
          </h1>

          <div className="mx-auto d-flex align-items-center justify-content-center" style={{ width: '100%' }}>
            <h1 className="mb-5 text-center" style={{ fontWeight: 700, fontSize: "3.4rem" }}>
              <span style={{ color: '#160A54', fontFamily: "Inria Serif, serif" }}>
                Powering 100,000+ of the best customer experiences
              </span>
            </h1>
          </div>
          <div className="text-center">
            <button
              className="Preview_candidates_btn mr-4"
              style={{ backgroundColor: "#04642D", padding: '12px 30px', fontSize: '1.2rem' }}
              onClick={() => navigate('/#coursesWeOffer')}
            >
              Free Trial
            </button>
            <button
              className="hire_now_btn"
              style={{ color: "#04642D", borderColor: "#04642D", padding: '12px 16px', fontSize: '1.2rem' }}
              onClick={() => navigate('/#coursesWeOffer')}
            >
              Get Free Demo
            </button>
          </div>
        </div>

        {/* Column with alternating images (Right) */}
        <div className="col-lg-4 col-md-4 col-sm-12">
          <div className="d-flex flex-column align-items-start">
            <div className={`col-12 text-left ${animate ? 'animated-right' : ''}`}>  
              <img src={right1} alt="Right 1" style={{ marginBottom: '20px' }} />
            </div>
            <div className={`col-12 text-right ${animate ? 'animated-left' : ''}`}>  
              <img src={right2} alt="Right 2" style={{ marginBottom: '20px' }} />
            </div>
            <div className={`col-12 text-left ${animate ? 'animated-right' : ''}`}> 
              <img src={right3} alt="Right 3" style={{ marginBottom: '20px' }} />
            </div>
            <div className={`col-12 text-right ${animate ? 'animated-left' : ''}`}> 
              <img src={right4} alt="Right 4" style={{ marginBottom: '20px' }} />
            </div>
            <div className={`col-12 text-left ${animate ? 'animated-right' : ''}`}>
              <img src={right5} alt="Right 5" style={{ marginBottom: '20px' }} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

// import React from 'react';
// import { useNavigate } from "react-router-dom";
// import left1 from '../../assets/join/left1.png'; // Replace with actual image path
// import left2 from '../../assets/join/left2.png'; // Replace with actual image path
// import left3 from '../../assets/join/left3.png';
// import left4 from '../../assets/join/left4.png';
// import left5 from '../../assets/join/left5.png';
// import right1 from '../../assets/join/right1.png'; // Replace with actual image path
// import right2 from '../../assets/join/right2.png'; // Replace with actual image path
// import right3 from '../../assets/join/right3.png';
// import right4 from '../../assets/join/right4.png';
// import right5 from '../../assets/join/right5.png';

// export default function OurTrainer() {
//   const navigate = useNavigate();

//   return (
//     <div className="container-fluid pt-5 " style={{backgroundColor : "#d5d0ef"}}>
//       <div className="row align-items-center  ">
//         {/* Left Column with 2x2 Images */}
//         <div className="col-lg-4 col-md-4 col-sm-12 text-center">
//           {/* Row 1 Image */}
//           <div className="row mb-4">
//             <div className="col-12 text-right">
//               <img src={left1} alt="Image 1" style={{ width: '30%', borderRadius: '8px' }} />
//             </div>
//           </div>
//           {/* Row 2 Image */}
//           <div className="row">
//             <div className="col-12 text-left">
//               <img src={left2} alt="Image 2" style={{ width: '30%', borderRadius: '8px' }} />
//             </div>
//           </div>
//            {/* Row 2 Image */}
//            <div className="row">
//             <div className="col-12 text-right">
//               <img src={left3} alt="Image 2" style={{ width: '30%', borderRadius: '8px' }} />
//             </div>
//           </div>
//            {/* Row 2 Image */}
//            <div className="row">
//             <div className="col-12 text-left">
//               <img src={left4} alt="Image 2" style={{ width: '30%', borderRadius: '8px' }} />
//             </div>
//           </div>
//            {/* Row 2 Image */}
//            <div className="row">
//             <div className="col-12 text-right">
//               <img src={left5} alt="Image 2" style={{ width: '30%', borderRadius: '8px' }} />
//             </div>
//           </div>
//         </div>

//         {/* Middle Column with Text */}
//         <div className="col-lg-4 col-md-4 col-sm-12 text-center">
//           <div
//             className="mx-auto d-flex align-items-center justify-content-center"
//             style={{ width: '100%' }} // Adjust width as needed
//           >
//             <h1 className="mb-5 text-center" style={{ fontWeight: 400, fontSize: "3.3rem" }}>
//               <span style={{ color: '#160A54' }}>
//                 Powering 100,000+ of the best customer experiences
//               </span>
//             </h1>
//           </div>

//           {/* Buttons - Smaller size */}
//           <div className="text-center">
//             <button
//               className="Preview_candidates_btn mr-4"
//               style={{ backgroundColor: "#04642D", padding: '8px 16px', fontSize: '14px' }}
//               onClick={() => navigate('/#coursesWeOffer')}
//             >
//               Get job matches
//             </button>
//             <button
//               className="hire_now_btn"
//               style={{ color: "#04642D", borderColor: "#04642D", padding: '8px 16px', fontSize: '14px' }}
//               onClick={() => navigate('/#coursesWeOffer')}
//             >
//               Learn more
//             </button>
//           </div>
//         </div>

//         {/* Right Column with 1 Image */}
//         <div className="col-lg-4 col-md-4 col-sm-12 text-center">
         
//           {/* Row 2 Image */}
//           <div className="row">
//             <div className="col-12 text-left">
//               <img src={right1} alt="Image 2" style={{ width: '30%', borderRadius: '8px' }} />
//             </div>
//           </div>
//            {/* Row 2 Image */}
//            <div className="row">
//             <div className="col-12 text-right">
//               <img src={right2} alt="Image 2" style={{ width: '20%', borderRadius: '8px' }} />
//             </div>
//           </div>
//            {/* Row 2 Image */}
//            <div className="row">
//             <div className="col-12 text-left">
//               <img src={right3} alt="Image 2" style={{ width: '30%', borderRadius: '8px' }} />
//             </div>
//           </div>
//            {/* Row 2 Image */}
//            <div className="row">
//             <div className="col-12 text-right">
//               <img src={right4} alt="Image 2" style={{ width: '30%', borderRadius: '8px' }} />
//             </div>
//           </div>
//            {/* Row 2 Image */}
//            <div className="row">
//             <div className="col-12 text-left">
//               <img src={right5} alt="Image 2" style={{ width: '30%', borderRadius: '8px' }} />
//             </div>
//           </div>
//         </div>

//       </div>
//     </div>
//   );
// }
