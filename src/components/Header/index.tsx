import { Flex, Grid, Image } from "@chakra-ui/react";

const Header = () => {
  return (
    <Flex
      as="header"
      bg="white"
      w="100%"
      mx="auto"
      px="1rem"
      h={["50px", "100px"]}
      align="center"
      justify="center"
    >
      <Grid 
      templateColumns="repeat(3,1fr)"
      h="100%"
      w="100%"
      maxW="1160px"
      mx="auto"
      alignItems="center"
      justifyContent="center"
      >
         
      <Image
        w={["80px","190px"]}
        src="/logo.svg"
        alt="Logo World Trip"
        justifySelf="center"
        gridColumn="2"
      />

      </Grid>
    </Flex>
  );
};

export default Header;
