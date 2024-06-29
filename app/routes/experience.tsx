import DesktopExperienceCard from "../components/DesktopExperienceCard";
import MobileExperienceCard from "../components/MobileExperienceCard";
import Card from "../components/Card";
import { BackgroundGradient } from "~/components/aceternity/background-gradient";
import ProjectCard from "~/components/ProjectCard";
import { Fade } from "react-awesome-reveal";

//Cool button design below
// <a href="" className="inline-flex items-center px-4 py-2 text-sm font-medium text-gray-900 bg-white border border-gray-200 rounded-lg hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:outline-none focus:ring-gray-100 focus:text-blue-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700 dark:focus:ring-gray-700">Learn more
//           <svg className="w-3 h-3 ms-2 rtl:rotate-180" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">

//     <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9"/>
//   </svg></a>

const photonicsGroup = {
  company: "The Photonics Systems Group McGill",
  myJobTitle: "Part-Time Summer Research Intern",
  startDate: "May 2024",
  endDate: "August 2024",
  content: [
    "Worked in Professor David V Plant’s Photonics Lab for the summer. Was assigned to a project working with free-space optical communication",
    "Worked on automating the measurement setup process using MATLAB by remotely connecting to our measurement instruments via the VISA protocol.",
  ],
  imgName: "fiberOptics.jpg",
};

const populus = {
  company: "Populus Solidarity Cooperative",
  myJobTitle: "Part-Time Front-End Web Developer Intern",
  startDate: "May 2024",
  endDate: "August 2024",
  content: [
    "Earned the Global Challenges Award (GCA) from McGill University to fund my work on this project. ",
    "The Populus Solidarity Cooperative is a company devoted to helping non-profits and cooperatives, on this project I joined a team of experienced developers to help Populus build their digital dashboard. This dashboard is provided to the clients of Populus as a SAAS product, and it helps them stay on top of important governemntal complience tasks and also provide resources to help them raise funding.",
    "The tech-stack we used for the frontend was React, Remix.run, tailwindCSS and React Aria as a component library. We also used Payload CMS as our backend. ",
  ],
  imgName: "populusLogo.png",
};

const factory = {
  company: "The Factory",
  myJobTitle: "Head Manager",
  startDate: "May 2024",
  endDate: "August 2024",
  content: [
    "Earned the Global Challenges Award (GCA) from McGill University to fund my work on this project. ",
    "The Populus Solidarity Cooperative is a company devoted to helping non-profits and cooperatives, on this project I joined a team of experienced developers to help Populus build their digital dashboard. This dashboard is provided to the clients of Populus as a SAAS product, and it helps them stay on top of important governemntal complience tasks and also provide resources to help them raise funding.",
    "The tech-stack we used for the frontend was React, Remix.run, tailwindCSS and React Aria as a component library. We also used Payload CMS as our backend. ",
  ],
  imgName: "factoryLogo.png",
};

const studySync = {
  title: "Study Sync - Chrome Extension",
  content:
    "This Chrome extension revolutionizes study sessions. With a click, users can record sessions effortlessly using a built-in stopwatch. Data is seamlessly sent to a secure database, personalized to each user. They can track progress effortlessly, receiving insightful analysis and visual representations of their study habits over time. Install now for streamlined studying and meaningful insights into your performance.",
  imgName: "studySync.png",
  slug: "study-sync-chrome-extension",
};

const nbaProject = {
  title: "NBA Data Science Project",
  content:
    "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Culpa, ipsum cum. Eaque, vitae. Sequi debitis eum enim reprehenderit? Cumque eligendi ipsum optio iste consequatur veniam eaque? Labore impedit culpa nobis?",
  imgName: "nbaProject.png",
  slug: "nba-data-science-project",
};

const conceptConvos = {
  title: "Concept Convos - AI Podcast Generator",
  content:
    "Concept Convos is a web application that creates a short podcast with your two favorite celebrities, using topics that you decide! There are currently over 7 different famous stars/characters to choose from, leading to 50+ combinations of voices to keep you entertained for hours! This project was built as a part of a McGill hackathon that I participated in with 3 friends.",
  imgName: "conceptConvos.png",
  slug: "concept-convos-ai-podcast-generator",
};

