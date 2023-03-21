import { Link } from "react-router-dom";
import Facebook from "../../assets/images/facebook.svg";
import Twitter from "../../assets/images/twitter.svg";
import Instagram from "../../assets/images/instagram.svg";
import LinkedIn from "../../assets/images/linkedin.svg";

const AuthorCard = ({ image, name, post, company }: any) => {
  return (
    <div className="flex flex-col justify-center items-center text-bgSecondary">
      <img className="mt-10" src={image} alt={name} />
      <h2 className="text-blogHeading font-fontBold mt-5 text-center">
        {name}
      </h2>
      <p className="text-smallText text-mediumGrey text-center">
        {post} @{company}
      </p>
      <div className="flex gap-2 mt-5 mb-10">
        <Link to="#">
          <img src={Facebook} alt="facebook" />
        </Link>
        <Link to="#">
          <img src={Twitter} alt="twitter" />
        </Link>
        <Link to="#">
          <img src={Instagram} alt="instagram" />
        </Link>
        <Link to="#">
          <img src={LinkedIn} alt="linkedin" />
        </Link>
      </div>
    </div>
  );
};

export default AuthorCard;
