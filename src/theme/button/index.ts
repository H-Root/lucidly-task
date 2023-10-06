import { defineStyleConfig } from "@chakra-ui/react";
import { solid } from "./solid";
import { link } from "./link";

export const buttonTheme = defineStyleConfig({
  variants: { solid, link },
  baseStyle: {
    fontFamily: "monst",
    fontWeight: "semibold",
  },
  sizes: {
    xs: {
      fontSize: 10,
    },
    sm: {
      fontSize: 14,
      width: "100%",
    },
    lg: {},
  },
  defaultProps: {
    size: "sm",
    variant: "solid",
  },
});
