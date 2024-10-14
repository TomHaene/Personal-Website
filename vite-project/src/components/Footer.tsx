import { Github, Linkedin } from "lucide-react";

export default function Footer() {
  return (
    // Will have 2 footers for the different screen sizes

    <>
      {/* 1. Mobile Footer */}
      <div className="mt-auto flex lg:hidden bg-dark-brown justify-center items-center gap-10 text-white font-museo-moderno w-full h-[76px]">
        <div className="text-[15px]"> ThomasHaene.com</div>

        <div className="flex gap-6">
          <a href="https://github.com/TomHaene" target="_blank">
            {" "}
            <Github />
          </a>
          <a href="https://www.linkedin.com/in/thomashaene/" target="_blank">
            {" "}
            <Linkedin />
          </a>
        </div>
      </div>

      <div className="mt-auto hidden lg:flex bg-dark-brown justify-center items-center gap-10 text-white font-museo-moderno w-full h-[76px]">
        <div className="text-[15px]">
          {" "}
          Thomas Haene&apos;s Portfolio Site. This site was built using React
        </div>

        <div className="flex gap-6">
          <a href="https://github.com/TomHaene" target="_blank">
            {" "}
            <Github className="cursor-pointer" />
          </a>
          <a href="https://www.linkedin.com/in/thomashaene/" target="_blank">
            {" "}
            <Linkedin className="cursor-pointer" />
          </a>
        </div>
      </div>
    </>
  );
}
