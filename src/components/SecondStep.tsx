import { Button, Select, Text, Wrap, WrapItem } from "@chakra-ui/react";

const SecondStep = () => {
  return (
    <Wrap direction={"column"} alignItems={"center"} spacing={0}>
      <WrapItem
        width={"fit-content"}
        alignSelf={"center"}
        alignItems={"center"}
        flexDirection={"column"}
      >
        <Text
          w={["100%", "500px"]}
          fontSize={28}
          fontWeight={"bold"}
          color={"brand.blue"}
          fontFamily={"poppins"}
          textAlign={"center"}
        >
          Pick your language and country/region
        </Text>
      </WrapItem>
      <WrapItem
        justifyContent={"space-between"}
        flexDirection={"column"}
        height={"100%"}
        maxWidth={"360px"}
        margin={"0px auto"}
      >
        <WrapItem
          alignSelf={"center"}
          alignItems={"center"}
          flexDirection={"column"}
          mt={"77px"}
          maxWidth={"100%"}
        >
          <Select placeholder="English US" width={"100%"}>
            <option value="option1">Option 1</option>
            <option value="option2">Option 2</option>
            <option value="option3">Option 3</option>
          </Select>
        </WrapItem>
        <WrapItem
          width={"244px"}
          alignSelf={"center"}
          alignItems={"center"}
          flexDirection={"column"}
          mt={"28px"}
        >
          <Button variant={"solid"} maxWidth={"244px"} height={"40px"}>
            Next
          </Button>
        </WrapItem>
      </WrapItem>
    </Wrap>
  );
};

export default SecondStep;
