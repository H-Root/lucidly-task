import React from "react";

//           display={"flex"}
//           alignItems={"center"}
//           justifyContent={"center"}

const Avatar = ({ children }: { children: React.ReactNode }) => {
  return (
    <div
      className="flex h-[123px] w-[123px] items-center justify-center rounded-[7px] bg-[--chakra-colors-brand-blue] text-[50px] font-bold text-white"
      style={{ fontFamily: "var(--chakra-fonts-monst)" }}
    >
      {children}
    </div>
  );
};

export default Avatar;
