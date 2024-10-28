import React, { useEffect, useRef, useState } from 'react'
import Footer from '../../components/Sections/Footer/Footer'
import TopNavbar from '../../components/Nav/TopNavbar'
import TestimonialSlider from '../../components/Elements/TestimonialSlider'
import companyLogo4 from '../../assets/aboutTheCompany/companyLogo4.png';
import AshrieTechBanner from '../../assets/AshrieTechBanner.png'
import AnraizUncle from '../../assets/CorporateSocialResponsibilty/AnraizUncle.png';
import CardImage1 from '../../assets/CorporateSocialResponsibilty/CardImage1.png';
import CardImage2 from '../../assets/CorporateSocialResponsibilty/CardImage2.png';
import CardImage3 from '../../assets/CorporateSocialResponsibilty/CardImage3.png';
import CardImage4 from '../../assets/CorporateSocialResponsibilty/CardImage4.png';
import wave from '../../assets/CorporateSocialResponsibilty/Wave.png'
import wave2 from '../../assets/CorporateSocialResponsibilty/Wave2.png'
import wave3 from '../../assets/CorporateSocialResponsibilty/wave3.png'
import style from "./style.module.css"
import chandImage from '../../assets/CorporateSocialResponsibilty/chandImage.png'
import banner from '../../assets/CorporateSocialResponsibilty/banner.png'
import banner1 from '../../assets/CorporateSocialResponsibilty/banner1.png'
import banner2 from '../../assets/CorporateSocialResponsibilty/banner2.png'
import { Barchart } from '../../components/Sections/Barchart/Barchart';
import offerbg from '../../assets/offerbg.png';
import compass1 from '../../assets/CorporateSocialResponsibilty/compass1.png'
import compass2 from '../../assets/CorporateSocialResponsibilty/compass2.png'
import compass3 from '../../assets/CorporateSocialResponsibilty/compass3.png'
import compass4 from '../../assets/CorporateSocialResponsibilty/compass4.png'
import compass5 from '../../assets/CorporateSocialResponsibilty/compass5.png'
import compass6 from '../../assets/CorporateSocialResponsibilty/compass6.png'
import compass7 from '../../assets/CorporateSocialResponsibilty/compass7.png'
import arrow from '../../assets/CorporateSocialResponsibilty/arrow.png'
import barChartbackground from '../../assets/CorporateSocialResponsibilty/barChartbackground.png'
import down_arrow from '../../assets/CorporateSocialResponsibilty/down_arrow.png'

