import { Link } from "react-router-dom";
import ButtonPrimary from "../base/ButtonPrimary";
import Classes from "./Header.module.css";

const Header = () => {
  return (
    <div className={`${Classes.header}`}>
      <div className="md:w-3/5 mx-6 md:mx-0  md:ml-20 pt-40">
        <h5 className="text-white text-paragraph">
          Posted On <span className="font-fontBold">Start Up</span>
        </h5>
        <h1 className="text-white text-headingSecondary lg:text-headingPrimary font-fontBold mb-6">
          Step-by-step guide to choosing great font pairs
        </h1>

        <p className="text-white text-paragraph mb-4">
          By <span className="text-btnPrimary">James West</span> |{" "}
          <span>March 12, 2022</span>
        </p>
        <p className="text-white">
          Duis aute irure dolor in reprehenderit in voluptate velit esse cillum
          dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
          proident.
        </p>

        <Link to="/blog">
          <ButtonPrimary text="Read More >" />
        </Link>
      </div>
    </div>
  );
};

export default Header;
