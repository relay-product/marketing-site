import { ComponentStyleConfig } from "@chakra-ui/react";

export const ButtonStyles: ComponentStyleConfig = {
  // style object for base or default style
  baseStyle: {},
  // styles for different sizes ("sm", "md", "lg")
  sizes: {
    regular: {
      height: "3rem",
      padding: "0.75rem 1rem",
    },
    small: {
      height: "2rem",
      padding: "0.5rem 0.75rem",
    },
  },
  // styles for different visual variants ("outline", "solid")
  variants: {
    primary: {
      bg: "none",
      color: "white",
      _hover: {
        bg: "white",
        color: "black",
      },
      borderRadius: "30px",
      stroke: "white",
      borderColor: "white",
      borderWidth: "1px",
      paddingY: "1%",
      paddingX: "2%",
      fontWeight: "300",
    },

    secondary: {
      bg: "none",
      color: "white",
    },
  },
  // default values for 'size', 'variant' and 'colorScheme'
  defaultProps: {
    variant: "primary",
    sizes: "regular",
  },
};
