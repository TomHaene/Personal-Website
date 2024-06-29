import { FileText, Mail } from "lucide-react";
import { TypewriterEffect } from "../components/aceternity/typewriter-effect";
import { Fade } from "react-awesome-reveal";

export default function Index() {
  const words = [
    {
      text: "Hi!",
    },
    {
      text: "My",
    },
    {
      text: "Name",
    },
    {
      text: "Is",
    },
    {
      text: "Thomas",
      className: "dark:text-custom-orange",
    },
    {
      text: "Haene.",
      className: "dark:text-custom-orange",
    },
  ];
  return (
    // Desktop Version
    <div className="min-h-[550px]">
      <div className="hidden relative text-white lg:flex justify-center gap-24 xl:gap-44 items-center mt-10 ">
        <div className="flex flex-col w-7/12 justify-center relative p-10">
          <div>
            <TypewriterEffect
              words={words}
              cursorClassName="bg-white"
              className="font-museo-moderno text-[40px] font-bold"
            />
            <Fade direction="down">
              <p className="text-custom-gray text-sm font-medium mt-3 ml-5">
                Electrical Engineering student @ McGill Unviersity
              </p>
            </Fade>
          </div>
          <Fade>
            <p className="font-museo-moderno font-medium text-[14x] leading-8 mt-2 xl:mt-3 ml-5">
              Welcome to my portfolio site. My interests are primarily in
              wireless communication / RF Physics and in my free-time I enjoy
              making websites. Feel free to contact me at my email, and I
              encourage you to have a look at my work!
            </p>
          </Fade>

          <Fade direction="up">
            <div className="flex justify-start gap-20 font-museo-moderno mt-3 xl:mt-14">
              <button className="bg-custom-orange font-black rounded-3xl p-5 flex items-center justify-center w-48 hover:scale-105 transition-transform duration-300 ease-in-out shadow-2xl">
                View Resume <FileText />
              </button>

              <button className="bg-cream text-black font-black rounded-3xl p-2 flex items-center justify-center w-48 hover:scale-105 transition-transform duration-300 ease-in-out shadow-2xl">
                Email me <Mail />
              </button>
            </div>
          </Fade>
        </div>
        <Fade>
          <img src="pic.png" alt="" className="rounded-full h-72 shadow-2xl " />
        </Fade>
      </div>

      {/* Mobile Version */}
      <div className="relative text-white flex flex-col gap-8 justify-center items-center lg:hidden">
        <Fade>
        <img src="pic.png" alt="" className="rounded-full h-44 mt-7" />
        </Fade>
        <div className="flex flex-col items-center max-w-md justify-center gap-8 ">
          <TypewriterEffect
            words={words}
            cursorClassName="bg-white"
            className="font-museo-moderno text-[27px] font-bold "
          />
          <Fade direction="down">
            <p className="text-custom-gray font-medium mt-1 ">
              Electrical Engineering student @ McGill Unviersity
            </p>
          </Fade>
          <Fade>
            <p className="font-museo-moderno font-medium text-[10x] px-6 leading-7">
              Welcome to my portfolio site. My interests are primarily in
              wireless communication / RF Physics and in my free-time I enjoy
              making websites. Feel free to contact me at my email, and I
              encourage you to have a look at my work!
            </p>
          </Fade>
          <Fade>
            <div className="flex justify-start gap-10 mt-4 font-museo-moderno mb-24">
              <button className="bg-custom-orange font-black rounded-3xl p-5 flex items-center justify-center w-48 drop-shadow-xl">
                View Resume <FileText />
              </button>
              <button className="bg-cream text-black font-black rounded-3xl p-2 flex items-center justify-center w-48 drop-shadow-xl">
                Email me <Mail />
              </button>
            </div>
          </Fade>
        </div>
      </div>
    </div>
  );
}
