import BusinessCard from "../cards/BusinessCard";
import { businessCard } from "../../assets/constants/constant";
import { useState } from "react";

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
    <div className="mt-20">
      <h2 className="text-bgSecondary text-headingSecondary mb-10 font-fontBold text-center">
        Choose A Catagory
      </h2>
      <div className=" grid grid-cols-12 gap-5 mx-20">
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
