import { blogsPrimary } from "../../assets/constants/constant";
import blogOne from "../../assets/images/blogOne.png";
import { useState } from "react";
import ButtonPrimary from "../base/ButtonPrimary";

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
    <div className="grid grid-cols-12 md:px-20 pt-36">
      <div className="col-span-12 md:col-span-6 ">
        <h2 className="text-bgSecondary text-center md:text-left text-headingSecondary font-fontBold">
          Featured Posts
        </h2>
        <div className="px-8 text-bgSecondary">
          <img className="pt-8" src={active.image} alt="Blog" />
          <p className="text-paragraph mt-4">
            {active.name} | {active.date}
          </p>
          <h3 className="text-blogHeading font-fontBold mt-2">
            {active.heading}
          </h3>
          <p className="text-paragraph text-mediumGrey mt-4">
            {active.content}
          </p>
          <ButtonPrimary text="Read More >" />
        </div>
      </div>
      <div className="col-span-12 md:col-span-6">
        <h2 className="text-bgSecondary text-headingSecondary text-center md:text-left mt-6 md:mt-0 font-fontBold">
          All Posts
        </h2>
        <div className="mx-4">
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
