import ButtonPrimary from "../base/ButtonPrimary";

const JoinTeam = () => {
  return (
    <div className="my-32 mx-6 md:mx-auto md:w-1/4 text-bgSecondary">
      <h2 className="text-headingSecondary font-fontBold">
        Join our team to be a part of our story
      </h2>
      <p className="text-mediumGrey">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt.
      </p>
      <ButtonPrimary text="Join Now" />
    </div>
  );
};

export default JoinTeam;
