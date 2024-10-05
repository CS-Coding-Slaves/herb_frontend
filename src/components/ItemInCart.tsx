import { Button, Grid, Typography } from "@mui/material";
import CancelIcon from "@mui/icons-material/Cancel";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";
import { useEffect, useState } from "react";

const ItemInCart = () => {
  const [count, setCount] = useState(1);
  const [cal, setCal] = useState(0);

  useEffect(() => {
    setCal(500000 * count);
  }, [count]);

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
      <Grid container width={"90%"} py={1}>
        <Grid item xs={4} overflow={"hidden"} borderRadius={3} sx={{ aspectRatio: "1 / 1" }}>
          <img src="/sample_table.png" width={"100%"} height={"100%"} />
        </Grid>
        <Grid item xs={8} display={"flex"} flexDirection={"column"} pl={3} justifyContent={"space-between"}>
          <Grid container display={"flex"} alignItems={"flex-end"}>
            <Grid item xs={10}>
              <Typography>Item Name</Typography>
            </Grid>
            <Grid item xs={2} display={"flex"} justifyContent={"center"} alignItems={"center"}>
              <CancelIcon />
            </Grid>
          </Grid>
          <Grid container>
            <Grid item container xs={6}>
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
            <Grid item xs={6} display={"flex"} justifyContent={"end"} alignItems={"center"}>
              <Typography>₩ {cal.toLocaleString()}</Typography>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </>
  );
};

export default ItemInCart;
