type AccordionItem = {
  text: string;
  imgName: string;
};
type AccordionProps = {
  containerProps: string;
  handleAccordionClick: () => void;
  accordState: boolean;
  titleContent: string;
  items: AccordionItem[];
};

export default function Accordion(props: AccordionProps) {
  return (
    <ul
      className={` ${props.containerProps} shadow-box bg-dark-brown text-white font-museo-moderno`}
    >
      <li className="">
        <button
          type="button"
          className="w-full px-6 py-6 text-left transition-colors duration-300"
          onClick={() => props.handleAccordionClick()}
        >
          <div className="flex items-center justify-between">
            <span className="text-lg"> {props.titleContent} </span>
            <svg
              className={`w-6 h-6 text-custom-orange transform ${
                props.accordState === true ? "rotate-180" : ""
              } transition-transform duration-300`}
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path d="M19 9l-7 7-7-7"></path>
            </svg>
          </div>
        </button>
        <div
          className={`overflow-hidden transition-max-height duration-300 ${
            props.accordState === true ? "max-h-[1000px]" : "max-h-0"
          }`}
        >
          <div className="px-6 pb-6">
            {props.items.map((item, index) => (
              <div className="flex items-center gap-6 my-3">
                <img src={item.imgName} alt=""  className="h-14 w-14 object-cover rounded-full object-center"/>
                <p className="font-sans text-lg">{item.text}</p>
              </div>
            ))}
          </div>
        </div>
      </li>
    </ul>
  );
}
