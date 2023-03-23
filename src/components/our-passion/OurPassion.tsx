import Passion from "../../assets/images/passion.png";
import ButtonPrimary from "../base/ButtonPrimary";
import Subtitle from "../base/Subtitle";

const OurPassion = () => {
  return (
    <div className="mt-24 mx-2 relative  md:mx-10 lg:mx-20 ">
      <img src={Passion} alt="Passion Background" />
      <div className="text-bgSecondary w-full  py-10 bg-bgPrimary lg:absolute bottom-0 right-0 lg:w-1/2 lg:px-10 xl:px-20">
        <Subtitle text="Why we started" />
        <h3 className="text-headingSecondary md:text-titleHeading font-fontBold">
          It started out as a simple idea and evolved into our passion
        </h3>
        <p className="text-mediumGrey">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip.
        </p>
        <ButtonPrimary text="Discover our story >" />
      </div>
    </div>
  );
};

export default OurPassion;
