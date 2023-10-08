import {
  Modal as ModalChakra,
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
    <ModalChakra
      isOpen={isOpen}
      onClose={onClose}
      isCentered={true}
      variant={"stepperModal"}
      closeOnEsc={false}
      closeOnOverlayClick={false}
    >
      <ModalOverlay />
      <ModalContent maxWidth={612}>
        <ModalBody>{ModalBodyChild}</ModalBody>
        <ModalFooter>{ModalFooterChild}</ModalFooter>
      </ModalContent>
    </ModalChakra>
  );
};

export default Modal;