export default function CorporateSocialResponsibility() {
    const {gradientCircleleft,gradientCircle1,zain,arrow_img,mobile_arrow,gradientCircleFooter,chartgradientCircle}=style
    const {box,generic_heading_left,BookRoom_heading}=style
    const data = {
        labels: ['January', 'February', 'March', 'April',],
        datasets: [
          {
            label: 'SAP',
            data: [81, 56, 55, 40],
            backgroundColor: 'rgba(244, 165, 45)',
      
          },
          {
            label: 'Saleforce',
            data: [ 19, 86, 27, 90],
            backgroundColor: 'rgba(208, 181, 42)',
      
          },
          {
            label: 'Tableau',
            data: [ 50, 90, 65, 80], 
            backgroundColor: 'rgba(85, 185, 159)',
      
          },
        ],
      };
      const singleBardata = {
        labels: ['January',],
        datasets: [
          {
            label: 'Leadership Academy',
            data: [81, ],
            backgroundColor: 'rgba(244, 165, 45)',
      
          },
          {
            label: 'Interveiw Prep',
            data: [ 19, ],
            backgroundColor: 'rgba(208, 181, 42)',
      
          },
          {
            label: 'Work Prep',
            data: [ 50, ], 
            backgroundColor: 'rgba(85, 185, 159)',
      
          },
          {
            label: 'Hiring Summit',
            data: [ 50, ], 
            backgroundColor: 'rgba(0,142,112,255)',
      
          },
        ],
      };
      const [overlayHeight, setOverlayHeight] = useState(0);
      const imgRef = useRef(null);
      const overlayRef = useRef(null);
    
      useEffect(() => {
        const updateOverlayHeight = () => {
          if (imgRef.current) {
            setOverlayHeight(imgRef.current.clientHeight);
          }
        };
        updateOverlayHeight();
        window.addEventListener('resize', updateOverlayHeight);
        return () => {
          window.removeEventListener('resize', updateOverlayHeight);
        };
      }, []);
   
      
    
  return (
    <>
      <TopNavbar />

      <div
                className="container-flui py-lg-4"

            >
           <div className="row m-auto d-sm-flex d-none position-relative" style={{ width: '90%' }}>
      <div
        className={`col-12 p-0 containr x-sm-5 zain`}
        ref={imgRef}  
        style={{
          backgroundImage: `url(${banner2})`,
          backgroundSize: 'cover',
          backgroundRepeat: 'no-repeat',
          backgroundPosition:"center",
          width: '100%',
          height: 'auto',
          borderRadius: '50px',
        }}
      >
        <div 
   
          className="d-flex flex-column justify-content-center align-items-center py-5 my-5 text-center w-75 m-auto" 
          style={{ position: 'relative', zIndex: 2 }}
        >
       <div className="row justify-content-center pt-5 mt-5">
            <div className="col-lg-10">
              <h6 className="text-white mt-4 mb-1">
              “ We had no prior knowledge of IT but after we took admission in AshreiTech we got to learn a lot and both of us secured jobs as soon as we acquired our certifications ”
              </h6>
            </div>
          </div>
          <div className="row justify-content-center">
            <div className="col-lg-10">
              <h6 className="text-white mt-4 mb-1">
              Reena Korejo and Noor Jehan Korejo Salesforce Associates from AshreiTech,
                            now employed at Integration Xperts.
              </h6>
            </div>
          </div>
        </div>

        <div
          ref={overlayRef}
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100%',
            height: `${overlayHeight}px`,
            backgroundColor: 'rgba(0, 0, 0, 0.55)',
            zIndex: 1,
            borderRadius: '50px', 
          }}
        ></div>

        <div className="pb-5 mb-5"></div>
      </div>
    </div>
            </div>


            <div className={`row   d-sm-none d-block m-auto postion-relative`} style={{ width: "90%" }}>
                    <div 
                        className={`col-12  px-4 py-4 ${zain}`}
                        style={{
                            backgroundImage: `url(${banner2})`,
                            backgroundSize: 'cover',
                            backgroundRepeat: 'no-repeat',
                            display: "flex",
                            backgroundPosition:"center",
                            borderRadius:10
                        }}
                    >
                        <div className="flex-column justify-content-center align-items-center  text-center " style={{position:"relative",zIndex:2}}>
                        <h5 className="text-white my-1 font12">“ We had no prior knowledge of IT but after we took admission in AshreiTech we got to learn a lot and both of us secured jobs as soon as we acquired our certifications ”</h5>

                            <h5 className="text-white mt-3 font12">Reena Korejo and Noor Jehan Korejo Salesforce Associates from AshreiTech,
                            now employed at Integration Xperts.</h5>
                        </div>
                        <div className="pb-5 mb-5"></div>
                    </div>
                </div>

        <div
                className="container-fluid p-0 m-0"
              style={{background:"#FEFFFC"}}  
            >
      
<div className=""  style={{
                    // backgroundColor: '#F7FDE8',
                    backgroundImage: `url(${banner1})`,
                    backgroundSize: 'cover',
                    backgroundRepeat: 'no-repeat',
                    backgroundPosition: 'center',
                    position:"relative"
                }}>
  
