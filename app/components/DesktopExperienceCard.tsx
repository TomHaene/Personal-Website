
type ExperienceCardProps = {
    myJobTitle:string,
    company:string,
    startDate: string,
    endDate:string,
    content:string[],
    imgName: string
}



export default function DesktopExperienceCard(props:ExperienceCardProps) {


  return (
    <div className="ml-28 mt-8 mb-16">
        <div className="flex items-center gap-6">
            <img src={props.imgName} alt="" className="rounded-3xl h-24"/>
            <h2 className="font-museo-moderno font-light text-2xl">{props.company}</h2>
        </div>
        {/* Add the sloping arrow somehow */}

        <div className="flex flex-col ml-4 mt-4 gap-1">
            <h3 className="font-museo-moderno font-medium  text-xl">{props.myJobTitle}</h3>
            <p className="text-sm font-light text-custom-orange mb-3">{props.startDate} - {props.endDate}</p>
            {props.content.map((item, index)=>(
                <li key={index} className="text-md">{item}</li>
            ))
            }
        </div>

      
    </div>
  )
}
