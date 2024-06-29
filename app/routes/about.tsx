import { Fade } from "react-awesome-reveal";

export default function Index() {
  return (
    <div className="relative">
      <Fade triggerOnce>
        <h1 className="font-bold text-white font-museo-moderno text-[35px] underline underline-offset-8 decoration-1 absolute top-8 left-14">
          About Me
        </h1>
      </Fade>

      {/* Desktop Version  */}
      <div className="hidden md:flex flex-col gap-11 mt-32 mb-10 px-20 ">
        <Fade cascade triggerOnce>
          <div className="bg-cream rounded-3xl flex items-start gap-7">
            <img
              src="GCSEPhysicsAward.jpg"
              alt=""
              className="max-h-80 w-1/3 m-3 object-cover object-physicsAward rounded-3xl"
            />

            <div className="w-2/3 p-6">
              <h2 className="font-museo-moderno font-medium text-2xl">
                My Academic Journey{" "}
              </h2>
              <p className="font-museo-moderno font-medium mt-3">
                Thomas was born in Cambridge UK, and thereafter, he lived in
                both Canada and the UAE throughout his childhood. He moved to
                the UAE for high school, and while there he obtained his IGCSE
                certificate, receiving a 9 out of a possible 9 in Physics, and
                also earning himself the Physics award for his year group. He
                carried this same high achievement with him into the IB program,
                where he finished with a total IB score of 41/45 putting him
                within the top 1% of international students worldwide, and once
                again, earning himself the Physics award for IB due to his high
                achievement and interest. Thomas is now pursuing a bachelors
                degree in Electrical Engineering at McGill University in
                Montreal Canada, McGill University was ranked as the 30th best
                University in the world by QS World University Rankings 2024
              </p>
            </div>
          </div>

          <div className="bg-cream rounded-3xl flex items-start gap-7">
            <div className="w-2/3 p-6">
              <h2 className="font-museo-moderno font-medium text-2xl">
                Career goals & Aspirations
              </h2>
              <p className="font-museo-moderno font-medium mt-3">
                Thomas&apos; post undergrad plans are to pursue a masters degree
                in the field of wireless communication, as he finds the field
                absolutely fascinating, and almost magical in premise as
                it&apos;s all invisible to us.
              </p>
            </div>
            <img
              src="satellite.png"
              alt=""
              className="max-h-80 w-1/3 m-3 object-cover rounded-3xl"
            />
          </div>

          <div className="bg-cream rounded-3xl flex items-start gap-7">
            <img
              src="bballEmet.jpg"
              alt=""
              className="max-h-80 w-1/3 m-3 object-cover object-bball rounded-3xl"
            />
            <div className="w-2/3 p-6">
              <h2 className="font-museo-moderno font-medium text-2xl">
                Hobbies & Interests{" "}
              </h2>
              <p className="font-museo-moderno font-medium mt-3">
                Outside of the classroom, Thomas&apos; 2 main hobbies are
                basketball and weightlifting. Basketball has been a sport
                he&apos;s been playing since he was 10, and when he&apos;s not
                playing pick-up basketball at the McGill gym, he&apos;ll also
                spend his time watching the NBA. As mentioned before, Thomas
                also enjoys web design, and pursues it as a way to be creative
                and creative visually appealing ways to show important
                information.
              </p>
            </div>
          </div>
        </Fade>
      </div>

      {/* Mobile Version */}
      <div className="md:hidden flex flex-col gap-14 mt-32 mb-10 px-6 ">
        {/* Top card container^ */}
        <Fade cascade triggerOnce>
          <div className="bg-cream rounded-3xl flex flex-col">
            <div className="flex justify-around items-center p-5">
              <h2 className="font-museo-moderno font-medium text-2xl w-40">
                My Academic Journey
              </h2>
              <img
                src="GCSEPhysicsAward.jpg"
                alt=""
                className="h-28 w-1/3 object-cover object-physicsAward rounded-3xl"
              />
            </div>
            <div className="px-6 pt-2 pb-5">
              <p className="font-museo-moderno font-medium mt-3">
                Thomas was born in Cambridge UK, and thereafter, he lived in
                both Canada and the UAE throughout his childhood. He moved to
                the UAE for high school, and while there he obtained his IGCSE
                certificate, receiving a 9 out of a possible 9 in Physics, and
                also earning himself the Physics award for his year group. He
                carried this same high achievement with him into the IB program,
                where he finished with a total IB score of 41/45 putting him
                within the top 1% of international students worldwide, and once
                again, earning himself the Physics award for IB due to his high
                achievement and interest. Thomas is now pursuing a bachelors
                degree in Electrical Engineering at McGill University in
                Montreal Canada, McGill University was ranked as the 30th best
                University in the world by QS World University Rankings 2024
              </p>
            </div>
          </div>

          <div className="bg-cream rounded-3xl flex flex-col">
            <div className="flex justify-around items-center p-5">
              <h2 className="font-museo-moderno font-medium text-2xl w-40">
                Career goals & Aspirations
              </h2>
              <img
                src="satellite.png"
                alt=""
                className="h-28 w-44 object-cover rounded-3xl"
              />
            </div>
            <div className="px-8 pb-5">
              <p className="font-museo-moderno font-medium mt-3">
                Thomas&apos; post undergrad plans are to pursue a masters degree
                in the field of wireless communication, as he finds the field
                absolutely fascinating, and almost magical in premise as it’s
                all invisible to us.
              </p>
            </div>
          </div>

          <div className="bg-cream rounded-3xl flex flex-col">
            <div className="flex justify-around items-center p-5">
              <h2 className="font-museo-moderno font-medium text-2xl w-40">
                Hobbies & Interests
              </h2>
              <img
                src="bballEmet.jpg"
                alt=""
                className="h-28 w-44 object-cover rounded-3xl"
              />
            </div>
            <div className="px-6 pt-2 pb-5">
              <p className="font-museo-moderno font-medium mt-3">
                Outside of the classroom, Thomas&apos; 2 main hobbies are
                basketball and weightlifting. Basketball has been a sport
                he&apos;s been playing since he was 10, and when he&apos;s not
                playing pick-up basketball at the McGill gym, he&apos;ll also
                spend his time watching the NBA. As mentioned before, Thomas
                also enjoys web design, and pursues it as a way to be creative
                and creative visually appealing ways to show important
                information.
              </p>
            </div>
          </div>
        </Fade>
      </div>
    </div>
  );
}
