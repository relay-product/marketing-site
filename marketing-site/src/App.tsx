import {
  ChakraProvider,
  Box,
  Text,
  Link,
  VStack,
  Code,
  Grid,
  theme,
} from "@chakra-ui/react";
import { AppRouter } from "./router/AppRouter";
import { customizedChakraTheme } from "./theme/theme";

export const App = () => (
  <ChakraProvider theme={customizedChakraTheme}>
    <AppRouter />
  </ChakraProvider>
);
