import { Flex } from "@chakra-ui/react";
import Banner from "../components/Banner";
import DivideLine from "../components/DividerLine/Index";

import Header from "../components/Header"
import Slider from "../components/Slider";
import TravelTypes from "../components/TravelTypes";

export default function Home() {
  return (
   <Flex direction="column">
     <Header/>
     <Banner/>
     <TravelTypes/>
     <DivideLine/>
     <Slider/>
   </Flex>
  );
}
