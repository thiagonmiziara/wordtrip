import { Box, Flex, Heading, Image, Text } from '@chakra-ui/react'

const ContentBanner = () => {
  return (
    <Flex
    justify={["center", "space-between"]}
    align="center"
    w="100%"
    mx="auto"
    px={["4", "10", "15", "20", "36"]}
  >
    <Box>
      <Heading
        color="gray.100"
        fontWeight="500"
        fontSize={["xl", "2l", "2xl", "2xl", "4xl"]}
      >
        5 Continentes,
        <br />
        infinitas possibilidades.
      </Heading>
      <Text
        color="gray.300"
        mt="5"
        fontSize={[".8rem", "xl"]}
        maxWidth={["100%", "100%", "100%", "550px"]}
      >
        Chegou a hora de tirar do papel a viagem que você sempre sonhou.
      </Text>
    </Box>
    <Image
      w={["300px","430px"]}
      display={['none', 'none', 'block']}
      src="/Airplane.svg"
      alt="Avião"
      transform="translateY(48px)"
      ml="8"
    />
  </Flex>
  )
}

export default ContentBanner;
