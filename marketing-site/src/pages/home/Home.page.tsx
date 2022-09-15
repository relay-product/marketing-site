import { Box, Button, Flex } from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";
import { Heading } from "../../components/Heading.component";
import { Text } from "../../components/Text.component";

export const Home = () => {
  const navigate = useNavigate();
  return (
    <Flex flexDirection={"column"}>
      <Heading type={"h1"}>
        Welcome to <br /> <Text as="span" fontWeight={"800"}>RELAY</Text> Product <br /> Collective
      </Heading>
      <Box>
        <Text>Welcome to RELAY Product Collective</Text>
        <Button
          onClick={() => {
            navigate("/");
          }}
        >
          HOME
        </Button>
      </Box>
    </Flex>
  );
};
