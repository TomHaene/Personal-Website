import { CodeXml, Eye } from "lucide-react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Carousel } from "react-bootstrap";
import { useState } from "react";

type Container = {
  company: string;
  myJobTitle: string;
  startDate: string;
  endDate: string;
  description: string[];
  imgName: string;
};

const workExperience: Container[] = [
  {
    company: "Populus Solidarity Cooperative",
    myJobTitle: "Front-End Web Developer Intern",
    startDate: "May 2024",
    endDate: "August 2024",
    description: [
      "The Populus Solidarity Cooperative is dedicated to empowering non-profits and cooperatives. During this project, I collaborated with a skilled team of software engineeris to build a digital dashboard for Populus' clients. This dashboard, offered as a SaaS product, enables non-profits and cooperatives to efficiently manage critical governmental compliance tasks while also providing valuable resources for securing funding.",
      "The tech-stack we used for the frontend was React, Remix.run, TailwindCSS and React Aria as a component library. We also used Payload CMS as our backend.",
      "I received the Global Challenges Award (GCA) from McGill University, which funded my work on this impactful project. ",
      "While my main ambition isn't to become a Web-Developer, I learned many valuable lessons from this experience, most notably I learned first-hand how experienced engineers work together to efficiently build, test and deploy real world software, and observed the software development cycle in action.",
    ],
    imgName: "populusLogo.png",
  },
  {
    company: "Prof. David V Plants Photonics Research Group McGill",
    myJobTitle: "Part-Time Undergraduate Researcher",
    startDate: "May 2024",
    endDate: "Present",
    description: [
      "Photonics is the field of engineering that deals with using EM Radiation near the visible range for various applications. Common examples of application are in Fiber Optic cables, Optical Computing and photonic devices like lasers.",
      "I began as a summer research intern in May 2025, but I’ve decided to continue working with the group part-time during my studies. This decision reflects both my passion for what I’ve learned and the meaningful impact I’ve been able to make.",
      "I've worked on a few projects, making contributions wherever needed, however the focus of the projects has always been on Fiber Optics/Light communication, employing concepts from telecommunications and physics.",
      "This summer, I contributed to a free-space optical communication system, which aspires to revolutionize MRI implementation. My role involved automating the measurement gathering process using MATLAB. By connecting to all lab instruments through the SCPI Instrument command language, I successfully enhanced the efficiency and integrity of the data collection process.",
      "Since then, I’ve also developed a MATLAB Simulink model for multivariable numerical gradient descent, centered around optimizing a polarization controller. The model reads the current and adjusts two voltage parameters to achieve the lowest possible current.",
    ],
    imgName: "fiberOptics.jpg",
  },
];

const education: Container[] = [
  {
    company: "British International School Abu Dhabi",
    myJobTitle: "International Baccalaureate (IB) Diploma",
    startDate: "September 2018",
    endDate: "May 2021",
    description: [
      "Achieved a total score of 41/45 in the IB Diploma, placing me in the top 3% to 5% of students globally.",
      "Earned a 7 in Higher Level (HL) Physics and was awarded the Physics Achievement Award, recognizing me as the top-performing Physics student in my year group.",
    ],
    imgName: "populusLogo.png",
  },
  {
    company: "McGill University, Montreal, Canada",
    myJobTitle: "Bachelors Degree in Electrical Engineering",
    startDate: "September",
    endDate: "December 2025",
    description: [
      "'McGill University is one of the top public universities in Montreal, Canada. It is ranked #29 in QS World University Rankings 2025.'",
    ],
    imgName: "populusLogo.png",
  },
];

