import { Link, useParams } from "@remix-run/react";
import { useLoaderData } from "@remix-run/react";
import { ArrowLeftFromLine } from "lucide-react";
import BlogCard from "~/components/BlogCard";

type BlogContent = {
  level: number;
  type: string;
  format: string;
  image: {
    url: string;
    alternativeText: string;
  };
  children: [
    {
      text: string;
      bold?: boolean;
      children: [
        {
          text: string;
        }
      ];
    }
  ];
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

    // Add other attributes if needed
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

//Now obtain the react components for the blog content:

function blogContentParser(blogContents: BlogContent[]) {
  //Iterate through each item in the array

  let buffer = [];
  let extraBuff = [];

  for (let i = 0; i < blogContents.length; i++) {
    switch (blogContents[i].type) {
      case "paragraph":
        extraBuff = [];
        blogContents[i].children.map((child, index) => {
          if (blogContents[i].children[index].bold == true) {
            extraBuff.push(
              <p className="my-4 inline font-medium">
                {blogContents[i].children[index].text}
              </p>
            );
          } else {
            extraBuff.push(
              <p className="my-4 inline">
                {blogContents[i].children[index].text}
              </p>
            );
          }
        });
        buffer.push(<div>{extraBuff}</div>);
        break;
      case "heading":
        if (blogContents[i].level == 5) {
          buffer.push(
            <h5 className="font-semibold text-2xl mb-2">
              {blogContents[i].children[0].text}
            </h5>
          );
        } else if (blogContents[i].level == 6) {
          buffer.push(
            <h6 className="font-medium text-xl mb-2">
              {blogContents[i].children[0].text}
            </h6>
          );
        }
        buffer.push();
        break;
      case "list":
        extraBuff = [];

        if (blogContents[i].format == "unordered") {
          blogContents[i].children.map((child, index) => {
            extraBuff.push(
              <li className="list-disc my-2 ml-10">
                {blogContents[i].children[index].children[0].text}
              </li>
            );
          });
        } else if (blogContents[i].format == "ordered") {
          blogContents[i].children.map((child, index) => {
            extraBuff.push(
              <li className="list-decimal my-2 ml-10">
                {blogContents[i].children[index].children[0].text}
              </li>
            );
          });
        }

        buffer.push(<ol>{extraBuff}</ol>);
        break;
      case "image":
        buffer.push(
          <img
            className="w-full"
            src={blogContents[i].image.url}
            alt={blogContents[i].image.alternativeText}
          />
        );
        break;
    }
    if (blogContents[i + 1]?.type === "list") {
      continue;
    }
    if (
      blogContents[i].type === "heading" &&
      blogContents[i + 1]?.type === "paragraph"
    ) {
      continue;
    } else {
      buffer.push(<br />);
    }
  }

  return buffer;
}

export default function Index() {
  const { articleSlug } = useParams();
  const blogs = useLoaderData() as { data: Blog[] };
  //Iterate through blogs and find the one that matches the slug you gave
  let selectedBlog = null;

  for (let i = 0; i < blogs.data.length; i++) {
    const currBlog = blogs.data[i];
    if (currBlog.attributes.slug == articleSlug) {
      selectedBlog = currBlog;
    }
  }
  console.log(selectedBlog?.attributes.Content);

  const blogContent = blogContentParser(selectedBlog.attributes.Content);
  // console.log(blogContent);

  return (
    <>
      <div className="hidden md:block relative">
        <Link to="/blog">
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
                {selectedBlog?.attributes.Title}
              </h1>
              <p className="mt-6 text-gray-600 font-medium font-sans text-lg">
                {selectedBlog?.attributes.Summary}
              </p>
              <p className="mt-10 font-black font-sans ml-12">May 25th 2024</p>
            </div>
            <div className="w-1/2 pl-10">
              <img
                src={selectedBlog?.attributes.Image.data.attributes.url}
                alt=""
                className="rounded-xl max-h-72 object-cover"
              />
            </div>
          </div>
          <div className="mt-10 text-lg px-16">{blogContent}</div>
        </div>
      </div>

      {/* Mobile Version  */}
      <div className="relative md:hidden">
        <div className="bg-cream w-3/4 mx-auto min-h-[800px] px-4 pb-12 mt-10 pt-4">
          <div className="flex flex-col">
            <h1 className="text-4xl text-black font-bold font-museo-moderno text-center mb-3">
              {selectedBlog?.attributes.Title}
            </h1>
            <img
              src={selectedBlog?.attributes.Image.data.attributes.url}
              alt=""
              className="rounded-xl max-h-72 object-cover w-3/4 mx-auto mt-2"
            />
            <p className="mt-6 text-gray-600 font-medium font-sans text-lg px-5">
              {selectedBlog?.attributes.Summary}
            </p>
            <p className="mt-4 font-black font-sans ml-12">May 25th 2024</p>
          </div>
          <div className="mt-10 text-lg px-6">{blogContent}</div>
        </div>
      </div>
    </>
  );
}
