import {
  Modal as Mod,
  ModalOverlay,
  ModalContent,
  ModalFooter,
  ModalBody,
  ModalHeader,
} from "@chakra-ui/react";

type ModalProps = {
  isOpen: boolean;
  onClose: () => void;
  ModalHeaderChild?: React.ReactNode,
  ModalBodyChild: React.ReactNode,
  ModalFooterChild: React.ReactNode,
};

const Modal = ({ isOpen = false, onClose = () => { }, ModalBodyChild, ModalFooterChild, ModalHeaderChild }: ModalProps) => {
  return (
    <Mod isOpen={isOpen} onClose={onClose} isCentered={true}>
      <ModalOverlay />
      <ModalContent>
        <ModalHeader>
          {ModalHeaderChild && ModalHeaderChild}
        </ModalHeader>
        <ModalBody>
          {ModalBodyChild}
        </ModalBody>
        <ModalFooter>
          {ModalFooterChild}
        </ModalFooter>
      </ModalContent>
    </Mod>
  );
};

export default Modal;
