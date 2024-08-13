import { Grid, Typography } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";

/**
 * 홈페이지 navbar
 * @returns
 */
const NavBar = () => {
  const { pathname } = useLocation();
  const [pageName, setPageName] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    setPageName(pathname.replace("/", ""));
  }, [pathname]);

  console.log(pathname.replace("/", ""));
  console.log("pagename" + pageName);

  if (pathname == "/") {
    return (
      <>
        <Grid container py={3} bgcolor={"#fcfcfc"}>
          <Grid item xs={3} display={"flex"} justifyContent={"center"} alignItems={"center"} p={0}>
            <Link to={"/search"}>
              <SearchIcon fontSize="large" sx={{ color: "black" }} />
            </Link>
          </Grid>
          <Grid item xs={6} display={"flex"} justifyContent={"center"}>
            <Typography>NavBar</Typography>
          </Grid>
          <Grid item xs={3} display={"flex"} justifyContent={"center"} alignItems={"center"} p={0}>
            <Link to={"/cart"}>
              <ShoppingCartIcon fontSize="large" sx={{ color: "black" }} />
            </Link>
          </Grid>
        </Grid>
      </>
    );
  } else if (pathname == "/profile") {
    return (
      <>
        <Grid container py={3} bgcolor={"#fcfcfc"}>
          <Grid item xs={3} display={"flex"} justifyContent={"center"} alignItems={"center"} p={0}>
            <Link to={"/search"}>
              <SearchIcon fontSize="large" sx={{ color: "black" }} />
            </Link>
          </Grid>
          <Grid item xs={6} display={"flex"} justifyContent={"center"}>
            <Typography>Profile</Typography>
          </Grid>
          <Grid item xs={3} display={"flex"} justifyContent={"center"} alignItems={"center"} p={0}>
            <Link to={"/cart"}>
              <ShoppingCartIcon fontSize="large" sx={{ color: "black" }} />
            </Link>
          </Grid>
        </Grid>
      </>
    );
  } else {
    return (
      <>
        <Grid container py={3} bgcolor={"#fcfcfc"}>
          <Grid item xs={3} display={"flex"} justifyContent={"center"} alignItems={"center"} p={0}>
            <Link
              to={"#"}
              onClick={(e) => {
                e.preventDefault();
                navigate(-1);
              }}
            >
              <ChevronLeftIcon fontSize="large" sx={{ color: "black" }} />
            </Link>
          </Grid>
          <Grid item xs={6} display={"flex"} justifyContent={"center"}>
            <Typography>{pageName}</Typography>
          </Grid>
          <Grid item xs={3} display={"flex"} justifyContent={"center"} alignItems={"center"} p={0}></Grid>
        </Grid>
      </>
    );
  }
};

export default NavBar;
