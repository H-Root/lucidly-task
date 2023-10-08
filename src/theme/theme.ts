import { extendTheme } from "@chakra-ui/react";
import { buttonTheme } from "./button";
import { colors } from "./vars/colors";
import { modalTheme } from "./modal";
import { fonts } from "./vars/fonts";
import { inputTheme } from "./input";
import { breakpoints } from "./vars/breakpoints";

const theme = extendTheme({
  components: {
    Button: buttonTheme,
    Modal: modalTheme,
    Avatar: {
      backgroundColor: "brand.avatarBg",
    },
    Input: inputTheme,
  },
  colors,
  fonts,
  breakpoints
});

export default theme;