const clubs: Container[] = [
  {
    company: "The Factory",
    myJobTitle: "General Manager",
    startDate: "September 2023",
    endDate: "May 2024",
    description: [
      "The Factory is a student-run hardware lab at McGill, first and foremost we exist to offer students a space to work on any personal projects they may have. Some of the notable in-lab resources we provide include: soldering stations, oscilloscopes, 3D printers, microcontroller boards and cabinets filled with electronic components",
      "My primary responsibility as a general manager was to host weekly office hours in the lab, where I ensured the proper and safe use of equipment and was available to answer any questions from lab users.",
      "I went beyond my main responsibilities by proposing and managing a 'Personal Project Bootcamp' for students. The goal of the bootcamp was to create a supportive environment with positive accountability, where students could focus on completing personal projects. We scheduled regular progress check-ins and set a final demonstration deadline for the end of the semester. I ensured that we had enough managers available for each bootcamp session and made sure they were well-prepared to assist students with the technical aspects of their projects.",
    ],
    imgName: "factoryLogo.png",
  },
  {
    company: "The Factory",
    myJobTitle: "Head Manager",
    startDate: "May 2024",
    endDate: "May 2025",
    description: [
      "The following year, I was promoted to Head Manager, a role equivalent to being the 'president' of the lab. I was solely responsible for managing all lab operations and overseeing the team of lab managers.",
      "I collaborated with another manager to modernize the Factory website. This project, which can be viewed in the 'Personal Projects' section below, not only highlights my skills but also serves as an excellent showcase of what the Factory has to offer.",
      "My role essentially involves coordinating and leading meetings for a team of 25 managers, managing finances to ensure we maintain essential supplies like solder and 3D printing filament, and applying for funding and new equipment.",
    ],
    imgName: "factoryLogo.png",
  },
];

const studySync = {
  title: "Study Sync - Chrome Extension",
  content:
    "This Chrome extension revolutionizes study sessions. With a click, users can record sessions effortlessly using a built-in stopwatch. Data is seamlessly sent to a secure database, personalized to each user. They can track progress effortlessly, receiving insightful analysis and visual representations of their study habits over time. Install now for streamlined studying and meaningful insights into your performance.",
  imageUrls: [
    "study-sync.jpg",
    "studysync2.jpg",
    "studysync3.jpg",
    "studysync4.jpg",
    "studysync5.jpg",
  ],
  slug: "study-sync-chrome-extension",
  date: "March 2024",
  codeLink: "",
  demoLink:
    "https://chromewebstore.google.com/detail/study-sync/dlgnlhemoahmocicklcanfcoigdkblfa",
};

const nbaProject = {
  title: "NBA Data Science Project",
  content:
    "This project was completed in my early days of learning web-developemnt. It's a basic full-stack web application using Django for the backend and vanilla HTML, CSS, and JS for the frontend. This was my first time creating a web app with a backend, teaching me the basics of HTTP requests and routing. The project provides a simple UI to enter any NBA player, past or present, scrapes data from nba.com/stats, and returns a comparison of their regular-season and playoffs performance. The main purpose of the application is to determine whether a given player performs statistically better or worse in the playoffs when compared to their regular season norms.",
  imageUrls: [
    "nba.png",
    "nbaproject2.jpeg",
    "nbaproject3.png",
    "nbaproject4.png",
  ],
  slug: "nba-data-science-project",
  date: "July-August 2023",
  codeLink: "",
  demoLink: "https://tomhaene.pythonanywhere.com/",
};

const factoryWebsite = {
  title: "The Factory McGill's Official Website",
  content:
    "The Factory is the club that I am in charge of at McGill. This project was a collaboration between me and 2 other Factory managers, where we worked together to create the website for our club. We used an innovative appraoch where we prioritized future-proofness of the site by populating the data on it dynamically using a CMS (Content Management System). This will allow us to update lab info without having to deploy the frontend each time. ",
  slug: "nba-data-science-project",
  imageUrls: [
    "factory-home-page.png",
    "managersPageWide.png",
    "managersPagePopup.png",
    "ourLab.png",
    "solderingStation.png",
  ],
  date: "August-October 2024",
  codeLink: "https://github.com/McGillEUS/thefactory/tree/develop3",
  demoLink: "https://factory.mcgilleus.ca/",
};

const solderingProject = {
  title: "Temperature-Sensitive Alarm Device",
  content:
    "Built a device that sits next to the stove and sounds an alarm when the air temperature exceeds a provided threshold for a certain amount of time, its purpose is to indicate if you left the stove on. It consists of an LCD screen showing the temperature and the time past the threshold. The device consists of a perf board with soldered components that sit on top of an Arduino UNO. The device comes with 3 user-controlled inputs and is powered by the grid using a simple DC power jack.",
  slug: "nba-data-science-project",
  imageUrls: [
    "SolderingProject.jpg",
    "solderingproject2.jpg",
    "solderingproject3.jpg",
    "solderingproject4.jpg",
  ],
  date: "January-February 2024",
  codeLink: "",
  demoLink: "",
};

