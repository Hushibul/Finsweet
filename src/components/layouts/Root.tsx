import { Outlet } from "react-router-dom";
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
    </>
  );
};

export default Root;
