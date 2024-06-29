import { Link } from "@remix-run/react";

type CardProps = {
  title: string,
  cardContent: string,
  imgName: string
  slug:string,
  id?:number,
  styles: string,
};

export default function Card(props: CardProps) {
  return (
    <Link to={`/${props.slug}`}>
      <div className={props.styles}>
        <img
          src={props.imgName}
          className="object-cover w-full max-h-48"
          alt=""
        />
        <h3 className="font-bold px-3 mt-2">{props.title}</h3>
        <p className="px-4 text-[15px] pt-2 pb-3 font-sans">{props.cardContent}</p>
      </div>
    </Link>
  );
}
