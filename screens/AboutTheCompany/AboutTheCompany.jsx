import React, { useEffect, useState } from 'react';
import style from "./style.module.css";
import TopNavbar from '../../components/Nav/TopNavbar';
import Footer from '../../components/Sections/Footer/Footer';

// Assets
// import section1banner from '../../assets/aboutSection1banner.png';
import section1banner from '../../assets/aboutTheCompany/aboutSection1banner.png';
import section_banner from '../../assets/aboutTheCompany/section_banner.png';
import animation1 from '../../assets/aboutAnimation1.png';
import animatio3 from '../../assets/aboutAnimation2.png';
import animation3 from '../../assets/aboutAnimation3.png';
import azharAli from '../../assets/aboutTheCompany/azharAli.png';
// import azharAli from '../../assets/aboutTheCompany/azharAli1.png';
import azharAliabout from '../../assets/aboutTheCompany/azharAliabout.png';
import shohailZindaniAbout from '../../assets/aboutTheCompany/shohailZindaniAbout.png';
import shohailZindani from '../../assets/aboutTheCompany/shohailZindani.png';
import haiderWaheedAbout from '../../assets/aboutTheCompany/haiderWaheedAbout.png';
import haiderWaheed from '../../assets/aboutTheCompany/haiderWaheed.png';
import rahimIqbal from '../../assets/aboutTheCompany/rahimIqbal.png';
import rahimIqbalAbout from '../../assets/aboutTheCompany/rahimIqbalAbout.png';
import EhsanSaya from '../../assets/aboutTheCompany/EhsanSaya.png';
import EhsanSayaAbout from '../../assets/aboutTheCompany/EhsanSayaAbout.png';
// import ibrahiShamsi from '../../assets/aboutTheCompany/ibrahiShamsi.png';
import ibrahiShamsi from '../../assets/aboutTheCompany/ibrahiShamsi1.png';
import ibrahiShamsiAbout from '../../assets/aboutTheCompany/ibrahiShamsiAbout.png';
import companyLogo1 from '../../assets/aboutTheCompany/companyLogo1.png';
import companyLogo2 from '../../assets/aboutTheCompany/companyLogo2.png';
import companyLogo3 from '../../assets/aboutTheCompany/companyLogo3.png';
import companyLogo4 from '../../assets/aboutTheCompany/companyLogo4.png';
import companyLogo5 from '../../assets/aboutTheCompany/companyLogo5.png';
import companyLogo6 from '../../assets/aboutTheCompany/companyLogo6.png';
import companyLogo7 from '../../assets/aboutTheCompany/companyLogo7.png';
// import vector1 from '../../assets/aboutcard1.png';
// import vector2 from '../../assets/aboutcard2.png';
// import vector3 from '../../assets/aboutcard3.png';
// import vector4 from '../../assets/aboutcard4.png';
import vector1 from '../../assets/vector1.gif';
import vector2 from '../../assets/vector2.gif';
import vector3 from '../../assets/vector3.gif';
import vector4 from '../../assets/vector4.gif';

const cardColors = ['#ffd393', '#9fffeb', '#eae1b0', '#93c7af'];

const images = [
    { thumbnail: azharAli, full: azharAliabout },
    { thumbnail: shohailZindani, full: shohailZindaniAbout },
    { thumbnail: haiderWaheed, full: haiderWaheedAbout },
    { thumbnail: rahimIqbal, full: rahimIqbalAbout },
    { thumbnail: EhsanSaya, full: EhsanSayaAbout },
    { thumbnail: ibrahiShamsi, full: ibrahiShamsiAbout },
];

