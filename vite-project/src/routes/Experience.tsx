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
      "Earned the Global Challenges Award (GCA) from McGill University to fund my work on this project. ",
      "The Populus Solidarity Cooperative is a company devoted to helping non-profits and cooperatives, on this project I joined a team of experienced developers to help Populus build their digital dashboard. This dashboard is provided to the clients of Populus as a SAAS product, and it helps them stay on top of important governemntal complience tasks and also provide resources to help them raise funding.",
      "The tech-stack we used for the frontend was React, Remix.run, tailwindCSS and React Aria as a component library. We also used Payload CMS as our backend. ",
    ],
    imgName: "populusLogo.png",
  },
  {
    company: "The Photonics Systems Group McGill",
    myJobTitle: "Part-Time Undergraduate Researcher",
    startDate: "May 2024",
    endDate: "Present",
    description: [
      "Worked with Professor David V Plant’s Photonics Systems Group for the summer, part-time.",
      "More specifically, I worked on an innovative project with the aim to achieve digital communication via free-space optical transmission with a sufficiently high signal-to-noise ratio (SNR) and minimal bit error rate (BER) to make it feasible for rotary interface communication.",
      "My role in the project was to assist with obtaining the necessary experiemental meaurements and a large portion of my work involved automating the measurement setup process using MATLAB by remotely connecting to our measurement instruments via the VISA protocol ",
      "From this time I gained valuable experience in how research groups stay organized, as I would attend the weekly group meetings as well as our weekly meeting with our client company to provide progress updates.",
      "Whenever I had free time outside of lab work and measurements, I proactively engaged with PhD students to deepen my understanding of digital communications. I compiled these valuable insights into numerous blog articles, which can be found in the 'Blog' section of this site.",
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
      "Achieved a total score of 41/45 in the IB Diploma, placing me in the top 3% to 5% of students globally. Earned a 7 in Higher Level (HL) Physics and was awarded the Physics Achievement Award, recognizing me as the top-performing Physics student in my year group.",
    ],
    imgName: "populusLogo.png",
  },
  {
    company: "McGill University, Montreal, Canada",
    myJobTitle: "Bachelors Degree in Electrical Engineering",
    startDate: "May 2024",
    endDate: "August 2024",
    description: [""],
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
      "My main responsibiliy as a general manager was that I had to weekly office hours where I had to be in the lab to ensure the equipment we have was being used safely and properly, and also be there to answer any questions the lab visitors might have.",
      "I also went above and beyond my main responsibility, by proposing and managing a 'Personal Project Bootcamp' for students. The purpose of this bootcamp was to provide some positive pressure for students whoe registered to complete their projects, as we would check in on their progress and have a demonstration deadline at the end of the semester. I made sure we always had enough managers there for the bootcamp slots and that the managers were well-equiped to assist in the technical aspects of the studnets personal projects. ",
    ],
    imgName: "factoryLogo.png",
  },
  {
    company: "The Factory",
    myJobTitle: "Head Manager",
    startDate: "May 2024",
    endDate: "May 2025",
    description: [
      "I was then promoted to Head Manager the following year, which is like the 'president or 'leader' of the Factory, in the sense that I was in charge of managing the lab and also all the other lab managers.",
      "I have ambitious plans for the Factory in my year as Head Manager, in particular I would like to re-vamp our website, and integrate it with a CMS (Content Management System) like Strapi, which would allow us to post lab-updates and weekly lab availability in a simple way without having to redeploy the site with each update. I also have plans to integrate our 'airtable' with the website through an API, which could provide students with a list of the equipment currently available in the Factory.",
    ],
    imgName: "factoryLogo.png",
  },
];

const studySync = {
  title: "Study Sync - Chrome Extension",
  content:
    "This Chrome extension revolutionizes study sessions. With a click, users can record sessions effortlessly using a built-in stopwatch. Data is seamlessly sent to a secure database, personalized to each user. They can track progress effortlessly, receiving insightful analysis and visual representations of their study habits over time. Install now for streamlined studying and meaningful insights into your performance.",
  imageUrls: ["study-sync.jpg"],
  slug: "study-sync-chrome-extension",
  date: "March 2024",
};

const nbaProject = {
  title: "NBA Data Science Project",
  content:
    "A full-stack web application using Django for the backend and vanilla HTML, CSS, and JS for the frontend. This was my first time creating a web app with a backend, teaching me the basics of HTTP requests and routing. The project provides a simple UI to enter any NBA player, past or present, scrapes data from nba.com/stats, and returns a comparison of their regular-season and playoffs performance.",
  imageUrls: ["nba.png"],
  slug: "nba-data-science-project",
  date: "July-August 2023",
};

