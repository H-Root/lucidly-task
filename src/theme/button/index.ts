import { defineStyleConfig } from "@chakra-ui/react";
import { solid } from "./solid";

export const buttonTheme = defineStyleConfig({
  variants: { solid: solid },
  // 1. We can update the base styles
  baseStyle: {
    fontFamily: "buttons",
    fontWeight: "semibold"
  },
  // 2. We can add a new button size or extend existing
  sizes: {
    xs: {
      fontSize: 10
    },
    sm: {
      fontSize: 14,
      width: "100%"
    },
  },
  // 6. We can overwrite defaultProps
  defaultProps: {
    size: 'sm', // default is md
    variant: 'solid', // default is solid
    // colorScheme: 'orange', // default is gray
  },
})