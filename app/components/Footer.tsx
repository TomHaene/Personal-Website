import { Github, Linkedin } from "lucide-react";

export default function Footer() {
  return (
    // Will have 2 footers for the different screen sizes

    <>
    {/* 1. Mobile Footer */}
    <div className="mt-auto flex lg:hidden bg-dark-brown justify-center items-center gap-10 text-white font-museo-moderno w-full h-[81px]">
        <div className="text-[17px]"> ThomasHaene.com</div>

        <div className="flex gap-6"> 
            <Github />
            <Linkedin />
        </div>
    </div>

    <div className="mt-auto hidden lg:flex bg-dark-brown justify-center items-center gap-10 text-white font-museo-moderno  w-full h-[81px]">
        <div className="text-[17px]"> Thomas Haene&apos;s Portfolio Site. This site was built using React</div>

        <div className="flex gap-6"> 
            <Github className="cursor-pointer"/>
            <Linkedin className="cursor-pointer" />
        </div>
    </div>
    </>
    
  )
}