function Experience() {
  return (
    <div
      className="bg-std-brown font-nunito pb-10"
      style={{ minHeight: "calc(100vh - (76px + 96px))" }} //Minus the height of the NavBar & the Footer
    >
      <div className="flex flex-col 2xl:flex-row pt-10 2xl:px-1 items-center 2xl:items-start">
        <section className="flex-1">
          <h2 className="text-white text-3xl font-bold mb-5 text-center lg:text-start lg:ml-32 underline-offset-8 underline decoration-custom-orange decoration-2">
            Education
          </h2>

          <Timeline containers={education} />

          <h2 className="text-white text-3xl font-bold mb-5 text-center mt-7 lg:mt-0 lg:text-start lg:ml-32 underline-offset-8 underline decoration-custom-orange decoration-2">
            Extracurriculars
          </h2>

          <Timeline containers={clubs} />
        </section>

        <section className="flex-1">
          <h2 className="text-white text-3xl font-bold mb-5 text-center mt-7 lg:mt-0 lg:text-start lg:ml-32 underline-offset-8 underline decoration-custom-orange decoration-2">
            Work Experience
          </h2>

          <Timeline containers={workExperience} />
        </section>
      </div>

      <hr className="mt-10 mx-10" />
      <section className="text-white lg:px-20 mt-10 flex flex-col items-center">
        <h1 className="font-bold text-3xl lg:text-4xl underline-offset-8 underline decoration-custom-orange decoration-2">
          Personal Projects
        </h1>
        <p className="text-center px-5 mt-3 text-custom-gray">
          Below are a few examples of some recent personal projects of mine.
        </p>

        {/* Flex wrap to allow cards to adjust to screen size */}
        <div className="lg:mt-10 flex flex-wrap gap-x-8 gap-y-10 mb-10 justify-center px-8 sm:px-0 min-h-[600px]">
          <ProjectSection
            title={studySync.title}
            imageUrls={studySync.imageUrls}
            description={studySync.content}
            date={studySync.date}
            demoLink={studySync.demoLink}
            codeLink={studySync.codeLink}
          />

          <ProjectSection
            title={factoryWebsite.title}
            imageUrls={factoryWebsite.imageUrls}
            description={factoryWebsite.content}
            date={factoryWebsite.date}
            demoLink={factoryWebsite.demoLink}
            codeLink={factoryWebsite.codeLink}
          />

          <ProjectSection
            title={nbaProject.title}
            imageUrls={nbaProject.imageUrls}
            description={nbaProject.content}
            date={nbaProject.date}
            demoLink={nbaProject.demoLink}
            codeLink={nbaProject.codeLink}
          />

          <ProjectSection
            title={solderingProject.title}
            imageUrls={solderingProject.imageUrls}
            description={solderingProject.content}
            date={solderingProject.date}
            demoLink={solderingProject.demoLink}
            codeLink={solderingProject.codeLink}
          />
        </div>
      </section>
    </div>
  );
}

type containerProps = {
  companyName: string;
  startDate: string;
  endDate: string;
  myPosition: string;
  content: string[];
};

function Container(props: containerProps) {
  return (
    <div className="relative bg-cream  max-w-[600px] rounded-md p-4 mb-5 pl-5 lg:pl-10">
      {/* Circle before each container */}
      <div className="absolute w-4 h-4 bg-white rounded-full left-[-1.25rem] lg:left-[-2.5rem] top-2.5 transform -translate-x-1/2"></div>
      <small className="font-bold">
        {props.startDate} - {props.endDate}
      </small>
      <h2 className="font-bold text-lg lg:text-xl">{props.myPosition}</h2>
      <h3 className="font-semibold">{props.companyName}</h3>

      {props.content.map((item, index) => (
        <li key={index} className="text-sm lg:text-base list-disc">
          {item}
        </li>
      ))}
    </div>
  );
}

type timelineProps = {
  containers: Container[];
};

