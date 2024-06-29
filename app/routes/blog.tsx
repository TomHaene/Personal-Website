import { useLoaderData } from "@remix-run/react";
import Card from "../components/Card";
import { Fade } from "react-awesome-reveal";
type BlogContent = {
  type: string;
  text: string;
};

type Blog = {
  id: number;
  attributes: {
    Content: BlogContent[];
    Title: string;
    Summary: string;
    slug: string;
    Image: {
      data: {
        attributes: {
          name: string;
          url: string;
        };
      };
    };
  };
};

export async function loader() {
  const res = await fetch(
    "https://sacred-apparel-a6883804b9.strapiapp.com/api/blog-articles" +
      "?populate=*"
  );
  const data = await res.json();
  return data;
}

export default function Index() {
  const blogs = useLoaderData() as { data: Blog[] };

  return (
    <>
      {/* Desktop Version */}
      <div className=" hidden md:block relative">
        <Fade triggerOnce>
          <h1 className="font-bold text-white font-museo-moderno text-[35px] underline underline-offset-8 decoration-1 absolute top-8 left-14">
            My Blog
          </h1>
        </Fade>
        <Fade triggerOnce delay={200}>
          <p className="text-custom-gray text-sm font-medium absolute top-20 mt-2 left-14">
            Just talking about topics I find interesting
          </p>
        </Fade>

        <div
          className={`mt-40 flex flex-wrap justify-center gap-x-28 gap-y-10 px-5 mb-10`}
        >
          {blogs.data.map((article, i) => (
            <Fade triggerOnce>
              <Card
                key={i}
                styles="w-[340px] h-[450px] bg-cream text-black font-museo-moderno rounded-xl overflow-hidden cursor-pointer shadow-2xl hover:scale-105 transition ease-in-out"
                title={article.attributes.Title}
                imgName={article.attributes.Image.data.attributes.url}
                cardContent={article.attributes.Summary}
                slug={article.attributes.slug}
                id={article.id}
              />
            </Fade>
          ))}
        </div>
      </div>

      {/* Mobile Version */}
      <div className="relative md:hidden">
        <Fade triggerOnce>
          <h1 className="font-bold text-white font-museo-moderno text-[35px] underline underline-offset-8 decoration-1 absolute top-8 left-14">
            My Blog
          </h1>
        </Fade>
        <Fade triggerOnce delay={200}>
          <p className="text-custom-gray text-sm font-medium absolute top-20 mt-2 left-14">
            Just talking about topics I find interesting
          </p>
        </Fade>

        <div
          className={`mt-40 flex flex-wrap justify-center gap-x-28 gap-y-10 px-5 mb-10`}
        >
          {blogs.data.map((article, i) => (
            <Fade triggerOnce>
              <Card
                styles="w-[340px] h-[450px] bg-cream text-black font-museo-moderno rounded-xl overflow-hidden cursor-pointer shadow-2xl "
                key={i}
                title={article.attributes.Title}
                imgName={article.attributes.Image.data.attributes.url}
                cardContent={article.attributes.Summary}
                slug={article.attributes.slug}
                id={article.id}
              />
            </Fade>
          ))}
        </div>
      </div>
    </>
  );
}
