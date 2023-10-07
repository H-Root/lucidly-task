import {
  Modal as Mod,
  ModalOverlay,
  ModalContent,
  ModalFooter,
  ModalBody,
} from "@chakra-ui/react";

type ModalProps = {
  isOpen: boolean;
  onClose: () => void;
  ModalBodyChild: React.ReactNode;
  ModalFooterChild: React.ReactNode;
};

const Modal = ({
  isOpen = false,
  onClose = () => { },
  ModalBodyChild,
  ModalFooterChild,
}: ModalProps) => {
  return (
    <Mod isOpen={isOpen} onClose={onClose} isCentered={true} variant={"stepperModal"}>
      <ModalOverlay />
      <ModalContent maxWidth={612}>
        <ModalBody>{ModalBodyChild}</ModalBody>
        <ModalFooter>{ModalFooterChild}</ModalFooter>
      </ModalContent>
    </Mod>
  );
};

export default Modal;
