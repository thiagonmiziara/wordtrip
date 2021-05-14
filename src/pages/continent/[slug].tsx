import { Flex } from "@chakra-ui/react";
import ContinentBanner from "../../components/ContinentBanner";
import Header from "../../components/Header";

const Continent = () => {
  return (
    <Flex direction="column">
      <Header/>
      <ContinentBanner/>
    </Flex>
  )
}

export default Continent;
