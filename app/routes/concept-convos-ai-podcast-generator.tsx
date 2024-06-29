import { ArrowLeftFromLine } from "lucide-react";
import { Link } from "@remix-run/react";

export default function Index() {


    return (
        <div className="relative">
        <Link to="/experience" >
          <ArrowLeftFromLine
            size={48}
            color="#ffffff"
            className="absolute top-8 left-14"
          />
        </Link>
  
        <div className="bg-cream w-3/4 mx-auto min-h-[800px] px-8 pb-12 mt-10">
          <div className="flex mt-10 pt-10">
            <div className="flex flex-col w-1/2 font-museo-moderno pl-5">
              <h1 className="text-4xl text-black font-bold ">
                Cocept Convos
              </h1>
              <p className="mt-6 text-gray-600 font-medium text-lg">
                
              </p>
              <p className="mt-10 font-black font-sans ml-12">May 25th 2024</p>
            </div>
            <div className="w-1/2 pl-10">
              {/* <img
                src={
                  "http://localhost:1337" +
                  selectedBlog?.attributes.Image.data.attributes.url
                }
                alt=""
                className="rounded-xl max-h-72 object-cover"
              /> */}
            </div>
          </div>
          <div className="mt-10 text-lg px-16"></div>
        </div>
      </div>
    );
  }
  