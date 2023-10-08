import { useEffect } from "react";

import {
  Button,
  Image,
  ModalBody,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  useDisclosure,
  Modal as ModalChakra,
} from "@chakra-ui/react";

import logo from "../../assets/logo.svg";

import { useRecoilState, useRecoilValue } from "recoil";

import FirstStep from "./steps/FirstStep";
import SecondStep from "./steps/SecondStep";
import ThirdStep from "./steps/ThirdStep";
import {
  currentStep,
  highestStep,
  modalState,
  userData,
  userProfile,
} from "../../store/Store";
import Modal from "../../components/Modal";
import Stepper from "../../components/Stepper/Stepper";

const steps = [<FirstStep />, <SecondStep />, <ThirdStep />];

const Home = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  const [modalStateAtom, setModalStateAtom] = useRecoilState(modalState);
  const [userDataAtom, setUserDataAtom] = useRecoilState(userData);
  const [highestStepAtom, setHighestStepAtom] = useRecoilState(highestStep);
  const [currentStepAtom, setCurrentStepAtom] = useRecoilState(currentStep);
  const filler = useRecoilValue(userProfile);

  useEffect(() => {
    setHighestStepAtom(steps.length);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    if (!modalStateAtom && userDataAtom.submitted) {
      onOpen();
      console.log({ ...userDataAtom, ...filler });
      setUserDataAtom({
        interests: [],
        lang: "",
        region: "",
        submitted: false,
        userName: "",
      });
      setCurrentStepAtom(0);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [modalStateAtom]);

  return (
    <>
      <div className="flex min-h-screen flex-col items-center justify-center bg-[--chakra-colors-brand-blue]">
        <div className="flex flex-col items-center gap-[120px]">
          <Image src={logo} alt="giki logo" w={285.48} />
          <Button
            variant={"solid"}
            size={"sm"}
            onClick={() => setModalStateAtom(true)}
          >
            OPEN MODAL
          </Button>
        </div>
      </div>
      <Modal
        isOpen={modalStateAtom}
        onClose={() => setModalStateAtom(false)}
        ModalBodyChild={steps[currentStepAtom]}
        ModalFooterChild={
          <Stepper
            currentStep={currentStepAtom}
            highestStep={highestStepAtom}
          />
        }
      />
      <ModalChakra isOpen={isOpen} onClose={onClose} isCentered>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Submitted Successfully</ModalHeader>
          <ModalBody>Thank you for your time</ModalBody>
          <ModalFooter alignSelf={"end"}>
            <Button colorScheme="blue" mr={3} onClick={onClose}>
              Close
            </Button>
          </ModalFooter>
        </ModalContent>
      </ModalChakra>
    </>
  );
};

export default Home;