const logos = [
    { logo: companyLogo6, description: 'Innovation is our Method' },
    { logo: companyLogo2, description: 'Learning is our Choice' },
    { logo: companyLogo1, description: 'Generosity is our Way' },
    { logo: companyLogo3, description: 'Global is our Scale' },
    { logo: companyLogo4, description: 'Growth is our Passion' },
    { logo: companyLogo5, description: 'Sustainability at the Core' },
    { logo: companyLogo7, description: 'Simplicity is our Strategy' },
];
const AboutTheCompany = () => {
    debugger;
    const { box1, box2,circle,logo_img, parent_box,zain, transition_image,section_2,card_discription,card_title, banner_container, view_all, section1_banner_container ,card_hover,card_container,active_card,blur_container} = style
    const [hoveredIndex, setHoveredIndex] = useState(0);
    const [hoverImage , setHoverImage] = useState(null)
    const [active , setActive] = useState(false)

    const handleMouseEnter = (index) => {
            setHoverImage(index);
            
    };

    const handleMouseLeave = () => {
        console.log("Mouse left"); 
        setHoverImage(null);
    };
    useEffect(() => {
        images.forEach(({ full }) => {
            const img = new Image();
            img.src = full;
        });
    }, []);
    
    return (
        <>
            <TopNavbar />
            <div
                className="container-flui py-lg-4"

            >
                <div className={`row m-auto  d-sm-flex d-none ${section1_banner_container}`} style={{ width: "90%" }}>
                    <div
                        className={`col-12 p-0 containr x-sm-5 ${zain}`}
                        style={{
                            backgroundImage: `url(${section1banner})`,
                            backgroundSize: 'cover',
                            backgroundRepeat: 'no-repeat',
                            // height: '632px',
                            width: '100%',
                            height:"auto",
                            borderRadius: '50px',
                            // display: "flex",
                            // justifyContent: "center",
                        }}
                    >
                        <div 
                        className="d-flex flex-column justify-content-center align-items-center py-5 my-5 text-center w-75 m-auto" style={{position:"relative",zIndex:2}}>
                        <h2 className="font-weight-bold text-white pt-5 mt-5">Empowering Tomorrow's Tech Leaders, One Learner at a Time</h2>
                            {/* <h1 className=" text-white font40" style={{width:"80%"}}>Empowering Tomorrow's Tech Leaders, One Learner at a Time
                            </h1> */}
                            <div className="row justify-content-center" >
                                <div className="col-lg-10">

                            {/* <h5 className="text-white my-4 font20">In a world where technology never stands still, staying ahead means continuous learning. With unmatched expertise of our experts, we're here to guide you and your organization to tech mastery. Join us on a journey to unlock your full potential and lead the future of innovation.
                            </h5> */}
                            <h6 className="text-white mt-4 mb-1">In a world where technology never stands still, staying ahead means continuous learning. With unmatched expertise of our experts, we're here to guide you and your organization to tech mastery. Join us on a journey to unlock your full potential and lead the future of innovation.</h6>
                                </div>
                            </div>
                            {/* <button className={` rounded-3  px-sm-4  px-2 font25 ${view_all}`} style={{ borderRadius: 5 }}>View All Courses</button> */}
                            <div  className={` mt-4 navbtn p-2 ${view_all}`}>
                            View All Courses
      </div>
                        </div>
                        <div className="pb-5 mb-5"></div>
                    </div>
                    
                  
                </div>
                <div className={`row   d-sm-none d-block m-auto  ${section1_banner_container}`} style={{ width: "90%" }}>
                    <div 
                        className={`col-12  px-4 py-4 ${zain}`}
                        style={{
                            backgroundImage: `url(${section1banner})`,
                            backgroundSize: 'cover',
                            backgroundRepeat: 'no-repeat',
                            // height: '157px',
                            // width: '90%',
                            // borderRadius: '50px',
                            display: "flex",
                            // justifyContent: "center",
                            backgroundPosition:"center",
                            borderRadius:10
                        }}
                    >
                        <div className="flex-column justify-content-center align-items-center  text-center " style={{position:"relative",zIndex:2}}>
                            <p className="font-weight-bold text-white font15 pt-1" style={{width:""}}>Empowering Tech Enthusiasts to shape the future</p>
                            <h5 className="text-white my-1 font12">At AshreiTech Academy, We are on a mission to equip individuals with the technical and soft skills they need to thrive in the ever-evolving tech industry. Our dynamic programs and collaborative learning environment provide endless opportunities for growth and innovation</h5>
                            <button className={`border-0 rounded-3 bg-white   px-2  ${view_all}`} style={{ borderRadius: 5 }}>View All Courses</button>
                        </div>
                        <div className="pb-5 mb-5"></div>
                    </div>
                </div>
                <div className={`${parent_box}   row`} style={{
                // backgroundImage: `url(${bg})`,
              
            }}
            onMouseEnter={()=>setActive(true)}
            onMouseLeave={()=>setActive(false)}
            >  
            {
                active?  <div className={`d-flex ${blur_container}`}>
                <div className={`col-12 col-sm-6 text-center ${box1}`}>
                    <h1 className='my-2 mb-md-3'>Mission</h1>
                    <h5 className='  text-muted'>AshreiTech Academy stands as a Center of Excellence, with a mission to revolutionize the IT education of Pakistan by equipping graduates with top-notch IT education ensuring they meet the demands of the evolving & competitive global market.
                    </h5>
                </div>
                <div className={`col-12 col-sm-6 text-center ${box2}`}>
                    <h1 className='my-2 mb-md-3'>Vision</h1>
                    <h5 className='  text-muted'>To establish ourselves as the flagbearer of a sustainable and futuristic Tech Academy, driving the creation of global tech employment opportunities and fostering tech entrepreneurship.
                    </h5>
                </div>
                </div> :
                <>
                    <div className={`col-12 col-sm-6 text-center ml- ${box1}`}>
                    <h1 className='mb-2 mt-2'>Mission</h1>
   {/* <p className='mb-md-3 ml-n3 my-2 my-md-0 font25 font-weight-bold mt-3 d-sm-none d-block'>Mission</p> */}

                </div>
                <div className={`col-12 col-sm-6 text-center ${box2}`}>
                    <h1 className='mb-2 ml-3 mt-2 '> <span className='ml-n3'>{'‎'}</span>Vision</h1>
                </div>
                </>
            }
               
            </div>
            <div className="container-fluid pt-md-5 mx-md-5 mt-md-4">
   <div className="">
   <h1 className='mb-md-3 ml-n3 my-2 my-md-0 d-sm-block d-none text-center'>Our Core Values: The Pillars of Our Success</h1>
   <h5 className='mb-md-5 ml-n3 d-sm-block d-none text-center text-muted'>Guiding Principles that Shape Our Vision and Drive Our Mission</h5>

   <p className='mb-md-3 ml-n3 my-2 my-md-0 font25 font-weight-bold mt-3 text-center d-sm-none d-block'>Our Core Values: The Pillars of Our Success</p>
   <p className='mb-md-5 ml-n3 mb-2 d-sm-none d-block font-weight-bold  text-center font15 text-muted'>Guiding Principles that Shape Our Vision and Drive Our Mission</p>
   </div>
            <div className="row  mx-2 ">
    <div className="col-lg-7">
        <div className="row">
            {logos?.map(({ logo, description }, index) => (
                <div className="col-lg-6 mb-lg-3 p-0" key={index}>
            <div className="row align-items-center">
                <div className="col-2 p-0 d-flex justify-content-center align-items-center">
                    <div className={`${circle} d-flex justify-content-center align-items-center`}>
                        <img src={logo} alt={`Company Logo ${index + 1}`} className={`${logo_img}`} />
                    </div>
                </div>
                <div className="col-10">
                    <h5 className=''>{description}</h5>
                </div>
            </div>
        </div> 
            ))}

        </div>
    </div>
    <div className="col-5 p-0 d-none d-sm-block">
        <img src={section_banner} alt="" className='container-fluid p-0 w-100' srcset="" />
    </div>
   
</div>
            </div>
  
<div className=" px-2 mt-3 d-block d-sm-none">
        <img src={section_banner} alt="" className='container-fluid p-0 w-100' srcset="" />
    </div>
                
            </div>
            <div className={`${section_2} d-sm-block d-none`}>
                <div className="row justify-content-center">
                    <h1 className='text-center mt-sm-5  mb-md-3'>How Ashrei Tech Came Into Being</h1>
                    <div className='row justify-content-center text-center pb-4'>
                        <div className="col-7 p-0">
                        <p className='  text-muted font20 lh-0'>Welcome to the first step in your journey towards an inspiring educational experience at our academy. We offer state-of-the-art facilities designed to foster learning, creativity, and collaboration.</p>

                        </div>
                    </div>
                </div>
                <div className="container-fluid" style={{ overflow: 'hidden' }}>
  <div className="row">
    {hoverImage !== null && (
      <div
        onMouseLeave={handleMouseLeave}
        className="col p-0 mr-1"
        style={{ height: 570, width: '100%' }}
      >
        <img
          src={hoverImage}
          alt=""
          className={`container-fluid p-0`}
          style={{ width: '100%', height: 570, objectFit: 'cover' }}
        />
      </div>
    )}
  </div>

  <div className="row" style={{ flexWrap: 'nowrap' }}>
    {hoverImage == null &&
      images.map(({ thumbnail, full }, index) => (
        <div
          key={index}
          style={{ width: '16.6666666667%', }}
          className="p-0 mr-1"
          onMouseEnter={() => handleMouseEnter(full)}
        >
          <img
            src={thumbnail}
            style={{ height: '100%', width: '100%', objectFit: 'contain' }}
            alt=""
            className="containr-fluid p-0"
          />
        </div>
      ))}
  </div>
</div>



            </div>
            {/* <div className="" style={{height:600,width:600,background:'red'}}></div> */}
            <div
                className="container-fluid py-md-5 "
                style={{
                    backgroundSize: 'cover',
                    backgroundRepeat: 'no-repeat',
                    backgroundPosition: 'center',
                    padding: 0,
                }}
            >
                <div className="row d-flex justify-content-center align-items-center py-4">
                    <div className="col-lg-12 col-md-8 col-sm-12 d-flex flex-column justify-content-center align-items-center text-center ">
                        <h1 className=" mb-md-3 pb-lg-0" id="generic_heading_BookRoom">Achievements</h1>
                        {/* <p className="col-sm-8 pt-2 mt-4 font25">Welcome to the first step in your journey towards an inspiring educational experience at our academy. We offer state-of-the-art facilities designed to foster learning, creativity, and collaboration.</p> */}
                    </div>
                </div>
                
                <div className="row px-5 justify-content-end">
                    <div className="col-sm-3 d-flex flex-column align-items-center text-center text-black p-4 ">
                        <img src={vector1} alt="" style={{height:"auto",width:"25%"}}/>
                        <h3 className="my-2 font-weight-bolder">100 students
                        </h3>
                        <p className="line-height-sm  text-muted">Are Trained, certified and placed
                        </p>
                    </div>
                    <div className="col-sm-3 d-flex flex-column align-items-center text-center text-black p-4 ">
                        <img src={vector2} alt="" style={{height:"auto",width:"25%"}}/>
                        <h3 className="my-2 font-weight-bolder">5 SAP Toppers
                        </h3>
                        <p className="line-height-sm  text-muted">Have Scored The Highest in the SAP Global Certification
                        </p>
                    </div>
                    <div className="col-sm-3 d-flex flex-column align-items-center text-center text-black p-4 ">
                        <img src={vector3} alt="" style={{height:"auto",width:"25%"}}/>
                        <h3 className="my-2 font-weight-bolder">47 students
                        </h3>
                        <p className="line-height-sm  text-muted">Are SAP Global Certification Holders</p>
                    </div>
                    <div className="col-sm-3 d-flex flex-column align-items-center text-center text-black p-4 ">
                        <img src={vector4} alt="" style={{height:"auto",width:"25%"}} />
                        <h3 className="my-2 font-weight-bolder">12 students
                        </h3>
                        <p className="line-height-sm  text-muted">Are Multiple SAP Global Certification Holders
</p>
                    </div>

                </div>
            </div>
           
            <Footer />
        </>
    )
}

export default AboutTheCompany