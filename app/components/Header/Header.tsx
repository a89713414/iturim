import { DesktopHeader } from "@/app/components/Header/DesktopHeader";
import { MobileHeader } from "@/app/components/Header/MobileHeader";

const navItems = [
  { label: "nav.destinations", href: "/destinations" },
  { label: "nav.hotels", href: "/hotels" },
  {
    label: "nav.attractions.label",
    href: "/attractions",
    dropdown: [
      { label: "nav.attractions.dropdown.siargao", href: "/attractions/siargao" },
      { label: "nav.attractions.dropdown.palawan", href: "/attractions/palawan" },
      { label: "nav.attractions.dropdown.boracay", href: "/attractions/boracay" },
    ],
  },
  {
    label: "nav.flights.label",
    href: "/flights",
    dropdown: [
      { label: "nav.flights.dropdown.domestic", href: "/flights/domestic" },
      { label: "nav.flights.dropdown.direct", href: "/flights/direct" },
      { label: "nav.flights.dropdown.viaJordan", href: "/flights/via-jordan" },
    ],
  },
  {
    label: "nav.families.label",
    href: "/families",
    dropdown: [
      { label: "nav.families.dropdown.philippines", href: "/families/philippines" },
      { label: "nav.families.dropdown.siargao", href: "/families/siargao" },
      { label: "nav.families.dropdown.palawan", href: "/families/palawan" },
      { label: "nav.families.dropdown.boracay", href: "/families/boracay" },
    ],
  },
  {
    label: "nav.honeymoon.label",
    href: "/honeymoon",
    dropdown: [
      { label: "nav.honeymoon.dropdown.young", href: "/honeymoon/philippines" },
      { label: "nav.honeymoon.dropdown.couples", href: "/honeymoon/couples" },
      { label: "nav.honeymoon.dropdown.fullMoon", href: "/honeymoon/fullMoon" },
      { label: "nav.honeymoon.dropdown.halfMoon", href: "/honeymoon/halfMoon" },
    ],
  },
  {
    label: "nav.info.label",
    href: "/info",
    dropdown: [
      { label: "nav.info.dropdown.packages", href: "/info/packages" },
      { label: "nav.info.dropdown.groups", href: "/info/groups" },
      { label: "nav.info.dropdown.recommendations", href: "/info/recommendations" },
      { label: "nav.info.dropdown.bookingTerms", href: "/info/booking-terms" },
      { label: "nav.info.dropdown.about", href: "/info/about" },
      { label: "nav.info.dropdown.contact", href: "/info/contact" },
      { label: "nav.info.dropdown.weather", href: "/info/weather" },
      { label: "nav.info.dropdown.map", href: "/info/map" },
      { label: "nav.info.dropdown.ferries", href: "/info/ferries" },
      { label: "nav.info.dropdown.jobs", href: "/info/jobs" },
      { label: "nav.info.dropdown.emergency", href: "/info/emergency" },
    ],
  },
  { label: "nav.magazine", href: "/magazine" },
];

export const Header = () => {
  return (
    <>
      <DesktopHeader navItems={[]} />
      <MobileHeader navItems={[]} />
    </>
  );
};
