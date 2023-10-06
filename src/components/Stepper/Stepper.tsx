import {
  Step,
  StepIndicator,
  StepSeparator,
  StepStatus,
  Stepper as Steppa,
  useSteps,
} from "@chakra-ui/react";
import StepperDot from "./StepperDot";

const steps = [
  { title: "First", description: "Contact Info" },
  { title: "Second", description: "Date & Time" },
  { title: "Third", description: "Select Rooms" },
];

const Stepper = () => {
  const { activeStep } = useSteps({
    index: 0,
    count: steps.length,
  });

  return (
    <Steppa index={activeStep}>
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
