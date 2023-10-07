import { Button, Image, useDisclosure } from "@chakra-ui/react";
import logo from "../assets/logo.svg";
import Modal from "../components/Modal";
import Stepper from "../components/Stepper/Stepper";
// import FirstStep from "../components/FirstStep";
// import SecondStep from "../components/SecondStep";
import ThirdStep from "../components/ThirdStep";

const Home = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <>
      <div className="flex min-h-screen flex-col items-center justify-center bg-[--chakra-colors-brand-blue]">
        <div className="flex flex-col items-center gap-[120px]">
          <Image src={logo} alt="giki logo" w={285.48} />
          <Button variant={"solid"} size={"sm"} onClick={onOpen}>
            OPEN MODAL
          </Button>
        </div>
      </div>
      <Modal
        isOpen={isOpen}
        onClose={onClose}
        ModalBodyChild={<ThirdStep />}
        ModalFooterChild={<Stepper />}
      />
    </>
  );
};

export default Home;
