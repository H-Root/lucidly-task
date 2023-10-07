import { Button, Input, InputGroup, InputRightElement } from "@chakra-ui/react";
import PenIcon from "./PenIcon";
import Avatar from "../shared/Avatar";
import SubText from "../shared/SubText";
import Heading from "../shared/Heading";
import Desc from "../shared/Desc";
import { currentStep, userData } from "../store/Store";
import { useRecoilState } from "recoil";

const FirstStep = () => {
  const [, setCur] = useRecoilState(currentStep);
  const [userDataAtom, setUserDataAtom] = useRecoilState(userData);

  return (
    <div className="flex flex-1 flex-col items-center justify-between">
      <div className="flex flex-col items-center">
        <div className="flex flex-col items-center">
          <Avatar>A</Avatar>
          <SubText>alice@wonderland.space</SubText>
        </div>
        <div className="mt-[30px] flex flex-col items-center">
          <Heading special={true}>Welcome to Giki</Heading>
          <InputGroup
            maxWidth={"244px"}
            bg="brand.lightGray"
            mt={"6px"}
            mb={"14px"}
          >
            <Input
              placeholder="Name"
              value={userDataAtom.userName}
              onChange={(e) =>
                setUserDataAtom((val) => ({
                  ...val,
                  userName: e.target.value
                }))
              }
            />
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
      <div className="flex w-full flex-col items-center gap-3">
        <Button
          variant={"solid"}
          maxWidth={"244px"}
          height={"40px"}
          onClick={() => setCur(1)}
          isDisabled={userDataAtom.userName.length < 3}
        >
          Next
        </Button>
        <Button variant={"link"} className="invisible">
          Back
        </Button>
      </div>
    </div>
  );
};

export default FirstStep;