function Timeline(props: timelineProps) {
  return (
    <div className="border-l-2 ml-4 lg:ml-20 relative w-11/12 ">
      <div className="lg:pl-10 pl-5">
        {props.containers.map((item: Container) => (
          <Container
            startDate={item.startDate}
            endDate={item.endDate}
            companyName={item.company}
            content={item.description}
            myPosition={item.myJobTitle}
          />
        ))}
      </div>
    </div>
  );
}

type ProjectSectionProps = {
  title: string;
  description: string;
  imageUrls: string[];
  date: string;
  demoLink: string;
  codeLink: string;
};

function ProjectSection(props: ProjectSectionProps) {
  return (
    <div>
      {/* Desktop Version */}
      <div className="xl:flex xl:flex-row hidden ">
        <div className="flex flex-1 flex-col justify-around pt-10 pl-20  ">
          <div>
            <h2 className="text-3xl font-bold">{props.title}</h2>
            <small>{props.date}</small>
          </div>

          <p className="leading-loose pr-5">{props.description}</p>

          {(props.codeLink !== "" || props.demoLink !== "") && (
            <div className="flex gap-5">
              <a
                href={props.codeLink}
                target="_blank"
                rel="noopener noreferrer"
              >
                <button className="bg-custom-orange text-sm text-white font-black rounded-3xl p-4 flex items-center justify-center w-44 hover:bg-darker-orange hover:text-cream gap-2">
                  <CodeXml />
                  <p>View Code</p>
                </button>
              </a>

              <a
                href={props.demoLink}
                target="_blank"
                rel="noopener noreferrer"
              >
                <button className="bg-cream text-sm text-black font-black rounded-3xl p-4 flex items-center justify-center w-44 hover:bg-custom-gray hover:text-gray-900 shadow-2xl gap-2">
                  <Eye />
                  <p>Live Demo</p>
                </button>
              </a>
            </div>
          )}
        </div>
        <div className="flex-1  h-[450px]">
          <ControlledCarousel imageUrls={props.imageUrls} />
        </div>
      </div>

      {/* Mobile Version */}
      <div className="flex xl:hidden flex-col">
        <div className="flex flex-col gap-4 justify-around pt-10 items-center">
          <div>
            <h2 className="text-2xl lg:text-3xl font-bold text-center">
              {props.title}
            </h2>
            <p className="text-center">{props.date}</p>
          </div>
          <div className="h-[300px] md:h-[400px] w-full sm:w-11/12 md:w-10/12 mx-auto">
            <ControlledCarousel imageUrls={props.imageUrls} />
          </div>
          <p className="leading-loose px-5 md:px-32">{props.description}</p>
          {(props.codeLink !== "" || props.demoLink !== "") && (
            <div className="flex justify-center gap-5">
              <a href="/Resume.pdf" target="_blank" rel="noopener noreferrer">
                <button className="bg-custom-orange text-sm text-white font-black rounded-3xl lg:p-4 flex items-center justify-center lg:w-44 hover:bg-darker-orange hover:text-cream lg:gap-2 gap-1 w-36 p-3">
                  <CodeXml />
                  <p>View Code</p>
                </button>
              </a>

              <a
                href="mailto:tom@haene.org"
                target="_blank"
                rel="noopener noreferrer"
              >
                <button className="bg-cream text-sm text-black font-black rounded-3xl lg:p-4 flex items-center justify-center lg:w-44 hover:bg-custom-gray hover:text-gray-900 shadow-2xl lg:gap-2 gap-1 w-36 p-3">
                  <Eye />
                  <p>Live Demo</p>
                </button>
              </a>
            </div>
          )}
        </div>
      </div>

      <hr className="text-white mt-10 w-full" />
    </div>
  );
}

type CarouselProps = {
  imageUrls: string[];
};

function ControlledCarousel(props: CarouselProps) {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex: number) => {
    setIndex(selectedIndex);
  };

  return (
    <Carousel activeIndex={index} onSelect={handleSelect}>
      {props.imageUrls.map((image) => (
        <Carousel.Item>
          <img
            src={`/${image}`}
            alt=""
            className="w-full sm:w-11/12 md:w-10/12  h-[300px] md:h-[400px] mx-auto object-cover opacity-70"
          />
        </Carousel.Item>
      ))}
    </Carousel>
  );
}

export default Experience;
