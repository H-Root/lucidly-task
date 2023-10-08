import StepperDot from "./StepperDot";

const Stepper = ({ currentStep, highestStep }: { currentStep: number, highestStep: number }) => {
  const a = Array.from(Array(highestStep).keys());

  return (
    <div className="flex items-center gap-3 w-full justify-center">
      {
        a.map((_, index) => (
          index <= currentStep ? <StepperDot.Complete /> : <StepperDot.Incomplete />
        ))
      }
    </div>
  );
};

export default Stepper;
