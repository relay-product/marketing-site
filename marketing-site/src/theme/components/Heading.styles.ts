import { ComponentStyleConfig } from "@chakra-ui/react";

export const HeadingStyles: ComponentStyleConfig = {
  variants: {
    h1: {
      fontStyle: "normal",
      fontWeight: "800",
      fontSize: "8rem",
      lineHeight: "8.2rem",
    },
    h2: {
      fontStyle: "normal",
      fontWeight: "700",
      fontSize: ["2rem", null, null, null, "3rem", null],
      lineHeight: ["2.2rem", null, null, null, "3.2rem", null],
    },
    h3: {
      fontStyle: "normal",
      fontWeight: "400",
      fontSize: ["2rem", null, null, null, "2.5rem", null],
      lineHeight: ["2.2rem", null, null, null, "2.75rem", null],
    },
    h4: {
      fontStyle: "normal",
      fontWeight: "400",
      fontSize: "2rem",
      lineHeight: "2.25rem",
    },
    h5: {
      fontStyle: "normal",
      fontWeight: "400",
      fontSize: "1.5rem",
      lineHeight: "1.5rem",
    },
  },
};
