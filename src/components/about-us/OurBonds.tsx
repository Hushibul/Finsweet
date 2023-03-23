import One from "../../assets/images/OurBondsOne.png";
import Two from "../../assets/images/OurBondsTwo.png";
import BlogTitle from "../base/BlogTitle";
import HeadingPrimary from "../base/HeadingPrimary";

const OurBonds = () => {
  return (
    <div className="mx-2 md:mx-10 lg:mx-20">
      <div className="mt-10 grid grid-cols-12 md:mt-20">
        <div className="col-span-12 md:col-span-6 md:px-4 lg:px-10 xl:px-20 xl:pt-10">
          <HeadingPrimary text="Our team of creatives" />
          <BlogTitle text="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt." />
          <p className="text-mediumGrey">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat.
          </p>
        </div>
        <div className="col-span-12 md:col-span-6 mt-10 md:mt-20 lg:mt-10 xl:mt-0">
          <img src={One} alt="Blog One" />
        </div>
      </div>
      <div className="mt-20 grid grid-cols-12">
        <div className="col-span-12 md:col-span-6 md:px-4 lg:px-10 xl:px-20 xl:pt-10">
          <HeadingPrimary text="Why we started this Blog" />
          <BlogTitle text="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt." />
          <p className="text-mediumGrey">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat.
          </p>
        </div>

        <div className="col-span-12 md:col-span-6 mt-10 md:mt-20 lg:mt-10 xl:mt-0">
          <img src={Two} alt="" />
        </div>
      </div>
    </div>
  );
};

export default OurBonds;
