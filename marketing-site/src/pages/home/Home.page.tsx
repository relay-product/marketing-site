import { Box, Button, Flex } from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";
import { Heading } from "../../components/Heading.component";
import { Text } from "../../components/Text.component";

export const Home = () => {
  const navigate = useNavigate();
  return (
    <Flex flexDirection={"column"} paddingTop={"5%"} paddingLeft={"7.5%"}>
      <Heading type={"h1"} fontWeight={"400"}>
        Welcome to <br /> <Text as="span" fontWeight={"800"}>RELAY</Text> Product <br /> Collective
      </Heading>
      <Button width={"10%"} marginTop={"5%"}>LET'S GO</Button>
    </Flex>
  );
};
