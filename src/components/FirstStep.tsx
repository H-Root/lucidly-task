import {
  Button,
  Input,
  InputGroup,
  InputRightElement,
  Text,
} from "@chakra-ui/react";
import PenIcon from "./PenIcon";
import Avatar from "../shared/Avatar";

const FirstStep = () => {
  return (
    <div className="flex-1 flex flex-col items-center justify-between">
      <div className="flex flex-col items-center">
        <div className="flex flex-col items-center">
          <Avatar>
            A
          </Avatar>
          <Text
            color={"brand.disabled"}
            mt={11}
            fontSize={14}
            fontFamily={"poppins"}
            style={{ textShadow: "0px 4px 4px rgba(0, 0, 0, 0.25)" }}
          >
            alice@wonderland.space
          </Text>
        </div>
        <div className="flex flex-col items-center mt-[30px]">
          <Text
            width={"fit-content"}
            fontSize={28}
            fontWeight={"bold"}
            color={"brand.blue"}
            fontFamily={"poppins"}
          >
            Welcome to Giki
          </Text>
          <InputGroup
            maxWidth={"244px"}
            bg="brand.lightGray"
            mt={"6px"}
            mb={"14px"}
          >
            <Input placeholder="Name" />
            <InputRightElement position={"absolute"}>
              <PenIcon />
            </InputRightElement>
          </InputGroup>
          <Text
            maxWidth={"330px"}
            fontSize={13}
            fontWeight={"medium"}
            color={"brand.text"}
            fontFamily={"poppins"}
            textAlign={"center"}
          >
            Your answers to the next few questions will help us find the right
            communities for you
          </Text>
        </div>
      </div>

      <div className="w-full flex flex-col items-center gap-3">
        <Button variant={"solid"} maxWidth={"244px"} height={"40px"}>
          Next
        </Button>
        <Button variant={"link"} className="invisible">Back</Button>
      </div>

    </div>
  );
};

export default FirstStep;
