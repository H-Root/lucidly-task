import {
  Step,
  StepIndicator,
  StepSeparator,
  StepStatus,
  Stepper as Steppa,
} from "@chakra-ui/react";
import StepperDot from "./StepperDot";
import { currentStep } from "../../store/Store";
import { useRecoilState } from "recoil";

const steps = [
  { title: "First", description: "Contact Info" },
  { title: "Second", description: "Date & Time" },
  { title: "Third", description: "Select Rooms" },
];

const Stepper = () => {
  const [currentStepAtom] = useRecoilState(currentStep);

  return (
    <Steppa index={currentStepAtom}>
      {steps.map((_, index) => (
        <Step key={index}>
          <StepIndicator>
            <StepStatus
              complete={<StepperDot.Complete />}
              incomplete={<StepperDot.Incomplete />}
              active={<StepperDot.Complete />}
            />
          </StepIndicator>

          <StepSeparator />
        </Step>
      ))}
    </Steppa>
  );
};

export default Stepper;
