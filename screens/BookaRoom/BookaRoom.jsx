import React from 'react';
import TopNavbar from '../../components/Nav/TopNavbar';
import Footer from '../../components/Sections/Footer/Footer';
import BookaScreenHero from '../../assets/BookaScreen/BookaScreenHero.jpg';
import BookaScreenHeroContainer from '../../assets/BookaScreen/BookaScreenHeroContainer.png';
import wave3 from '../../assets/BookaScreen/Wave3.png';
import wave2 from '../../assets/BookaScreen/Wave2.png';
import alrazi from '../../assets/BookaScreen/al-razi.jpg';
import alFarabi from '../../assets/BookaScreen/al-farabi.jpg';
import alkhawarzmi from '../../assets/BookaScreen/al-khawarizmi.jpg';
import alkindi from '../../assets/BookaScreen/al-kindi.jpg';
import heart from '../../assets/BookaScreen/vanue at the heart of the city.png';
import wifi from '../../assets/BookaScreen/wifi.png'
import tech from '../../assets/BookaScreen/high tech learning.png'
import pray from '../../assets/BookaScreen/prayer area.png'
import glowimg1 from '../../assets/BookaScreen/Glowimg1.png'
import Slider from "react-slick";
import styled from "styled-components";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import './style.module.css'
import style from "./style.module.css";
import videoOne from '../../assets/video/video1.mp4'
import videoTwo from '../../assets/video/video2.mp4'
import videoThree from '../../assets/video/video3.mp4'
import { BookaRoomForm } from './BookaRoomForm';
import videoFour from '../../assets/video/video4.mp4'
import videoFive from '../../assets/video/video5.mp4'
import videoSix from '../../assets/video/video6.mp4'


