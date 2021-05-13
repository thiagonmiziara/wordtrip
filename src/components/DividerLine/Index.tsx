import { Box, Heading } from "@chakra-ui/react";

const DivideLine = () => {
  return (
    <>
      <Box
        w={["60px", "90px"]}
        mx="auto"
        h="2px"
        bg="gray.700"
        my={["9", "20"]}
      />

      <Box>
        <Heading 
          textAlign="center"
          fontWeight="500"
          fontSize={["lg","3xl","4xl"]}
          mb={["5","14"]}
        >
          Vamos nessa?
          <br />
          Então escolha seu continente
        </Heading>
      </Box>
    </>
  );
};

export default DivideLine;
