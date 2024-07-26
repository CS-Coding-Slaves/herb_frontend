import { Outlet } from "react-router-dom";
import NavBar from "./components/NavBar";

function Root() {
  return (
    <>
      <NavBar />
      <Outlet />
    </>
  );
}

export default Root;
