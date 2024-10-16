import { CircuitBoard, Laptop, UserRound } from "lucide-react";

function AboutMe() {
  return (
    <div
      className="bg-std-brown font-nunito pb-20"
      style={{ minHeight: "calc(100vh - (76px + 96px))" }} //Minus the height of the NavBar & the Footer
    >
      <div className="flex h-max pt-10 xl:pt-14 xl:flex-row flex-col items-center px-10 xl:px-0 ">
        <section className="xl:w-1/3 flex justify-center items-center">
          <img
            src="/tom-headshot.JPG"
            alt=""
            loading="lazy"
            className="w-64 lg:w-96 aspect-square object-cover rounded-full opacity-85"
          />
        </section>

        <section className="xl:w-2/3 text-white mt-10 xl:mt-0 xl:pr-20 text-center">
          <h1 className="font-bold text-4xl underline-offset-8 underline decoration-custom-orange decoration-2">ABOUT ME</h1>
          <p className="mt-3 text-sm lg:text-base text-custom-gray">
            I'm Thomas Haene - a student currently in his 4th year of Electrical
            Engineering at McGill University.
          </p>

          <h2 className="font-semibold text-2xl mt-5">My Story</h2>
          <p className="text-sm lg:text-base mt-2">
            I've lived in three countries: born in Cambridge, UK, then moved to
            New Brunswick, Canada, for elementary and middle school, then to Abu
            Dhabi, UAE, for high school. In Abu Dhabi, I studied at the{" "}
            <a
              href="https://www.nordangliaeducation.com/bis-abu-dhabi/news/2021/08/05/meet-thomas-haene-class-of-2021-ib-diploma-graduate"
              target="_blank"
              className="nderline text-custom-orange hover:text-darker-orange"
            >
              British International School Abu Dhabi 
            </a>
            {""} and earned my IGCSE certificate and an IB Diploma with a score of
            41/45, (placing in the top 1% of international students). Now, I'm
            pursuing a Bachelor's in Electrical Engineering at McGill
            University, ranked 29th globally by QS World University Rankings
            2024.
          </p>
          <h2 className="font-semibold text-2xl mt-7">
            Career Goals & Aspirations
          </h2>
          <p className="text-sm lg:text-base mt-2">
            Like it is for the majority of people, the path that lies ahead of
            me is unclear, and I don't have a specific overarching career goal
            at this stage. However, I do know that I want to delve deeper into a
            particular field of Electrical Engineering at the graduate level:
            digital communications. This field, which focuses on how information
            is transmitted from one location to another, fascinates me. The
            underlying physics and engineering are like magic to me, as this
            communication often occurs at frequencies far beyond the perception
            of the human eye.
          </p>
          <h2 className="font-semibold text-2xl mt-7">
            My Hobbies & Interests
          </h2>
          <p className="text-sm lg:text-base mt-2">
            Outside of the classroom, my 2 main hobbies are basketball and
            weightlifting. Basketball has been a sport I've been playing since I
            was 10, and when I'm not playing pick-up basketball at the McGill
            gym, I'll also spend his time watching the NBA with my favorite team
            being the Dallas Mavericks. As mentioned before, I also enjoy web
            design, and I pursure it as a way to be creative and create visually
            appealing ways to show important information.
          </p>
        </section>
      </div>

      {/* Skills Section Below */}
      <hr className="mt-10 mx-10" />
      <section className="text-white px-0 mt-10 flex flex-col items-center">
        <h1 className="font-bold text-4xl underline-offset-8 underline decoration-custom-orange decoration-2">My Skills</h1>
        <p className="mt-3 px-5 text-center text-custom-gray">
          I'm Thomas Haene - a student currently in his 4th year of Electrical
          Engineering at McGill University.
        </p>

        {/* Use flex-wrap and responsive widths */}
        <div className="flex flex-wrap justify-start w-full md:w-4/5 mt-10">
          <section className="w-full sm:w-1/2 lg:w-1/3 flex flex-col items-center mb-6">
            <CircuitBoard size={48} />
            <h2 className="font-bold text-2xl mt-2 underline-offset-8 underline decoration-custom-orange decoration-1">Electrical Engineering</h2>
            <ul className="mt-3 text-center space-y-2">
              <li>MATLAB</li>
              <li>Simulink</li>
              <li>PCB Design</li>
              <li>Soldering</li>
              <li>SCPI Instrument Command Language</li>
            </ul>
          </section>

          <section className="w-full sm:w-1/2 lg:w-1/3 flex flex-col items-center mb-6">
            <Laptop size={48} />
            <h2 className="font-bold text-2xl mt-2 underline-offset-8 underline decoration-custom-orange decoration-1">Software Engineering</h2>
            <ul className="mt-3 text-center space-y-2">
              <li>React frontend framework</li>
              <li>JavaScript</li>
              <li>HTML & CSS</li>
              <li>Machine Learning</li>
              <li>Git</li>
            </ul>
          </section>

          <section className="w-full sm:w-1/2 lg:w-1/3 flex flex-col items-center mb-6">
            <UserRound size={48} />
            <h2 className="font-bold text-2xl mt-2 underline-offset-8 underline decoration-custom-orange decoration-1">Soft Skills</h2>
            <ul className="mt-3 text-center space-y-2">
              <li>Public Speaking</li>
              <li>Leadership</li>
              <li>Project Management</li>
            </ul>
          </section>
        </div>
      </section>
    </div>
  );
}

export default AboutMe;
