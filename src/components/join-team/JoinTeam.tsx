import ButtonPrimary from "../base/ButtonPrimary";
import HeadingPrimary from "../base/HeadingPrimary";

const JoinTeam = () => {
  return (
    <div className="my-10 md:my-20 mx-2 md:mx-auto md:w-1/2 lg:w-1/3 lg:my-32 xl:w-1/4">
      <HeadingPrimary text="Join our team to be a part of our story" />
      <p className="text-mediumGrey">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt.
      </p>
      <ButtonPrimary text="Join Now" />
    </div>
  );
};

export default JoinTeam;
