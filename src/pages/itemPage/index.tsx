import { Button, Grid, Typography } from "@mui/material";
import StarIcon from "@mui/icons-material/Star";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";
import BookmarkIcon from "@mui/icons-material/Bookmark";
import { useState } from "react";

const Item = () => {
  const [count, setCount] = useState(1);

  const handleUp = () => {
    setCount((prev) => prev + 1);
  };

  const handleDown = () => {
    if (count <= 1) {
      setCount(1);
    } else {
      setCount((prev) => prev - 1);
    }
  };

  return (
    <>
      <Grid display={"flex"} flexDirection={"column"} alignItems={"center"}>
        <Grid width={"90%"} height={"400px"} borderRadius={5} overflow={"hidden"} mb={3}>
          <img src="/sample_table.png" width={"100%"} height={"100%"} />
        </Grid>

        <Grid width={"90%"}>
          <Grid mb={1}>
            <Typography variant="h4">Sample Item</Typography>
          </Grid>
          <Grid container mb={1}>
            <Grid item xs={8}>
              <Typography variant="h5">₩ 500,000</Typography>
            </Grid>
            <Grid item xs={4}>
              <Grid container>
                <Grid item xs={4}>
                  <Button
                    variant="contained"
                    onClick={handleUp}
                    sx={{ backgroundColor: "#f1f1f1", padding: 0, minWidth: "40px", height: "40px", borderRadius: 2 }}
                  >
                    <AddIcon sx={{ color: "black" }} />
                  </Button>
                </Grid>
                <Grid item xs={4} display={"flex"} justifyContent={"center"} alignItems={"center"}>
                  <Typography>{count}</Typography>
                </Grid>
                <Grid item xs={4}>
                  <Button
                    variant="contained"
                    onClick={handleDown}
                    sx={{ backgroundColor: "#f1f1f1", padding: 0, minWidth: "40px", height: "40px", borderRadius: 2 }}
                  >
                    <RemoveIcon sx={{ color: "black" }} />
                  </Button>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
          <Grid container mb={2}>
            <Grid item xs={1}>
              <StarIcon sx={{ color: "#ecc256" }} />
            </Grid>
            <Grid item xs={1}>
              <Typography>4.5</Typography>
            </Grid>
            <Grid item xs={10}>
              <Typography color={"#818181"}>(count reviews)</Typography>
            </Grid>
          </Grid>
          <Grid>
            <Typography>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum ratione, placeat expedita ipsa eius vitae
              atque, maiores maxime nemo eaque sit ut exercitationem! Voluptas beatae deserunt dolorem dignissimos
              suscipit quo!
            </Typography>
          </Grid>
        </Grid>

        <Grid container width={"100%"} height={"10vh"} bgcolor={"#ffffff"} position={"fixed"} bottom={0}>
          <Grid item xs={3} display={"flex"} justifyContent={"center"} alignItems={"center"}>
            <Button sx={{ backgroundColor: "#d3d3d3", borderRadius: 4, height: "80%", width: "80%" }}>
              <BookmarkIcon sx={{ fontSize: 50, color: "white" }} />
            </Button>
          </Grid>
          <Grid item xs={9} display={"flex"} justifyContent={"center"} alignItems={"center"}>
            <Button sx={{ height: "80%", width: "90%", backgroundColor: "#2a2a2a", borderRadius: 4 }}>
              <Typography color={"white"} variant="h6">
                Add to cart
              </Typography>
            </Button>
          </Grid>
        </Grid>
      </Grid>
    </>
  );
};

export default Item;
