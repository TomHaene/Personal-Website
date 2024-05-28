import { Github, Linkedin } from "lucide-react";

export default function Footer() {
  return (
    // Will have 2 footers for the different screen sizes

    <>
    {/* 1. Mobile Footer */}
    <div className="flex lg:hidden bg-dark-brown justify-center items-center gap-10 text-white font-museo-moderno absolute bottom-0 w-full h-[81px]">
        <div className="text-[17px]"> ThomasHaene.com</div>

        <div className="flex gap-6"> 
            <Github />
            <Linkedin />
        </div>
    </div>

    <div className="hidden lg:flex bg-dark-brown justify-center items-center gap-10 text-white font-museo-moderno absolute bottom-0 w-full h-[81px]">
        <div className="text-[17px]"> Thomas Haene&apos;s Portfolio Site. This site was built using React</div>

        <div className="flex gap-6"> 
            <Github />
            <Linkedin />
        </div>
    </div>


    
    
    </>

    
  )
}
