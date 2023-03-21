const Aboutus = () => {
  return (
    <div className="mt-20 grid grid-cols-12 md:mx-20 px-12 py-20 text-bgSecondary bg-boxSecondary">
      <div className="col-span-12 md:col-span-6  px-4">
        <h5 className="text-btnText font-fontBold">About Us</h5>
        <h2 className="text-headingSecondary font-fontBold">
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
      <div className="col-span-12 md:col-span-6 px-4">
        <h5 className="text-btnText font-fontBold mt-8 md:mt-0">Our Misson</h5>
        <h3 className="text-blogHeading font-fontBold mt-2">
          We are a community of content writers who share their learnings
        </h3>
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
