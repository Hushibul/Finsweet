import ButtonPrimary from "../base/ButtonPrimary";

const Hero = ({
  heading,
  paragraph,
  image,
  position,
  subtitle,
  name,
  date,
}: any) => {
  return (
    <div className="bg-slate-200 text-bgSecondary">
      {image ? (
        <div>
          {position === "right" ? (
            <div className="grid grid-cols-12">
              <div className="col-span-12 md:col-span-7 px-6 md:px-0 md:pr-32 py-10 md:pl-20">
                <h5 className="font-fontBold">{subtitle}</h5>
                <h2 className="text-blogHeading md:text-headingSecondary font-fontBold">
                  {heading}
                </h2>
                <p className="text-mediumGrey">
                  By <span className="text-purple">{name}</span> | {date}
                </p>
                <ButtonPrimary text="Read More" />
              </div>
              <div className="col-span-12 mx-auto md:col-span-5 px-6 md:px-0 pb-5 md:py-10 md:pr-20">
                <img src={image} alt="blogImage" />
              </div>
            </div>
          ) : (
            <div></div>
          )}
        </div>
      ) : (
        <div className="text-center px-5 py-10">
          <h2 className="text-headingPrimary font-fontBold">{heading}</h2>
          <p className="text-mediumGrey sm:w-2/3 md:w-1/3 mx-auto">
            {paragraph}
          </p>
        </div>
      )}
    </div>
  );
};

export default Hero;
