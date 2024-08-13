import { Button, Grid } from "@mui/material";
import HomeIcon from "@mui/icons-material/Home";
import BookmarkIcon from "@mui/icons-material/Bookmark";
import NotificationsIcon from "@mui/icons-material/Notifications";
import PersonIcon from "@mui/icons-material/Person";
import { useNavigate } from "react-router-dom";

const BottomBar = () => {
  const navigate = useNavigate();
  const handleHome = () => {
    navigate("/");
  };

  const handleProfile = () => {
    navigate("/profile");
  };

  return (
    <>
      <Grid container display={"flex"} position={"fixed"} bottom={"0px"} bgcolor={"white"} height={"80px"}>
        <Grid item xs={3} display={"flex"} justifyContent={"center"} alignItems={"center"} sx={{ padding: "0px" }}>
          <Button sx={{ width: "100%", height: "100%", padding: "0px" }} onClick={handleHome}>
            <HomeIcon fontSize="large" sx={{ color: "#1e1e1e" }} />
          </Button>
        </Grid>

        <Grid item xs={3} display={"flex"} justifyContent={"center"} alignItems={"center"} sx={{ padding: "0px" }}>
          <Button sx={{ width: "100%", height: "100%", padding: "0px" }} onClick={handleHome}>
            <BookmarkIcon fontSize="large" sx={{ color: "#b8b8b8" }} />
          </Button>
        </Grid>

        <Grid item xs={3} display={"flex"} justifyContent={"center"} alignItems={"center"} sx={{ padding: "0px" }}>
          <Button sx={{ width: "100%", height: "100%", padding: "0px" }} onClick={handleHome}>
            <NotificationsIcon fontSize="large" sx={{ color: "#b8b8b8" }} />
          </Button>
        </Grid>

        <Grid item xs={3} display={"flex"} justifyContent={"center"} alignItems={"center"} sx={{ padding: "0px" }}>
          <Button sx={{ width: "100%", height: "100%", padding: "0px" }} onClick={handleProfile}>
            <PersonIcon fontSize="large" sx={{ color: "#b8b8b8" }} />
          </Button>
        </Grid>
      </Grid>
    </>
  );
};

export default BottomBar;
