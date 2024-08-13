import { Box, Grid, Typography } from "@mui/material";
import ShoppingBagIcon from "@mui/icons-material/ShoppingBag";
import { useNavigate } from "react-router-dom";

const ItemDisplay = () => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate("/item");
  };

  return (
    <>
      <Grid container display={"flex"} flexDirection={"column"} position={"relative"}>
        <Grid item bgcolor={"black"} width={"180px"} height={"260px"} borderRadius={5} overflow={"hidden"}>
          <img src="/sample_table.png" width={"100%"} height={"100%"} onClick={handleClick} />
        </Grid>
        <Box
          bgcolor={"rgba(0, 0, 0, 0.5)"}
          width={"40px"}
          height={"40px"}
          display={"flex"}
          justifyContent={"center"}
          alignItems={"center"}
          borderRadius={2}
          position={"absolute"}
          top={"210px"}
          left={"130px"}
        >
          <ShoppingBagIcon sx={{ color: "white" }} />
        </Box>
        <Grid item>
          <Typography color={"#6d6d6d"}>Sample Image</Typography>
        </Grid>
        <Grid item>
          <Typography>₩ 500,000</Typography>
        </Grid>
      </Grid>
    </>
  );
};

export default ItemDisplay;
