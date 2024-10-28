import React, { useEffect, useState } from 'react';
import style from "./style.module.css";
import Countup from "react-countup";
import ScrollTrigger from 'react-scroll-trigger';

const InfoCard = (props) => {
    const { Info_container, vector, gradientCircle, item } = style;
    const [counter, setCounter] = useState(false);
    const [windowWidth, setWindowWidth] = useState(window.innerWidth);

    useEffect(() => {
      const handleResize = () => {
        setWindowWidth(window.innerWidth);
      };
      window.addEventListener("resize", handleResize);
  
      return () => {
        window.removeEventListener("resize", handleResize);
      };
    }, []);
    return (
        <ScrollTrigger onEnter={() => setCounter(true)} onExit={() => setCounter(false)}>
            {
                windowWidth < 580 ?<div className={`${props?.data?.length <= 4 ? " mt-0" :`${Info_container} mt-5`} p-1  mx-0 mx-lg-5`}>
                <div className={`   ${props?.data?.length <= 4 ? 'px-sm-5 justify-content-between pt-sm-4' : 'd-flex flex-wrap justify-content-center pt-4'} align-items-center `}>
                    {props?.data?.map(({ image, heading, discription }, index) => {
                        const updatedDescription = parseInt(discription.replace(/[K+]/g, ''), 10);
                        return (
                        <>
                            <div key={index} className={`${item} ${props?.data?.length <= 4 ? '  py-5' : 'col-6 col-md-3 col-lg-2 flex-column justify-content-center text-center' } d-flex flex-column flex-lg-row align-items-center  mb-3  text-lg-left `}>
                                {/* <div>
                                    <img src={image} className={`${vector} mr-2`} style={{ width: '65%' }} alt="Students" />
                                </div> */}
                                <div className='ml-n3 text-center'>
                                    <h6 className={`   ${props?.data?.length <= 4 ? 'my-1' : ''}`}>{heading}</h6>
                                    {!props.count && <h6 style={{ fontWeight: 'bold' }}>{discription}</h6>}
                                    {props.count && counter &&
                                        <h6 style={{ fontWeight: 'bold' }}>
                                            <Countup start={0} end={updatedDescription} />+
                                        </h6>
                                    }
                                </div>
                            </div>
                            {
                                props?.data?.length <= 4 &&  <hr style={{background:"#008F71"}}/>
                            }
                                
                        </>
                        );
                    })}
                </div>
                {props?.gradient !== false && <div className={`${gradientCircle} d-none d-lg-block`}></div>}
            </div> :          <div className={`${Info_container} p-1 mt-5 mx-0 mx-lg-5`}>
                <div className={`d-flex  ${props?.data?.length <= 4 ? 'px-5 justify-content-between' : 'flex-wrap justify-content-center'} align-items-center pt-4`}>
                    {props?.data?.map(({ image, heading, discription }, index) => {
                        const updatedDescription = parseInt(discription.replace(/[K+]/g, ''), 10);
                        return (
                            <div key={index} className={`${item} ${props?.data?.length <= 4 ? '' : 'col-6 col-md-4 col-lg-2'} d-flex flex-column flex-lg-row align-items-center justify-content-center mb-3 text-center text-lg-left`}>
                                {/* <div>
                                    <img src={image} className={`${vector} mr-2`} style={{ width: '65%' }} alt="Students" />
                                </div> */}
                                <div className='ml-n3'>
                                    {!props.count && <h6  className='text-center'  style={{fontSize:72,fontWeight:400 }}>{discription}</h6>}
                                    {props.count && counter &&
                                        <h6 className='text-center' style={{ fontWeight: 'bold' }}>
                                            <Countup start={0} end={updatedDescription} />+
                                        </h6>
                                    }
                                    <h6 className='text-bold font20'>{heading}</h6>
                                </div>
                            </div>
                        );
                    })}
                </div>
                {props?.gradient !== false && <div className={`${gradientCircle} d-none d-lg-block`}></div>}
            </div>
            }
   
        </ScrollTrigger>
    );
};

export default InfoCard;
