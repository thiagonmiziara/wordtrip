import Link from "next/link";
import { useRouter } from "next/dist/client/router";

import { Flex, Grid, Icon, Image } from "@chakra-ui/react";
import {RiArrowLeftSLine} from "react-icons/ri";

const Header = () => {
  const {asPath} = useRouter();
  const isContinentPage = asPath !== "/";
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
         {isContinentPage &&(
           <Link href="/">
             <a>
               <Icon as={RiArrowLeftSLine} fontSize={[20, 40]} justifySelf="start"/>
             </a>
           </Link>
         )}
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
