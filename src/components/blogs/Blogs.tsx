import BlogCard from "../cards/BlogCard";
import { allBlogs } from "../../assets/constants/constant";
import { useState, Fragment } from "react";

const Blogs = () => {
  const [start, setStart] = useState(0);
  const [end, setEnd] = useState(5);

  function Prev() {
    start === 0 ? setStart(0) : setStart((start) => start - 5);
    end === 4 ? setEnd(4) : setEnd((end) => end - 5);
  }
  function Next() {
    start === allBlogs.length - 5
      ? setStart(allBlogs.length - 5)
      : setStart((start) => start + 5);
    end === allBlogs.length - 1
      ? setEnd(allBlogs.length - 1)
      : setEnd((end) => end + 5);
  }

  console.log(start, end);

  return (
    <div className="mt-16 text-bgSecondary mx-6 md:mx-20">
      <h2 className="text-headingSecondary border font-fontBold uppercase border-b-mediumGrey lg:text-headingPrimary">
        All Post
      </h2>
      {[...allBlogs].slice(start, end).map((item) => (
        <Fragment key={item.id}>
          <BlogCard
            image={item.image}
            category={item.category}
            title={item.title}
            content={item.content}
          />
        </Fragment>
      ))}

      <div className="text-center mt-6">
        <button
          disabled={start === 0 ? true : false}
          className={
            start === 0
              ? "mr-6 font-fontBold text-bgSecondary text-2xl opacity-40 scale-90"
              : "mr-6 font-fontBold text-bgSecondary text-3xl"
          }
          onClick={Prev}
        >
          Prev
        </button>
        <button
          disabled={end >= allBlogs.length ? true : false}
          className={
            end >= allBlogs.length
              ? "font-fontBold text-bgSecondary text-2xl scale-90 opacity-40"
              : "font-fontBold text-bgSecondary text-3xl"
          }
          onClick={Next}
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default Blogs;
