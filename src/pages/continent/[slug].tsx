import { Box, Flex } from "@chakra-ui/react";
import React from "react";
import ContinentBanner from "../../components/ContinentBanner";
import ContinentBiography from "../../components/ContinentBiography";
import Header from "../../components/Header";

const Continent = () => {
  return (
    <Flex direction="column">
      <Header/>
      <ContinentBanner/>

      <Box as="main" maxW="1160px" mx="auto" mb="10" px="1rem">
        <ContinentBiography/>
      </Box>
    </Flex>
  )
}

export default Continent;
