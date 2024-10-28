import React from "react";
import TopNavbar from "../../components/Nav/TopNavbar";
import CardImage2 from "../../assets/CorporateSocialResponsibilty/CardImage2.png";
import styled from "styled-components";
import style  from './style.module.css'
import wave from '../../assets/findTechTalent/wave.png'
import cardimage1 from '../../assets/findTechTalent/cardimage1.png'
import cardimage2 from '../../assets/findTechTalent/cardimage2.png'
import cardimage3 from '../../assets/findTechTalent/cardimage3.png'
import cardimage4 from '../../assets/findTechTalent/cardimage4.png'
import cardimage5 from '../../assets/findTechTalent/cardimage5.png'
import cardimage6 from '../../assets/findTechTalent/cardimage6.png'
import cardimage7 from '../../assets/findTechTalent/cardimage7.png'
import cardimage8 from '../../assets/findTechTalent/cardimage8.png'
import Footer from "../../components/Sections/Footer/Footer";

const FindTechTalent = () => {
  const {gradientCircle,gradientCircleLeft}=style
  const card=[
    {
      name:'Talha Haris',
      img:cardimage1,
      discription:'SAP Ariba Certified Professional ERP Consultant',
      rating:'5/4.5'
    },
    
    {
      name:'Ayesha Khan',
      img:cardimage7,
      discription:'SAP Ariba Certified Professional ERP Consultant',
      rating:'5/4.5'
    },
    {
      name:'Kamran khan',
      img:cardimage2,
      discription:'SAP Ariba Certified Professional ERP Consultant',
      rating:'5/4.5'
    },
    {
      name:'Rubab khan',
      img:cardimage8,
      discription:'SAP Ariba Certified Professional ERP Consultant',
      rating:'5/4.5'
    },
    {
      name:'Rashid khan',
      img:cardimage3,
      discription:'SAP Ariba Certified Professional ERP Consultant',
      rating:'5/4.5'
    },
    {
      name:'Arshad khan',
      img:cardimage4,
      discription:'SAP Ariba Certified Professional ERP Consultant',
      rating:'5/4.5'
    },
    {
      name:'Ali khan',
      img:cardimage5,
      discription:'SAP Ariba Certified Professional ERP Consultant',
      rating:'5/4.5'
    },
    {
      name:'Affan khan',
      img:cardimage6,
      discription:'SAP Ariba Certified Professional ERP Consultant',
      rating:'5/4.5'
    },

    
  ]
  return (
    <>
      <TopNavbar />
      <div className="container-fluid px-sm-5"
         style={{
          backgroundImage: `url(${wave})`,
          backgroundSize: 'cover',
          backgroundRepeat: 'no-repeat',
          position:'relative'
      }}
      >
      <div className={`${gradientCircle}  d-none d-lg-block`}></div>
      
      <div className="">
  <ul className="d-sm-flex flex-wrap list-unstyled">
    <li className="mr-3">SAP</li>
    <li className="mr-3">Salesforce</li>
    <li className="mr-3">Cybersecurity</li>
    <li className="mr-3">Data & Programming</li>
    <li className="mr-3">Microsoft Azure (Cloud)</li>
    <li className="mr-3">Artificial Intelligence</li>
  </ul>
</div>


        <div className="row mt-sm-5 mt-3">
          <div className="col-lg-5">
            <h1 style={{color:'#008F71'}}>CONNECT WITH THE BRIGHTEST IN TECH</h1>
          </div>
        </div>
        {/* <p>
          We are the partner for talent in finding the right work and help
          talent secure meaningful roles and develop relevant skills.
        </p> */}
        <div className="container py-sm-5 position-relatie">

          <div className="row">
             {
               card?.map(({name,discription,img,rating})=>{
                 return <>
                <div className="col-sm-6 col-md-4  col-lg-3  d-flex flex-column align-items-center text-center text-black p-3">
                 <div
                className="card d-flex flex-column align-items-center justify-content-center pt-4 " 
                style={{
                  border: "2px solid rgb(109 109 109 / 68%)", 
                  borderRadius: "10px", 
                  width: "100%",
             
                  height: "100%", 
                }}
              >
                <img
                  src={img}
                  alt=""
                  style={{ height: "auto", width: "45%" }}
                />
                <h4 className="my-2">{name}</h4>
                <p className="  text-muted font12 px-5">
                {discription}
                </p>
                <p className="mt-2 mr-1"><i class="fa-solid fa-star" style={{color:"#008F71",fontSize:20}}></i>  {rating} </p>
                < WrapperForP>
                <div className="pclass p-1 text-center my-5 ">
                  <p className="font14 px-2">View Resume</p>
                  </div>
                </WrapperForP>
              </div>
            </div>
                </>
              })
             }
          </div>
      <div className={`${gradientCircleLeft}  d-none d-lg-block`}></div>

        </div>

      </div>
      <Footer/>
    </>
  );
};

export default FindTechTalent;

const WrapperForP = styled.div`
  .pclass{
    background-color: #008F71;
    color: #ffffff;
    border-radius:4px;
    font-size:12px;
    padding: 0 15px;
  }
  .pclass:hover {
    background-color: #008F71;
    color: #fff;
    cursor:pointer;
  }
`;