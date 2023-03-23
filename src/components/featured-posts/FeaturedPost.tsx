import { blogsPrimary } from "../../assets/constants/constant";
import blogOne from "../../assets/images/blogOne.png";
import { useState } from "react";
import ButtonPrimary from "../base/ButtonPrimary";
import HeadingPrimary from "../base/HeadingPrimary";
import BlogTitle from "../base/BlogTitle";

const FeaturedPost = () => {
  interface blogPosts {
    id: number;
    image: string;
    heading: string;
    name: string;
    date: string;
    content: string;
  }
  const [active, setActive] = useState<blogPosts>({
    id: 1,
    image: blogOne,
    heading: "8 Figma design systems that you can download for free today.",
    name: "Jhon Doe",
    date: "May 29, 2022",
    content:
      "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident.",
  });
  return (
    <div className="grid grid-cols-12 md:px-10 pt-10 md:pt-36 lg:px-20">
      <div className="col-span-12 md:col-span-6 ">
        <HeadingPrimary text="Featured Posts" />

        <div className="px-2 sm:px-8 text-bgSecondary">
          <img className="pt-8" src={active.image} alt="Blog" />
          <p className="text-paragraph mt-4">
            {active.name} | {active.date}
          </p>
          <BlogTitle text={active.heading} />
          <p className="text-paragraph text-mediumGrey mt-4">
            {active.content}
          </p>
          <ButtonPrimary text="Read More >" />
        </div>
      </div>
      <div className="col-span-12 mt-6 md:col-span-6 md:mt-0">
        <HeadingPrimary text="Trending Posts" />
        <div className="mx-1 md:mx-4">
          {blogsPrimary.map((item) => (
            <div
              className={
                active.id === item.id
                  ? "cursor-pointer py-4 px-4 rounded-lg bg-boxPrimary"
                  : "cursor-pointer py-4 px-4 rounded-lg"
              }
              key={item.id}
              onClick={() => setActive(item)}
            >
              <p className="text-paragraph mt-4 text-bgSecondary">
                <span className="text-purple"> {item.name}</span> | {item.date}
              </p>
              <h3 className="text-blogHeading mt-2 font-fontBold text-bgSecondary">
                {item.heading}
              </h3>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FeaturedPost;
