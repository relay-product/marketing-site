import { Flex, Text, Button, Circle } from "@chakra-ui/react";
import { Outlet, Link, Navigate, useNavigate } from "react-router-dom";
import { RelayIcon } from "../icons/Relay.icon";
import { Heading } from "../../components/Heading.component";
import { GridBackground } from "../icons/Grid.icon";
export const MainLayout = () => {
  return (
    <>
      {/* <GridBackground position={"fixed"} opacity={"25%"} /> */}
      <Flex flexDir={"column"} gap="1rem" paddingY={"1%"} paddingX={"1%"}>
        {/* Header */}
        <Header />
        {/* Page content */}
        <Outlet />
      </Flex>
    </>
  );
};

const Header = () => {
  const navigate = useNavigate();
  return (
    <Flex
      zIndex={"1"}
      bg={"#101010"}
      justifyContent={["center", null, null, null, "space-between", null]}
      alignItems={"center"}
      position={"fixed"}
      width={"100%"}
      paddingY={["2.5%", null, null, null, "1%", null]}
      paddingLeft={["2.5%", null, null, null, "1%", null]}
      paddingRight={["2.5%", null, null, null, "2.5%", null]}
      top={"0"}
    >
      <Flex>
        <Heading
          variant={["h3"]}
          letterSpacing={"10px"}
          fontWeight={"700"}
          margin={"0"}
        >
          RELAY
        </Heading>
        <RelayIcon boxSize={["2.5rem", null, null, null, "3rem", null]} />
      </Flex>
      {/* Buttons */}
      <Flex
        alignItems={"center"}
        display={["none", null, null, null, "inherit", null]}
        gap={".5rem"}
      >
        <Circle size={"1rem"} bg={"#E1992C"} />
        <a href="mailto: contact@relayproduct.com">hey@relayproduct.com</a>
      </Flex>
    </Flex>
  );
};
