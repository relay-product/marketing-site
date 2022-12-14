import { ComponentStyleConfig } from "@chakra-ui/react";

export const HeadingStyles: ComponentStyleConfig = {
  variants: {
    h1: {
      fontStyle: "normal",
      fontWeight: "800",
      fontSize: "8rem",
      lineHeight: "8.5rem",
    },
    h2: {
      fontStyle: "normal",
      fontWeight: "700",
      fontSize: ["2rem", null, null, null, "3rem", null],
      lineHeight: ["2.5rem", null, null, null, "3.5rem", null],
    },
    h3: {
      fontStyle: "normal",
      fontWeight: "400",
      fontSize: ["2rem", null, null, null, "2.5rem", null],
      lineHeight: ["2.5rem", null, null, null, "3rem", null],
    },
    h4: {
      fontStyle: "normal",
      fontWeight: "400",
      fontSize: "2rem",
      lineHeight: "2.5rem",
    },
    h5: {
      fontStyle: "normal",
      fontWeight: "400",
      fontSize: "1.5rem",
      lineHeight: "2rem",
    },
  },
};
