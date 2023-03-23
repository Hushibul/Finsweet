const BlogTitle = ({ text }: any) => {
  return (
    <h3 className="text-blogHeading font-fontBold mt-2 text-bgSecondary">
      {text}
    </h3>
  );
};

export default BlogTitle;
