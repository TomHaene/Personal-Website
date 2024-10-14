import ProjectCard from "../components/ProjectCard";

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
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae, cumque nobis. Magni voluptatem praesentium maxime quisquam? Pariatur eum fugit expedita excepturi error soluta sed laudantium rem culpa consectetur. Numquam, quia.",
    ],
    imgName: "populusLogo.png",
  },
  {
    company: "McGill University, Montreal, Canada",
    myJobTitle: "Bachelors Degree in Electrical Engineering",
    startDate: "May 2024",
    endDate: "August 2024",
    description: [
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae, cumque nobis. Magni voluptatem praesentium maxime quisquam? Pariatur eum fugit expedita excepturi error soluta sed laudantium rem culpa consectetur. Numquam, quia.",
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
  imgName: "study-sync.jpg",
  slug: "study-sync-chrome-extension",
  date: "March 2024",
};

const nbaProject = {
  title: "NBA Data Science Project",
  content:
    "A full-stack web application using Django for the backend and vanilla HTML, CSS, and JS for the frontend. This was my first time creating a web app with a backend, teaching me the basics of HTTP requests and routing. The project provides a simple UI to enter any NBA player, past or present, scrapes data from nba.com/stats, and returns a comparison of their regular-season and playoffs performance.",
  imgName: "nba.png",
  slug: "nba-data-science-project",
  date: "July-August 2023",
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
          <h2 className="text-white text-3xl font-bold mb-5 text-center lg:text-start lg:ml-32">
            Education
          </h2>

          <Timeline containers={education} />

          <h2 className="text-white text-3xl font-bold mb-5 text-center mt-7 lg:mt-0 lg:text-start lg:ml-32">
            Extracurriculars
          </h2>

          <Timeline containers={clubs} />
        </section>

        <section className="flex-1">
          <h2 className="text-white text-3xl font-bold mb-5 text-center mt-7 lg:mt-0 lg:text-start lg:ml-32">
            Work Experience
          </h2>

          <Timeline containers={workExperience} />
        </section>
      </div>

      <hr className="mt-10 mx-10" />
      <section className="text-white lg:px-20 mt-10 flex flex-col items-center">
        <h1 className="font-bold text-4xl">Personal Projects</h1>
        <p className="text-center px-5">
          Below are a few examples of some recent personal projects of mine.
        </p>

        {/* Flex wrap to allow cards to adjust to screen size */}
        <div className="mt-10 flex flex-wrap gap-x-8 gap-y-10 mb-10 justify-center px-8 sm:px-0 min-h-[600px]">
          <ProjectCard
            styles="w-full sm:w-[400px] lg:w-[450px] xl:w-[500px] bg-cream text-black font-museo-moderno shadow-2xl overflow-hidden pb-5"
            title={studySync.title}
            imgName={studySync.imgName}
            cardContent={studySync.content}
            link="https://chromewebstore.google.com/detail/study-sync/dlgnlhemoahmocicklcanfcoigdkblfa?hl=en-US&utm_source=ext_sidebar"
            date={studySync.date}
          />

          <ProjectCard
            styles="w-full sm:w-[400px] lg:w-[450px] xl:w-[500px] bg-cream text-black font-museo-moderno shadow-2xl overflow-hidden pb-5"
            title={nbaProject.title}
            imgName={nbaProject.imgName}
            cardContent={nbaProject.content}
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
      <div className="lg:pl-10 pl-5" >
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

export default Experience;
