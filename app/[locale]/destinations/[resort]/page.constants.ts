import { AttractionsSection } from "./components/AttractionsSection";
import { CarRentalSection } from "./components/CarRentalSection";
import { ChabadHouseSection } from "./components/ChabadHouseSection";
import { SummarySection } from "./components/SummarySection";
import { FAQSection } from "./components/FAQSection";
import { FlightsInfoSection } from "./components/FlightsInfoSection";
import { GeoInfoSection } from "./components/GeoInfoSection";
import { HeroSection } from "./components/HeroSection";
import { MapSection } from "./components/MapSection";
import { MarketsSection } from "./components/MarketsSection";
import { MoreInfoSection } from "./components/MoreInfoSection";
import { NightlifeSection } from "./components/NightlifeSection";
import { RecommendedBeachesSection } from "./components/RecommendedBeachesSection";
import { RecommendedHotelsSection } from "./components/RecommendedHotelsSection";
import { RecommendedRestaurantsSection } from "./components/RecommendedRestaurantsSection";
import { SpectacularViewRestaurantsSection } from "./components/SpectacularViewRestaurantsSection";
import { TouristInformationSection } from "./components/TouristInformationSection";
import { VacationWithChildrenSection } from "./components/VacationWithChildrenSection";
import { WeatherInfoSection } from "./components/WeatherInfoSection";
import { WhatToDoSection } from "./components/WhatToDoSection";
import { ResortKey } from "./page.types";
import { FeedbackSection } from "@/app/components/FeedbackSection";

export const mapResortToSections: Record<ResortKey, React.ComponentType<{ resort: ResortKey }>[]> =
  {
    siargao: [
      HeroSection,
      GeoInfoSection,
      TouristInformationSection,
      FlightsInfoSection,
      WeatherInfoSection,
      RecommendedBeachesSection,
      CarRentalSection,
      WhatToDoSection,
      AttractionsSection,
      NightlifeSection,
      RecommendedHotelsSection,
      VacationWithChildrenSection,
      MarketsSection,
      ChabadHouseSection,
      RecommendedRestaurantsSection,
      SpectacularViewRestaurantsSection,
      FAQSection,
      MapSection,
      MoreInfoSection,
      SummarySection,
      FeedbackSection,
    ],
    boracay: [],
    batangas: [],
    bohol: [],
    cebu: [],
    davao: [],
    palawan: [],
    subic_bay: [],
    tagaytay: [],
  };
