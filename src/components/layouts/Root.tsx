import { Outlet } from "react-router-dom";
import Footer from "../footer/Footer";
import NavBar from "./NavBar";

const Root = () => {
  return (
    <>
      <header>
        <NavBar />
      </header>
      <main>
        <Outlet />
      </main>
      <footer>
        <Footer />
      </footer>
    </>
  );
};

export default Root;
