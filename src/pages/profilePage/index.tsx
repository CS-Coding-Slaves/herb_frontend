import { Grid } from "@mui/material";
import ProfileUser from "../../components/ProfileUser";
import ProfileList from "../../components/ProfileList";

const Profile = () => {
  return (
    <>
      <ProfileUser />
      <Grid container display={"flex"} flexDirection={"column"} alignItems={"center"} bgcolor={"#fcfcfc"} pt={3}>
        <ProfileList />
        <ProfileList />
        <ProfileList />
        <ProfileList />
        <ProfileList />
      </Grid>
    </>
  );
};

export default Profile;