export default function BookaRoom() {
    const cardData = [
        {
            src: alrazi,
            alt: "Al-Razi",
            title: "Al-Razi",
            capacity: "Capacity: 15 to 25 Person"
        },
        {
            src: alFarabi,
            alt: "Al-Farabi",
            title: "Al-Farabi",
            capacity: "Capacity: 15 to 25 Person"
        },
        {
            src: alkhawarzmi,
            alt: "Al-Khwarizmi",
            title: "Al-Khwarizmi",
            capacity: "Capacity: 15 to 25 Person"
        },
        {
            src: alkindi,
            alt: "Al-Kindi",
            title: "Al-Kindi",
            capacity: "Capacity: 15 to 25 Person"
        }
    ];
    const settings = {
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        arrows: false,
        autoplay: true,
        autoplaySpeed: 3000,
        responsive: [
            {
                breakpoint: 1200,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                },
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                },
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                },
            },
        ],
    };
    const { modallg, gradientCircle, gradientCircleLeft, gradientCircleLeftTop, gradientCircleLeftTwo } = style;
    return (
        <>
            <TopNavbar />

            <div
                className="container-fluid py-4 "
                style={{
                    backgroundImage: `url(${BookaScreenHeroContainer})`,
                    backgroundSize: 'cover',
                    backgroundRepeat: 'no-repeat',
                    height: 'auto',
                    width: '100%',
                }}
            >
                <div className="row">
                    <div
                        className="col-12 py-5 container"
                        style={{
                            position: 'relative',
                            backgroundImage: `url(${BookaScreenHero})`,
                            backgroundSize: 'cover',
                            backgroundRepeat: 'no-repeat',
                            height: 'auto',
                            width: '100%',
                            borderRadius: '50px',
                        }}
                    >
                        <div
                            style={{
                                position: 'absolute',
                                top: 0,
                                left: 0,
                                right: 0,
                                bottom: 0,
                                backgroundColor: 'rgba(0, 0, 0, 0.5)',
                                borderRadius: '50px',
                            }}
                        ></div>
                        <div className="d-flex flex-column justify-content-center align-items-center py-5 my-5 text-center" style={{ position: 'relative' }}>
                            <h2 className="font-weight-bold text-white pt-5 mt-5">The Trusted Venue Partner for all your Corporate
                                Events & Conferences</h2>
                            <h6 className="text-white mt-3">No matter if it’s a 10-person strategy meeting or a
                                1000-person conference, we’ve got your back.</h6>
                            <button className="slider_btn" data-toggle="modal" data-target="#bookingModal">Book Now</button>
                        </div>
                        <div className="pb-5 mb-5"></div>
                    </div>
                </div>
            </div>

            <div className="container-fluid py-5" style={{ position: 'relative', zIndex: 2 }}>
                <div className={`${gradientCircle} d-none d-md-block`}></div>
                <div className={`${gradientCircleLeft} d-none d-md-block`}></div>
                <div className='d-none d-lg-block' style={{
                    width: '10px',
                    height: '10px',
                    backgroundColor: '#525FE1',
                    borderRadius: '50%',
                    marginLeft: '1200px',
                    top: '40px',
                    position: 'relative',
                }}>
                    <div className='d-none d-lg-block' style={{
                        width: '15px',
                        height: '15px',
                        backgroundColor: '#FFCF59',
                        borderRadius: '50%',
                        border: '1px solid white',
                        top: '-40px',
                        left: '-50px',
                        position: 'absolute'
                    }}></div>
                </div>
                <div className="row d-flex flex-column justify-content-center align-items-center ">
                    <div className="col-12 mb-4">
                        <h1 className='generic_heading'>Rooms</h1>
                    </div>
                </div>
                <div className="row d-flex justify-content-center p-0 p-lg-5">
                    <div className="col-sm-12 col-md-10 col-lg-12  justify-content-center ">
                        <SliderWrapper>
                            <Slider {...settings}>
                                {cardData.map((card, index) => (
                                    <div key={index} className="d-flex justify-content-center align-items-center col-12 ">
                                        <div className="">
                                            <img src={card.src} alt={card.alt} className='slick-slide' />
                                            <div className="info">
                                                <h2>{card.title}</h2>
                                            </div>
                                            <div className="overlay">
                                                <h4>{card.capacity}</h4>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </Slider>
                        </SliderWrapper>
                    </div>
                </div>
            </div>

            <div
                className="container-fluid py-4 "
                style={{
                    backgroundColor: '#5A8C75',
                    backgroundImage: `url(${wave2})`,
                    backgroundSize: 'cover',
                    backgroundRepeat: 'no-repeat',
                    backgroundPosition: 'center',
                }}
            >
                <div className="row d-flex justify-content-center align-items-center py-4">
                    <div className="col-lg-12 col-md-8 col-sm-12 d-flex flex-column justify-content-center align-items-center text-center text-white ">
                        <h1 className="pb-4 pb-lg-0" id="generic_heading_BookRoom">What's Included ?</h1>
                        <p className="col-lg-8 col-md-12 pt-2 mt-4 p-0">Our state-of-the-art learning facility includes purpose-built training rooms, assessment centers, meeting rooms, labs, in-house amphitheater, podcast, and recording setup for e-Learning, high-end restaurant, networking event spaces and a full-service conference arena.</p>
                    </div>
                </div>
                <div className='d-sm-block d-md-none d-lg-none '>
                    <div className="col-12 d-flex justify-content-center align-items-center p-0 my-5">
                        <div className="col-lg-4 col-md-4 col-sm-12 bg-white d-flex flex-column justify-content-center align-items-center text-center text-black p-4" style={{ borderRadius: '24px' }}>
                            <div className="col-sm-5 col-lg-3">
                                <img src={heart} alt="" style={{ width: '55px', height: '55px' }} />
                            </div>
                            <h4 className="my-2 ">Venue At The Heart Of The City –
                            </h4>
                            <p className="line-height-sm">Located inside NASTP, Karachi, with shaded parking space for up to 500 cars!
                            </p>
                        </div>
                    </div>
                    <div className="col-12 d-flex justify-content-center align-items-center p-0 my-5">
                        <div className="col-lg-4 col-md-4 col-sm-12 bg-white d-flex flex-column justify-content-center align-items-center text-center text-black py-4" style={{ borderRadius: '24px' }}>
                            <div className="col-sm-5 col-lg-3">
                                <img src={pray} alt="" style={{ width: '55px', height: '55px' }} />
                            </div>
                            <h4 className="my-2 ">Segregated Prayer Area –                            </h4>
                            <p className="line-height-sm">Neat and tidy, for ladies and gentlemen, with ample rest rooms on every floor!
                            </p>
                        </div>
                    </div>
                    <div className="col-12 d-flex justify-content-center align-items-center p-0 my-5">
                        <div className="col-lg-4 col-md-4 col-sm-12 bg-white d-flex flex-column justify-content-center align-items-center text-center text-black py-4" style={{ borderRadius: '24px' }}>
                            <div className="col-sm-5 col-lg-3">
                                <img src={wifi} alt="" style={{ width: '55px', height: '55px' }} />
                            </div>
                            <h4 className="my-2 " style={{ color: 'black !important' }} >24/7 Wi-Fi –
                            </h4>
                            <p className="line-height-sm">Obviously, it’s not a luxury – it’s a necessity, because we are serving a global world!
                            </p>
                        </div>
                    </div>
                    <div className="col-12 d-flex justify-content-center align-items-center p-0 my-5">
                        <div className="col-lg-4 col-md-4 col-sm-12 bg-white d-flex flex-column justify-content-center align-items-center text-center text-black py-4" style={{ borderRadius: '24px' }}>
                            <div className="col-sm-5 col-lg-3">
                                <img src={tech} alt="" style={{ width: '55px', height: '55px' }} />
                            </div>
                            <h4 className="my-2 ">High-Tech Learning Venue –                            </h4>
                            <p className="line-height-sm">Of Course, we are a tech company, and we know the importance of tech amenities!
                            </p>
                        </div>
                    </div>
                </div>

                <div className="col-12 justify-content-center align-items-center py-4 d-none d-md-flex d-lg-flex">
                    <div className="col-lg-4 col-md-4 col-sm-12 bg-white d-flex flex-column justify-content-center align-items-center text-center text-black p-4 " style={{ borderRadius: '24px' }}>
                        <div className="col-md-6 col-lg-3">
                            <img src={heart} alt="" style={{ width: '55px', height: '55px' }} />
                        </div>
                        <h4 className="my-2 ">Venue At The Heart Of The City –</h4>
                        <p className="line-height-sm">Located inside NASTP, Karachi, with shaded parking space for up to 500 cars!</p>
                    </div>
                    <div className="col-lg-4 col-md-4 col-sm-12 bg-white d-flex flex-column justify-content-center align-items-center text-center text-black p-4 ml-5" style={{ borderRadius: '24px' }}>
                        <div className="col-md-6 col-lg-3">
                            <img src={pray} alt="" style={{ width: '55px', height: '55px' }} />
                        </div>
                        <h4 className="my-2 ">Segregated Prayer Area –</h4>
                        <p className="line-height-sm">Neat and tidy, for ladies and gentlemen, with ample rest rooms on every floor!</p>
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
                <div className="col-12 justify-content-center align-items-center py-4 d-none d-md-flex d-lg-flex">
                    <div className="col-lg-4 col-md-4 col-sm-12 bg-white d-flex flex-column justify-content-center align-items-center text-center text-black p-4" style={{ borderRadius: '24px' }}>
                        <div className="col-md-6 col-lg-3">
                            <img src={wifi} alt="" style={{ width: '55px', height: '55px' }} />
                        </div>
                        <h4 className="my-2  " style={{ color: 'black !important' }} >24/7 Wi-Fi –</h4>
                        <p className="line-height-sm">Obviously, it’s not a luxury – it’s a necessity, because we are serving a global world!</p>
                    </div>
                    <div className="col-lg-4 col-md-4 col-sm-12 bg-white d-flex flex-column justify-content-center align-items-center text-center text-black p-4 ml-5" style={{ borderRadius: '24px' }}>
                        <div className="col-md-6 col-lg-3">
                            <img src={tech} alt="" style={{ width: '55px', height: '55px' }} />
                        </div>
                        <h4 className="my-2 ">High-Tech Learning Venue –</h4>
                        <p className="line-height-sm">Of Course, we are a tech company, and we know the importance of tech amenities!</p>
                    </div>
                </div>
            </div>

            <div className="container-fluid py-4" style={{ position: 'relative', zIndex: 1 }}>
                <div className={`${gradientCircleLeftTop} d-none d-md-block`}></div>
                <div className="row p-0 p-lg-5 d-flex justify-content-center align-items-center">
                    <div className="col-lg-6 col-md-6 col-sm-12 pb-4 pb-lg-0 text-center text-lg-left px-0 px-lg-5">
                        <h1>Professional Ambiance</h1>
                        <p className="mt-3" style={{ color: '#6D6D6D' }}>
                            Our rooms are meticulously designed to create a professional atmosphere
                            conducive to productivity and focus. <br />
                            Each room is customized to suit various types and room layouts of
                            corporate events and trainings, whether it's a board meeting, seminar,
                            workshop, or training session.
                        </p>
                        <button className="slider_btn d-none">Explore Our Rooms</button>
                    </div>
                    <div className="col-lg-6 col-md-6 col-sm-12">
                        <video controls autoPlay muted loop style={{
                            width: '100%',
                            height: 'auto',
                            borderRadius: '15px',
                            zIndex: 2,
                            position: 'relative'
                        }}>
                            {/* <source src={videoOne} type="video/mp4" /> */}
                            <source src={videoFour} type="video/mp4" />
                            Your browser does not support the video tag.
                        </video>
                    </div>
                </div>
            </div>

            <div className="container-fluid" style={{
                backgroundColor: '#5A8C75',
                backgroundImage: `url(${wave3})`,
                backgroundSize: 'cover',
                backgroundRepeat: 'no-repeat',
            }}>
                <div className="py-4">
                    <div className="row p-0 p-lg-5 d-flex justify-content-center align-items-center">
                        <div className="col-lg-6 col-md-6 col-sm-12">
                            <video controls autoPlay muted loop style={{
                                width: '100%',
                                height: 'auto',
                                borderRadius: '15px',
                            }}>
                                {/* <source src={videoTwo} type="video/mp4" /> */}
                                <source src={videoSix} type="video/mp4" />
                                Your browser does not support the video tag.
                            </video>
                        </div>
                        <div className="col-lg-6 col-md-6 col-sm-12 pb-4 pb-lg-0 text-center text-lg-left text-white px-0 px-lg-5">
                            <h1>High-Tech Equipment</h1>
                            <p className="mt-3">
                                State-of-the-art audiovisual equipment ensures seamless
                                presentations and interactive sessions.
                                <br />
                                High-resolution latest commercial grade screen and traditional
                                whiteboards cover all the training needs of communication and
                                collaboration.
                            </p>
                            <button className="slider_btn d-none">Learn More</button>
                        </div>
                    </div>
                </div>
            </div>

            <div className="container-fluid py-4" style={{ position: 'relative', zIndex: 1 }}>
                <div className={`${gradientCircleLeftTwo} d-none d-md-block`}></div>
                <div className="row p-0 p-lg-5 d-flex justify-content-center align-items-center">
                    <div className="col-lg-6 col-md-6 col-sm-12 pb-4 pb-lg-0 text-center text-lg-left px-0 px-lg-5">
                        <h1>Customizable Amenities</h1>
                        <p className="mt-3" style={{ color: '#6D6D6D' }}>
                            We offer customizable amenities such as catering services, coffee stations,
                            and breakout areas to meet specific event requirements.
                            <br />
                            Our dedicated staff is available to assist with setup, technical support, and
                            any other logistical needs, ensuring a seamless event experience.
                        </p>
                        <div className="d-none d-lg-block" style={{
                            width: '10px',
                            height: '10px',
                            backgroundColor: '#525FE1',
                            borderRadius: '50%',
                            marginLeft: '100px',
                            marginTop: '50px',
                            border: '1px solid white',
                        }}></div>
                        <button className="slider_btn d-none">View Packages</button>
                    </div>
                    <div className="col-lg-6 col-md-6 col-sm-12">
                        <video controls autoPlay muted loop style={{
                            width: '100%',
                            height: 'auto',
                            borderRadius: '15px',
                            zIndex: 2,
                            position: 'relative'
                        }}>
                            {/* <source src={videoThree} type="video/mp4" /> */}
                            <source src={videoFive} type="video/mp4" />
                            Your browser does not support the video tag.
                        </video>
                    </div>
                </div>
            </div>


            <div className="modal fade" id="bookingModal" tabIndex="-1" role="dialog" aria-labelledby="bookingModalLabel" aria-hidden="true">
                <div className={`${modallg} modal-dialog`} id='modalForm' role="document">
                    <div className="modal-content">
                        <div className="modal-body">
                            <BookaRoomForm />
                        </div>
                    </div>
                </div>
            </div>


            <Footer />
        </>
    );
}


const SliderWrapper = styled.div`
  .slick-slide {
    position: relative;
    text-align: center;
    border-radius: 25px !important;
  }

  img {
    width: 100%;
    height: auto;
    /* border-radius: 25px !important; */
  }

  .info {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    color: white;
    /* padding: 10px; */
    transition: opacity 0.3s ease;
  }

  .overlay {
    position: absolute;
    top: 50%;
    left: 50%;
    width: 93%;
    height: 100%;
    background: rgba(0, 0, 0, 0.7);
    transform: translate(-50%, -50%);
    color: white;
    display: flex;
    align-items: center;
    justify-content: center;
    opacity: 0;
    transition: opacity 0.3s ease;
    border-radius: 25px !important;
  }

  .slick-slide:hover .info {
    opacity: 0;
  }

  .slick-slide:hover .overlay {
    opacity: 1;
  }

  
`;