export default function Index() {
  return (
    <>
      <div className="relative">
        <Fade triggerOnce>
          <h1 className="font-bold text-white font-museo-moderno text-[35px] underline underline-offset-8 decoration-1 absolute top-8 left-14">
            My Experience/Projects
          </h1>
        </Fade>

        {/* Desktop version */}
        <div className="hidden lg:block text-white mt-32">
          <ul className="list-square ml-20 mb-5">
            <li className="font-medium font-museo-moderno text-[27px]">
              Work Experience
            </li>
          </ul>

          <ol className="relative border-s border-gray-200 dark:border-gray-700 ml-24">
            <Fade delay={150} triggerOnce>
              <li className="mb-10 ms-4">
                <div className="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -start-1.5 border border-white dark:border-gray-900 dark:bg-gray-700"></div>
                <time className="mb-1 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">
                  {populus.startDate} - {populus.endDate}
                </time>
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                  {populus.myJobTitle}
                </h3>

                <div className="flex items-center gap-6 mt-3 mb-3">
                  <img
                    src={populus.imgName}
                    className="rounded-3xl h-20"
                    alt=""
                  />
                  <h2 className="font-museo-moderno font-light text-2xl">
                    {populus.company}
                  </h2>
                </div>
                <p className="text-base font-normal text-gray-500 dark:text-gray-400">
                  {" "}
                  {populus.content.map((item, index) => (
                    <li key={index} className="text-md list-disc ml-5">
                      {item}
                    </li>
                  ))}
                </p>
              </li>
            </Fade>
            <Fade delay={150} triggerOnce>
              <li className="mb-10 ms-4">
                <div className="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -start-1.5 border border-white dark:border-gray-900 dark:bg-gray-700"></div>
                <time className="mb-1 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">
                  {photonicsGroup.startDate} - {photonicsGroup.endDate}
                </time>
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                  {photonicsGroup.myJobTitle}
                </h3>

                <div className="flex items-center gap-6 mt-3 mb-3">
                  <img
                    src={photonicsGroup.imgName}
                    className="rounded-3xl h-20"
                    alt=""
                  />
                  <h2 className="font-museo-moderno font-light text-2xl">
                    {photonicsGroup.company}
                  </h2>
                </div>
                <p className="text-base font-normal text-gray-500 dark:text-gray-400">
                  {" "}
                  {photonicsGroup.content.map((item, index) => (
                    <li key={index} className="text-md list-disc ml-5">
                      {item}
                    </li>
                  ))}
                </p>
              </li>
            </Fade>
          </ol>

          <ul className="list-square ml-20">
            <li className="font-medium font-museo-moderno text-[27px]">
              Clubs
            </li>
          </ul>

          <ol className="relative border-s border-gray-200 dark:border-gray-700 ml-24">
            <Fade delay={150} triggerOnce>
              <li className="mb-10 ms-4">
                <div className="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -start-1.5 border border-white dark:border-gray-900 dark:bg-gray-700"></div>
                <time className="mb-1 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">
                  September 2023 - May 2024
                </time>
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                  General Manager
                </h3>

                <div className="flex items-center gap-6 mt-3 mb-3">
                  <img
                    src={factory.imgName}
                    className="rounded-3xl h-20"
                    alt=""
                  />
                  <h2 className="font-museo-moderno font-light text-2xl">
                    {factory.company}
                  </h2>
                </div>
                <p className="text-base font-normal text-gray-500 dark:text-gray-400">
                  {" "}
                  {factory.content.map((item, index) => (
                    <li key={index} className="text-md list-disc ml-5">
                      {item}
                    </li>
                  ))}
                </p>
              </li>
            </Fade>
            <Fade delay={150} triggerOnce>
              <li className="mb-10 ms-4">
                <div className="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -start-1.5 border border-white dark:border-gray-900 dark:bg-gray-700"></div>
                <time className="mb-1 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">
                  September 2024 - May 2025
                </time>
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                  {factory.myJobTitle}
                </h3>

                <div className="flex items-center gap-6 mt-3 mb-3">
                  <img
                    src={factory.imgName}
                    className="rounded-3xl h-20"
                    alt=""
                  />
                  <h2 className="font-museo-moderno font-light text-2xl">
                    {factory.company}
                  </h2>
                </div>
                <p className="text-base font-normal text-gray-500 dark:text-gray-400">
                  {" "}
                  {factory.content.map((item, index) => (
                    <li key={index} className="text-md list-disc ml-5">
                      {item}
                    </li>
                  ))}
                </p>
              </li>
            </Fade>
          </ol>

          <ul className="list-square ml-20">
            <li className="font-medium font-museo-moderno text-[27px]">
              Personal Projects
            </li>
          </ul>

          <div className="mt-10 flex flex-wrap justify-center gap-x-28 gap-y-10 mb-10 px-5">
            <Fade cascade triggerOnce>
              <ProjectCard
                styles="w-[340px] h-[450px] bg-cream text-black font-museo-moderno shadow-2xl rounded-xl overflow-hidden cursor-pointer hover:scale-105 transition ease-in-out"
                title={studySync.title}
                imgName={studySync.imgName}
                cardContent={studySync.content}
                link={
                  "https://chromewebstore.google.com/detail/study-sync/dlgnlhemoahmocicklcanfcoigdkblfa?hl=en-US&utm_source=ext_sidebar"
                }
              />

              <ProjectCard
                title={nbaProject.title}
                styles="w-[340px] h-[450px] bg-cream text-black font-museo-moderno shadow-2xl rounded-xl overflow-hidden cursor-pointer hover:scale-105 transition ease-in-out"
                imgName={nbaProject.imgName}
                cardContent={nbaProject.content}
                link={"https://tomhaene.pythonanywhere.com/"}
              />

              <ProjectCard
                title={conceptConvos.title}
                styles="w-[340px] h-[450px] bg-cream text-black font-museo-moderno shadow-2xl rounded-xl overflow-hidden cursor-pointer hover:scale-105 transition ease-in-out"
                imgName={conceptConvos.imgName}
                cardContent={conceptConvos.content}
                link={"https://devpost.com/software/concept-convos"}
              />
            </Fade>
          </div>
        </div>

        <div className="lg:hidden text-white mt-32">
          <ul className="list-square ml-10 mb-2">
            <li className="font-medium font-museo-moderno text-[27px]">
              Work Experience
            </li>
          </ul>

          <ol className="relative border-s border-gray-200 dark:border-gray-700 ml-5 mr-10">
          <Fade delay={150} triggerOnce>
            <li className="mb-10 ms-4">
              <div className="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -start-1.5 border border-white dark:border-gray-900 dark:bg-gray-700"></div>
              <time className="mb-1 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">
                {populus.startDate} - {photonicsGroup.endDate}
              </time>
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                {populus.myJobTitle}
              </h3>

              <div className="flex items-center gap-6 mt-3 mb-3">
                <img
                  src={populus.imgName}
                  className="rounded-3xl h-20"
                  alt=""
                />
                <h2 className="font-museo-moderno font-light text-2xl">
                  {populus.company}
                </h2>
              </div>
              <p className="text-base font-normal text-gray-500 dark:text-gray-400">
                {" "}
                {populus.content.map((item, index) => (
                  <li key={index} className="text-md list-disc ml-5">
                    {item}
                  </li>
                ))}
              </p>
            </li>
            </Fade>
            <Fade delay={150} triggerOnce>
            <li className="mb-10 ms-4">
              <div className="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -start-1.5 border border-white dark:border-gray-900 dark:bg-gray-700"></div>
              <time className="mb-1 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">
                {photonicsGroup.startDate} - {photonicsGroup.endDate}
              </time>
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                {photonicsGroup.myJobTitle}
              </h3>

              <div className="flex items-center gap-6 mt-3 mb-3">
                <img
                  src={photonicsGroup.imgName}
                  className="rounded-3xl h-20"
                  alt=""
                />
                <h2 className="font-museo-moderno font-light text-2xl">
                  {photonicsGroup.company}
                </h2>
              </div>
              <p className="text-base font-normal text-gray-500 dark:text-gray-400">
                {" "}
                {photonicsGroup.content.map((item, index) => (
                  <li key={index} className="text-md list-disc ml-5">
                    {item}
                  </li>
                ))}
              </p>
            </li>
            </Fade>
          </ol>

          <ul className="list-square ml-10 mb-2">
            <li className="font-medium font-museo-moderno text-[27px]">
              Clubs
            </li>
          </ul>

          <ol className="relative border-s border-gray-200 dark:border-gray-700 ml-5 mr-10">
          <Fade delay={150} triggerOnce>
            <li className="mb-10 ms-4">
              <div className="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -start-1.5 border border-white dark:border-gray-900 dark:bg-gray-700"></div>
              <time className="mb-1 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">
                September 2023 - May 2024
              </time>
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                General Manager
              </h3>

              <div className="flex items-center gap-6 mt-3 mb-3">
                <img
                  src={factory.imgName}
                  className="rounded-3xl h-20"
                  alt=""
                />
                <h2 className="font-museo-moderno font-light text-2xl">
                  {factory.company}
                </h2>
              </div>
              <p className="text-base font-normal text-gray-500 dark:text-gray-400">
                {" "}
                {factory.content.map((item, index) => (
                  <li key={index} className="text-md list-disc ml-5">
                    {item}
                  </li>
                ))}
              </p>
            </li>
            </Fade>
            <Fade delay={150} triggerOnce>
            <li className="mb-10 ms-4">
              <div className="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -start-1.5 border border-white dark:border-gray-900 dark:bg-gray-700"></div>
              <time className="mb-1 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">
                September 2024 - May 2025
              </time>
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                {factory.myJobTitle}
              </h3>

              <div className="flex items-center gap-6 mt-3 mb-3">
                <img
                  src={factory.imgName}
                  className="rounded-3xl h-20"
                  alt=""
                />
                <h2 className="font-museo-moderno font-light text-2xl">
                  {factory.company}
                </h2>
              </div>
              <p className="text-base font-normal text-gray-500 dark:text-gray-400">
                {" "}
                {factory.content.map((item, index) => (
                  <li key={index} className="text-md list-disc ml-5">
                    {item}
                  </li>
                ))}
              </p>
            </li>
            </Fade>
          </ol>

          <ul className="list-square ml-20">
            <li className="font-medium font-museo-moderno text-[27px]">
              Personal Projects
            </li>
          </ul>

          <div className="mt-10 flex flex-wrap justify-center gap-x-28 gap-y-10 mb-10 px-5">
          <Fade cascade triggerOnce>
              <ProjectCard
                styles="w-[340px] h-[450px] bg-cream text-black font-museo-moderno shadow-2xl rounded-xl overflow-hidden cursor-pointer "
                title={studySync.title}
                imgName={studySync.imgName}
                cardContent={studySync.content}
                link={
                  "https://chromewebstore.google.com/detail/study-sync/dlgnlhemoahmocicklcanfcoigdkblfa?hl=en-US&utm_source=ext_sidebar"
                }
              />

              <ProjectCard
                title={nbaProject.title}
                styles="w-[340px] h-[450px] bg-cream text-black font-museo-moderno shadow-2xl rounded-xl overflow-hidden cursor-pointer"
                imgName={nbaProject.imgName}
                cardContent={nbaProject.content}
                link={"https://tomhaene.pythonanywhere.com/"}
              />

              <ProjectCard
                title={conceptConvos.title}
                styles="w-[340px] h-[450px] bg-cream text-black font-museo-moderno shadow-2xl rounded-xl overflow-hidden cursor-pointer"
                imgName={conceptConvos.imgName}
                cardContent={conceptConvos.content}
                link={"https://devpost.com/software/concept-convos"}
              />
            </Fade>
          </div>
        </div>
      </div>
    </>
  );
}
