import BusinessCard from "../cards/BusinessCard";
import { businessCard } from "../../assets/constants/constant";
import { useState } from "react";
import HeadingPrimary from "../base/HeadingPrimary";

const Categories = () => {
  interface card {
    id: number;
    image: string;
    title: string;
    content: string;
  }

  const [active, setActive] = useState<card>({
    id: 0,
    image: "",
    title: "",
    content: "",
  });
  return (
    <div className="mt-10 lg:mt-20 mx-2 md:mx-12 lg:mx-20">
      <HeadingPrimary text="Choose A Catagory" />
      <div className=" grid grid-cols-12 gap-2 mt-6 md:gap-5 ">
        {businessCard.map((item) => (
          <div
            onClick={() => setActive(item)}
            className={
              active.id === item.id
                ? "col-span-12 sm:col-span-6 lg:col-span-3 p-10 rounded-lg cursor-pointer shadow-mediumGrey bg-btnPrimary"
                : "col-span-12 sm:col-span-6 lg:col-span-3 p-10 shadow rounded-lg cursor-pointer shadow-mediumGrey"
            }
            key={item.id}
          >
            <BusinessCard
              image={item.image}
              title={item.title}
              content={item.content}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Categories;
