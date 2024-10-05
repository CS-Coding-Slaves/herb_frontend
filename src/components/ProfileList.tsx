import { Grid, Typography } from "@mui/material";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";

const ProfileList = () => {
  return (
    <>
      <Grid container item width={"90%"} my={2} sx={{ boxShadow: 1 }}>
        <Grid
          item
          container
          xs={10}
          display={"flex"}
          flexDirection={"column"}
          justifyContent={"center"}
          spacing={2}
          p={2}
        >
          <Grid item>
            <Typography variant="h5">Title Space</Typography>
          </Grid>
          <Grid item>
            <Typography>Subtitle Space</Typography>
          </Grid>
        </Grid>
        <Grid item xs={2} display={"flex"} justifyContent={"center"} alignItems={"center"}>
          <ChevronRightIcon fontSize="large" />
        </Grid>
      </Grid>
    </>
  );
};

export default ProfileList;
