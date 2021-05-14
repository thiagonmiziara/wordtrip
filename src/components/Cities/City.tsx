import { Box, Flex, Heading, Image, Text } from "@chakra-ui/react";
import React from "react";

import api from "../../../db.json";

const City = () => {
  return (
    <>
      {api.map((city) => {
        return (
          <Box borderRadius="4px" overflow="hidden" key={city.city}>
            <Box>
              <Image
                src={`${city.banner}`}
                alt={`${city.country}`}
                h="200px"
                W="100%"
              />
              <Flex
                p="6"
                align="center"
                justify="space-between"
                bg="white"
                border="1px"
                borderColor="yellow.300"
                borderTop="0"
              >
                <Box>
                  <Heading fontSize="xl" fontWeight="500">
                    {city.city}
                  </Heading>
                  <Text mt="3" fontSize="md" color="gray.500" fontWeight="500">
                    {city.country}
                  </Text>
                </Box>
                <Image
                  src={`${city.flag}`}
                  alt={`${city.country}`}
                  w="30px"
                  h="30px"
                  objectFit="cover"
                />
              </Flex>
            </Box>
          </Box>
        );
      })}
    </>
  );
};

export default City;
