import React from 'react'
import TopNavbar from '../../components/Nav/TopNavbar'
import Footer from '../../components/Sections/Footer/Footer'
import wave from '../../assets/WhatWeDo/wave2.png'
import greenpattern from '../../assets/WhatWeDo/greenpattern.png'
import WeD1 from '../../assets/WhatWeDo/WeD1.png'
// import WeD2 from '../../assets/WhatWeDo/WeD2.png'
import WeD3 from '../../assets/WhatWeDo/WeD3.png'
import WeD4 from '../../assets/WhatWeDo/WeD4.png'
import style from "./style.module.css";
import { useNavigate } from 'react-router-dom';


export default function WhatWeDo() {
    const navigate = useNavigate();
    const handleButtonClick = () => {
        navigate('/CorporateTrainings');
    };
    const { hover_text, image_container, } = style
    
    return (
        <>
            <TopNavbar />
            <div
                className="container-fluid"
                style={{
                    backgroundColor: '#5A8C75',
                    backgroundImage: `url(${wave})`,
                    backgroundSize: 'cover',
                    backgroundRepeat: 'no-repeat',
                    padding: 0,
                }}
            >
                <div className="container py-2 ">
                    <div className="row p-3 p-md-5 d-flex justify-content-center align-items-center">
                        <div className="col-lg-6 col-md-6 col-sm-12">
                            <div className={`${image_container}`}>
                                <img src={WeD1} alt="" />
                                <h3 className={`${hover_text}`}>
                                    “Things change and unless you’re open to other ideas, you’re going to be totally irrelevant.”
                                    <br />–Tom Whitby
                                </h3>
                            </div>
                        </div>
                        <div className="col-lg-6 col-md-6 col-sm-12 pb-4 pb-lg-0 text-center text-lg-left text-white">
                            <h1>We Enable You With Tech Education:</h1>
                            <p className="mt-3">Build or enhance your tech career by enrolling in our tech courses and get globally certified. From in-demand areas like cloud computing and cyber security, to coveted platform partner certifications including Microsoft, SAP, Oracle, Salesforce amongst others, we offer a diverse range of courses and training programs tailored to industry demands.</p>
                            <div className='d-flex pt-4 flex-column flex-lg-row'>
                                <div className="col-md-6 col-sm-12 pl-0 mb-4 mb-md-0">
                                    <h5>Technical Prowess</h5>
                                    <p className='pt-2'>Master the in-demand technical skills required for your chosen career path in emerging technologies.</p>
                                </div>
                                <div className="col-md-6 col-sm-12">
                                    <h5>Entrepreneurial Mindset</h5>
                                    <p className='pt-2'>Nurture your entrepreneurial spirit with programs designed to empower you to turn your ideas into reality.</p>
                                </div>
                            </div>
                            <button className="slider_btn" onClick={()=> navigate('/#coursesWeOffer')} >View All Courses</button>
                        </div>
                    </div>
                </div>
            </div>

            <div className="container-fluid py-2 px-0"
                style={{
                    position: 'relative',
                }}
            >
                <div className=" d-none d-md-block" style={{
                    backgroundImage: `url(${greenpattern})`,
                    backgroundSize: 'cover',
                    backgroundRepeat: 'no-repeat',
                    padding: 0,
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    right: 0,
                    bottom: 0,
                }}></div>
                <div className="container">
                    <div className="row p-3 p-md-5 d-flex justify-content-center align-items-center">
                        <div className="col-lg-6 col-md-6 col-sm-12 pb-4 pb-lg-0 text-center text-lg-left">
                            <h1>We Help You Rock Your In-House Events:</h1>
                            <p className="mt-3"> Being located precisely in
                                the center of the city, with high end safety and security, and equipped with all
                                the high-tech amenities, you get everything you need to run a successful in-house training, meetings & networking events. Our experienced staff is well-versed in the latest audiovisual technologies, ensuring smooth operations and
                                technical support throughout your event.
                            </p>
                            <div className='d-flex pt-4 flex-column flex-lg-row'>
                                <div className="col-md-6 col-sm-12 pl-0 mb-4 mb-md-0">
                                    <h5>Convenience and Flexibility</h5>
                                    <p className='pt-2'>With customizable room layouts and amenities, our service offers flexible solutions for
                                        various event formats, ensuring convenience for both organizers and attendees.
                                    </p>
                                </div>
                                <div className="col-md-6 col-sm-12">
                                    <h5>Professional Image</h5>
                                    <p className='pt-2'>Hosting your corporate events and trainings in our purpose-built facilities enhances your
                                        professional image and demonstrates your commitment to quality and excellence.</p>
                                </div>
                            </div>
                            <button className="slider_btn" onClick={()=> navigate('/BookaRoom')}>Book Your Space</button>
                        </div>
                        <div className="col-lg-6 col-md-6 col-sm-12">
                            <div className={`${image_container}`}>
                                {/* <img src={WeD2} alt="" /> */}
                                <h3 className={`${hover_text}`}>
                                    "The classroom should be an entrance into the world, not an escape from it."<br /> –John Ciardi
                                </h3>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div
                className="container-fluid"
                style={{
                    backgroundColor: '#5A8C75',
                    backgroundImage: `url(${wave})`,
                    backgroundSize: 'cover',
                    backgroundRepeat: 'no-repeat',
                    padding: 0,
                }}
            >
                <div className="container py-2">
                    <div className="row p-3 p-md-5 d-flex justify-content-center align-items-center">
                        <div className="col-lg-6 col-md-6 col-sm-12">
                            <div className={`${image_container}`}>
                                <img src={WeD3} alt="" />
                                <h3 className={`${hover_text}`}>
                                    "Anyone who stops learning is old, at twenty or eighty. Anyone who keeps learning stays young." <br /> –Henry Ford
                                </h3>
                            </div>
                        </div>
                        <div className="col-lg-6 col-md-6 col-sm-12 pb-4 pb-lg-0 text-center text-lg-left text-white">
                            <h1>We Drive Your Workforce to the Next Level:</h1>
                            <p className="mt-3">At AshreiTech, we recognize the critical role of continuous learning in maintaining a competitive
                                edge in today’s fast-paced digital landscape. That’s why we partner with industry-renowned
                                experts to offer customized corporate tech training programs tailored to meet the unique
                                needs of every organization.</p>
                            <div className='d-flex pt-4 flex-column flex-lg-row'>
                                <div className="col-md-6 col-sm-12 pl-0 mb-4 mb-md-0">
                                    <h5>Expert Training Partners </h5>
                                    <p className='pt-2'>Our training programs are led by top industry professionals, ensuring
                                        your employees receive the highest quality education and insights from leaders in their fields.</p>
                                </div>
                                <div className="col-md-6 col-sm-12">
                                    <h5>Comprehensive Tech Training </h5>
                                    <p className='pt-2'>From foundational skills to advanced tech competencies, our
                                        extensive range of courses covers all your tech training needs, all set to empower your team.</p>
                                </div>
                            </div>
                            <button className="slider_btn" onClick={handleButtonClick} >Explore the Workshops</button>
                        </div>
                    </div>
                </div>
            </div>

            <div className="container-fluid py-2 px-0"
                style={{
                    position: 'relative',
                }}
            >
                <div className=" d-none d-md-block" style={{
                    backgroundImage: `url(${greenpattern})`,
                    backgroundSize: 'cover',
                    backgroundRepeat: 'no-repeat',
                    padding: 0,
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    right: 0,
                    bottom: 0,
                }}></div>
                <div className="container">
                    <div className="row p-3 p-md-5 d-flex justify-content-center align-items-center">
                        <div className="col-lg-6 col-md-6 col-sm-12 pb-4 pb-lg-0 text-center text-lg-left">
                            <h1>We Let You Empower Futures and Become a Talent Hero:</h1>
                            <p className="mt-3">CSR giving is perhaps one on the most sustainable forms of giving in
                                the overall philanthropic canvas of Pakistan. Yes, investing in healthcare, primary education,
                                social welfare, and habitat is important, but It’s also critically important to invest in domains
                                that strengthens the overall GDP and ultimately benefit everything mentioned above.</p>
                            <div className='d-flex pt-4 flex-column flex-lg-row'>
                                <div className="col-md-6 col-sm-12 pl-0 mb-4 mb-md-0">
                                    <h5>Empower The Next Generation</h5>
                                    <p className='pt-2'>We are working to make CSR easy and sustainable, whether it be to promote DEI, upskill
                                        marginalized communities, or sponsor a batch.</p>
                                </div>
                                <div className="col-md-6 col-sm-12">
                                    <h5>Explore Collaborative Avenues</h5>
                                    <p className='pt-2'>We are open to hear creative approaches on how we can collectively work to develop
                                        workforce for future technologies and cater to the global IT outsourcing market.
                                    </p>
                                </div>
                            </div>
                            <button className="slider_btn" onClick={()=> navigate('/CommingSoon')}>Make An Impact
                            </button>
                        </div>
                        <div className="col-lg-6 col-md-6 col-sm-12">
                            <div className={`${image_container}`}>
                                <img src={WeD4} alt="" />
                                <h3 className={`${hover_text}`}>
                                    "The business of business should not be about money. It should be about responsibility. It should be about public good, not private greed." <br /> –Anita Roddick
                                </h3>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </>
    )
}
