import { createHashRouter } from "react-router-dom";
import Landing from "./screens/Landing";
import { GetInTouch } from "./screens/AsheriTechComponents/GetInTouch/GetInTouch";
import { RegistrationForm } from "./screens/AsheriTechComponents/RegistrationForm/RegistrationForm";
import Teams from "./screens/Teams/Teams";
import BookaRoom from "./screens/BookaRoom/BookaRoom";
import WhatWeDo from "./screens/WhatWeDo/WhatWeDo";
import AboutTheCompany from "./screens/AboutTheCompany/AboutTheCompany";
import CommingSoon from "./components/Sections/CommingSoonPage/CommingSoon";
import SingleCourse from "./screens/SingleCourseScreen/SingleCourse";
import CorporateTrainings from "./screens/CorporateTrainings/CorporateTrainings";
import CorporateTrainingSingle from "./screens/CorporateTrainingSingle/CorporateTrainingSingle";
import CorporateSocialResponsibility from "./screens/CorporateSocialResponsibility/CorporateSocialResponsibility";
import NewComingSoon from "./components/Sections/CommingSoonPage/NewCommingSoon";
import Chart from "./components/Sections/CommingSoonPage/Chart";
import FindTechTalent from "./screens/FindTechTalent/FindTechTalent";


export const router = createHashRouter([
    {
      path: "/",
      element:  <Landing />,
    },  
    // {
    //   path: "/CommingSoon",
    //   element:  <CommingSoon />,
    // }, 
    {
      path: "/CommingSoon",
      element:  <NewComingSoon />,
    },  
    {
      path: "/GetInTouch",
      element: <GetInTouch />,
    },
    {
      path: "/RegistrationForm",
      element: <RegistrationForm />,
    },
    {
      path: "/teams",
      element: <Teams/>,
    },
    {
      path: "/BookaRoom",
      element: <BookaRoom/>,
    },
    {
      path: "/WhatWeDo",
      element: <WhatWeDo/>,
    },
    {
      path: "/aboutthecompany",
      element: <AboutTheCompany/>,
    },
    {
      path: "/CommingSoonPage",
      element: <CommingSoon/>,
    },
    {
      path: "/courses",
      element: <SingleCourse/>,
    },
    {
      path: "/CorporateTrainings",
      element: <CorporateTrainings/>,
    },
    {
      path: "/CorporateTrainingSingle",
      element: <CorporateTrainingSingle/>,
    },
    {
      path: "/CorporateSocialResponsibility",
      element: <CorporateSocialResponsibility/>,
    },
    {
      path: "/chart",
      element: <Chart/>,
    },
    {
      path: "/findtechtalent",
      element: <FindTechTalent/>,
    },
  ]);