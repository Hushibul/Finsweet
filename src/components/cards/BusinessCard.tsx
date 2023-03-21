import React from "react";

const BusinessCard = ({ image, title, content }: any) => {
  return (
    <div>
      <>
        <img src={image} alt="cardImage" />
      </>
      <h3 className="text-bgSecondary font-fontBold text-blogTitle">{title}</h3>
      <p className="text-paragraph text-mediumGrey">{content}</p>
    </div>
  );
};

export default BusinessCard;
