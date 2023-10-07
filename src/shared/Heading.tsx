{
  /* 
  w={["100%", "500px"]}
  textAlign={"center"}
 */
}

const Heading = ({
  children,
  extras,
  special = false
}: {
  children: React.ReactNode;
  extras?: string;
  special?: boolean
}) => {
  return (
    <div
      className={`text-center text-[28px] font-bold text-[--chakra-colors-brand-blue] ${extras}`}
      style={{ fontFamily: special ? "var(--chakra-fonts-poppins)" : "var(--chakra-fonts-monst)" }}
    >
      {children}
    </div>
  );
};

export default Heading;
