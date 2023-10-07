import { Button } from "@chakra-ui/react"
import Heading from "../shared/Heading"
import ImageSelector from "./CardSelector"

const ThirdStep = () => {
  return (
    <div className="flex flex-1 flex-col items-center justify-center">
      <Heading extras="w-full w-full min-[425px]:w-[400px]">
        Tell us what you’re  interested in
      </Heading>
      <div className="flex w-full flex-1 flex-col justify-between mt-[19px]">
        <div className="flex items-center justify-center flex-1 mx-[10px]">
          <ImageSelector />
        </div>

        <div className="flex w-full flex-col items-center gap-3 self-center min-[250px]:w-[244px] mt-1">
          <Button variant={"solid"} height={"40px"} isDisabled>
            Pick 3 more
          </Button>
          <Button variant={"link"}>Back</Button>
        </div>
      </div>
    </div>
  )
}

export default ThirdStep