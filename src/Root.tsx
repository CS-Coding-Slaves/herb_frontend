import { Outlet, useLocation } from "react-router-dom";
import NavBar from "./components/NavBar";
import BottomBar from "./components/BottomBar";

function Root() {
  const { pathname } = useLocation();

  if (pathname == "/" || pathname == "/profile") {
    return (
      <>
        <NavBar />
        <Outlet />
        <BottomBar />
      </>
    );
  }
  return (
    <>
      <NavBar />
      <Outlet />
    </>
  );
}

export default Root;
