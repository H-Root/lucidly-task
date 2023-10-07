import {
  Button,
  Modal,
  ModalBody,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  useDisclosure,
} from "@chakra-ui/react";
import Heading from "../shared/Heading";
import { useRecoilState, useRecoilValue } from "recoil";
import { currentStep, userData, userMsg } from "../store/Store";
import img from "../assets/img1.png";
import img2 from "../assets/img2.png";
import img3 from "../assets/img3.png";
import img4 from "../assets/img4.png";
import img5 from "../assets/img5.png";
import img6 from "../assets/img6.png";
import img7 from "../assets/img7.png";
import img8 from "../assets/img8.png";
import SelectableCard from "../shared/SelectableCard";
import GridDisplay from "./GridDisplay";

const data = [
  {
    img: img,
    label: "Innovation",
  },
  {
    img: img2,
    label: "Medicine",
  },
  {
    img: img3,
    label: "Technology",
  },
  {
    img: img4,
    label: "Telemedicene",
  },
  {
    img: img5,
    label: "Lorem Ipsum",
  },
  {
    img: img6,
    label: "Education",
  },
  {
    img: img7,
    label: "Research",
  },
  {
    img: img8,
    label: "Pharmatech",
  },
];

const ThirdStep = () => {
  const [, setCur] = useRecoilState(currentStep);
  const [userDataAtom, setUserDataAtom] = useRecoilState(userData);
  const msg = useRecoilValue(userMsg);
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <>
      <Modal isOpen={isOpen} onClose={onClose} isCentered>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Modal Title</ModalHeader>
          <ModalBody>lkajdlkasdlk</ModalBody>
          <ModalFooter>
            <Button colorScheme="blue" mr={3} onClick={onClose}>
              Close
            </Button>
            <Button variant="ghost">Secondary Action</Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
      <div className="flex flex-1 flex-col items-center justify-center">
        <Heading extras="w-full w-full min-[425px]:w-[400px]">
          Tell us what you’re interested in
        </Heading>
        <div className="mt-[19px] flex w-full flex-1 flex-col justify-between">
          <div className="mx-[10px] flex flex-1 items-center justify-center">
            <GridDisplay>
              {data.map((item, i) => (
                <SelectableCard
                  key={i}
                  withLabel={true}
                  label={item.label}
                  extras="col-span-3 p-[3px]"
                  selected={userDataAtom.interests.includes(item.label)}
                  onClick={() => {
                    if (userDataAtom.interests.includes(item.label)) {
                      setUserDataAtom((prev) => {
                        const newInterests = prev.interests.filter(
                          (i) => i !== item.label,
                        );
                        return {
                          ...prev,
                          interests: newInterests,
                        };
                      });
                    } else {
                      setUserDataAtom((prev) => {
                        return {
                          ...prev,
                          interests: [...prev.interests, item.label],
                        };
                      });
                    }
                  }}
                >
                  <img
                    src={item.img}
                    className="h-full w-full rounded-md object-cover"
                    alt={item.label}
                    draggable={false}
                  />
                </SelectableCard>
              ))}
            </GridDisplay>
          </div>

          <div className="mt-1 flex w-full flex-col items-center gap-3 self-center min-[250px]:w-[244px]">
            <Button
              variant={"solid"}
              height={"40px"}
              isDisabled={userDataAtom.interests.length < 3}
              onClick={onOpen}
            >
              {msg}
            </Button>
            <Button variant={"link"} onClick={() => setCur(1)}>
              Back
            </Button>
          </div>
        </div>
      </div>
    </>
  );
};

export default ThirdStep;
