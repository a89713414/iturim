import { ArticleTitle } from "@/app/[locale]/hotels/components/ArticleTitle";
import { getMessages, getTranslations } from "next-intl/server";
import clsx from "clsx";

export const BestHotelsTable = async () => {
  const t = await getTranslations("hotels.bestHotels");
  const messages = await getMessages();
  const table = messages?.hotels?.bestHotels?.table || [];

  return (
    <div className=" bg-gray-100 mt-10 py-8">
      <ArticleTitle title={t("title")} className={"text-center"} />

      <div className=" w-full max-w-screen-lg mx-auto overflow-x-auto mt-2 ">
        <table className="w-full border border-[#ccc] border-collapse text-right text-base leading-[2.2]">
          <thead>
            <tr className="bg-[#80808012] text-[#000] text-lg">
              {table[0].map((item, index) => (
                <th key={index} className="px-4 py-3 border border-[#ccc] whitespace-nowrap">
                  {item}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {table.slice(1).map(([type, location, stars, name], index) => (
              <tr
                key={index}
                className={clsx(
                  "text-[#333] text-lg",
                  index % 2 === 0 ? "bg-white" : "bg-[#80808012]"
                )}
              >
                <td className="px-4 py-3 border border-[#ccc]">{type}</td>
                <td className="px-4 py-3 border border-[#ccc]">{location}</td>
                <td className="px-4 py-3 border border-[#ccc]">{stars}</td>
                <td className="px-4 py-3 border border-[#ccc]">{name}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};
