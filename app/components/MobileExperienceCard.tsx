
type ExperienceCardProps = {
    myJobTitle:string,
    company:string,
    startDate: string,
    endDate:string,
    content:string[],
    imgName: string
}



export default function MobileExperienceCard(props:ExperienceCardProps) {


  return (
    <div className="mt-8 mb-16 px-11">
        <div className="flex flex-col items-center gap-6">
            <h2 className="font-museo-moderno font-light text-2xl">{props.company}</h2>
            <img src={props.imgName} alt="" className="rounded-3xl h-24"/>
        </div>
        {/* Add the sloping arrow somehow */}

        <div className="flex flex-col mt-4 gap-1">
            <h3 className="font-museo-moderno font-medium  text-xl">{props.myJobTitle}</h3>
            <p className="text-sm font-light text-custom-orange mb-3">{props.startDate} - {props.endDate}</p>
            <ol className="px-5 list-disc">
                {props.content.map((item, index)=>(
                    <li key={index} className="text-md">{item}</li>
                ))
                }
            </ol>
           
        </div>

      
    </div>
  )
}
