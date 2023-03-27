const BlogCard = ({ image, category, title, content }: any) => {
  return (
    <div className="mt-16 grid grid-cols-12 text-bgSecondary">
      <div className="col-span-12 lg:col-span-6">
        <img src={image} alt="blogImage" />
      </div>
      <div className="col-span-12 pt-6 px-2 md:mx-auto md:pt-10 lg:pl-20 lg:col-span-6 lg:pt-16">
        <h5 className="text-paragraph font-fontBold text-purple uppercase">
          {category}
        </h5>
        <h2 className="text-headingSecondary mb-4 font-fontBold">{title}</h2>
        <p className="text-mediumGrey">{content}</p>
      </div>
    </div>
  );
};

export default BlogCard;