<div className="row d-flex justify-content-center align-items-center py-4">
                    <div  className="col-lg-12 col-md-8 col-sm-12 d-flex flex-column justify-content-center align-items-center text-center  ">
                        <h1 className="pb-md-4 pb-lg-0 generic_heading mt-lg-2"  style={{color:'#008F71'}}>LET’S TALK NUMBERS</h1>
                        <br />
                        <p className="col-lg-8 col-md-12 pt-md-2 mt-md-4 p-0  mt-lg-2"  style={{color:'black'}}>Our tech tier bundles are curated with simple to complex meetings and events in mind, with multiple levels of in-room equipment and technical support. Work with our team to find the tech tier that’s right for you, or explore our custom offerings.</p>
                    </div>
                </div>
                <div className='d-sm-block d-md-none d-lg-none '>
                    <div className="col-12 d-flex justify-content-center align-items-center p-0 my-md-5 my-3" style={{ borderRadius: '24px',border:'3px solid #5A8C75',background:""  }}>
                        <div  className="col-lg-4 col-md-4 col-sm-12  d-flex flex-column justify-content-center align-items-center text-center text-black p-4" style={{ borderRadius: '24px' }}>
                            <p className="line-height-sm">Projection of Revenue in the IT Outsourcing market (2028)
                            </p>
                            <h4 className="my-2 " style={{color:'#5A8C75'}}>US$783.60m (0.15% of the total share)
                            </h4>
                        </div>
                    </div>
                    <div className="col-12 d-flex justify-content-center align-items-center p-0 my-5" style={{ borderRadius: '24px',border:'3px solid #5A8C75'  }}>
                        <div className="col-lg-4 col-md-4 col-sm-12  d-flex flex-column justify-content-center align-items-center text-center text-black py-4" style={{ borderRadius: '24px' }}>
                            <p className="line-height-sm">Pakistan’s contribution (2028)
                            <h4 className="my-2 "style={{color:'#5A8C75'}}>US$1,523.00m (0.19% of the total share)           </h4>
                            </p>
                        </div>
                    </div>
                    <div className="col-12 d-flex justify-content-center align-items-center p-0 my-5" style={{ borderRadius: '24px',border:'3px solid #5A8C75'  }}>
                        <div className="col-lg-4 col-md-4 col-sm-12  d-flex flex-column justify-content-center align-items-center text-center text-black py-4" style={{ borderRadius: '24px' }}>
                        <p className="line-height-sm">Projection of Revenue in the IT Outsourcing market (2028)
                        </p>
                            <h4 className="my-2 "style={{color:'#5A8C75'}}>US$783.60m (0.15% of the total share)
                            </h4>
                           
                        </div>
                    </div>
                    <div className="col-12 d-flex justify-content-center align-items-center p-0 my-4" style={{ borderRadius: '24px',border:'3px solid #5A8C75'  }}>
                        <div className="col-lg-4 col-md-4 col-sm-12  d-flex flex-column justify-content-center align-items-center text-center text-black py-4" style={{ borderRadius: '24px' }}>
                        <p className="line-height-sm">Pakistan’s contribution (2028)
                        </p>
                            <h4 className="my-2 "style={{color:'#5A8C75'}}>US$1,523.00m (0.19% of the total share)                           </h4>
                        </div>
                    </div>
                </div>
 
                <div className="row  px-5 justify-content-center align-items-center py-4 d-none d-md-flex d-lg-flex">
                    <div className="col-lg-5 p-5 col-md-4 col-sm-12  d-flex flex-column justify-content-center align-items-center text-center text-black p-4 " style={{ borderRadius: '24px',border:'3px solid #5A8C75' }}>
                        
                        <p className="line-height-sm w-75 pt-4">Projection of Revenue in the IT Outsourcing market (2024)</p>
                        <h4 className="my-2 pb-4" style={{color:'#5A8C75'}}>US$512.50bn</h4>
                    </div>
                    <div className="col-lg-5 p-5 col-md-4 col-sm-12  d-flex flex-column justify-content-center align-items-center text-center text-black p-4 ml-lg-5 mt-5 mt-lg-0" style={{ borderRadius: '24px',border:'3px solid #5A8C75'  }}>
                        <p className="line-height-sm pt-4 w-75">Projection of Revenue in the IT Outsourcing market (2024)</p>
                        <h4 className="my-2 pb-4" style={{color:'#5A8C75'}}>US$512.50bn</h4>
                    </div>
                </div>
                <div className='d-none d-lg-block' style={{
                    width: '10px',
                    height: '10px',
                    backgroundColor: '#525FE1',
                    borderRadius: '50%',
                    marginLeft: '100px',
                    position: 'relative',

                }}>
                    <div
                        className='d-none d-lg-block' style={{
                            width: '15px',
                            height: '15px',
                            backgroundColor: '#FFCF59',
                            borderRadius: '50%',
                            border: '1px solid white',
                            top: '-40px',
                            left: '-50px',
                            position: 'absolute'

                        }}>

                    </div>
                </div>
                <div className="row px-5  justify-content-center align-items-center  pb-4 d-none d-md-flex d-lg-flex">
                    <div className="col-lg-5 mt-4 mt-lg-0 p-5 col-md-4 col-sm-12  d-flex flex-column justify-content-center align-items-center text-center text-black p-4" style={{ borderRadius: '24px',border:'3px solid #5A8C75'  }}>
                        <p className="line-height-sm pt-4 w-75">Projection of Revenue in the IT Outsourcing market (2028)</p>
                        <h4 className="my-2  pb-4" style={{color:'#5A8C75'}}>US$783.60m (0.15% of the total share)</h4>
                    </div>
                    <div className="col-lg-5 p-5 col-md-4 col-sm-12  d-flex flex-column justify-content-center align-items-center text-center text-black p-4 ml-lg-5 mt-5 mt-lg-0" style={{ borderRadius: '24px',border:'3px solid #5A8C75'  }}>
                      {/* <div className="co-lg-9"> */}
                      <p className="line-height-sm pt-3 w-75">Pakistan’s contribution (2028)</p>
                      <h4 className="my-2 pb-4 text-center" style={{color:'#5A8C75'}}>US$1,523.00m (0.19% of the total share)</h4>

                      {/* </div> */}
                    </div>
                </div>
                
