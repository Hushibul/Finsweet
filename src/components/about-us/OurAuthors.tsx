import AuthorCard from "../cards/AuthorCard";
import { authors } from "../../assets/constants/constant";

const OurAuthors = () => {
  return (
    <div className="mt-24 mx-2 md:mx-10 lg:mx-20">
      <h2 className="text-bgSecondary text-headingSecondary mb-10 font-fontBold text-center">
        List of Authors
      </h2>
      <div className="grid grid-cols-12">
        {authors.map((item) => (
          <div
            key={item.id}
            className="col-span-12 mt-2 bg-gray-200 rounded-md md:mt-8 md:col-span-6 md:ml-8 lg:ml-4 lg:mt-0 lg:col-span-3 lg:[&:first-child]:ml-0"
          >
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

export default OurAuthors;
