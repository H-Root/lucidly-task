/* eslint-disable @typescript-eslint/no-unused-vars */
import { StyleFunctionProps, defineStyle } from "@chakra-ui/react";

export const solid = defineStyle((_props: StyleFunctionProps) => ({
  bg: "brand.orange",
  color: "white",
  borderRadius: 8,
  padding: 3,
  _hover: {
    bg: ""
  },
  _active: {
    bg: ""
  },
  _disabled: {
    bg: "brand.disabled",
  },
}));
