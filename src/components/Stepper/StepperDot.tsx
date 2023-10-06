import { Box } from "@chakra-ui/react";

const Complete = () => {
  return <Box w="6px" h="6px" borderRadius={100} bg="brand.orange" />;
};

const Incomplete = () => {
  return <Box w="6px" h="6px" borderRadius={100} bg="brand.darkGray" />;
};

const StepperDot = {
  Complete,
  Incomplete,
};

export default StepperDot;
