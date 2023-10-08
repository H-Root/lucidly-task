import { Button, Select } from "@chakra-ui/react";
import { useRecoilState } from "recoil";
import { currentStep, userData } from "../../../store/Store";
import Heading from "../../../shared/Heading";

const SecondStep = () => {
  const [, setCur] = useRecoilState(currentStep);
  const [userDataAtom, setUserDataAtom] = useRecoilState(userData);

  return (
    <div className="flex flex-1 flex-col items-center justify-center">
      <Heading extras="w-full min-[525px]:w-[500px]">
        Pick your language and country/region
      </Heading>
      <div className="mt-[77px] flex w-full flex-1 flex-col justify-between">
        <div className="mx-auto flex w-full flex-col gap-3 self-stretch min-[365px]:w-[360px]">
          <Select
            placeholder="Language"
            bg="brand.lightGray"
            color={"brand.disabled"}
            value={userDataAtom.lang}
            onChange={(e) =>
              setUserDataAtom((curr) => ({
                ...curr,
                lang: e.target.value,
              }))
            }
          >
            <option value="en">English (US)</option>
            <option value="ar">Arabic (AR)</option>
            <option value="gr">German (GR)</option>
            <option value="du">Dutch (DU)</option>
          </Select>
          <Select
            placeholder="Region"
            bg="brand.lightGray"
            color={"brand.disabled"}
            value={userDataAtom.region}
            onChange={(e) =>
              setUserDataAtom((curr) => ({
                ...curr,
                region: e.target.value,
              }))
            }
          >
            <option value="sy">Syria</option>
            <option value="it">Italia</option>
            <option value="uae">UAE</option>
          </Select>
        </div>
        <div className="mt-10 flex w-full flex-col items-center gap-3 self-center min-[250px]:w-[244px]">
          <Button
            variant={"solid"}
            height={"40px"}
            onClick={() => setCur(2)}
            isDisabled={
              userDataAtom.region.length === 0 ||
              userDataAtom.lang.length === 0
            }
          >
            Next
          </Button>
          <Button variant={"link"} onClick={() => setCur(0)}>
            Back
          </Button>
        </div>
      </div>
    </div>
  );
};

export default SecondStep;
