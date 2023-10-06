import {
  Box,
  Button,
  Input,
  InputGroup,
  InputRightElement,
  Text,
  Wrap,
  WrapItem,
} from "@chakra-ui/react";
import PenIcon from "./PenIcon";

const FirstStep = () => {
  return (
    <Wrap direction={"column"} alignItems={"center"} spacing={0}>
      <WrapItem
        width={"fit-content"}
        alignSelf={"center"}
        alignItems={"center"}
        flexDirection={"column"}
      >
        <Box
          bg="brand.blue"
          rounded={7}
          color={"white"}
          width={123}
          height={123}
          display={"flex"}
          alignItems={"center"}
          justifyContent={"center"}
        >
          <Text
            fontSize={50}
            fontWeight={"bold"}
            width={"fit-content"}
            fontFamily={"monst"}
          >
            A
          </Text>
        </Box>
        <Text
          color={"brand.disabled"}
          mt={11}
          fontSize={14}
          fontFamily={"poppins"}
          style={{ textShadow: "0px 4px 4px rgba(0, 0, 0, 0.25)" }}
        >
          alice@wonderland.space
        </Text>
      </WrapItem>
      <WrapItem
        width={"fit-content"}
        alignSelf={"center"}
        alignItems={"center"}
        flexDirection={"column"}
        mt={"30px"}
      >
        <Text
          width={"fit-content"}
          fontSize={28}
          fontWeight={"bold"}
          color={"brand.blue"}
          fontFamily={"poppins"}
        >
          Welcome to Giki
        </Text>
        <InputGroup width={"60%"} bg="brand.lightGray" mt={"6px"} mb={"14px"}>
          <Input placeholder="Name" />
          <InputRightElement position={"absolute"}>
            <PenIcon />
          </InputRightElement>
        </InputGroup>
        <Text
          width={"75%"}
          fontSize={12}
          fontWeight={"medium"}
          color={"brand.text"}
          fontFamily={"poppins"}
          textAlign={"center"}
        >
          Your answers to the next few questions will help us find the right
          communities for you
        </Text>
      </WrapItem>
      <WrapItem
        width={"100%"}
        alignSelf={"center"}
        alignItems={"center"}
        flexDirection={"column"}
        mt={"28px"}
      >
        <Button variant={"solid"} width={"60%"} height={"40px"}>
          Next
        </Button>
      </WrapItem>
    </Wrap>
  );
};

export default FirstStep;
