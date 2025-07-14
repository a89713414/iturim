import clsx from "clsx";

export const List = ({ items }: { items: { title: string; description: string }[] }) => {
  return (
    <ul>
      {items.map((item, idx: number) => (
        <li
          key={idx}
          className={clsx(idx !== items.length - 1 && "border-b border-gray-200", "p-2.5", "mb-0")}
        >
          <div className={clsx("text-primary", "text-[28px]", "font-semibold", "mb-3")}>
            {item.title}
          </div>
          <div className={clsx("text-[20px]", "leading-[30px]", "mb-3")}>{item.description}</div>
        </li>
      ))}
    </ul>
  );
};
