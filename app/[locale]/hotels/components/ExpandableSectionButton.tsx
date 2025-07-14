import clsx from "clsx";

type SubsectionButtonProps = {
  openText: string;
  closeText: string;
  isOpen: boolean;
  onToggle: () => void;
};

export const ExpandableSectionButton = ({
  onToggle,
  isOpen,
  openText,
  closeText,
}: SubsectionButtonProps) => {
  return (
    <button
      onClick={onToggle}
      className="px-4 py-1.5 text-sm font-semibold rounded-full bg-black text-white border border-black transition hover:bg-white hover:text-black cursor-pointer"
    >
      {isOpen ? closeText : openText}
    </button>
  );
};
