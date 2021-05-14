import Link from "next/link";
import { Flex, Heading, Text } from "@chakra-ui/react";

import SwiperComponent from "./SwiperComponent";


const Slider = () => {
  return (
    <Flex
      w="100%"
      maxW="1240px"
      mx="auto"
      mb={["5", "10"]}
      h={["250px", "450px"]}
    >
      <SwiperComponent>
      <Flex
            w="100%"
            h="100%"
            align="center"
            justify="center"
            direction="column"
            bgImage="url(/continent.png)"
            bgSize="cover"
            bgRepeat="no-repeat"
            textAlign="center"
            bgPosition="center"
          >
            <Link href="/continent/europe">
              <a>
                <Heading
                 fontSize={["3xl", "4xl", "5xl"]}
                 color="gray.100"
                 fontWeight="bold"
                >Europa</Heading>
                <Text
                  fontWeight="bold"
                  color="gray.300"
                  fontSize={[".8rem", "1xl", "2xl"]}
                  mt={["2","4"]}
                >O continent mais antigo.</Text>
              </a>
            </Link>
          </Flex>
      </SwiperComponent>
       
    </Flex>
  );
};

export default Slider;
