import { Flex, Heading } from "@chakra-ui/react";

const ContinentBanner = () => {
  return (
    <Flex
      w="100%"
      h={["150px", "300px", "500px"]}
      px={["0", "0", "36"]}
      pt={["0", "0", "72"]}
      bgImage="url(/europa.png)"
      bgPosition="center"
      bgSize="cover"
      bgRepeat="no-repeat"
      align="center"
      justify={["center", "center", "flex-start"]}
    >
      <Heading
        textAlign={["center", "left"]}
        fontSize={["8xl", "5xl"]}
        color="gray.100"
        fontWeight="500"
      >
        Europa
      </Heading>
    </Flex>
  );
};

export default ContinentBanner;
