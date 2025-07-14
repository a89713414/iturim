import { AttractionsHero } from "./components/AttractionsHero";
import { EssentialsSection } from "./components/EssentialsSection";
import { DestinationsSection } from "./components/DestinationsSection";
import { ContactUsSection } from "./components/ContactUsSection";
import { FeedbackSection } from "@/app/components/FeedbackSection";

export default async function AttractionsPage() {
  return (
    <>
      <AttractionsHero />
      <EssentialsSection />
      <DestinationsSection />
      <ContactUsSection />
      <FeedbackSection />
    </>
  );
}
