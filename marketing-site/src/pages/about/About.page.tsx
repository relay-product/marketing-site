import { Box, Button, Flex, Heading } from "@chakra-ui/react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Text } from "../../components/Text.component";

export const About = () => {
  const navigate = useNavigate();

  const [number, setNumber] = useState(0);
  return (
    <Flex flexDirection={"column"}>
      <Heading variant="h2">About Us</Heading>
      <Box marginTop={"50px"}>
        <Text>This is who we are</Text>
        <Button
          onClick={() => {
            console.log(number);
            setNumber(number + 1);
            console.log(number);
          }}
        >
          +1
        </Button>
        {number}
      </Box>
    </Flex>
  );
};
