export const ColouredSectionHeading = ({ title }: { title: string }) => {
  return (
    <div className="relative w-full bg-[#2e2489] py-4 text-center">
      <div className="absolute inset-0 bg-white/10" aria-hidden="true" />
      <h3 className="relative z-10 text-white text-3xl font-bold rtl">{title}</h3>
    </div>
  );
};
