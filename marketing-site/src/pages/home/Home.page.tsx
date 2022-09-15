import { Button, Flex } from "@chakra-ui/react";
import { Link, useNavigate } from "react-router-dom";
import { Heading } from "../../components/Heading.component";
import { ArrowIcon } from "../../components/icons/Arrows.icon";
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
      <Flex paddingTop={"20%"} flexDir={"row"} alignItems={"center"}  justifyContent={"space-between"}>
          <Flex flexDir={"column"} gap={"1rem"}>
              <Heading variant={"h4"}>0</Heading>
              <Heading variant={"h4"}>Idea</Heading>
              <Heading variant={"h4"}>Dream</Heading>
              <Heading variant={"h4"}>Inception</Heading>
              <Heading variant={"h4"}>Now</Heading>
          </Flex>
          <ArrowIcon />
          <Flex flexDir={"column"} gap={"1rem"} textAlign={"right"}>
          <Heading variant={"h4"}>1</Heading>
              <Heading variant={"h4"}>Product</Heading>
              <Heading variant={"h4"}>Launch</Heading>
              <Heading variant={"h4"}>Reality</Heading>
              <Heading variant={"h4"}>The Future</Heading>
          </Flex>
      </Flex>
      <Text type={"b1"} width={"50%"} marginTop={"10%"} fontSize={"1.25rem"}>We partner with early companies, domain experts, and niche industry leaders to translate ideas into the products that bring exceptional value to market.</Text>
      <Heading paddingTop={"20%"} variant={"h2"}>Where we come in</Heading>
      <Flex paddingTop={"2.5%"} flexDir={"row"} alignItems={"center"}>
          <Flex flexDir={"column"} gap={"1rem"}>
              <Heading variant={"h3"}>Strategy</Heading>
              <Heading variant={"h3"}>UI/UX Design</Heading>
              <Heading variant={"h3"}>Full Stack Engineering</Heading>
          </Flex>
          <OfferIcon/>
      </Flex>
      <Text paddingTop={"5%"} type={"b1"}>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Illo est porro voluptatum nemo culpa, dolorem impedit architecto ducimus fugiat distinctio! Laborum suscipit laudantium ratione accusantium corrupti maiores dolores? Corrupti, odio. Lorem ipsum dolor sit amet consectetur adipisicing elit. Id voluptatem illum labore alias, maxime molestias. Reiciendis animi praesentium voluptatem quos laborum delectus non, voluptas illo aut, porro officia vero commodi. Lorem, ipsum dolor sit amet consectetur adipisicing elit. Iste delectus dignissimos temporibus, impedit enim doloribus ea neque ducimus alias totam consequuntur vitae dolorem unde minima fugiat nisi blanditiis recusandae rerum!</Text>


      <Heading paddingTop={"20%"} type={"h2"}>Our Team</Heading>
    </Flex>
  );
};
