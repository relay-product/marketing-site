import { Flex, Heading, Text, Button } from "@chakra-ui/react";
import { Outlet, Link, Navigate, useNavigate } from "react-router-dom";
import { RelayIcon } from "../icons/Relay.icon";

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
    <Flex flexGrow={1} justifyContent="space-between">
      <Flex>
        <Heading variant={"h1"}>RELAY</Heading>
        <RelayIcon />
      </Flex>
      {/* Buttons */}
      <Flex gap="1rem">
        <Button
          onClick={() => {
            navigate("About");
          }}
        >
          About Us
        </Button>
        <Button>Our Work</Button>
        <Button>Contact</Button>
      </Flex>
    </Flex>
  );
};
