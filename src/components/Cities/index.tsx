import { Grid } from "@chakra-ui/react";
import City from "./City";
import TitleCities from "./TitleCities";

const Cities = () => {
  return (
    <>
      <TitleCities />

      <Grid
        gridTemplateColumns={[
          "1fr",
          "1fr 1fr",
          "repeat(3,1fr)",
          "repeat(4,1fr)",
        ]}
        gap={["20px", "45px"]}
        alignItems="center"
        justifyContent="center"
        px={["30px", "0"]}
      >
        <City />
      </Grid>
    </>
  );
};

export default Cities;
