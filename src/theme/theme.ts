import { extendTheme } from "@chakra-ui/react";
import { buttonTheme } from "./button";
import { colors } from "./vars/colors";
import { modalTheme } from "./modal";
import { stepperTheme } from "./stepper";
import { fonts } from "./vars/fonts";
import { inputTheme } from "./input";

const theme = extendTheme({
  components: {
    Button: buttonTheme,
    Modal: modalTheme,
    Stepper: stepperTheme,
    Avatar: {
      backgroundColor: "brand.avatarBg",
    },
    Input: inputTheme,
  },
  colors,
  fonts,
});

export default theme;
