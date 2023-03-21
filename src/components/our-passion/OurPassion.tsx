import Passion from "../../assets/images/passion.png";
import ButtonPrimary from "../base/ButtonPrimary";

const OurPassion = () => {
  return (
    <div className="mt-24 mx-6 md:mx-20 relative">
      <img src={Passion} alt="Passion Background" />
      <div className="text-bgSecondary w-full  md:absolute md:w-1/2 bottom-0 right-0 md:px-20 py-10 bg-bgPrimary">
        <h5 className="uppercase text-paragraph font-fontBold">
          Why we Started
        </h5>
        <h3 className="text-headingSecondary md:text-titleHeading  font-fontBold">
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
