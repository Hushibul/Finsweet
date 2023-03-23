import Logo from "../../assets/images/Logo.svg";
import { Link } from "react-router-dom";
import { menu } from "../../assets/constants/constant";
import ButtonPrimary from "../base/ButtonPrimary";
import FacebookTwo from "../../assets/images/FacebookTwo.svg";
import InstagramTwo from "../../assets/images/InstagramTwo.svg";
import LinkedInTwo from "../../assets/images/LinkedInTwo.svg";
import TwitterTwo from "../../assets/images/TwitterTwo.svg";

const Footer = () => {
  return (
    <div className="md:px-10 lg-px-20 bg-bgSecondary">
      <div className="flex w-full items-center">
        <div className="mx-auto py-6 md:mx-0">
          <img src={Logo} alt="Brand Logo" />
        </div>
        <ul className="hidden md:flex text-white ml-auto gap-6 text-paragraph py-6">
          {menu.map((item) => (
            <Link key={item.id} to={item.path}>
              <li>{item.name}</li>
            </Link>
          ))}
        </ul>
      </div>
      <div className="grid grid-cols-12 px-2 py-6 md:px-4 lg:px-10 bg-slate-600 md:py-10">
        <div className="col-span-12 md:col-span-6">
          <h2 className="text-headingSecondary text-white font-fontBold">
            Subscribe to our news letter to get latest updates and news
          </h2>
        </div>
        <div className="col-span-12 md:col-span-6 md:ml-6 lg:mr-6 w-full lg:w-2/3">
          <input
            type="text"
            className="px-4 py-3 bg-transparent border border-mediumGrey "
            placeholder="Enter your email"
          />
          <ButtonPrimary text="Subscribe" />
        </div>
      </div>
      <div className="flex items-center justify-between py-6">
        <div>
          <p className="text-mediumGrey">Finstreet 118 2561 Fintown</p>
          <p className="text-mediumGrey">Hello@finsweet.com 020 7993 2905</p>
        </div>
        <div className="flex gap-3">
          <Link to="#">
            {" "}
            <img src={FacebookTwo} alt="Facebook" />{" "}
          </Link>
          <Link to="#">
            {" "}
            <img src={InstagramTwo} alt="Instagram" />{" "}
          </Link>
          <Link to="#">
            {" "}
            <img src={LinkedInTwo} alt="LinkedIn" />{" "}
          </Link>
          <Link to="#">
            {" "}
            <img src={TwitterTwo} alt="Twitter" />{" "}
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Footer;
