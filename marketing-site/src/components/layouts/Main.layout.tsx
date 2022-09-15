import { Flex, Text, Button } from "@chakra-ui/react";
import { Outlet, Link, Navigate, useNavigate } from "react-router-dom";
import { RelayIcon } from "../icons/Relay.icon";
import { Heading } from "../../components/Heading.component";
export const MainLayout = () => {
  return (
    <>
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
    <Flex flexGrow={1} justifyContent="space-between" position={"fixed"} width={"100%"} paddingX={"1%"}>
      <Flex>
        <Heading variant={"h3"} letterSpacing={"10px"} fontWeight={"700"} margin={"0"}>RELAY</Heading>
        <RelayIcon boxSize={"3rem"} />
      </Flex>
      {/* Buttons */}
      <Flex gap="1rem">
        <Button variant={"secondary"}
          onClick={() => {
            navigate("About");
          }}
        >
          hey@relayproduct.com
        </Button>
      </Flex>
    </Flex>
  );
};
