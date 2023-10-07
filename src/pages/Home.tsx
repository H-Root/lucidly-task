import {
  Button,
  Image,
  ModalBody,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  useDisclosure,
  Modal as Mod,
} from "@chakra-ui/react";
import logo from "../assets/logo.svg";
import Modal from "../components/Modal";
import Stepper from "../components/Stepper/Stepper";
import FirstStep from "../components/FirstStep";
import SecondStep from "../components/SecondStep";
import ThirdStep from "../components/ThirdStep";
import { useRecoilState } from "recoil";
import { currentStep, highestStep, modalState, userData } from "../store/Store";
import { useEffect } from "react";

const steps = [<FirstStep />, <SecondStep />, <ThirdStep />];

const Home = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  const [modalStateAtom, setModalStateAtom] = useRecoilState(modalState);
  const [userDataAtom, setUserDataAtom] = useRecoilState(userData);
  const [, setHighestStepAtom] = useRecoilState(highestStep);
  const [currentStepAtom, setCurrentStepAtom] = useRecoilState(currentStep);

  useEffect(() => {
    setHighestStepAtom(3);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    console.log(modalStateAtom);
    if (!modalStateAtom && userDataAtom.submitted) {
      onOpen();
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
        ModalFooterChild={<Stepper />}
      />
      <Mod isOpen={isOpen} onClose={onClose} isCentered>
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
      </Mod>
    </>
  );
};

export default Home;
