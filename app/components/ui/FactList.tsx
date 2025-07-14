import clsx from "clsx";

interface FactListProps {
  items: { title: string; text: string }[];
  classes?: {
    root?: string;
  };
}

export const FactList = ({ items, classes }: FactListProps) => {
  return (
    <div className={clsx("mb-3", "text-center", classes?.root)}>
      {items.map((fact, i) => (
        <div key={i} className={clsx("mb-4")}>
          <h3 className={clsx("text-[20px]", "leading-[30px]", "font-bold")}>{fact.title}</h3>
          <p className={clsx("text-[20px]", "leading-[30px]")}>{fact.text}</p>
        </div>
      ))}
    </div>
  );
};
