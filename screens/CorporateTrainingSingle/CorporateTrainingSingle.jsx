import React from 'react'
import TopNavbar from '../../components/Nav/TopNavbar'
import Footer from '../../components/Sections/Footer/Footer'
import ligh_bulb from '../../assets/CorporateTrainingSingle/ligh_bulb.png'
import style from "./style.module.css"
import rectangle1 from '../../assets/CorporateTrainingSingle/Rectangle1.png'
import rectangle2 from '../../assets/CorporateTrainingSingle/Rectangle2.png'
import rectangle3 from '../../assets/CorporateTrainingSingle/Rectangle3.png'
import image28 from '../../assets/CorporateTrainingSingle/image 28.png'
import image29 from '../../assets/CorporateTrainingSingle/image 29.png'
import image30 from '../../assets/CorporateTrainingSingle/image 30.png'


export default function CorporateTrainingSingle() {
    const cardsData = [
        {
            imgSrc: rectangle1,
            title: "Course Overview",
            description: "There are skills new managers can develop to survive and move ahead. Social astuteness, networking, interpersonal influence and true sincerity can help professionals achieve their goals."
        },
        {
            imgSrc: rectangle2,
            title: "Course Overview",
            description: "There are skills new managers can develop to survive and move ahead. Social astuteness, networking, interpersonal influence and true sincerity can help professionals achieve their goals."
        },
        {
            imgSrc: rectangle3,
            title: "Course Overview",
            description: "There are skills new managers can develop to survive and move ahead. Social astuteness, networking, interpersonal influence and true sincerity can help professionals achieve their goals."
        }
    ];
    const cardsCourseData = [
        {
            imgSrc: image28,
            title: "Who Should Attend",
            description: "There are skills new managers can develop to survive and move ahead. Social astuteness, networking, interpersonal influence and true sincerity can help professionals achieve their goals."
        },
        {
            imgSrc: image29,
            title: "Who Should Attend",
            description: "There are skills new managers can develop to survive and move ahead. Social astuteness, networking, interpersonal influence and true sincerity can help professionals achieve their goals."
        },
        {
            imgSrc: image30,
            title: "Who Should Attend",
            description: "There are skills new managers can develop to survive and move ahead. Social astuteness, networking, interpersonal influence and true sincerity can help professionals achieve their goals."
        },

    ];
    const { p_color, generic_heading_left, course_you_bg, generic_heading_left_white, course_house_bg, generic_heading_left_One } = style;
    return (
        <>
            <TopNavbar />
            <div className="container-fluid px-0 px-md-4 mb-5">
                <div className="row px-4">
                    <div className="col-12 col-md-6 d-flex flex-column justify-content-center align-items-left text-center text-md-left">
                        <h1 className='my-3'>Management Skills for New Managers</h1>
                        <p className={`${p_color}`}>Enhance your organisations competitive advantage by driving informed decisions, leading with confidence and influence while understanding challenges.</p>
                        <div><button className='slider_btn'>AshreiTech Academy</button></div>
                    </div>
                    <div className="col-12 col-md-6 d-flex justify-content-center justify-content-md-end  align-items-center">
                        <img src={ligh_bulb} alt="" style={{ width: '80%', height: 'auto' }} />
                    </div>
                </div>
                <div className="row mt-3 mb-5 px-4">
                    <div className="col-12">
                        <h1 className={`${generic_heading_left} text-center text-md-left`}>Sign Up for Our Management Skills Training Course for br New <br className='d-none d-lg-block'/> Managers</h1>
                        <p className={`${p_color} mt-4 text-center text-md-left`}>Discover the key competencies and skills that enable you to transition from team member <br className='d-none d-lg-block' /> to Manager</p>
                    </div>
                </div>
                <div className="row px-4">
                    {cardsData.map((card, index) => (
                        <div className="col-md-4 col-sm-12" key={index}>
                            <div className="card border-0 my-3 my-md-0">
                                <img src={card.imgSrc} className="card-img-top" alt="..." />
                                <div className="p-1">
                                    <h2 className='text-center text-md-left'>{card.title}</h2>
                                    <p className='text-center text-md-left'>{card.description}</p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
            <div className={`${course_house_bg} px-1 px-md-4 py-5 `}>
                <div className="row px-4 d-flex justify-content-center justify-content-md-end  align-items-center text-center text-md-left">
                    <div className="col-md-9 col-sm-12">
                        <h1 className={`${generic_heading_left_white} pb-4 `}>Run this course in-house</h1>
                        <p>Informa Connect Academy’s customised training solutions have helped organisations deliver tailored learning in different languages to suit every requirement.</p>
                        <br />
                        <p>Bespoke training designed for your organisation only, combining traditional classroom setting, blended and online learning models</p>
                    </div>
                    <div className="col-md-3 col-sm-12 d-flex justify-content-md-end justify-content-center">
                        <button className='slider_btn'>Customised Training</button>
                    </div>
                </div>
            </div>

            <div className={`${course_you_bg} px-1 px-md-4 py-5`}>
                <div className="row px-4 d-flex justify-content-center justify-content-md-end  align-items-center text-center text-md-left">
                    <div className="col-md-12 col-sm-12">
                        <h1 className={`${generic_heading_left_One} pb-4 `}>Is this course for you?</h1>
                    </div>
                    <div className="row mt-4">
                        {cardsCourseData.map((card, index) => (
                            <div className="col-md-4 col-sm-12" key={index}>
                                <div className="card border-0 my-3 my-md-0 d-flex justify-content-center align-items-center">
                                    <img src={card.imgSrc} className="rounded" alt="..." style={{ width: '100px', height: '100px' }} />
                                    <div className="p-1">
                                        <h2 className='text-center '>{card.title}</h2>
                                        <p className='text-center '>{card.description}</p>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                    <div className="col-12 d-flex justify-content-center align-items-center my-4">
                        <button className='slider_btn '>Book Now</button>
                    </div>
                </div>
            </div>



            <Footer />
        </>
    )
}
