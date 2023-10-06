import { inputAnatomy } from "@chakra-ui/anatomy";
import { createMultiStyleConfigHelpers } from "@chakra-ui/react";

const { definePartsStyle, defineMultiStyleConfig } =
  createMultiStyleConfigHelpers(inputAnatomy.keys);

const baseStyle = definePartsStyle({
  field: {
    fontFamily: "robo",
    color: "brand.orange",
    textAlign: "center",
    fontSize: 28,
    fontWeight: "bold",
  },
});

export const inputTheme = defineMultiStyleConfig({ baseStyle });
