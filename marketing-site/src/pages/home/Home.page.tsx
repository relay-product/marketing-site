import { Button, Circle, Flex } from "@chakra-ui/react";
import { Link, useNavigate } from "react-router-dom";
import { Heading } from "../../components/Heading.component";
import { ArrowIcon } from "../../components/icons/Arrows.icon";
import { OfferIcon } from "../../components/icons/Offer.icon";
import { Text } from "../../components/Text.component";
import { Grid, GridItem } from '@chakra-ui/react'

export const Home = () => {
  const navigate = useNavigate();
  return (
    <Flex flexDirection={"column"} paddingTop={"16%"} paddingLeft={"11.5%"} width={"85%"}>

      {/* Intro message */}
      <Heading type={"h2"} fontWeight={"400"} width={"70%"}>
      Relay is a product collective composed of designers, developers, and operators focused on <Text as={"span"} color={"none"}>0→1</Text> execution.
      </Heading>
      <Button fontSize={"1.5rem"} paddingLeft={"46.5%"} paddingTop={"5%"} variant={"secondary"} alignSelf={"right"}>
        Get in contact <Text as={"span"} color={"none"}>→</Text> 
      </Button>



      {/* Our Philosophy of 0--1 */}
      <Flex paddingTop={"25%"} flexDir={"row"} alignItems={"center"}  justifyContent={"center"} width={"100%"}>
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

      <Heading variant={"h2"} paddingTop={"7.5%"}>Our way of doing things</Heading>
      <Text type={"b1"} width={"50%"} marginTop={"2.5%"} fontSize={"1.25rem"}>We partner with early companies, domain experts, and niche industry leaders to translate ideas into the products that bring exceptional value to market.</Text>

      {/* What we can offer clients */}
      <Heading paddingTop={"40%"} variant={"h2"}>Our capability</Heading>
      <Flex paddingTop={"2.5%"} flexDir={"row"} alignItems={"center"} justifyContent={"space-between"}>
          <Flex flexDir={"column"} gap={"1rem"}>
              <Heading variant={"h3"}>Strategy</Heading>
              <Heading variant={"h3"}>UI/UX Design</Heading>
              <Heading variant={"h3"}>Full Stack Engineering</Heading>
          </Flex>
          <OfferIcon/>
      </Flex>
      <Text paddingTop={"5%"} type={"b1"}>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Illo est porro voluptatum nemo culpa, dolorem impedit architecto ducimus fugiat distinctio! Laborum suscipit laudantium ratione accusantium corrupti maiores dolores? Corrupti, odio. Lorem ipsum dolor sit amet consectetur adipisicing elit. Id voluptatem illum labore alias, maxime molestias. Reiciendis animi praesentium voluptatem quos laborum delectus non, voluptas illo aut, porro officia vero commodi. Lorem, ipsum dolor sit amet consectetur adipisicing elit. Iste delectus dignissimos temporibus, impedit enim doloribus ea neque ducimus alias totam consequuntur vitae dolorem unde minima fugiat nisi blanditiis recusandae rerum!</Text>


      {/* Our Team and what it's like to work at Relay */}
      <Heading paddingTop={"25%"} type={"h2"}>Our team</Heading>
      <Flex paddingTop={"5%"}>
        <Heading variant={"h4"}>People are the point. Product is the outcome.</Heading>
      </Flex>





      {/* Informational Notion Pages */}
      <Heading variant={"h2"} paddingTop={"25%"}>Learn more</Heading>
      <Grid paddingY={"5%"} templateColumns='repeat(5, 1fr)' gap={"2.25rem"}>
        <GridItem>
          <Circle size='14rem' bg='none' color='white' borderColor={"white"} borderWidth={"1px"}>
            Careers
          </Circle>
        </GridItem>
        <GridItem>
          <Circle size='220px' bg='none' color='white' borderColor={"white"} borderWidth={"1px"}>
            <Text type={"b1"}>Who we are</Text>
          </Circle>
        </GridItem>
        <GridItem>
          <Circle size='220px' bg='none' color='white' borderColor={"white"} borderWidth={"1px"} >
            How we came to be
          </Circle>
        </GridItem>
        <GridItem>
          <Circle size='220px' bg='none' color='white' borderColor={"white"} borderWidth={"1px"}>
            How we came to be
          </Circle>
        </GridItem>
        <GridItem>
          <Circle size='220px' bg='none' color='white' borderColor={"white"} borderWidth={"1px"}>
            How we came to be
          </Circle>
        </GridItem>
      </Grid>


      {/* Socials */}
      <Flex paddingTop={"7.5%"} width={"100%"} justifyContent={"center"} gap={"1rem"}>
          <Button>LinkedIn</Button>
          <Button>Email</Button>
      </Flex>
    </Flex>
  );
};
