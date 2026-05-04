export type Publication = {
  name: string;
};

export const PUBLICATIONS: Publication[] = [
  { name: "Vogue" },
  { name: "Harper's Bazaar" },
  { name: "Town & Country" },
  { name: "Brides" },
  { name: "Martha Stewart" },
  { name: "Kinfolk" },
];

export type Feature = {
  publication: string;
  headline: string;
  date: string;
  url: string;
};

export const FEATURES: Feature[] = [
  {
    publication: "Vogue",
    headline: "Inside a Quietly Extraordinary Wedding in the Tuscan Hills",
    date: "October 2025",
    url: "#",
  },
  {
    publication: "Harper's Bazaar",
    headline: "The Boutique Studios Reshaping Wedding Design",
    date: "August 2025",
    url: "#",
  },
  {
    publication: "Town & Country",
    headline:
      "How Event by Jaleco Plans the Most Considered Celebrations of the Year",
    date: "May 2025",
    url: "#",
  },
  {
    publication: "Brides",
    headline: "A Coastal Australian Wedding That Feels Like a Soft Exhale",
    date: "March 2025",
    url: "#",
  },
  {
    publication: "Kinfolk",
    headline: "The New Quiet Luxury of Wedding Design",
    date: "Issue 57 · 2024",
    url: "#",
  },
  {
    publication: "Martha Stewart",
    headline: "An Intimate Hudson Valley Ceremony, Step by Step",
    date: "October 2024",
    url: "#",
  },
  {
    publication: "Vogue",
    headline: "A Ravello Celebration Where Every Detail Was Hand-Made",
    date: "September 2024",
    url: "#",
  },
  {
    publication: "Brides",
    headline: "Twelve Boutique Wedding Planners to Watch",
    date: "January 2024",
    url: "#",
  },
];
