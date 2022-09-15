import { Button, Flex } from "@chakra-ui/react";
import { Link, useNavigate } from "react-router-dom";
import { Heading } from "../../components/Heading.component";
import { OfferIcon } from "../../components/icons/Offer.icon";
import { Text } from "../../components/Text.component";

export const Home = () => {
  const navigate = useNavigate();
  return (
    <Flex flexDirection={"column"} paddingTop={"10%"} paddingLeft={"15%"} width={"90%"}>
      <Heading type={"h2"} fontWeight={"400"} width={"65%"}>
      Relay is a product collective composed of designers, developers, and operators focused on 0→1 execution.
      </Heading>
      <Button fontSize={"1.5rem"} paddingLeft={"50%"} paddingTop={"5%"} variant={"secondary"} alignSelf={"right"}>
        Get in contact →
      </Button>
      <Text type={"b1"} width={"40%"} marginTop={"10%"}>We partner with early companies, domain experts, and niche industry leaders to translate ideas into the products that bring exceptional value to market.</Text>
      <Flex paddingTop={"10%"} flexDir={"row"} alignItems={"center"}>
          <Flex flexDir={"column"} gap={"1rem"}>
              <Heading variant={"h3"}>Strategy</Heading>
              <Heading variant={"h3"}>UI/UX Design</Heading>
              <Heading variant={"h3"}>Full Stack Engineering</Heading>
          </Flex>
          <OfferIcon/>
      </Flex>
    </Flex>
  );
};
