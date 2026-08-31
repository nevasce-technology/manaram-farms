export const contactOffices = [
  {
    id: "head-office",
    title: "Head office",
    lines: ["Baluwatar 4", "Kathmandu, Nepal"],
  },
  {
    id: "corporate",
    title: "Corporate address",
    lines: ["Suite 105, 529 Bansidhar Marg", "Kathmandu, Nepal"],
  },
  {
    id: "farm",
    title: "Farm and facility",
    lines: ["Jhapa", "Eastern Nepal"],
  },
] as const;

export const contactDirect = {
  phone: "+977-01-5971547",
  phoneHref: "tel:+977015971547",
  email: "info@manaram.group",
  emailHref: "mailto:info@manaram.group",
} as const;

export const contactFacilityHero = {
  src: "/contact/facility-jhapa-blue-campus.jpg",
  alt: "Aerial view of the Manaram Farm processing campus in Jhapa with cobalt buildings and solar roof panels",
} as const;

export const contactMap = {
  title: "Manaram Farm, Baluwatar 4, Kathmandu, Nepal",
  embedSrc:
    "https://maps.google.com/maps?q=Manaram%20Farm%2C%20Baluwatar%204%2C%20Kathmandu%2C%20Nepal%20&t=m&z=12&output=embed&iwloc=near",
  directionsHref:
    "https://www.google.com/maps/search/?api=1&query=Manaram+Farm%2C+Baluwatar+4%2C+Kathmandu%2C+Nepal",
} as const;
