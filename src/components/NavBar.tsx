import { Grid, Typography } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import { Link, useLocation } from "react-router-dom";

/**
 * 홈페이지 navbar
 * @returns
 */
const NavBar = () => {
  const { pathname } = useLocation();
  console.log(pathname);

  if (pathname == "/") {
    return (
      <>
        <Grid container my={3}>
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
        <Grid container my={3}>
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
  }
};

export default NavBar;
