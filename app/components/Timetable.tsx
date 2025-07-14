import clsx from "clsx";
import { getTranslations } from "next-intl/server";

const timetableData = [
  [
    {
      days: "sunThu",
      timezone: "timezoneIsrael",
      startTime: "8:00",
      endTime: "17:00",
    },
    {
      days: "fri",
      timezone: "timezoneIsrael",
      startTime: "8:00",
      endTime: "12:00",
    },
  ],
];

export const Timetable = async () => {
  const t = await getTranslations("contactUs.timetable");

  return (
    <div className={clsx("p-3", "text-[14px]")}>
      <div className={clsx("border-s", "border-gray-300", "px-1", "mb-4")}>
        {timetableData.map((timetableItem, timetableIndex) => (
          <div key={timetableIndex} className={clsx("mb-2")}>
            {timetableItem.map((item, itemIndex) => (
              <div
                key={itemIndex}
                className={clsx("grid", "grid-cols-2", "md:grid-cols-[30%_70%]", "gap-4")}
              >
                <div>
                  <span className={clsx("font-bold", "me-2")}>{t(item.days)}</span>
                  <span>({t(item.timezone)})</span>
                </div>
                <div>
                  {t("fromTo", {
                    start: item.startTime,
                    end: item.endTime,
                  })}
                </div>
              </div>
            ))}
          </div>
        ))}
      </div>

      <ul>
        <li className={clsx("list-disc", "list-inside", "ps-4")}>
          {t.rich("note", {
            bold: chunks => <span className={clsx("font-bold")}>{chunks}</span>,
          })}
        </li>
      </ul>
    </div>
  );
};
