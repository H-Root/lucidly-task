import React from "react";

// maxWidth={"330px"}
// textAlign={"center"}

const Desc = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  return (
    <div
      className={`text-[13px] font-medium text-[--chakra-colors-brand-text]  ${className}`}
      style={{ fontFamily: "var(--chakra-fonts-poppins)" }}
    >
      {children}
    </div>
  );
};

export default Desc;
