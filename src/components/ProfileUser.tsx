import { Avatar, Grid, Typography } from "@mui/material";
import EditIcon from "@mui/icons-material/Edit";

const ProfileUser = () => {
  return (
    <>
      <Grid container bgcolor={"#fcfcfc"}>
        <Grid item xs={4} display={"flex"} justifyContent={"center"} alignItems={"center"}>
          <Avatar sx={{ width: 80, height: 80 }}>U</Avatar>
        </Grid>
        <Grid item xs={6} display={"flex"} flexDirection={"column"} justifyContent={"center"}>
          <Grid>
            <Typography variant="h5">User Name Space</Typography>
          </Grid>
          <Grid>
            <Typography color={"#aaaaaa"}>User Email Space</Typography>
          </Grid>
        </Grid>
        <Grid item xs={2} display={"flex"} justifyContent={"center"} alignItems={"center"}>
          <EditIcon />
        </Grid>
      </Grid>
    </>
  );
};

export default ProfileUser;
