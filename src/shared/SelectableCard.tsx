/* eslint-disable @typescript-eslint/no-unused-vars */
import { BsCheckLg } from "react-icons/bs";

type DefaultProps = {
  children: React.ReactNode;
  extras?: string;
  selected?: boolean;
};

type conditionalLabel =
  | {
    withLabel: true;
    label: string;
  }
  | {
    withLabel?: false;
    label?: never;
  };

type Props = DefaultProps & conditionalLabel;

const SelectableCard = ({
  children,
  extras,
  selected = false,
  label,
  withLabel = false,
}: Props) => {
  return (
    <div
      className={`relative aspect-square overflow-hidden rounded-lg ${extras} ${selected && "border-[1px] border-[--chakra-colors-brand-orange]"
        }`}
    >
      {selected && (
        <div className="absolute right-[10px] top-[13px] flex items-center justify-center rounded-full bg-[--chakra-colors-brand-blue] text-[10px]">
          <BsCheckLg className="text-[--chakra-colors-brand-orange]" />
        </div>
      )}
      {children}
      {withLabel && (
        <div
          className="absolute bottom-[12px] left-[14px] text-white font-semibold"
          style={{ fontFamily: "var(--chakra-fonts-monst)" }}
        >
          {label}
        </div>
      )}
    </div>
  );
};

export default SelectableCard;
