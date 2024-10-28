import React from "react";
import Slider from "react-slick";
import styled from "styled-components";
import Zikria from '../../assets/testimonials_img/image2.jpg';
import Bilal from '../../assets/testimonials_img/image4.jpg'
import Adeel from '../../assets/testimonials_img/image3.jpg'
import Mahnoor from '../../assets/testimonials_img/image6.png'
import Ibrahim  from '../../assets/testimonials_img/image5.jpg'
import Tehreem  from '../../assets/testimonials_img/image1.jpg'

const cardData = [
  // {
  //   imgSrc: Zikria,
  //   name: "Muhammad Zikria",
  //   title: "Student",
  //   text: "Enrolling in AshreiTech Academy has been one of the most rewarding decisions I've ever made. Even though I'm not paying for my education here, I've been given the same level of attention and support as if I had invested a substantial amount for my training.",
  //   date: "08:21 PM - Jan 4, 2023",
  //   rating: 4,
  //   linkedinUrl: "https://www.linkedin.com/in/syed-muhammad-zikria-zikria-781bb8132/"
  // },
  // {
  //   imgSrc: Bilal,
  //   name: "Bilal Asif Mangi",
  //   title: "Student",
  //   text: "The faculty at AshreiTech Academy is professional and encouraging. I highly recommend visiting the academy and enrolling in their courses.",
  //   date: "08:21 PM - Jan 4, 2023",
  //   rating: 4,
  //   linkedinUrl: "https://www.linkedin.com/in/bilal-asif-mangi-40b183223/"
  // },
  {
    imgSrc: Adeel,
    name: "Adeel Ahmed",
    title: "Student",
    text: "The classes are really interactive, and every week, we experiment with something new in cyber security. There has been a profound addition to my knowledge and which has broadened my skillset – all thanks to my trainers!",
    date: "08:21 PM - Jan 4, 2024",
    rating: 4,
    linkedinUrl: "https://www.linkedin.com/in/adeel-ahmed-1842b6315?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
  },
  {
    imgSrc: Mahnoor,
    name: "Mahnoor Khan",
    title: "Student",
    text: "Being a student at AshreiTech has been a transformative experience for me. The quality of education and the dedication of the faculty are truly exceptional. The curriculum is well-structured, providing a perfect balance of theoretical knowledge and practical application.",
    date: "01:10 PM - March 23, 2024",
    rating: 4,
    linkedinUrl: "https://www.linkedin.com/in/mahnoor-khan-8143722a2/"
  },
  {
    imgSrc: Ibrahim,
    name: "Muhammad Ibrahim",
    title: "Student",
    text: "The instructors were knowledgeable and supportive, the curriculum was comprehensive, and the hands-on projects were invaluable. I now feel well-prepared for my career in procurement, thanks to AshreiTech Academy.",
    date: "05:50 PM - Jan 15, 2023",
    rating: 4,
    linkedinUrl: "https://www.linkedin.com/in/muhammad-ibrahim-505b13235/"
  },
  {
    imgSrc: Tehreem,
    name: "Tehreem Fatima",
    title: "Student",
    text: "AshreiTech was a constant source of support, offering personalized advice and career guidance at every stage. I am thriving in my dream tech job!",
    date: "03:30 PM - Dec 4, 2023",
    rating: 4,
    linkedinUrl: "https://www.linkedin.com/in/tehreem-fatimaa/?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
  }
];

export default function TestimonialSlider() {
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
        breakpoint: 800,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
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

  return (
    <div className="mt-5 " style={{ marginTop: "100px !important" }}>
      <SliderWrapper>
        <Slider {...settings}>
          {cardData.map((card, index) => (
            <Card key={index}>
              <div className="card-body pb-0">
                <div className="row d-flex justify-content-left align-items-center">
                  <div className="" style={{width:'50px', height:'50px'}}>
                    <img
                      src={card.imgSrc}
                      alt={card.name}
                      className="rounded-circle custom-img "
                      style={{width: "100%", height:'auto'}}
                    />
                  </div>
                  <div className="col-1">
                    <a href={card.linkedinUrl} target="_blank" rel="noopener noreferrer">
                      <i className="fa-brands fa-linkedin"></i>
                    </a>
                  </div>
                  <div className="col-8" >
                    <h5 className="font-weight-bolder">{card.name}</h5>
                    <h6 className="">{card.title}</h6>
                  </div>
                </div>
                <p className="card-text mb-3 mt-3 testi_Card_text">{card.text}</p>
                <div className="row justify-content-between mt-3">
                  <div className="col" style={{ color: '#DBDBDB' }}>
                    {card.date}
                  </div>
                  <div className="col" style={{ display: 'contents' }}>
                    <Rating>
                      {[...Array(card.rating)].map((_, i) => (
                        <i key={i} className="fa-solid fa-star rating"></i>
                      ))}
                      {[...Array(5 - card.rating)].map((_, i) => (
                        <i key={i} className="fa-solid fa-star disable_rating"></i>
                      ))}
                    </Rating>
                  </div>
                </div>
              </div>
            </Card>
          ))}
        </Slider>
      </SliderWrapper>
    </div>
  );
}

const SliderWrapper = styled.div`
  .slick-slide {
    padding: 10px 10px; /* Space between slides */
  }
`;

// const Card = styled.div`
//   width: 16rem; /* Adjust the width as needed */
//   margin: 0 auto; /* Center the card */
//   background-color: white; /* White background for the card */
//   border-radius: 10px; /* Optional: Rounded corners */
//   box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1); /* Optional: Box shadow for a subtle effect */
//   padding: 10px; /* Optional: Padding inside the card */
//   .card {
//     width: 100%;
//     margin: 0 10px; /* Space between cards */
//   }
// `;

const Rating = styled.div`
  .rating {
    color: #FFCF59 !important;
    text-align: end !important;
  }
  .disable_rating {
    color: grey !important;
  }
`;

const Card = styled.div`
  width: 16rem;
  margin: 0 auto;
  background-color: white;
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  padding: 10px;

  a {
    color: inherit; /* Initial color */
    transition: color 0.3s ease; /* Smooth transition on hover */

    &:hover {
      color: #0077b5; /* LinkedIn blue */
    }
  }

  .card {
    width: 100%;
    margin: 0 10px;
  }
`;
