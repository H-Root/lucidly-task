import { modalAnatomy as parts } from "@chakra-ui/anatomy";
import { createMultiStyleConfigHelpers } from "@chakra-ui/react";

const { definePartsStyle, defineMultiStyleConfig } =
  createMultiStyleConfigHelpers(parts.keys);

const stepperModal = definePartsStyle({
  overlay: {
    bg: "brand.darkGray",
  },
  dialog: {
    borderRadius: "md",
    minHeight: "85vh",
  },
  footer: {
    marginBottom: 4,
  },
  body: {
    marginTop: "74px",
    padding: "0 10px",
    height: "100%",
    display: "flex",
    flexDirection: "column"
  },
});

export const modalTheme = defineMultiStyleConfig({
  // & variant
  // baseStyle,
  variants: {
    stepperModal
  }
});
