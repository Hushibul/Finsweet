import BlogTitle from "../base/BlogTitle";
import Subtitle from "../base/Subtitle";

const Aboutus = () => {
  return (
    <div className="mt-10 bg-boxSecondary grid grid-cols-12 px-2 py-10 md:mx-10 md:px-6 md:py-20 md:mt-20 lg:mx-20 lg:px-12">
      <div className="col-span-12 md:px-4 lg:col-span-6">
        <Subtitle text="About Us" />
        <h2 className="text-bgSecondary text-headingSecondary font-fontBold">
          We are a community of content writers who share their learnings
        </h2>
        <p className="text-paragraph text-mediumGrey mt-4">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Error cum
          voluptatem ipsa qui tempora iusto perferendis praesentium similique
          reiciendis hic.
        </p>
        <p className="text-btnText text-purple font-fontBold mt-4">
          Read More {">"}
        </p>
      </div>
      <div className="col-span-12 px-2 mt-6 md:px-4 lg:col-span-6 lg:mt-0">
        <Subtitle text="Our Misson" />
        <BlogTitle text="We are a community of content writers who share their learnings" />
        <p className="text-paragraph text-mediumGrey mt-4">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat.
        </p>
      </div>
    </div>
  );
};

export default Aboutus;
