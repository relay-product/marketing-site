import { Flex, Heading, Text } from "@chakra-ui/react";
import { Outlet, Link } from "react-router-dom";

export const MainLayout = () => {
  return (
    <>
      <Flex>
        <Heading variant={"h1"}>Richard's Personal Website</Heading>
      </Flex>
      <Flex>
        <Flex>
          <Link to="/">Home</Link>
          <Link to="restaurants">Restaurants</Link>
        </Flex>
        <Outlet />
      </Flex>
    </>
  );
};
