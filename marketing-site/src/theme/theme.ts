import { extendTheme } from "@chakra-ui/react";
import { HeadingStyles as Heading } from "./components/Heading.styles";
import { config } from "./foundations/config";
import { fonts } from "./foundations/fonts";
import { ButtonStyles as Button } from "./components/Button.styles";
import { TextStyles as Text } from "./components/Text.styles";

export const customizedChakraTheme = extendTheme({
  fonts,
  config,
  components: {
    Heading,
    Button,
    Text
  }
});
