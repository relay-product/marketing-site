import { Box, Button, Flex, Heading } from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";
import { Text } from "../../components/Text.component";

export const About = () => {
  const navigate = useNavigate();
  return (
    <Flex flexDirection={"column"}>
      <Heading variant="h2">About Us</Heading>
      <Box>
        <Text>This is who we are</Text>
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
