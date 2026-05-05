export type Work = {
  slug: string;
  place: string;
  region: string;
  year: number;
  hero: string;
  thumb: string;
  thumbAlt: string;
  aspect: "portrait" | "landscape";
  category: "Destination" | "Intimate" | "Estate";
  narrative: string;
  photographer: string;
  vendors: { role: string; name: string }[];
  essay: { src: string; alt: string; caption?: string; full?: boolean }[];
};

export const WORKS: Work[] = [
  {
    slug: "sonoma-2025",
    place: "Sonoma",
    region: "California",
    year: 2025,
    hero: "https://images.unsplash.com/photo-1511285560929-80b456fea0bc?auto=format&fit=crop&w=2000&q=80",
    thumb: "https://images.unsplash.com/photo-1511285560929-80b456fea0bc?auto=format&fit=crop&w=1200&q=85",
    thumbAlt: "Bride and groom under a soft floral arch in golden Sonoma light — Sonoma estate wedding planning by Event by Jaleco.",
    aspect: "portrait",
    category: "Estate",
    narrative:
      "A late-summer ceremony beneath an old oak — three days of quiet vineyard suppers, a candle-lit dance floor under string lights, and a private breakfast for the couple's families on the morning after.",
    photographer: "Adrienne Vaughn",
    vendors: [
      { role: "Florals", name: "Hudson & Mae" },
      { role: "Catering", name: "Maison Provence" },
      { role: "Stationery", name: "Lettered Olive" },
      { role: "Music", name: "Calder Quartet" },
    ],
    essay: [
      {
        src: "https://images.unsplash.com/photo-1606216794074-735e91aa2c92?auto=format&fit=crop&w=2000&q=80",
        alt: "Reception under string lights at dusk.",
        full: true,
      },
      {
        src: "https://images.unsplash.com/photo-1537633552985-df8429e8048b?auto=format&fit=crop&w=1600&q=85",
        alt: "A single bouquet of pastel roses on linen.",
        caption: "Florals by Hudson & Mae.",
      },
      {
        src: "https://images.unsplash.com/photo-1510076857177-7470076d4098?auto=format&fit=crop&w=2000&q=80",
        alt: "First dance in the warm spill of golden hour.",
        full: true,
      },
    ],
  },
  {
    slug: "florence-2024",
    place: "Florence",
    region: "Italy",
    year: 2024,
    hero: "https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&w=2000&q=80",
    thumb: "https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&w=1600&q=85",
    thumbAlt: "Candle-lit tablescape with ivory roses on a long oak table — Florence Tuscany destination wedding design.",
    aspect: "landscape",
    category: "Destination",
    narrative:
      "A villa in the Tuscan hills, opened only for this one weekend. A cypress-lined aisle at sunset; long oak tables under olive trees; aperitivo poured from copper jugs.",
    photographer: "Mara Beneventi",
    vendors: [
      { role: "Florals", name: "Studio Lieu" },
      { role: "Catering", name: "Trattoria del Borgo" },
      { role: "Music", name: "Quartetto Fiorentino" },
    ],
    essay: [
      {
        src: "https://images.unsplash.com/photo-1583939003579-730e3918a45a?auto=format&fit=crop&w=1600&q=85",
        alt: "Outdoor ceremony archway framed by cypress trees.",
      },
      {
        src: "https://images.unsplash.com/photo-1544078751-58fee2d8a03b?auto=format&fit=crop&w=1600&q=85",
        alt: "Letterpress wedding stationery on linen.",
        caption: "Stationery — Lettered Olive.",
      },
    ],
  },
  {
    slug: "byron-bay-2025",
    place: "Byron Bay",
    region: "Australia",
    year: 2025,
    hero: "https://images.unsplash.com/photo-1606216794074-735e91aa2c92?auto=format&fit=crop&w=2000&q=80",
    thumb: "https://images.unsplash.com/photo-1606216794074-735e91aa2c92?auto=format&fit=crop&w=1600&q=85",
    thumbAlt: "Reception under string lights overlooking Byron Bay's headland — coastal Australian destination wedding.",
    aspect: "landscape",
    category: "Destination",
    narrative:
      "An intimate gathering on the headland — barefoot ceremony, a long table set into the dunes, and a private fireworks send-off lit from a fishing boat moored just offshore.",
    photographer: "Tess Holloway",
    vendors: [
      { role: "Florals", name: "Salt & Stem" },
      { role: "Catering", name: "Three Blue Ducks" },
    ],
    essay: [
      {
        src: "https://images.unsplash.com/photo-1465495976277-4387d4b0b4c6?auto=format&fit=crop&w=2000&q=80",
        alt: "Bride in soft natural light by the headland.",
        full: true,
      },
    ],
  },
  {
    slug: "provence-2024",
    place: "Provence",
    region: "France",
    year: 2024,
    hero: "https://images.unsplash.com/photo-1469371670807-013ccf25f16a?auto=format&fit=crop&w=2000&q=80",
    thumb: "https://images.unsplash.com/photo-1469371670807-013ccf25f16a?auto=format&fit=crop&w=1200&q=85",
    thumbAlt: "Ceremony aisle covered in white petals at a Luberon chateau — Provence destination wedding planning.",
    aspect: "portrait",
    category: "Destination",
    narrative:
      "A chateau in the Luberon. A two-day celebration framed by lavender fields, with a candle-lit dinner inside the chateau's stone orangery and a midnight breakfast for the few who stayed up to see the sun rise.",
    photographer: "Jules Marchand",
    vendors: [
      { role: "Florals", name: "Atelier Vert" },
      { role: "Catering", name: "La Table d'Avignon" },
    ],
    essay: [
      {
        src: "https://images.unsplash.com/photo-1525258946800-98cfd641d0de?auto=format&fit=crop&w=1600&q=85",
        alt: "Florist arranging garden roses indoors.",
      },
    ],
  },
  {
    slug: "lake-como-2025",
    place: "Lake Como",
    region: "Italy",
    year: 2025,
    hero: "https://images.unsplash.com/photo-1510076857177-7470076d4098?auto=format&fit=crop&w=2000&q=80",
    thumb: "https://images.unsplash.com/photo-1510076857177-7470076d4098?auto=format&fit=crop&w=1200&q=85",
    thumbAlt: "First dance in golden light by the shore of Lake Como — Italian villa destination wedding design.",
    aspect: "portrait",
    category: "Destination",
    narrative:
      "A villa on the western shore of Lake Como. Boat-arriving guests, a candle-lit terrace dinner, and a midnight swim that we did not technically authorise.",
    photographer: "Adrienne Vaughn",
    vendors: [
      { role: "Florals", name: "Studio Lieu" },
      { role: "Music", name: "Trio del Lago" },
    ],
    essay: [],
  },
  {
    slug: "hudson-valley-2025",
    place: "Hudson Valley",
    region: "New York",
    year: 2025,
    hero: "https://images.unsplash.com/photo-1465495976277-4387d4b0b4c6?auto=format&fit=crop&w=2000&q=80",
    thumb: "https://images.unsplash.com/photo-1465495976277-4387d4b0b4c6?auto=format&fit=crop&w=1600&q=85",
    thumbAlt: "Bride in soft natural light on a Hudson Valley farm — intimate New York autumn farmhouse wedding planning.",
    aspect: "landscape",
    category: "Intimate",
    narrative:
      "Forty guests, a working farm, and an apple orchard in early autumn. We borrowed every chair from the neighbours, and gave back one that didn't belong to anyone we could find.",
    photographer: "Mara Beneventi",
    vendors: [
      { role: "Florals", name: "Hudson & Mae" },
      { role: "Catering", name: "Maison Provence" },
    ],
    essay: [],
  },
  {
    slug: "santorini-2024",
    place: "Santorini",
    region: "Greece",
    year: 2024,
    hero: "https://images.unsplash.com/photo-1583939003579-730e3918a45a?auto=format&fit=crop&w=2000&q=80",
    thumb: "https://images.unsplash.com/photo-1583939003579-730e3918a45a?auto=format&fit=crop&w=1200&q=85",
    thumbAlt: "Outdoor ceremony with a white archway above the Aegean caldera — Santorini Greece destination wedding planning.",
    aspect: "portrait",
    category: "Destination",
    narrative:
      "A whitewashed villa above the caldera. Twenty guests, a small priest, an even smaller dog. The wind held its breath for the vows.",
    photographer: "Eleni Vassiliou",
    vendors: [{ role: "Florals", name: "Anthos" }],
    essay: [],
  },
  {
    slug: "ravello-2025",
    place: "Ravello",
    region: "Italy",
    year: 2025,
    hero: "https://images.unsplash.com/photo-1606490194859-07c18c9f0968?auto=format&fit=crop&w=2000&q=80",
    thumb: "https://images.unsplash.com/photo-1606490194859-07c18c9f0968?auto=format&fit=crop&w=1600&q=85",
    thumbAlt: "Soft pink florals on a Ravello wedding table above the sea — Amalfi coast destination wedding design.",
    aspect: "landscape",
    category: "Destination",
    narrative:
      "Three days on the Amalfi coast. A welcome supper in a lemon grove; a candle-lit ceremony in the cloister; a long lunch on a terrace that held the sea in its arms.",
    photographer: "Mara Beneventi",
    vendors: [
      { role: "Florals", name: "Studio Lieu" },
      { role: "Music", name: "Quartetto Fiorentino" },
    ],
    essay: [],
  },
  {
    slug: "sydney-harbour-2024",
    place: "Sydney Harbour",
    region: "Australia",
    year: 2024,
    hero: "https://images.unsplash.com/photo-1511795409834-ef04bbd61622?auto=format&fit=crop&w=2000&q=80",
    thumb: "https://images.unsplash.com/photo-1511795409834-ef04bbd61622?auto=format&fit=crop&w=1200&q=85",
    thumbAlt: "Hand-tied bouquet on stone in a Woollahra terrace house — Sydney Harbour boutique wedding planning.",
    aspect: "portrait",
    category: "Estate",
    narrative:
      "A private terrace house in Woollahra opened only for forty guests; champagne on the harbour-facing balcony; a single long table laid with the family's grandmother's crystal.",
    photographer: "Tess Holloway",
    vendors: [{ role: "Florals", name: "Salt & Stem" }],
    essay: [],
  },
  {
    slug: "kyoto-2024",
    place: "Kyoto",
    region: "Japan",
    year: 2024,
    hero: "https://images.unsplash.com/photo-1511285560929-80b456fea0bc?auto=format&fit=crop&w=2000&q=80",
    thumb: "https://images.unsplash.com/photo-1469371670807-013ccf25f16a?auto=format&fit=crop&w=1200&q=85",
    thumbAlt: "A small ceremony arch with white flowers in soft Kyoto light — intimate Japan elopement and bamboo grove wedding design.",
    aspect: "portrait",
    category: "Intimate",
    narrative:
      "An elopement in early spring. A traditional ceremony at a small temple, a private kaiseki supper, and a quiet walk through the bamboo grove just after the gates closed.",
    photographer: "Akiko Tanaka",
    vendors: [{ role: "Catering", name: "Kichisen" }],
    essay: [],
  },
  {
    slug: "marfa-2025",
    place: "Marfa",
    region: "Texas",
    year: 2025,
    hero: "https://images.unsplash.com/photo-1606216794074-735e91aa2c92?auto=format&fit=crop&w=2000&q=80",
    thumb: "https://images.unsplash.com/photo-1606216794074-735e91aa2c92?auto=format&fit=crop&w=1600&q=85",
    thumbAlt: "Long oak table set under a desert Milky Way sky in Marfa — high-desert Texas estate wedding design.",
    aspect: "landscape",
    category: "Estate",
    narrative:
      "Two days in the high desert. A welcome bonfire on the first night; a long table laid out under the Milky Way; a breakfast taco truck pulled up at sunrise.",
    photographer: "Adrienne Vaughn",
    vendors: [
      { role: "Florals", name: "Hudson & Mae" },
      { role: "Catering", name: "Cochineal" },
    ],
    essay: [],
  },
  {
    slug: "puglia-2024",
    place: "Puglia",
    region: "Italy",
    year: 2024,
    hero: "https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&w=2000&q=80",
    thumb: "https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&w=1200&q=85",
    thumbAlt: "An olive grove tablescape in golden afternoon light at a masseria — Puglia Italy destination wedding planning.",
    aspect: "portrait",
    category: "Destination",
    narrative:
      "A masseria in the south of Italy. Whitewashed stone walls, a chapel three centuries old, and an olive harvest in full swing the morning after.",
    photographer: "Mara Beneventi",
    vendors: [{ role: "Florals", name: "Atelier Vert" }],
    essay: [],
  },
];

export function workBySlug(slug: string): Work | undefined {
  return WORKS.find((w) => w.slug === slug);
}

export function adjacentWorks(slug: string) {
  const idx = WORKS.findIndex((w) => w.slug === slug);
  if (idx === -1) return { prev: null, next: null };
  const prev = idx > 0 ? WORKS[idx - 1] : WORKS[WORKS.length - 1];
  const next = idx < WORKS.length - 1 ? WORKS[idx + 1] : WORKS[0];
  return { prev, next };
}
