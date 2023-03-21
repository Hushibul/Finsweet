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
    <div className="mt-20 md:mx-20 bg-boxPrimary grid grid-cols-12 py-20  px-6 md:px-24 text-left text-bgSecondary">
      <div className="col-span-12 md:col-span-5 border border-r-mediumGrey">
        <h5 className="text-paragraph font-fontBold px-4">Testimonials</h5>
        <h2 className="text-headingSecondary font-fontBold px-4 md:pr-40">
          What people say about our blog
        </h2>
        <p className="text-paragraph text-mediumGrey px-4 md:pr-28">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor.
        </p>
      </div>
      <div className="col-span-12 md:col-span-7">
        <h3 className="text-blogHeading font-fontBold px-4 mt-6 md:mt-0 md:pl-24 md:pr-36">
          {blogPosts[change].title}
        </h3>

        <div className="flex mt-28 pl-4 md:pl-24 justify-between">
          <div className="flex">
            <img
              src={blogPosts[change].user}
              className="w-12 h-12 inline"
              alt="author one"
            />
            <div className="inline ml-4">
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
