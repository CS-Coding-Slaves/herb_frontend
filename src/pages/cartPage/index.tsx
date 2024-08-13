import { Grid } from "@mui/material";
import ItemInCart from "../../components/ItemInCart";
import CartBottom from "../../components/CartBottom";

const Cart = () => {
  return (
    <>
      <Grid display={"flex"} flexDirection={"column"} alignItems={"center"}>
        <ItemInCart />
        <ItemInCart />
      </Grid>
      <CartBottom />
    </>
  );
};

export default Cart;
