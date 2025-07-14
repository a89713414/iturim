import { HeroSection } from "../components/HeroSection/HeroSection";
import { DestinationsSection } from "../components/DestinationsSection/DestinationsSection";
import { WhyUsSection } from "../components/WhyUsSection";
import { RecommendationSection } from "../components/RecommendationSection/RecommendationSection";
import { MagazineSection } from "../components/MagazineSection";
import { ArticlesSection } from "../components/ArticlesSection";
import { HotelsSection } from "../components/HotelsSection";
import { FeedbackSection } from "../components/FeedbackSection";
import { HR } from "../components/ui/HR";
import { PlanVacationSection } from "../components/PlanVacationSection/PlanVacationSection";
import { notFound } from "next/navigation";
import ContactUsPage from "./contact-us/page";

export default function HomePage() {
  const routes = ["/destinations", "/hotels", "/contact-us", "/recommendations"];

  // notFound()
  return (
    <>
      <HeroSection />
      <DestinationsSection />
      <WhyUsSection />
      <PlanVacationSection />
      <MagazineSection />
      <ArticlesSection />
      <ContactUsPage />
      {/* <HotelsSection /> */}
      {/* <FeedbackSection /> */}
    </>
  );
}
