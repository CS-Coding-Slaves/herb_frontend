import { Grid } from "@mui/material";
import ItemDisplay from "../../components/ItemDisplay";
import SlideItem from "../../components/SlideItem";

const Home = () => {
  return (
    <>
      <Grid display={"flex"} flexDirection={"column"} maxWidth={"100%"}>
        <SlideItem />
        <Grid container spacing={2} display={"flex"} justifyContent={"center"}>
          <Grid item>
            <ItemDisplay />
          </Grid>
          <Grid item>
            <ItemDisplay />
          </Grid>
          <Grid item>
            <ItemDisplay />
          </Grid>
          <Grid item>
            <ItemDisplay />
          </Grid>
          <Grid item>
            <ItemDisplay />
          </Grid>
          <Grid item>
            <ItemDisplay />
          </Grid>
        </Grid>
      </Grid>
    </>
  );
};

export default Home;
