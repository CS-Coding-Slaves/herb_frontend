import { Grid, Typography } from "@mui/material";
import StarIcon from "@mui/icons-material/Star";
import ChairIcon from "@mui/icons-material/Chair";
import TableBarIcon from "@mui/icons-material/TableBar";
import BedIcon from "@mui/icons-material/Bed";
import WeekendIcon from "@mui/icons-material/Weekend";

/**
 * 홈페이지 상단
 * @returns
 */
const SlideItem = () => {
  return (
    <>
      <Grid container mb={3} display={"flex"} justifyContent={"center"}>
        <Grid item display={"flex"} flexDirection={"column"} alignItems={"center"}>
          <Grid
            bgcolor={"#2a2a2a"}
            width={"50px"}
            height={"50px"}
            borderRadius={3}
            my={1}
            mx={2}
            display={"flex"}
            justifyContent={"center"}
            alignItems={"center"}
          >
            <StarIcon fontSize="large" sx={{ color: "white" }} />
          </Grid>
          <Typography>Popular</Typography>
        </Grid>

        <Grid item display={"flex"} flexDirection={"column"} alignItems={"center"}>
          <Grid
            bgcolor={"#eeeeee"}
            width={"50px"}
            height={"50px"}
            borderRadius={3}
            my={1}
            mx={2}
            display={"flex"}
            justifyContent={"center"}
            alignItems={"center"}
          >
            <ChairIcon fontSize="large" sx={{ color: "#a4a4a4" }} />
          </Grid>
          <Typography>Chair</Typography>
        </Grid>

        <Grid item display={"flex"} flexDirection={"column"} alignItems={"center"}>
          <Grid
            bgcolor={"#eeeeee"}
            width={"50px"}
            height={"50px"}
            borderRadius={3}
            my={1}
            mx={2}
            display={"flex"}
            justifyContent={"center"}
            alignItems={"center"}
          >
            <TableBarIcon fontSize="large" sx={{ color: "#a4a4a4" }} />
          </Grid>
          <Typography>Table</Typography>
        </Grid>

        <Grid item display={"flex"} flexDirection={"column"} alignItems={"center"}>
          <Grid
            bgcolor={"#eeeeee"}
            width={"50px"}
            height={"50px"}
            borderRadius={3}
            my={1}
            mx={2}
            display={"flex"}
            justifyContent={"center"}
            alignItems={"center"}
          >
            <BedIcon fontSize="large" sx={{ color: "#a4a4a4" }} />
          </Grid>
          <Typography>Bed</Typography>
        </Grid>

        <Grid item display={"flex"} flexDirection={"column"} alignItems={"center"}>
          <Grid
            bgcolor={"#eeeeee"}
            width={"50px"}
            height={"50px"}
            borderRadius={3}
            my={1}
            mx={2}
            display={"flex"}
            justifyContent={"center"}
            alignItems={"center"}
          >
            <WeekendIcon fontSize="large" sx={{ color: "#a4a4a4" }} />
          </Grid>
          <Typography>Sofa</Typography>
        </Grid>
      </Grid>
    </>
  );
};

export default SlideItem;
