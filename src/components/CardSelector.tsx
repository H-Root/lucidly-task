import img from "../assets/img1.png";
import img2 from "../assets/img2.png";
import img3 from "../assets/img3.png";
import img4 from "../assets/img4.png";
import img5 from "../assets/img5.png";
import img6 from "../assets/img6.png";
import img7 from "../assets/img7.png";
import img8 from "../assets/img8.png";
import SelectableCard from "../shared/SelectableCard";

const CardSelector = () => {
  return (
    <div className="grid gap-[10px] w-full grid-cols-9 min-[350px]:grid-cols-12">
      <SelectableCard withLabel={true} label="Innovation" extras="col-span-3 p-[3px]" selected={true}>
        <img src={img} className="w-full h-full object-cover rounded-md" />
      </SelectableCard>
      <SelectableCard extras="col-span-3 p-[3px]" selected={true}>
        <img src={img2} className="w-full h-full object-cover rounded-md" />
      </SelectableCard>
      <SelectableCard extras="col-span-3 p-[3px]">
        <img src={img3} className="w-full h-full object-cover rounded-md" />
      </SelectableCard>
      <SelectableCard extras="col-span-3 p-[3px]">
        <img src={img4} className="w-full h-full object-cover rounded-md" />
      </SelectableCard>
      <SelectableCard extras="col-span-3 p-[3px]">
        <img src={img5} className="w-full h-full object-cover rounded-md" />
      </SelectableCard>
      <SelectableCard extras="col-span-3 p-[3px]">
        <img src={img6} className="w-full h-full object-cover rounded-md" />
      </SelectableCard>
      <SelectableCard extras="col-span-3 p-[3px]">
        <img src={img7} className="w-full h-full object-cover rounded-md" />
      </SelectableCard>
      <SelectableCard extras="col-span-3 p-[3px]">
        <img src={img8} className="w-full h-full object-cover rounded-md" />
      </SelectableCard>
    </div>
  )
}

export default CardSelector;