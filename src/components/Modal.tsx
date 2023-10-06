import {
  Modal as Mod,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  Button,
  UseDisclosureProps,
} from "@chakra-ui/react";

const Modal = ({
  isOpen = false,
  onOpen = () => { },
  onClose = () => { },
}: UseDisclosureProps) => {
  return (
    <>
      <Button onClick={onOpen}>Open Modal</Button>

      <Mod isOpen={isOpen} onClose={onClose} isCentered={true}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Modal Title</ModalHeader>
          <ModalBody>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus
            optio pariatur molestiae dolores eligendi, rem veniam omnis
            reiciendis quisquam accusantium?
          </ModalBody>

          <ModalFooter>
            <Button colorScheme="blue" mr={3} onClick={onClose}>
              Close
            </Button>
            <Button variant="ghost">Secondary Action</Button>
          </ModalFooter>
        </ModalContent>
      </Mod>
    </>
  );
};

export default Modal;
