import { ArrowRight } from "lucide-react";

type CardProps = {
  title: string;
  cardContent: string;
  imgName: string;
  link: string;
  styles: string;
  date: string;
};

export default function Card(props: CardProps) {
  return (
    <div className={`${props.styles} relative`}>
      {/* Image container with a fixed height */}
   
        <img src={props.imgName} className="w-full h-[330px] object-center object-cover" alt="" />
    
      <h3 className="font-extrabold px-3 mt-2">{props.title}</h3>
      <h4 className="font-medium text-gray-700 text-xs pl-3">{props.date}</h4>
      <p className="px-4 text-[13px] pt-2 pb-3 font-sans">
        {props.cardContent}
      </p>
      <a
        href={props.link}
        target="_blank"
        className="left-1/2 transform -translate-x-1/2"
      >
        <button className="bg-dark-brown text-xs rounded-3xl px-5 mt-3 py-3 flex items-center justify-center drop-shadow-xl text-white mx-auto hover:scale-105 transition ease-in-out gap-2">
          <p>View Project</p>
          <ArrowRight strokeWidth={1.5} />
        </button>
      </a>
    </div>
  );
}
