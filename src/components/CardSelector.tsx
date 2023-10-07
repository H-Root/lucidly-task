const CardSelector = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="grid w-full grid-cols-9 gap-[10px] min-[350px]:grid-cols-12">
      {children}
    </div>
  );
};

export default CardSelector;
