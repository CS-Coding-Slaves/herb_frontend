import { Button, FilledInput, Grid, Typography } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";

const CartBottom = () => {
  return (
    <>
      <Grid
        position={"fixed"}
        height={"auto"}
        width={"100%"}
        bottom={0}
        display={"flex"}
        flexDirection={"column"}
        alignItems={"center"}
      >
        {/* 코드 입력창 */}
        <Grid width={"90%"} container mb={2}>
          <Grid item xs={10} borderRadius={2} overflow={"hidden"} boxShadow={2}>
            <FilledInput
              fullWidth
              sx={{ bgcolor: "white", display: "flex", alignItems: "center" }}
              placeholder="Enter your promo code"
            />
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

        {/* 합계 계산 */}
        <Grid container display={"flex"} justifyContent={"space-between"} width={"90%"} mb={2}>
          <Grid item xs={2}>
            <Typography variant="h5">Total:</Typography>
          </Grid>
          <Grid item xs={5} display={"flex"} justifyContent={"end"}>
            <Typography variant="h5">₩ 500,000</Typography>
          </Grid>
        </Grid>

        <Grid width={"90%"} height={"70px"} borderRadius={3} overflow={"hidden"} mb={2}>
          <Button fullWidth sx={{ bgcolor: "#2a2a2a", color: "#fcfcfc", height: "100%" }}>
            CHECK OUT
          </Button>
        </Grid>
      </Grid>
    </>
  );
};

export default CartBottom;
