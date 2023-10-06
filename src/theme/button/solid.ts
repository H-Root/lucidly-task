/* eslint-disable @typescript-eslint/no-unused-vars */
import { StyleFunctionProps, defineStyle } from "@chakra-ui/react";

export const solid = defineStyle((_props: StyleFunctionProps) => ({
  bg: "brand.orange",
  color: "white",
  borderRadius: 8,
  padding: 3,
  _hover: {
    bg: "",
  },
  _active: {
    bg: "",
  },
  _disabled: {
    bg: "brand.disabled",
  },
  dropShadow: "0px 4px 4px rgba(0, 0, 0, 0.25)",
}));
