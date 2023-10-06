/* eslint-disable @typescript-eslint/no-unused-vars */
import { StyleFunctionProps, defineStyle } from "@chakra-ui/react";

export const link = defineStyle((_props: StyleFunctionProps) => ({
  bg: "brand.transparent",
  color: "brand.text",
  padding: 3,
  fontSize: 10,
  fontWeight: 500,
  _disabled: {
    bg: "brand.disabled",
  },
  colorScheme: "black",
}));
