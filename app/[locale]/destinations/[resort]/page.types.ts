export const resortKeys = [
  "siargao",
  "boracay",
  "palawan",
  "cebu",
  "bohol",
  "tagaytay",
  "davao",
  "batangas",
  "subic_bay",
] as const;

export type ResortKey = (typeof resortKeys)[number];
