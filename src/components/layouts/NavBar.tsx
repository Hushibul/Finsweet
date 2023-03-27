import { menu } from "../../assets/constants/constant";
import Logo from "../../assets/images/Logo.png";
import { Link } from "react-router-dom";
import { CiMenuFries } from "react-icons/ci";
import { useState } from "react";

const NavBar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  return (
    <nav className="flex flex-col py-5 lg:py-0 lg:flex-row w-full md:pl-20 bg-bgSecondary items-center relative">
      <div>
        <img className="h-12 w-24" src={Logo} alt="Brand Logo" />
      </div>
      <ul
        className={
          menuOpen
            ? "flex flex-col h-full lg:flex lg:flex-row text-white lg:ml-auto gap-6 text-paragraph py-6"
            : "hidden lg:flex lg:flex-row text-white ml-auto gap-6 text-paragraph py-6"
        }
      >
        {menu.slice(0, 4).map((item) => (
          <Link key={item.id} to={item.path}>
            <li>{item.name}</li>
          </Link>
        ))}
      </ul>
      <CiMenuFries
        onClick={() => setMenuOpen(!menuOpen)}
        size={50}
        color="white"
        className="absolute top-0 right-0 lg:hidden"
      />
      <button className="hidden px-6 py-3 text-btnText font-fontBold bg-bgPrimary text-bgSecondary ml-auto lg:ml-8 lg:block mr-20">
        Subscribe
      </button>
    </nav>
  );
};

export default NavBar;
