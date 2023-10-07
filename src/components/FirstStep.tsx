import {
  Button,
  Input,
  InputGroup,
  InputRightElement,
} from "@chakra-ui/react";
import PenIcon from "./PenIcon";
import Avatar from "../shared/Avatar";
import SubText from "../shared/SubText";
import Heading from "../shared/Heading";
import Desc from "../shared/Desc";

const FirstStep = () => {
  return (
    <div className="flex-1 flex flex-col items-center justify-between">
      <div className="flex flex-col items-center">
        <div className="flex flex-col items-center">
          <Avatar>
            A
          </Avatar>
          <SubText>
            alice@wonderland.space
          </SubText>
        </div>
        <div className="flex flex-col items-center mt-[30px]">
          <Heading special={true}>
            Welcome to Giki
          </Heading>
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
          <Desc className="max-w-[330px] text-center">
            Your answers to the next few questions will help us find the right
            communities for you
          </Desc>
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
