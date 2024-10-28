import React, { useState } from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import ExpandLessIcon from '@mui/icons-material/ExpandLess';
import style from "./style.module.css";
// import puzzleImage from '../../assets/yellow puzzle.png';

const Faq = (props) => {
  const { faq_container, faq, expand, puzzle } = style;
  const [showMore, setShowMore] = useState(false);

  const handleShowMore = () => {
    setShowMore(!showMore);
  };

  return (
    <div className={`row justify-content-center mb-5 mx-lg-5 mt-5 m-1  ${faq_container}`} style={{ margin: "auto", backgroundColor: 'white', position: 'relative' }} >
      {/* <div className='d-none d-lg-block'><img src={puzzleImage} alt="Puzzle" className={puzzle} /></div> */}
      <div className='col-lg-12 col-sm-6'>
        <Typography>
          <div className="mb-4">
            <h1 className='pb-4 mb-4 mt-5 generic_heading' id='generic_heading' style={{ color: '#000000' }}>
              Frequently Asked Questions
            </h1>
          </div>
        </Typography>
        {props?.data?.slice(0, showMore ? props.data.length : 3).map((faqItem) => (
          <Accordion sx={{ '&::before': { backgroundColor: 'white' } }}
            key={faqItem?.id}
            className={`${faq}`}
            style={{
              background: "#fff",
              marginBottom: 20,
              padding: "10px 10px 10px 10px",
              borderRadius: 15,
              display: 'flex',
              justifyContent: "center",
              flexDirection: "column",
            }}
          >
            <AccordionSummary
              expandIcon={<ExpandMoreIcon style={{ color: '#5A8C75', fontSize: 40 }} />}
              aria-controls="panel1a-content"
              id="panel1a-header"
            >
              <Typography sx={{ fontWeight: 'bold' }}>{faqItem?.question}</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography>
                <span style={{ whiteSpace: "pre-line" }} dangerouslySetInnerHTML={{ __html: faqItem?.answer }}></span>
              </Typography>
            </AccordionDetails>
          </Accordion>
        ))}
        <div className={`row justify-content-center`}>
          {showMore ? (
            <ExpandLessIcon
              className={`${expand}`}
              onClick={handleShowMore}
              style={{ color: '#5A8C75', fontSize: 40, cursor: 'pointer' }}
            />
          ) : (
            <ExpandMoreIcon
              className={`${expand}`}
              onClick={handleShowMore}
              style={{ color: '#5A8C75', fontSize: 40, cursor: 'pointer' }}
            />
          )}
        </div>
      </div>
    </div>
  );
};

export default Faq;