</div>
               





       {/* <div className="d-none d-sm-block" style={{marginTop:140,width:"100%",position:"relative"}}>
       </div> */}
                <div
                className="container-flud"
            >
                <div className="containe px-3 py-2 position-relative">
       {/* <div className={`${gradientCircle1}  d-none d-lg-block`}></div> */}
                 
                  <h1 className='text-center w-75 m-auto'>That’s not low – that is embarrassingly low. <span style={{color:'#008F71'}}> But there’s a hope!</span> </h1>
                    {/* <div className="row  mb-sm-5 mb-3  d-flex justify-content-center align-items-center">
                        <div className="col-lg-5 col-md-6 col-sm-12 py-2">
                                <img src={AshrieTechBanner} alt=""  className='container-fluid p-0 py-md-4 pr-md-5'/>
                        </div>
                        <div className="col-lg-7 col-md-6 col-sm-12 pb-md-4 pb-lg-0 text-center text-lg-left ">
                            <h1>This is where AshreiTech Academy comes in!</h1>
                            <p className="mt-md-3">With a laser-sharp focus of developing workforce for future technologies and catering to <br />
                            the global IT outsourcing market, we are on a mission to take this share from 0.15% to at-least 1% by 2030.</p>
                          
                        </div>
                    </div> */}
                               <div className="container-flui  pt-5 ladderbox"
    
    >
      <div className="w-100"

   
      >

      <div className="d-sm-block d-none courseGradientCircleLeft "></div>
        <h1 className="text-center  mt-sm-3" style={{ color: '#000000' ,fontSize:43}}> This is where <span style={{color:'#008F71'}}>  AshreiTech Academy comes in!</span></h1>
          <div className="  justify-content-center mt-4 " style={{background:""}}>


          <div className="row mt-sm-5 mt-n2 d-none d-sm-flex bg-primar justify-content-center">
        
          <div  className="col-sm-2  p-0 d-flex flex-column justify-content-center align-items-center ">
           <img src={compass5} style={{width:"100%"}} alt ="" />
         
         </div>

        <div  className="col-sm-2 p-0 mb-4 mx-2 d-flex flex-column justify-content-center align-items-center text-center text-black py-2  ">
        <img src={arrow} alt="" style={{width:"75%"}} />
        </div>
           
         <div  className="col-sm-2  p-0 d-flex flex-column justify-content-center align-items-center ">
           <img src={compass6} style={{width:"100%"}} alt ="" />
         
         </div>
         <div  className="col-sm-2 p-0 mb-4 mx-2 d-flex flex-column justify-content-center align-items-center text-center text-black py-2  ">
        <img src={arrow} alt=""  style={{width:"75%"}} />
        </div>
         <div  className="col-sm-2 p-0  d-flex flex-column justify-content-center align-items-center position-relative " >
           <img src={compass7} style={{width:"100%"}} alt =""  />
           <img src={down_arrow} style={{width:"70%"}} alt ="" className={`${arrow_img}`} />
         </div>
     
            </div>
       
         

                      </div>

                      <div className="  justify-content-center mt-4 " style={{background:""}}>


<div className="row mt-sm-5 mt-n2 d-block d-sm-none bg-primar justify-content-center">

<div  className="col-sm-2  p-0 d-flex flex-column justify-content-center align-items-center ">
 <img src={compass5} style={{width:"60%"}} alt ="" />

 <p className=" font18 px-2 mt-n4 text-center">With a laser-sharp focus of developing
workforce for future technologies
and catering to the global IT
outsourcing market.</p>
</div>

