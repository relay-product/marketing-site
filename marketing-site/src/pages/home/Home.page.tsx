import {
  Box,
  Button,
  Circle,
  Collapse,
  Flex,
  textDecoration,
  useDisclosure,
} from "@chakra-ui/react";
import { Link, useNavigate } from "react-router-dom";
import { Heading } from "../../components/Heading.component";
import { ArrowIcon } from "../../components/icons/Arrows.icon";
import { OfferIcon } from "../../components/icons/Offer.icon";
import { Text } from "../../components/Text.component";
import { ContactArrow } from "../../components/icons/ContactArrow.icon";
import { SchematicIcon } from "../../components/icons/Schematic.icon";
import { PlusIcon } from "../../components/icons/Plus.icon";
import { useEffect, useState } from "react";
import { getDescriptions } from "../../services/Copy.service";

// Dropdown logic
let collapseOpen = false;
export const Home = () => {
  const { isOpen, onToggle, onOpen, onClose } = useDisclosure();
  const [capability, setCapability] = useState<
    "Strategy" | "UI/UX Design" | "Full Stack Engineering"
  >("Strategy");
  useEffect(() => {
    if (capability !== undefined) {
      onToggle();
      if (collapseOpen === true) {
        setTimeout(() => {
          onOpen();
        }, 500);
      } else {
        collapseOpen = true;
      }
    }
  }, []);

  // Return Statement
  return (
    // Overarching Column Flexbox
    <Flex
      flexDirection={"column"}
      marginTop={["45%", null, null, null, "16%", null]}
      paddingLeft={["7.5%", null, null, null, "12%", null]}
      width={["90%", null, null, null, "87.5%", null]}
      alignItems={"left"}
      justifyContent={"left"}
    >
      {/* Intro message */}
      <Heading type={"h2"} width={["100%", null, null, null, "80%", null]}>
        Relay is a product collective composed of designers, developers, and
        operators focused on{" "}
        <Text as={"span"} color={"none"}>
          0→1
        </Text>{" "}
        execution.
      </Heading>
      <Button
        marginTop={["15%", null, null, null, "10%", null]}
        variant={"secondary"}
        justifyContent={"left"}
      >
        <Flex>
          <Circle
            size={["1rem", null, null, null, "1.5rem", null]}
            bg={"#E1992C"}
            marginRight={"1rem"}
          />
          <a href="mailto: hey@relayproduct.com" target={"_blank"}>
            <Flex borderBottom={"1px"} gap={"5rem"}>
              <Heading variant="h5">Get in contact</Heading>
              <ContactArrow boxSize={"2rem"} />
            </Flex>
          </a>
        </Flex>
      </Button>

      {/* Plus Icons */}
      <Flex
        marginTop={["40%", null, null, null, "20%", null]}
        justifyContent={"space-between"}
      >
        <PlusIcon />
        <PlusIcon />
      </Flex>

      {/* Our Philosophy of 0--1 */}
      <Flex
        display={["none", null, null, null, "inherit", null]}
        paddingTop={"20%"}
        flexDir={"row"}
        alignItems={"center"}
        justifyContent={"left"}
        width={"100%"}
      >
        <ArrowIcon boxSize={"80%"} />
      </Flex>
      <Text
        type={"b1"}
        width={["80%", null, null, null, "40%", null]}
        marginTop={["20%", null, null, null, "7.5%", null]}
        fontSize={"1.25rem"}
      >
        We partner with early companies, domain experts, and niche industry
        leaders to translate ideas into the products that bring exceptional
        value to market.
      </Text>

      {/* Plus Icons */}
      <Flex marginTop={"20%"} justifyContent={"space-between"}>
        <PlusIcon />
        <PlusIcon display={["none", null, null, null, "inherit", null]} />
        <PlusIcon />
      </Flex>

      {/* What we can offer clients */}
      <Flex
        flexDir={["column", null, null, null, "row", null]}
        marginTop={["40%", null, null, null, "20%", null]}
        width={"100%"}
        justifyContent={"space-between"}
      >
        <Flex
          flexDir={"column"}
          marginTop={["10%", null, null, null, "0", null]}
          width={["100%", null, null, null, "50%", null]}
        >
          <Heading variant={"h2"}>End-to-end product</Heading>
          <Heading marginTop={"5%"} variant={"h5"}>
            0→1 product is about pragmatic, user-centered execution — from idea
            validation to wireframe to V1 product in the hands of your users.
          </Heading>
        </Flex>
        <a href="mailto: hey@relayproduct.com" target={"_blank"}>
          <Flex
            height={["100px", null, null, null, "200px", null]}
            width={["300px", null, null, null, "400px", null]}
            borderWidth={"1px"}
            borderColor={"white"}
            borderRadius={"4px"}
            alignItems={"end"}
            _hover={{ borderColor: "#E1992C", color: "white" }}
            marginTop={["20%", null, null, null, "0", null]}
          >
            <Flex
              alignItems={"center"}
              gap={"1rem"}
              paddingBottom={"7.5%"}
              paddingLeft={"7.5%"}
            >
              <Circle
                size={["1rem", null, null, null, "1.5rem", null]}
                bg={"#E1992C"}
              />
              <Flex
                borderBottom={"1px"}
                gap={["2rem", null, null, null, "5rem", null]}
              >
                <Heading variant="h5">Get in contact</Heading>
                <ContactArrow boxSize={"2rem"} />
              </Flex>
            </Flex>
          </Flex>
        </a>
      </Flex>
      <Flex
        marginTop={["20", null, null, null, "10%", null]}
        flexDir={["column", null, null, null, "row", null]}
        alignItems={"center"}
        justifyContent={"left"}
        borderLeft={["1px", null, null, null, "0", null]}
      >
        <Flex
          flexDir={"column"}
          gap={"1rem"}
          width={["fit-content", null, null, null, "50%", null]}
        >
          <Heading
            variant={"h3"}
            paddingLeft={["5%", null, null, null, "0", null]}
            onClick={() => {
              if (capability !== undefined) {
                onToggle();
                if (collapseOpen === true) {
                  setTimeout(() => {
                    onOpen();
                  }, 200);
                } else {
                  collapseOpen = true;
                }
              }
              setTimeout(() => {
                setCapability("Strategy");
              }, 300);
            }}
            _hover={{ cursor: "pointer", color: "#E1992C" }}
            color={capability === "Strategy" ? "#E1992C" : "white"}
          >
            Strategy
          </Heading>
          <Heading
            variant={"h3"}
            paddingLeft={["5%", null, null, null, "0", null]}
            onClick={() => {
              if (capability !== undefined) {
                onToggle();
                if (collapseOpen === true) {
                  setTimeout(() => {
                    onOpen();
                  }, 200);
                } else {
                  collapseOpen = true;
                }
              }
              setTimeout(() => {
                setCapability("UI/UX Design");
              }, 300);
            }}
            _hover={{ cursor: "pointer", color: "#E1992C" }}
            color={capability === "UI/UX Design" ? "#E1992C" : "white"}
          >
            UI/UX Design
          </Heading>
          <Heading
            variant={"h3"}
            paddingLeft={["5%", null, null, null, "0", null]}
            onClick={() => {
              if (capability !== undefined) {
                onToggle();
                if (collapseOpen === true) {
                  setTimeout(() => {
                    onOpen();
                  }, 200);
                } else {
                  collapseOpen = true;
                }
              }
              setTimeout(() => {
                setCapability("Full Stack Engineering");
              }, 300);
            }}
            _hover={{ cursor: "pointer", color: "#E1992C" }}
            color={
              capability === "Full Stack Engineering" ? "#E1992C" : "white"
            }
          >
            Full Stack Engineering
          </Heading>
        </Flex>
        <OfferIcon
          display={["none", null, null, null, "inherit", null]}
          capability={capability}
        />
      </Flex>
      <Flex paddingTop={["5%", null, null, null, "2%", null]}>
        <Collapse in={isOpen} animateOpacity>
          <Box
            p="5%"
            color="white"
            mt="4"
            rounded="md"
            shadow="md"
            borderWidth={"1px"}
            borderColor={"white"}
          >
            <Flex
              flexDir={"column"}
              width={["100%", null, null, null, "60vw", null]}
            >
              <Heading variant={"h2"} width={"100%"}>
                {capability}
              </Heading>
              {/* <Text marginTop={"2%"}>{descriptions[0].bodyText}</Text> */}
              <Text
                marginTop={"2.5%"}
                fontSize={"1.25rem"}
                width={["100%", null, null, null, "90%", null]}
              >
                {getDescriptions(capability)}
              </Text>
            </Flex>
          </Box>
        </Collapse>
      </Flex>

      {/* Our Team and what it's like to work at Relay */}
      {/* <Heading paddingTop={"25%"} type={"h2"}>Our team</Heading>
      <Flex paddingTop={"5%"}>
        <Heading variant={"h4"}>People are the point. Product is the outcome.</Heading>
      </Flex> */}

      {/* Design & Development Capabilities */}
      <Flex
        marginTop={["40%", null, null, null, "20%", null]}
        justifyContent={"space-between"}
        flexDir={["column", null, null, null, "row", null]}
      >
        <Flex
          flexDir={"column"}
          width={["100%", null, null, null, "45%", null]}
        >
          <Heading variant={"h2"}>Design</Heading>
          <Flex marginTop={"7.5%"} gap={"1rem"} flexWrap={"wrap"}>
            <Text
              fontSize={["1.25rem", null, null, null, "1.5rem", null]}
              borderWidth={"1px"}
              borderColor={"white"}
              borderRadius={"40px"}
              paddingX={["5%", null, null, null, "4%", null]}
              paddingBottom={["1.5%", null, null, null, "1%", null]}
              fontWeight={"400"}
            >
              UX Design
            </Text>
            <Text
              fontSize={["1.25rem", null, null, null, "1.5rem", null]}
              borderWidth={"1px"}
              borderColor={"white"}
              borderRadius={"40px"}
              paddingX={["5%", null, null, null, "4%", null]}
              paddingBottom={["1.5%", null, null, null, "1%", null]}
              fontWeight={"400"}
            >
              UI Design
            </Text>
            <Text
              fontSize={["1.25rem", null, null, null, "1.5rem", null]}
              borderWidth={"1px"}
              borderColor={"white"}
              borderRadius={"40px"}
              paddingX={["5%", null, null, null, "4%", null]}
              paddingBottom={["1.5%", null, null, null, "1%", null]}
              fontWeight={"400"}
            >
              Research
            </Text>
            <Text
              fontSize={["1.25rem", null, null, null, "1.5rem", null]}
              borderWidth={"1px"}
              borderColor={"white"}
              borderRadius={"40px"}
              paddingX={["5%", null, null, null, "4%", null]}
              paddingBottom={["1.5%", null, null, null, "1%", null]}
              fontWeight={"400"}
            >
              Discovery
            </Text>
            <Text
              fontSize={["1.25rem", null, null, null, "1.5rem", null]}
              borderWidth={"1px"}
              borderColor={"white"}
              borderRadius={"40px"}
              paddingX={["5%", null, null, null, "4%", null]}
              paddingBottom={["1.5%", null, null, null, "1%", null]}
              fontWeight={"400"}
            >
              MVP + GTM Strategy
            </Text>
          </Flex>
        </Flex>
        <Flex
          flexDir={"column"}
          width={["100%", null, null, null, "45%", null]}
          marginTop={["10%", null, null, null, "0", null]}
        >
          <Heading variant={"h2"}>Development</Heading>
          <Flex
            gap={["0.75rem", null, null, null, "1rem", null]}
            flexWrap={"wrap"}
            marginTop={"7.5%"}
          >
            <Text
              fontSize={["1.25rem", null, null, null, "1.5rem", null]}
              borderWidth={"1px"}
              borderColor={"white"}
              borderRadius={"40px"}
              paddingX={["5%", null, null, null, "4%", null]}
              paddingBottom={["1.5%", null, null, null, "0%", null]}
              fontWeight={"400"}
            >
              Full Stack Engineering
            </Text>
            <Text
              fontSize={["1.25rem", null, null, null, "1.5rem", null]}
              borderWidth={"1px"}
              borderColor={"white"}
              borderRadius={"40px"}
              paddingX={["5%", null, null, null, "4%", null]}
              paddingBottom={["1.5%", null, null, null, "1%", null]}
              fontWeight={"400"}
            >
              DevOps
            </Text>
            <Text
              fontSize={["1.25rem", null, null, null, "1.5rem", null]}
              borderWidth={"1px"}
              borderColor={"white"}
              borderRadius={"40px"}
              paddingX={["5%", null, null, null, "4%", null]}
              paddingBottom={["1.5%", null, null, null, "1%", null]}
              fontWeight={"400"}
            >
              Cloud Native
            </Text>
            <Text
              fontSize={["1.25rem", null, null, null, "1.5rem", null]}
              borderWidth={"1px"}
              borderColor={"white"}
              borderRadius={"40px"}
              paddingX={["5%", null, null, null, "4%", null]}
              paddingBottom={["1.5%", null, null, null, "1%", null]}
              fontWeight={"400"}
            >
              Mobile Apps
            </Text>
            <Text
              fontSize={["1.25rem", null, null, null, "1.5rem", null]}
              borderWidth={"1px"}
              borderColor={"white"}
              borderRadius={"40px"}
              paddingX={["5%", null, null, null, "4%", null]}
              paddingBottom={["1.5%", null, null, null, "1%", null]}
              fontWeight={"400"}
            >
              Web Apps
            </Text>
          </Flex>
        </Flex>
      </Flex>

      {/* Plus Icons */}
      <Flex
        marginTop={["40%", null, null, null, "20%", null]}
        justifyContent={"space-between"}
      >
        <PlusIcon />
        <PlusIcon />
        <PlusIcon />
      </Flex>

      {/* Partners, Not Contractors */}
      <Flex
        marginTop={"20%"}
        flexDir={"column"}
        width={["100%", null, null, null, "60%", null]}
      >
        <Heading variant={"h2"}>Partners, not contractors.</Heading>
        <Heading variant={"h5"} marginTop={"5%"}>
          We learned by building in startups, big tech companies, and leading
          consultancies. As strategic partners, we think about minimal
          viability, product-market fit, and team development.
        </Heading>
      </Flex>

      {/* Product is an outcome of people */}
      <Flex
        marginTop={["60%", null, null, null, "30%", null]}
        justifyContent={"space-between"}
      >
        <Flex
          flexDir={"column"}
          width={["100%", null, null, null, "60%", null]}
        >
          <Heading variant={"h2"}>
            Exceptional product is an outcome of exceptional people.{" "}
          </Heading>
          <Heading variant={"h5"} marginTop={"5%"}>
            Relay is a place where exceptional creatives, builders, and learners
            come to pursue 0→1 product mastery by realizing transformational
            ideas.
          </Heading>
          <Button
            fontSize={"1.5rem"}
            paddingTop={["20%", null, null, null, "10%", null]}
            variant={"secondary"}
            justifyContent={"left"}
            margin={"0"}
            textDecoration={"none"}
          >
            <Circle size={"1.5rem"} bg={"#E1992C"} marginRight={"2%"} />
            <a
              href="https://www.notion.so/relay-product/Join-the-collective-2863fee437154c65b0760192340c7cbf"
              target={"_blank"}
            >
              <Flex
                borderBottom={"1px"}
                gap={["2rem", null, null, null, "5rem", null]}
              >
                <Heading variant="h5">Join the collective</Heading>
                <ContactArrow boxSize={"2rem"} />
              </Flex>
            </a>
          </Button>
        </Flex>
        <SchematicIcon
          boxSize={"20rem"}
          display={["none", null, null, null, "inherit", null]}
        />
      </Flex>

      {/* Plus Icons */}
      <Flex
        marginTop={["40%", null, null, null, "20%", null]}
        justifyContent={"space-between"}
      >
        <PlusIcon />
        <PlusIcon />
        <PlusIcon />
      </Flex>

      {/* Informational Notion Pages */}
      <Heading
        variant={"h2"}
        paddingTop={["33%", null, null, null, "10%", null]}
      >
        Learn more
      </Heading>
      <Flex
        display={["inherit", null, null, null, "none", null]}
        flexDir={"column"}
        marginTop={"5%"}
      >
        <a
          href="https://www.notion.so/relay-product/Join-the-Relay-Race-2863fee437154c65b0760192340c7cbf"
          target={"_blank"}
        >
          <Flex width={"100%"} borderBottom={"1px"} paddingBottom={"2.5%"}>
            <Button border={"none"} fontSize={"1.5rem"}>
              Careers
            </Button>
          </Flex>
        </a>
        <a href="https://www.notion.so/relay-product/WIP-Relay-Product-Collective-WIKI-b3237de97eb1492ba1f598568783e27c">
          <Flex width={"100%"} borderBottom={"1px"} paddingBottom={"2.5%"}>
            <Button border={"none"} fontSize={"1.5rem"}>
              Who we are
            </Button>
          </Flex>
        </a>
        <a
          href="https://www.notion.so/relay-product/WIP-Our-design-capabilities-77bfdb01e13745a683b47a00332afebd"
          target={"_blank"}
        >
          <Flex width={"100%"} borderBottom={"1px"} paddingBottom={"2.5%"}>
            <Button border={"none"} fontSize={"1.5rem"}>
              Our design capability
            </Button>
          </Flex>
        </a>
        <a
          href="https://www.notion.so/relay-product/WIP-Our-engineering-capability-01ec0729463f4beea6b66151069bbf0b"
          target={"_blank"}
        >
          <Flex width={"100%"} borderBottom={"1px"} paddingBottom={"2.5%"}>
            <Button border={"none"} fontSize={"1.5rem"}>
              Our engineering capability
            </Button>
          </Flex>
        </a>
      </Flex>
      <Flex
        display={["none", null, null, null, "inherit", null]}
        flexDir={["column", null, null, null, "row", null]}
        justifyContent={"space-between"}
        paddingY={["10%", null, null, null, "5%", null]}
        gap={["1rem", null, null, null, "5rem", null]}
      >
        <a
          href="https://www.notion.so/relay-product/Join-the-Relay-Race-2863fee437154c65b0760192340c7cbf"
          target={"_blank"}
        >
          <Circle
            size={"15rem"}
            bg="none"
            color="white"
            borderColor={"white"}
            borderWidth={"1px"}
            _hover={{ bg: "white", color: "black", cursor: "pointer" }}
          >
            Careers
          </Circle>
        </a>
        <a
          href="https://www.notion.so/relay-product/Join-the-Relay-Race-2863fee437154c65b0760192340c7cbf"
          target={"_blank"}
        >
          <Circle
            size={"15rem"}
            bg="none"
            color="white"
            borderColor={"white"}
            borderWidth={"1px"}
            _hover={{ bg: "white", color: "black", cursor: "pointer" }}
          >
            <Text type={"b1"}>Who we are</Text>
          </Circle>
        </a>
        <a
          href="https://www.notion.so/relay-product/WIP-Our-design-capabilities-77bfdb01e13745a683b47a00332afebd"
          target={"_blank"}
        >
          <Circle
            size={"15rem"}
            bg="none"
            color="white"
            borderColor={"white"}
            borderWidth={"1px"}
            _hover={{ bg: "white", color: "black", cursor: "pointer" }}
          >
            Our design capability
          </Circle>
        </a>
        <a
          href="https://www.notion.so/relay-product/WIP-Our-engineering-capability-01ec0729463f4beea6b66151069bbf0b"
          target={"_blank"}
        >
          <Circle
            size={"15rem"}
            bg="none"
            color="white"
            borderColor={"white"}
            borderWidth={"1px"}
            _hover={{ bg: "white", color: "black", cursor: "pointer" }}
          >
            Our engineering capability
          </Circle>
        </a>
      </Flex>

      {/* Socials */}
      <Flex
        marginY={"7.5%"}
        width={"100%"}
        justifyContent={"center"}
        gap={"1rem"}
      >
        <Text type={"b1"}>Copyright Relay Product Collective 2022</Text>
      </Flex>
    </Flex>
  );
};
