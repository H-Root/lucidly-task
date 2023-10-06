import { modalAnatomy as parts } from "@chakra-ui/anatomy";
import { createMultiStyleConfigHelpers } from "@chakra-ui/react";

const { definePartsStyle, defineMultiStyleConfig } =
  createMultiStyleConfigHelpers(parts.keys);

const baseStyle = definePartsStyle({
  overlay: {
    bg: "brand.darkGray",
  },
  dialog: {
    borderRadius: "md",
    height: "85vh",
  },
  footer: {
    marginBottom: 4,
  },
  body: {
    marginTop: "74px",
    padding: "0",
  },
});

export const modalTheme = defineMultiStyleConfig({
  baseStyle,
});
