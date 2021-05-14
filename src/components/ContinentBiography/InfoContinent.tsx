import { Flex, Heading, Text } from "@chakra-ui/react";
import ChakraPopoverComponent from "./ChakraPopoverComponent";

const InfoContinent = () => {
  return (
    <Flex align="center" justifyContent="space-between">
      <Flex
        direction="column"
        align={["flex-start", "flex-start", "center"]}
        justify="center"
      >
        <Heading fontSize={["2xl", "5xl"]} color="yellow.400" fontWeight="600">
          50
        </Heading>
        <Text fontSize={["md", "xl"]} fontWeight="600" color="gray.700">
          países
        </Text>
      </Flex>
      <Flex
        direction="column"
        align={["flex-start", "flex-start", "center"]}
        justify="center"
      >
        <Heading fontSize={["2xl", "5xl"]} color="yellow.400" fontWeight="600">
          60
        </Heading>
        <Text fontSize={["md", "xl"]} fontWeight="600" color="gray.700">
          línguas
        </Text>
      </Flex>
      <Flex
        direction="column"
        align={["flex-start", "flex-start", "center"]}
        justify="center"
      >
        <Heading fontSize={["2xl", "5xl"]} color="yellow.400" fontWeight="600">
          27
        </Heading>
        <Text fontSize={["md", "xl"]} fontWeight="600" color="gray.700">
          cidades +100
          
          <ChakraPopoverComponent />
        </Text>
      </Flex>
    </Flex>
  );
};

export default InfoContinent;
