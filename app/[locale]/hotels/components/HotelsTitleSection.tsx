import Link from "next/link";

export const HotelsTitleSection = () => {
  return (
    <section className={"p-2.5"}>
      <div className={"flex justify-center pt-17"}>
        <Link className={"text-primary"} href={"/"}>
          Home
        </Link>
        <span>- {t("title")}</span>
      </div>
      <h2 style={{ color: "var(--brand)" }} className={"m-1 text-center text-6xl font-black"}>
        {t("title")}
      </h2>
    </section>
  );
};
