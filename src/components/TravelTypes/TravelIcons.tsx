import { Flex, Image, Text, useBreakpointValue } from "@chakra-ui/react";
interface TravelIconsProps {
  text: string;
  icon: string;
}

const TravelIcons = ({ icon, text }: TravelIconsProps) => {
  const isMobile = useBreakpointValue({
    base: false,
    sm: true,
  });

  return (
    <Flex direction={["row", "column"]} align="center" justify="center">
      {isMobile ? (
        <Image src={`/icons/${icon}.svg`} w="85px" h="85px" />
      ) : (
        <Text color="yellow.400" fontSize="4xl" mr="2">
          •
        </Text>
      )}

      <Text fontWeight="600" color="gray.700" fontSize={["md", "xl", "2xl"]}>
        {text}
      </Text>
    </Flex>
  );
};

export default TravelIcons;
