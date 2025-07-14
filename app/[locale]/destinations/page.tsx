import clsx from "clsx";
import { getTranslations } from "next-intl/server";

import { FeedbackSection } from "@/app/components/FeedbackSection";
import { PageTitle } from "@/app/components/ui/PageTitle";

import { DestinationsFactsSection } from "./components/DestinationsFactsSection";
import { DestinationsInfoSection } from "./components/DestinationsInfoSection";
import { DestinationsResortsSection } from "./components/DestinationsResortsSection";

export default async function DestinationsPage() {
  const t = await getTranslations("destinations");

  return (
    <>
      <PageTitle title={t("title")} />

      <div className={clsx("container", "mx-auto")}>
        <div className={clsx("max-w-[1140px]", "mx-auto")}>
          <DestinationsInfoSection />
          <DestinationsFactsSection />
        </div>
      </div>

      <DestinationsResortsSection />
      <FeedbackSection />
    </>
  );
}
