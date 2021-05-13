import { Grid, GridItem } from "@chakra-ui/react";
import React from "react";
import TravelIcons from "./TravelIcons";

const TravelTypes = () => {
  return (
    <Grid
      templateColumns={["1fr 1fr", "1fr 1fr", "1fr 1fr", "repeat(5, 1fr)"]}
      w="100%"
      justifyContent="space-between"
      align="center"
      mt={["10", "32"]}
      mx="auto"
      maxWidth="1160px"
      gap={[1, 5]}
    >
      <GridItem>
        <TravelIcons icon="cocktail" text="vida noturna" />
      </GridItem>
      <GridItem>
        <TravelIcons icon="surf" text="praia" />
      </GridItem>
      <GridItem>
        <TravelIcons icon="building" text="moderno" />
      </GridItem>
      <GridItem>
        <TravelIcons icon="museum" text="clássico" />
      </GridItem>
      <GridItem colSpan={[2, 2, 2, 1]}>
        <TravelIcons icon="earth" text="e mais ..." />
      </GridItem>
    </Grid>
  );
};

export default TravelTypes;
