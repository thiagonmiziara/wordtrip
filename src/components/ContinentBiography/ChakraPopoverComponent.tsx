import {
  Icon,
  Popover,
  PopoverArrow,
  PopoverBody,
  PopoverCloseButton,
  PopoverContent,
  PopoverTrigger,
} from "@chakra-ui/react";
import React from "react";
import { RiInformationLine } from "react-icons/ri";

const ChakraPopoverComponent = () => {
  return (
    <Popover>
      <PopoverTrigger>
        <span>
          <Icon
            cursor="pointer"
            as={RiInformationLine}
            ml="1"
            color="gray.400"
            w={["10px", "16px"]}
            h={["10px", "16px"]}
          />
        </span>
      </PopoverTrigger>
      <PopoverContent bg="gray.900" color="yellow.400">
        <PopoverArrow bg="gray.700" />
        <PopoverCloseButton />
        <PopoverBody fontWeight="400" fontSize="md">
          Alemanha,Bélgica ,Bósnia-Herzegóvina
        </PopoverBody>
      </PopoverContent>
    </Popover>
  );
};

export default ChakraPopoverComponent;
