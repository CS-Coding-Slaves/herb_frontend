import { FilledInput, Grid } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";

const Search = () => {
  return (
    <>
      <Grid display={"flex"} alignItems={"center"} justifyContent={"center"} height={"50vh"}>
        <Grid container width={"80%"}>
          <Grid item xs={10} borderRadius={2} overflow={"hidden"}>
            <FilledInput fullWidth sx={{ bgcolor: "white" }} />
          </Grid>
          <Grid
            item
            xs={2}
            bgcolor={"black"}
            borderRadius={3}
            display={"flex"}
            justifyContent={"center"}
            alignItems={"center"}
          >
            <SearchIcon sx={{ color: "white" }} fontSize="large" />
          </Grid>
        </Grid>
      </Grid>
    </>
  );
};

export default Search;
