import React ,{ useState, useEffect }  from 'react';
import style from './style.module.css';
import styled from "styled-components";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { useNavigate } from "react-router-dom";
import wave2 from '../../assets/WhatWeDo/wave2.png'
import WeD2 from '../../assets/WhatWeDo/WeD2.png'
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
import wave3 from '../../assets/WhatWeDo/wave3.png'


export default function OurTrainer() {
  const navigate = useNavigate();
  const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    arrows: true,
    autoplay: true,
    autoplaySpeed: 3000,
    responsive: [
      {
        breakpoint: 1600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 800,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  const { TrainerContainer } = style;
  const [animate, setAnimate] = useState(false);

  useEffect(() => {
    // Trigger animations when component mounts
    setAnimate(true);
  }, []);

  return (
    <div
    className="container-fluid  bg_purple"
    style={{
      // backgroundColor: '#5A8C75',
      backgroundImage: `url(${wave2})`,
      backgroundSize: 'cover',
      backgroundPosition: 'top center',  // This ensures the image starts from the top
      backgroundRepeat: 'no-repeat',
      padding: 0,
      margin : 0,
    }}
  >
    <div className=" py-2 ">
      <div className="row align-items-center pb-5">
        <div className="col-lg-6 p-0 pl-4 col-md-6 col-sm-12">
            <img src={WeD2} alt="" className="img-container w-100 pr-5" />
        </div>
        <div className="pl-sm-5 col-lg-6 col-md-6 col-sm-12 pb-4 pb-lg-0 text-center text-lg-left  ">
          <h1 className="mb-5" style={{fontWeight:400,fontSize:"3.3rem"}}>  <span style={{ color: '#160A54' }}>Make the  </span><span style={{ color: '#04642D' }}> career move <br />
          you want</span></h1>
          <div className="row mt-3 font20 align-items-center">
            <div className="col-1"><i className="fa-regular fa-circle-check mr-4" style={{ fontWeight:'200 !important',fontSize:40,color: '#160A54' }}></i></div>
            <div className="col-11"><p style={{fontWeight:400,color:'#3F3F3F'}} className="font18"> Get instant job recommendations tailored to your skills and goals</p></div>
          </div>
          <div className="row mt-3 font20 align-items-center">
            <div className="col-1"><i className="fa-regular fa-circle-check mr-4" style={{ fontWeight:'200 !important',fontSize:40,color: '#160A54' }}></i></div>
            <div className="col-11"><p style={{fontWeight:400,color:'#3F3F3F'}} className="font18"> Gain exposure to a range of companies and job types: fully
            remote, <br /> hybrid or on-site, and contract or permanent</p></div>
          </div>
          <div className="row mt-3 font20 align-items-center">
            <div className="col-1"><i className="fa-regular fa-circle-check mr-4" style={{ fontWeight:'200 !important',fontSize:40,color: '#160A54' }}></i></div>
            <div className="col-11">
          <p style={{fontWeight:400,color:'#3F3F3F'}} className="font18"> Access competitive pay, benefits, and free online training and
          <br />development</p>

          </div>
          </div>
          <button className="Preview_candidates_btn mr-4 mt-5" style={{backgroundColor: "#160A54"}} onClick={() => navigate('/#coursesWeOffer')} >Get job matches</button>
          <button className="hire_now_btn" style={{color : "#160A54", borderColor : "#160A54"}} onClick={() => navigate('/#coursesWeOffer')} >Learn more</button>
        </div> 
      </div>
      <div className="row align-items-center p-5">
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
              style={{ backgroundColor: "#04642D", padding: '13px 32px', fontSize: '1.2rem' }}
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
    
    
  </div>
  );
}

const SliderWrapper = styled.div`
  .slick-slide {
    padding: 0 10px; /* Space between slides */
    background-color: transparent;
    
  }
  .card-style1 {
    height:400px;
    width: 18rem;
    border-radius: 16px;
    border: 1px solid #FDD8A3;
    background-color: white;
  }
  .card-style2 {
    width: 18rem;
    height:400px;
    border-radius: 16px;
    border: 1px solid #8FCEC1;
    background-color: white;
  }
  .card-style3 {
    width: 18rem;
    height:400px;
    border-radius: 16px;
    border: 1px solid #c3b25a;
    background-color: white;
  }
  .card-style4 {
    width: 18rem;
    height:400px;
    border-radius: 16px;
    border: 1px solid #60bd92;
    background-color: white;
  }
  .card-style5 {
    width: 18rem;
    height:400px;
    border-radius: 16px;
    border: 1px solid #ac6558;
    background-color: white;
  }
  .card-style6 {
    width: 18rem;
    height:400px;
    border-radius: 16px;
    border: 1px solid #81b5ad;
    background-color: white;
  }
  .slick-prev, .slick-next {
    /* background-color: white; */
    border-radius: 50%;
    width: 30px;
    height: 30px;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .slick-prev:before, .slick-next:before {
    font-size: 20px;
    color: rgb(90, 140, 117);
  }
`;