const factoryWebsite = {
  title: "The Factory McGill's Official Website",
  content:
    "The Factory is the club that I am in charge of at McGill. This project was a collaboration between me and 2 other Factory managers, where we worked together to create the website for our club. We used an innovative appraoch where we prioritized future-proofness of the site by populating the data on it dynamically using a CMS (Content Management System). This will allow us to update lab info without having to deploy the frontend each time. ",
  slug: "nba-data-science-project",
  imageUrls: ["factory-home-page.png", "managersPageWide.png", "managersPagePopup.png", "ourLab.png", "solderingStation.png"],
  date: "August-October 2024",
};

// const stoveProject = {
//   title: "NBA Data Science Project",
//   content:
//     "A full-stack web application using Django for the backend and vanilla HTML, CSS, and JS for the frontend. This was my first time creating a web app with a backend, teaching me the basics of HTTP requests and routing. The project provides a simple UI to enter any NBA player, past or present, scrapes data from nba.com/stats, and returns a comparison of their regular-season and playoffs performance.",
//   imgName: "nbaProject.png",
//   slug: "nba-data-science-project",
//   date: "July-August 2023",
// };

function Experience() {
  return (
    <div
      className="bg-std-brown font-nunito pb-10"
      style={{ minHeight: "calc(100vh - (76px + 96px))" }} //Minus the height of the NavBar & the Footer
    >
      <div className="flex flex-col 2xl:flex-row pt-10 2xl:px-16">
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
        <h1 className="font-bold text-4xl underline-offset-8 underline decoration-custom-orange decoration-2">
          Personal Projects
        </h1>
        <p className="text-center px-5 mt-3 text-custom-gray">
          Below are a few examples of some recent personal projects of mine.
        </p>

        {/* Flex wrap to allow cards to adjust to screen size */}
        <div className="mt-10 flex flex-wrap gap-x-8 gap-y-10 mb-10 justify-center px-8 sm:px-0 min-h-[600px]">
          <ProjectSection
            title={studySync.title}
            imageUrls={studySync.imageUrls}
            description={studySync.content}
            link="https://chromewebstore.google.com/detail/study-sync/dlgnlhemoahmocicklcanfcoigdkblfa?hl=en-US&utm_source=ext_sidebar"
            date={studySync.date}
          />

          <ProjectSection
            title={factoryWebsite.title}
            imageUrls={factoryWebsite.imageUrls}
            description={factoryWebsite.content}
            link="https://factory.mcgilleus.ca/"
            date={factoryWebsite.date}
          />

          <ProjectSection
            title={nbaProject.title}
            imageUrls={nbaProject.imageUrls}
            description={nbaProject.content}
            link="https://tomhaene.pythonanywhere.com/"
            date={nbaProject.date}
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
    <div className="relative bg-cream  max-w-[600px] rounded-md p-2 mb-5 pl-5 lg:pl-10">
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
  link: string;
  date: string;
};

function ProjectSection(props: ProjectSectionProps) {
  return (
    <div>
      <div className="flex">
        <div className="flex flex-1 flex-col justify-around pt-10 pl-20  ">
          <div>
            <h2 className="text-3xl font-bold">{props.title}</h2>
            <small>{props.date}</small>
          </div>

          <p className="leading-loose pr-5">{props.description}</p>

          <div className="flex gap-5">
            <a href="/Resume.pdf" target="_blank" rel="noopener noreferrer">
              <button className="bg-custom-orange text-sm text-white font-black rounded-3xl p-4 flex items-center justify-center w-44 hover:bg-darker-orange hover:text-cream gap-2">
                <CodeXml />
                <p>View Code</p>
              </button>
            </a>

            <a href="mailto:tom@haene.org">
              <button className="bg-cream text-sm text-black font-black rounded-3xl p-4 flex items-center justify-center w-44 hover:bg-custom-gray hover:text-gray-900 shadow-2xl gap-2">
                <Eye />
                <p>Live Demo</p>
              </button>
            </a>
          </div>
        </div>
        <div className="flex-1  h-[450px]">
          <ControlledCarousel imageUrls={props.imageUrls} />
        </div>
      </div>
      <hr className="text-white mx-10 mt-10" />
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
            className="h-[450px] mx-auto object-cover opacity-70"
          />

          <Carousel.Caption>
            <h3>First slide label</h3>
            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
          </Carousel.Caption>
        </Carousel.Item>
      ))}

      {/* <Carousel.Item>
        <img
          src="/study-sync.jpg"
          alt=""
          className="h-[450px] mx-auto object-cover opacity-60"
        />
        <Carousel.Caption>
          <h3>Second slide label</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          src="/factory-home-page.png"
          alt=""
          className="h-[450px] mx-auto object-cover opacity-60"
        />
        <Carousel.Caption>
          <h3>Third slide label</h3>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
        </Carousel.Caption>
      </Carousel.Item> */}
    </Carousel>
  );
}

export default Experience;
