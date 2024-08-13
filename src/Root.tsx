import { Outlet } from "react-router-dom";
import NavBar from "./components/NavBar";
import BottomBar from "./components/BottomBar";

function Root() {
  return (
    <>
      <NavBar />
      <Outlet />
      <BottomBar />
    </>
  );
}

export default Root;
