import AuthorCard from "../cards/AuthorCard";
import { authors } from "../../assets/constants/constant";

const Authors = () => {
  return (
    <div className="mt-24 mx-10 md:mx-20">
      <h2 className="text-bgSecondary text-headingSecondary mb-10 font-fontBold text-center">
        List of Authors
      </h2>
      <div className="grid grid-cols-12">
        {authors.map((item) => (
          <div className="col-span-12 sm:col-span-6 md:col-span-3 mt-4 md-mt-0 bg-gray-200 rounded-md md:[&:first-child]:ml-0 md:ml-8">
            <AuthorCard
              image={item.image}
              name={item.name}
              post={item.post}
              company={item.company}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Authors;