<div  className="col-sm-2 p-0  d-flex flex-column justify-content-center align-items-center text-center text-black py-2  ">
<img src={arrow} className={`${mobile_arrow}`} alt="" style={{width:"40%"}} />
</div>
 
<div  className="col-sm-2  p-0 d-flex flex-column justify-content-center align-items-center ">
 <img src={compass6} style={{width:"60%"}} alt ="" />
 <p className=" font18 px-2 mt-n4 text-center">We are on a mission to take this share
 from 0.15% to at-least 1% by 2030.</p>
</div>
<div  className="col-sm-2 p-0  d-flex flex-column justify-content-center align-items-center text-center text-black py-2  ">
<img src={arrow} className={`${mobile_arrow}`} alt=""  style={{width:"40%"}} />
</div>
<div  className="col-sm-2 p-0  d-flex flex-column justify-content-center align-items-center position-relative " >
 <img src={compass7} style={{width:"60%"}} alt =""  />
 <p className=" font18 px-2 mt-n4 text-center mb-5">And this can’t be done alone.</p>
</div>
{/* <div  className="col-sm-2 p-0  d-flex flex-column justify-content-center align-items-center position-relative " >
 <img src={down_arrow} style={{width:"70%"}} alt ="" />
</div> */}

  </div>



            </div>
                      <div className="row d-none d-sm-flex px-5 mt-n5 justify-content-between bg-primar align-items-baseline">
            <div  className="col-sm-3 text-center text-black py-2  ">
   
           <p className=" font18">With a laser-sharp focus of developing
workforce for future technologies
and catering to the global IT
outsourcing market.</p>
         </div>
         <div  className="col-sm-3 text-center text-black py-2  ">
           <p className=" font18">We are on a mission to take this share
           from 0.15% to at-least 1% by 2030.</p>
         </div>
         <div  className="col-sm-3 text-center text-black py-2  ">
           <p className=" font18">And this can’t be done alone.</p>
         </div>
     
            </div>
        </div>
<div className="d-none d-sm-block" style={{height:58,}}></div>

    </div>
                    <br className='d-none d-sm-block'/>
                   
                    <h1 className='text-center'>And that’s where <span style={{color:'#5A8C75'}}>YOU</span>   come in.</h1>

                </div>
            </div>
            </div>
            <div className="mt-sm-4 position-relative" 
            style={{
              // backgroundColor: '#F7FDE8',
              backgroundImage: `url(${barChartbackground})`,
              backgroundSize: 'cover',
              backgroundRepeat: 'no-repeat',
              backgroundPosition: 'center',
              position:"relative",
              zIndex:111
     }}>
            <div className={`${chartgradientCircle} d-none d-lg-block`}></div> 
            <div className={`${gradientCircleleft} d-none d-lg-block`}></div> 

            <h1 className='text-center py-sm-5 py-4' style={{color:'#008F71'}}>Let's Talk Efforts & Impact </h1>
            <Barchart data={singleBardata}/>
            <h3 className='text-center py-4'> Trust in their ability to succeed in the technical internship.</h3>
            </div>
