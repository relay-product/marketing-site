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
    <Flex flexGrow={1} justifyContent="space-between">
      <Flex>
        <Heading variant={"h2"}>RELAY</Heading>
        <RelayIcon />
      </Flex>
      {/* Buttons */}
      <Flex gap="1rem">
        <Button
          onClick={() => {
            navigate("About");
          }}
        >
          ABOUT
        </Button>
        <Button>OUR WORK</Button>
        <Button>CONTACT</Button>
      </Flex>
    </Flex>
  );
};
