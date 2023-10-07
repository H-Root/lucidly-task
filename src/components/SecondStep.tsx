import { Button, Select, Text } from "@chakra-ui/react";

const SecondStep = () => {
  return (
    <div className="flex flex-1 flex-col items-center justify-center">
      <div>
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
      </div>
      <div className="mt-[77px] flex w-full flex-1 flex-col justify-between">
        <div className="mx-auto flex w-full flex-col gap-3 self-stretch min-[365px]:w-[360px]">
          <Select placeholder="English US" bg="brand.lightGray">
            <option value="option1">Option 1</option>
            <option value="option2">Option 2</option>
            <option value="option3">Option 3</option>
          </Select>
          <Select placeholder="English US" bg="brand.lightGray">
            <option value="option1">Option 1</option>
            <option value="option2">Option 2</option>
            <option value="option3">Option 3</option>
          </Select>
        </div>
        <div className="mt-10 flex w-full flex-col items-center gap-3 self-center min-[250px]:w-[244px]">
          <Button variant={"solid"} height={"40px"}>
            Next
          </Button>
          <Button variant={"link"}>Back</Button>
        </div>
      </div>
    </div>
  );
};

export default SecondStep;