<div className=""
style={{
         // backgroundColor: '#F7FDE8',
         backgroundImage: `url(${wave3})`,
         backgroundSize: 'cover',
         backgroundRepeat: 'no-repeat',
         backgroundPosition: 'center',
         position:"relative",
         zIndex:111
}}
>
<div className="container-fluid px-sm-5 position-relative">
<div className={`${gradientCircle1} d-none d-lg-block`}></div> 
          
          <h1 className="text-center py-sm-5 py-4" style={{ color: '#000000' ,fontSize:43}}>Let's Hear It From <span style={{color:'#008F71'}}>Our Partners</span></h1>
        
                        <div className={`${box} container-fluid `}>
                            <div className="row py-sm-0 py-4 px-sm-3 px-xm-0">
                            {/* <div className={`${gradientCircle1}  d-none d-lg-block`}></div> */}
                                <div className="col-lg-8 col-md-8 p-0 p-sm-3 col-sm-12 d-flex flex-column justify-content-center text-center text-md-left text-lg-left ">
                                    <div className="">
                                        <h3 className='mb-sm-3' style={{color:"#5A8C75"}}>NASTP</h3>
                                        <h1  className={`${generic_heading_left} mt-4`} style={{color:"#5A8C75"}}>
                                        Run this course in-house
                                        </h1>
                                        <div className="mt-sm-5 mt-3">
                                            <p>Informa Connect Academy’s customised training solutions have helped organisations deliver tailored learning in different languages to suit every requirement.</p>
                                            <br />
                                            <p>Bespoke training designed for your organisation only, combining traditional classroom setting, blended and online learning models</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-4 col-md-4 py-sm-5 py-3 col-sm-12 d-flex justify-content-center align-items-center">
                                    <img
                                        className={`${"Laptop_Image"}`}
                                        style={{ width: "100%", height: "auto" }}
                                        src={AnraizUncle}
                                        alt="Laptop Image"
                                    />
                                </div>
                            </div>
                        </div>
                        </div>
              {/* <div
                        className="container-fluid mt-4"
                        style={{
                            backgroundColor: '#5A8C75',
                            backgroundImage: `url(${wave})`,
                            backgroundSize: 'cover',
                            backgroundRepeat: 'no-repeat',
                            padding: 0,
                        }}
                    >
                        <div className="container py-md-5 ">
                            <div className="row p-3 p-md-5 d-flex justify-content-center align-items-center">
                              
                                <div className="col-lg-9 col-md-10 col-sm-12 pb-4 pb-lg-0 text-center ">
                                    <h1 className={`text-center mb-3 text-white ${BookRoom_heading}`} id="genericBookRoom_heading">Our approach to build a Tech-able Pakistan</h1>
                                    <br />
                                    <p className="mt-md-4 text-center text-white">Through the rigorous marketing and outreach efforts across Pakistan, we were able to create awareness and generate 10,000 leads. <br />
                                    Within a period of 9 months, over 6000 students were provided free tech mentorship, over 500 students have been trained so far, out of which, over 300 students were sponsored for high-tech courses. By now, over 40 students have been globally certified, and over ___ students have been hired in companies, namely, Interation Xperts, Macpac Films, TMC, SuperNova, and Rewterz.</p>
                                </div>
                            </div>
                        </div>
                    </div> */}
              {/* <div className="container-fluid py-5"
              // style={{backgroundColor:'#5A8C75', backgroundImage:`url(${CSRbg})`, backgroundRepeat:'no-repeat', backgroundPosition:" right " , width:'100%', height:'auto'}} 
              >
              <div className="container py-5">
                <div className="row">
                  <div className="col-12 text-center">
                    <h1>Our approach to build a Tech-able Pakistan</h1>
                    <p>Through the rigorous marketing and outreach efforts across Pakistan, we were able to create awareness and generate 10,000 leads. 
                    Within a period of 9 months, over 6000 students were provided free tech mentorship, over 500 students have been trained so far, out of which, over 300 students were sponsored for high-tech courses. By now, over 40 students have been globally certified, and over ___ students have been hired in companies, namely, Interation Xperts, Macpac Films, TMC, SuperNova, and Rewterz.</p>
                  </div>
                </div>
              </div>
              </div> */}
              {/* <div    style={{
                backgroundImage: `url(${wave2})`,
                backgroundSize: 'cover',
                backgroundRepeat: 'no-repeat',
                position: 'relative'
              }} className="row position-relative ">
              <div className="gradientCircleLeft"></div>
              <div className={`${gradientCircle} d-none d-lg-block`}></div> 
              <div className="d-none d-sm-block" style={{marginTop:40,width:"100%",position:"relative"}}></div>
        
              <Barchart data={data}/>
              <div className="d-none d-sm-block" style={{marginTop:90,width:"100%",position:"relative"}}></div>
              </div> */}
         
           
                
              
                   {/* <div className="container-fluid mt-5">
                   <div className="row d-flex justify-content-center align-items-center py-sm-4">
                            <div className="col-lg-12 col-md-8 col-sm-12 d-flex flex-column justify-content-center align-items-center text-center ">
                                <h1 className=" mb-md-3 pb-lg-0" id="generic_heading_BookRoom">How you can Partner with us</h1>
                            </div>
                        </div>
                   <div className="row px-5 justify-content-end">
                            <div className="col-sm-6 col-md-3  px-sm-5 d-flex flex-column align-items-center text-center text-black p-4 ">
                                <img src={CardImage2} alt="" style={{height:"auto",width:"45%"}}/>
                              
                                <p className="line-height-sm mt-2 text-muted">Support on exisiting
                                state-level intervention
                                </p>
                            </div>
                            <div className="col-sm-6 col-md-3   px-sm-5  d-flex flex-column align-items-center text-center text-black p-4 ">
                                <img src={CardImage1} alt="" style={{height:"auto",width:"45%"}}/>
                                <p className="line-height-sm mt-2 text-muted">Facilitate Career guidance
                                for existing students
                                </p>
                            </div>
                            <div className="col-sm-6 col-md-3  px-sm-5  d-flex flex-column align-items-center text-center text-black p-4 ">
                                <img src={CardImage3} alt="" style={{height:"auto",width:"45%"}}/>
                                <p className="line-height-sm mt-2 text-muted">Sponsor Scholarships and
                                Finance Assistance</p>
                            </div>
                            <div className="col-sm-6 col-md-3  px-sm-5  d-flex flex-column align-items-center text-center text-black p-4 ">
                                <img src={CardImage4} alt="" style={{height:"auto",width:"45%"}} />
                                <p className="line-height-sm mt-2 text-muted">Co-create adolescent 
                                expowerment & intervention
        </p>
                            </div>
        
                        </div>
                   </div> */}
                   <div className="container-flui mt-5 pt-sm-5 ladderbox"
              style={{
                // backgroundImage: `url(${ladder_background})`,
                backgroundSize: 'cover',
                backgroundRepeat: 'no-repeat',
                position:'relative',
                // paddingBottom:165
              }}
            >
              <div className="w-100">
        
              <div className="d-sm-block d-none courseGradientCircleLeft "></div>
                <h1 className="text-center  " style={{ color: '#008F71' ,fontSize:43}} > Let's Brainstorm Ideas</h1>
                  <div className="px-sm-5 d-flex justify-content-center mt-4 " style={{background:""}}>
                  <div className="row px-5 mt-sm-5 mt-n2 j justify-content-xl-between justify-content-center bg-primar">
          <div className="col-sm-4 col-lg-2 p-0 m-0 custom-rounded mb-4 mx-2 d-flex flex-column px-2 justify-content-center align-items-center text-center text-black py-2 shadow" 
               style={{ border: "1px solid #C07162", borderRadius: "10px", }}>
            <img src={compass1} style={{width:"33%"}} alt="" />
            <p className="font13 mt-n2" style={{ lineHeight: "normal" }}>Learn how to use SAP Ariba for managing procurement processes, including supplier management and purchase orders.</p>
          </div>
          <div className="col-sm-4 col-lg-2 p-0 m-0 custom-rounded mb-4 mx-2 d-flex flex-column px-2 justify-content-center align-items-center text-center text-black py-2 shadow" 
               style={{ border: "1px solid #20D8BB", borderRadius: "10px", }}>
            <img src={compass2} style={{width:"33%"}} alt="" />
            <p className="font13 mt-n2" style={{ lineHeight: "normal" }}>Learn how to use SAP Ariba for managing procurement processes, including supplier management and purchase orders.</p>
          </div>
          <div className="col-sm-4 col-lg-2 p-0 m-0 custom-rounded mb-4 mx-2 d-flex flex-column px-2 justify-content-center align-items-center text-center text-black py-2 shadow" 
               style={{ border: "1px solid #6BD3A3", borderRadius: "10px", }}>
            <img src={compass3} style={{width:"33%"}} alt="" />
            <p className="font13 mt-n2" style={{ lineHeight: "normal" }}>Learn how to use SAP Ariba for managing procurement processes, including supplier management and purchase orders.</p>
          </div>
          <div className="col-sm-4 col-lg-2 p-0 m-0 custom-rounded mb-4 mx-2 d-flex flex-column px-2 justify-content-center align-items-center text-center text-black py-2 shadow" 
               style={{ border: "1px solid #FAD49A", borderRadius: "10px", }}>
            <img src={compass4} style={{width:"33%"}} alt="" />
            <p className="font13 mt-n2" style={{ lineHeight: "normal" }}>Learn how to use SAP Ariba for managing procurement processes, including supplier management and purchase orders.</p>
          </div>
        </div>
        
        
        
                 
              </div>
        
                </div>
        
            </div>
                       
          <div className="mt-sm-5 position-relative">
          <h1 className="text-center  mt-5" style={{ color: '#000000' ,fontSize:43}}> Let's Hear It From  <span style={{color:'#008F71'}}>Our Students</span></h1>
            <div className="mt-n3 pb-sm-5">
            <TestimonialSlider/>
            <div className={`${gradientCircleFooter} d-none d-lg-block`}></div> 

            </div>
          </div>
</div>
      
      <Footer />
    </>
  )
}
