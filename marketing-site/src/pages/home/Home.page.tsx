import { Box, Button, Flex, Heading } from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";
import { Text } from "../../components/Text.component";

export const Home = () => {
  const navigate = useNavigate();
  return (
    <Flex flexDirection={"column"}>
      <Heading variant="h2">Relay Product Collective</Heading>
      <Box>
        <Text>We are Relay G g</Text>
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
