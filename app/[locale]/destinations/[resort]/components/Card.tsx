import clsx from "clsx";
import { ReactNode } from "react";

const CardContainer = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  return (
    <div
      className={clsx(
        "flex",
        "flex-col",
        "md:flex-row",
        "gap-2.5",
        "bg-[rgba(255,255,255,0.82)]",
        "rounded-2xl",
        "overflow-hidden",
        className
      )}
    >
      {children}
    </div>
  );
};

const CardInfo = ({ title, description }: { title: string; description: ReactNode }) => {
  return (
    <div className="flex-1 flex flex-col p-2.5">
      <h2 className="text-[28px] leading-[28px] font-bold mb-3">{title}</h2>
      <div className="text-[20px] leading-[30px]">{description}</div>
    </div>
  );
};

export const Card = ({
  image,
  title,
  description,
  className,
}: {
  image: string;
  title: string;
  description: ReactNode;
  className?: string;
}) => {
  return (
    <CardContainer className={className}>
      <div
        className="w-full md:w-[25%] bg-cover bg-center min-h-[200px] shrink-0"
        style={{ backgroundImage: `url(${image})` }}
      />
      <CardInfo title={title} description={description} />
    </CardContainer>
  );
};

export const GroupCard = ({ items }: { items: { title: string; description: string }[] }) => {
  return (
    <CardContainer className="p-1">
      {items.map(item => (
        <CardInfo key={item.title} title={item.title} description={item.description} />
      ))}
    </CardContainer>
  );
};
