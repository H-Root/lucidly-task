import React from "react";

const SubText = ({ children }: { children: React.ReactNode }) => {
  return (
    <div
      className="mt-[11px] text-sm text-[--chakra-colors-brand-disabled]"
      style={{
        fontFamily: "var(--chakra-fonts-poppins)",
        textShadow: "0px 4px 4px rgba(0, 0, 0, 0.25)",
      }}
    >
      {children}
    </div>
  );
};

export default SubText;
