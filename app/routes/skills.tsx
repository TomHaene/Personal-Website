import { useState } from "react";
import Accordion from "~/components/Accordion";
import { Fade } from "react-awesome-reveal";
type AccordionItem = {
  text: string;
  imgName: string;
};

const electricalEngineeringSkills: AccordionItem[] = [
  {
    text: "LTSpice Simulation Software",
    imgName: "LTspicePic.jpg",
  },
  {
    text: "MATLAB",
    imgName: "matlabIcon.png",
  },
  {
    text: "SCPI Command Language",
    imgName: "SCPIcode.png",
  },
  {
    text: "Optical Fiber Splicing",
    imgName: "fiberSplicing.jpg",
  },
  {
    text: "Eye Diagram Analysis",
    imgName: "eyePic.png",
  },
];

const webDevelopmentSkills: AccordionItem[] = [
  {
    text: "React",
    imgName: "reactIcon.webp",
  },
  {
    text: "JavaScript",
    imgName: "jsIcon.png",
  },
  {
    text: "Remix.run",
    imgName: "remixIcon.png",
  },
  {
    text: "Strapi CMS",
    imgName: "strapiIcon.png",
  },
  {
    text: "Flask REST API",
    imgName: "flaskIcon.png",
  },
  {
    text: "Chrome Web Store Developper",
    imgName: "chromeDevelopperIcon.png",
  },
  {
    text: "Figma",
    imgName: "figmaIcon.png",
  },
];

const devTools: AccordionItem[] = [
  {
    text: "Git",
    imgName: "gitIcon.png",
  },
  {
    text: "VSCode",
    imgName: "VSCodeIcon.png",
  },
];

const programmingLanguages: AccordionItem[] = [
  {
    text: "HAM Radio License",
    imgName: "HAM.jpg",
  },
];

export default function Index() {
  const [accord1State, setAccord1State] = useState(false);
  const [accord2State, setAccord2State] = useState(false);
  const [accord3State, setAccord3State] = useState(false);
  const [accord4State, setAccord4State] = useState(false);

  const handleAccordion1Click = () => {
    setAccord1State(!accord1State);
  };

  const handleAccordion2Click = () => {
    setAccord2State(!accord2State);
  };

  const handleAccordion3Click = () => {
    setAccord3State(!accord3State);
  };

  const handleAccordion4Click = () => {
    setAccord4State(!accord4State);
  };

  return (
    <div className="relative min-h-[650px]">
      <Fade triggerOnce>
        <h1 className="font-bold text-white font-museo-moderno text-[35px] underline underline-offset-8 decoration-1 absolute top-8 left-14">
          My Skills
        </h1>
      </Fade>

      <Fade triggerOnce delay={200}>
        <p className="mx-10 md:mx-0 text-custom-gray text-sm font-medium mt-24 md:ml-14">
          Note that I only put the skills that I have full confidence in, and
          not skills that I learned from just a single semester of a class.
        </p>
      </Fade>
      <Fade triggerOnce delay={300}>
        <p className="mx-10 md:mx-0 text-custom-gray text-sm font-medium md:ml-14 mt-2">
          Just click on the accordians below to view the list of skills in that
          category
        </p>
      </Fade>

      {/* Accordion Container */}
      <div className="flex md:justify-evenly mt-16 md:mt-24 mb-16 flex-wrap">
        {/* Left Column */}
        <div className="w-full md:w-auto">
          <Fade triggerOnce delay={450}>
            <Accordion
              containerProps="w-custom-accordion md:w-[550px] mb-10 mx-auto"
              accordState={accord1State}
              handleAccordionClick={handleAccordion1Click}
              titleContent="Electrical Engineering"
              items={electricalEngineeringSkills}
            />
            <Accordion
              containerProps="w-custom-accordion md:w-[550px] mb-10 md:mb-0 mx-auto"
              accordState={accord3State}
              handleAccordionClick={handleAccordion3Click}
              titleContent="Dev Tools"
              items={devTools}
            />
          </Fade>
        </div>

        {/* Right Column */}
        <div className="w-full md:w-auto">
          <Fade triggerOnce delay={450}>
            <Accordion
              containerProps="w-custom-accordion md:w-[550px] mb-10 mx-auto"
              accordState={accord2State}
              handleAccordionClick={handleAccordion2Click}
              titleContent="Web Development"
              items={webDevelopmentSkills}
            />
            <Accordion
              containerProps="w-custom-accordion md:w-[550px] mb-10 md:mb-0 mx-auto"
              accordState={accord4State}
              handleAccordionClick={handleAccordion4Click}
              titleContent="Professional Certifications"
              items={programmingLanguages}
            />
          </Fade>
        </div>
      </div>
    </div>
  );
}
