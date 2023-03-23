import changeButton from "../../assets/images/Left.svg";
import nextButton from "../../assets/images/Right.svg";

import { blogPosts } from "../../assets/constants/constant";
import { useState } from "react";

const Testimonials = () => {
  const [change, setchange] = useState(0);

  function Prev() {
    change === 0
      ? setchange(blogPosts.length - 1)
      : setchange((change) => change - 1);
  }

  function Next() {
    change === blogPosts.length - 1 ? setchange(0) : setchange(change + 1);
  }

  console.log(change);
  return (
    <div className="mt-2  bg-boxPrimary grid grid-cols-12 py-20 px-2 md:mt-10 lg:mx-20 md:px-12 xl:px-24">
      <div className="col-span-12 lg:col-span-5 lg:border border-r-mediumGrey">
        <h5 className="text-paragraph font-fontBold text-bgSecondary">
          Testimonials
        </h5>
        <h2 className="text-headingSecondary text-bgSecondary font-fontBold xl:pr-40">
          What people say about our blog
        </h2>
        <p className="text-paragraph text-mediumGrey lg:pr-24 xl:pr-28">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor.
        </p>
      </div>
      <div className="col-span-12 lg:col-span-7">
        <h3 className="text-blogHeading font-fontBold mt-6 lg:pl-16 lg:pr-18 xl:pl-24 xl:pr-36">
          {blogPosts[change].title}
        </h3>

        <div className="flex mt-14 lg:mt-28 lg:pl-12 justify-between">
          <div className="flex">
            <img
              src={blogPosts[change].user}
              className="w-12 h-12 inline"
              alt="author one"
            />
            <div className="inline">
              <h3 className="text-blogHeading font-fontBold">
                {blogPosts[change].name}
              </h3>
              <span className="block">{blogPosts[change].zone}</span>
            </div>
          </div>
          <div className="flex gap-3">
            <button onClick={Prev}>
              <img src={changeButton} alt="changeious" />
            </button>
            <button onClick={Next}>
              <img src={nextButton} alt="next" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
