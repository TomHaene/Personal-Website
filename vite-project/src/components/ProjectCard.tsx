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
    <div className={`${props.styles} relative rounded-lg`}>
      <div className="w-full lg:h-[320px] ">
        <img
          src={props.imgName}
          className=" aspect-auto max-h-[300px] mx-auto object-center object-contain"
          alt=""
        />
      </div>

      <h3 className="font-extrabold px-4 mt-3">{props.title}</h3>
      <h4 className="font-medium text-gray-700 text-xs pl-4">{props.date}</h4>
      <p className="px-4 text-[13px] pt-2 pb-3 font-sans">
        {props.cardContent}
      </p>
      <a
        href={props.link}
        target="_blank"
        className="left-1/2 transform -translate-x-1/2"
      >
        <button className="bg-dark-brown text-xs rounded-3xl px-5 mt-3 py-3 flex items-center justify-center drop-shadow-xl text-white mx-auto hover:scale-105 transition ease-in-out gap-2 hover:bg-custom-orange">
          <p>View Project</p>
          <ArrowRight strokeWidth={1.5} />
        </button>
      </a>
    </div>
  );
}
