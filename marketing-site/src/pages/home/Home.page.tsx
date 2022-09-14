import { Box, Button, Flex, Heading } from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";

export const Home = () => {
  const navigate = useNavigate();
  return (
    <Flex flexDirection={"column"}>
      <Heading variant="h2">Relay Product Collective</Heading>
      <Box>
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
