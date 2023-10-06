import { Box, Button, Flex, Image, useDisclosure } from "@chakra-ui/react";
import logo from "../assets/logo.svg";
import Modal from "../components/Modal";
import Stepper from "../components/Stepper/Stepper";
// import FirstStep from "../components/FirstStep";
import SecondStep from "../components/SecondStep";

const Home = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <>
      <Flex
        minH={"100vh"}
        align={"center"}
        justify={"center"}
        backgroundColor={"#434E61"}
      >
        <Box
          display={"flex"}
          flexDirection={"column"}
          alignItems={"center"}
          gap={120}
        >
          <Image src={logo} alt="giki logo" w={285.48} />
          <Button variant={"solid"} size={"sm"} onClick={onOpen}>
            OPEN MODAL
          </Button>
        </Box>
      </Flex>
      <Modal
        isOpen={isOpen}
        onClose={onClose}
        ModalBodyChild={<SecondStep />}
        ModalFooterChild={<Stepper />}
      />
    </>
  );
};

export default Home;
