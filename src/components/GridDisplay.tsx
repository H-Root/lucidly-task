const GridDisplay = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="grid w-full grid-cols-6 gap-[10px] min-[400px]:grid-cols-9 min-[560px]:grid-cols-12">
      {children}
    </div>
  );
};

export default GridDisplay;
