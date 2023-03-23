import HeadingPrimary from "../base/HeadingPrimary";
import Subtitle from "../base/Subtitle";
import AboutBg from "../../assets/images/aboutBg.png";

const TopHeading = () => {
  return (
    <div className="mt-3 mx-2 md:mx-10 md:mt-10 lg:mt-20 lg:mx-20">
      <div className="grid grid-cols-12">
        <div className="col-span-12 py-4 bg-bgPrimary md:py-10 md:col-span-6 md:px-10 lg:px-20 xl:ml-20">
          <Subtitle text="About Us" />
          <HeadingPrimary text="We are a team of content writers who share their learnings" />
        </div>
        <div className="col-span-12 md:col-span-6 lg:pl-10 md:pt-10 xl:pr-32 xl:pl-20">
          <p className="text-mediumGrey">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat.
          </p>
        </div>
      </div>
      <div className="relative flex">
        <div className="hidden md:block absolute top-[-40px] z-[-1] xxl:left-10">
          <img className="object-contain" src={AboutBg} alt="" />
        </div>

        <div className="flex flex-col md:flex-row text-bgSecondary bg-btnPrimary p-4 text-center w-full mt-6 md:w-fit md:ml-10 md:mt-20 lg:mt-52 lg:p-10 xl:ml-20">
          <div className="px-8 lg:px-16">
            <h2 className=" text-headingPrimary font-fontBold">12K+</h2>
            <p>Blog Published</p>
          </div>
          <div className="px-8 lg:px-16">
            <h2 className=" text-headingPrimary font-fontBold">18K+</h2>
            <p>Views in Finsweet</p>
          </div>
          <div className="px-8 lg:px-16">
            <h2 className=" text-headingPrimary font-fontBold">30K+</h2>
            <p>Total Active User</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TopHeading;
