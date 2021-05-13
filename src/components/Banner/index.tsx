import { Flex } from "@chakra-ui/react";

import ContentBanner from "./ContentBanner";

const Banner = () => {
  return (
    <Flex
      w={"100%"}
      h={["163px", "250px", "250px", "335px"]}
      bgImage="url('/banner.jpg')"
      bgRepeat="no-repeat"
      bgSize="cover"
      bgPosition={["100 20%", "100 20%", "100 30%"]}
    >
      
      <ContentBanner/>

    </Flex>
  );
};

export default Banner;
