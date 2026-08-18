export interface Product {
  id: string;
  name: string;
  brand: string;
  description: string;
  price: number;
  originalPrice?: number;
  discount?: number;
  images: string[];
  category: 'Men' | 'Women' | 'Unisex';
  collection: string;
  fragranceFamily: string;
  notes: {
    top: string[];
    heart: string[];
    base: string[];
  };
  longevity: string;
  sillage: string;
  rating: number;
  reviews: number;
  stock: number;
  sizes: string[];
  tags: string[];
}

export const products: Product[] = [
  // Luxury Noir Collection
  {
    id: "p1",
    name: "Midnight Velvet",
    brand: "AURA LUMINA",
    description: "A deep, intoxicating blend of dark woods and spiced vanilla. Midnight Velvet captures the essence of a mysterious evening in an opulent metropolis. The fragrance opens with a burst of spicy cardamom, leading into a rich heart of smoked oud and leather, finally settling into a warm, lingering vanilla and amber base.",
    price: 245,
    images: [
      "https://images.unsplash.com/photo-1594035910387-fea47794261f?q=80&w=2000&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1616843413587-9e3a37f7bbd8?q=80&w=2000&auto=format&fit=crop"
    ],
    category: "Men",
    collection: "Luxury Noir",
    fragranceFamily: "Woody Oriental",
    notes: {
      top: ["Cardamom", "Black Pepper", "Bergamot"],
      heart: ["Smoked Oud", "Leather", "Vetiver"],
      base: ["Vanilla Absolute", "Amber", "Sandalwood"]
    },
    longevity: "10-12 hours",
    sillage: "Strong",
    rating: 4.9,
    reviews: 128,
    stock: 45,
    sizes: ["50ml", "100ml"],
    tags: ["Best Seller", "Evening", "Winter"]
  },
  {
    id: "p7",
    name: "Obsidian Night",
    brand: "NOIR ELIXIR",
    description: "A commanding presence. Obsidian Night utilizes raw black truffle, ylang-ylang, and a hint of dark chocolate to create an unforgettable, devastatingly chic scent.",
    price: 295,
    images: [
      "https://images.unsplash.com/photo-1622618991746-fe6004db3a47?q=80&w=2000&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1585386959984-a4155224a1ad?q=80&w=2000&auto=format&fit=crop"
    ],
    category: "Unisex",
    collection: "Luxury Noir",
    fragranceFamily: "Earthy Oriental",
    notes: {
      top: ["Black Truffle", "Ylang-Ylang", "Bergamot"],
      heart: ["Black Orchid", "Dark Chocolate", "Plum"],
      base: ["Patchouli", "Incense", "Vetiver"]
    },
    longevity: "12+ hours",
    sillage: "Heavy",
    rating: 4.8,
    reviews: 201,
    stock: 25,
    sizes: ["50ml"],
    tags: ["Seductive", "Evening", "New Arrival"]
  },
  {
    id: "p8",
    name: "Velvet Shadow",
    brand: "AURA LUMINA",
    description: "Dark, powdery, and intensely intimate. Velvet Shadow wraps you in an aura of crushed violet petals, dark iris, and smooth black suede.",
    price: 260,
    originalPrice: 300,
    discount: 13,
    images: [
      "https://images.unsplash.com/photo-1599305090598-fe179d501227?q=80&w=2000&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1616843413587-9e3a37f7bbd8?q=80&w=2000&auto=format&fit=crop"
    ],
    category: "Women",
    collection: "Luxury Noir",
    fragranceFamily: "Floral Leather",
    notes: {
      top: ["Blackberry", "Saffron", "Iris"],
      heart: ["Violet", "Night-blooming Jasmine", "Suede"],
      base: ["Black Musk", "Birch Tar", "Vanilla"]
    },
    longevity: "9-11 hours",
    sillage: "Moderate",
    rating: 4.7,
    reviews: 156,
    stock: 40,
    sizes: ["50ml", "100ml"],
    tags: ["Evening", "Romantic"]
  },

  // Luminance Collection
  {
    id: "p2",
    name: "Ethereal Silk",
    brand: "AURA LUMINA",
    description: "Light, luminous, and endlessly elegant. Ethereal Silk is a delicate floral masterpiece that feels like a gentle breeze in a blooming spring garden. Crisp pear and white freesia introduce the scent, blossoming into a heart of soft rose and lily of the valley, resting on a base of white musk and subtle patchouli.",
    price: 195,
    images: [
      "https://images.unsplash.com/photo-1588405748880-12d1d2a59f75?q=80&w=2000&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1585386959984-a4155224a1ad?q=80&w=2000&auto=format&fit=crop"
    ],
    category: "Women",
    collection: "Luminance",
    fragranceFamily: "Floral Chypre",
    notes: {
      top: ["Crisp Pear", "White Freesia", "Melon"],
      heart: ["Damask Rose", "Lily of the Valley", "Jasmine"],
      base: ["White Musk", "Patchouli", "Amber"]
    },
    longevity: "6-8 hours",
    sillage: "Moderate",
    rating: 4.8,
    reviews: 245,
    stock: 120,
    sizes: ["50ml", "100ml"],
    tags: ["New Arrival", "Spring", "Daytime"]
  },
  {
    id: "p9",
    name: "Pearl Radiance",
    brand: "MAISON VERT",
    description: "A sparkling, effervescent fragrance that radiates pure joy. Pearl Radiance combines luminous citrus with soft white florals for a brilliantly bright scent.",
    price: 185,
    images: [
      "https://images.unsplash.com/photo-1599305090598-fe179d501227?q=80&w=2000&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1622618991746-fe6004db3a47?q=80&w=2000&auto=format&fit=crop"
    ],
    category: "Women",
    collection: "Luminance",
    fragranceFamily: "Citrus Floral",
    notes: {
      top: ["Mandarin", "Bergamot", "Pink Grapefruit"],
      heart: ["Orange Blossom", "Honeysuckle", "Magnolia"],
      base: ["White Amber", "Musk", "Cedar"]
    },
    longevity: "7 hours",
    sillage: "Moderate",
    rating: 4.9,
    reviews: 312,
    stock: 65,
    sizes: ["50ml", "100ml"],
    tags: ["Summer", "Daytime", "Best Seller"]
  },
  {
    id: "p10",
    name: "Solar Flare",
    brand: "AURA LUMINA",
    description: "Warm, radiant, and opulent. Solar Flare captures the golden hour in a bottle, featuring sun-drenched white flowers and warm golden resins.",
    price: 215,
    images: [
      "https://images.unsplash.com/photo-1594035910387-fea47794261f?q=80&w=2000&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1599305090598-fe179d501227?q=80&w=2000&auto=format&fit=crop"
    ],
    category: "Unisex",
    collection: "Luminance",
    fragranceFamily: "Solar Amber",
    notes: {
      top: ["Neroli", "Petitgrain", "Coconut Water"],
      heart: ["Ylang-Ylang", "Tiare Flower", "Jasmine Sambac"],
      base: ["Vanilla", "Benzoin", "Sandalwood"]
    },
    longevity: "8-10 hours",
    sillage: "Strong",
    rating: 4.6,
    reviews: 98,
    stock: 45,
    sizes: ["100ml"],
    tags: ["Summer", "Vacation"]
  },

  // Elements Collection
  {
    id: "p3",
    name: "Oasis Mirage",
    brand: "MAISON VERT",
    description: "A refreshing burst of citrus wrapped in modern mineral notes. Oasis Mirage is the perfect balance of fresh and sophisticated, designed for the modern individual who seeks clarity and vitality.",
    price: 210,
    originalPrice: 250,
    discount: 16,
    images: [
      "https://images.unsplash.com/photo-1585386959984-a4155224a1ad?q=80&w=2000&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1599305090598-fe179d501227?q=80&w=2000&auto=format&fit=crop"
    ],
    category: "Unisex",
    collection: "Elements",
    fragranceFamily: "Citrus Mineral",
    notes: {
      top: ["Sicilian Lemon", "Grapefruit", "Sea Salt"],
      heart: ["Sage", "Neroli", "Mineral Accord"],
      base: ["Cedarwood", "White Musk", "Ambroxan"]
    },
    longevity: "8-10 hours",
    sillage: "Moderate",
    rating: 4.7,
    reviews: 89,
    stock: 30,
    sizes: ["100ml"],
    tags: ["Summer", "Fresh", "Signature"]
  },
  {
    id: "p11",
    name: "Terracotta Rain",
    brand: "NOIR ELIXIR",
    description: "The distinct, beautiful scent of rain hitting warm, dry earth. Petrichor distilled into an elegant, grounded fragrance.",
    price: 230,
    images: [
      "https://images.unsplash.com/photo-1622618991746-fe6004db3a47?q=80&w=2000&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1594035910387-fea47794261f?q=80&w=2000&auto=format&fit=crop"
    ],
    category: "Unisex",
    collection: "Elements",
    fragranceFamily: "Earthy Woody",
    notes: {
      top: ["Ozone", "Rain Accord", "Bergamot"],
      heart: ["Geosmin", "Iris Root", "Patchouli"],
      base: ["Vetiver", "Cedar", "Oakmoss"]
    },
    longevity: "9 hours",
    sillage: "Moderate",
    rating: 4.8,
    reviews: 145,
    stock: 35,
    sizes: ["50ml", "100ml"],
    tags: ["Earthy", "Signature"]
  },
  {
    id: "p12",
    name: "Arctic Pine",
    brand: "MAISON VERT",
    description: "Crisp, cold, and utterly invigorating. Like taking a deep breath in a snow-covered evergreen forest under the northern lights.",
    price: 195,
    images: [
      "https://images.unsplash.com/photo-1622618991746-fe6004db3a47?q=80&w=2000&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1585386959984-a4155224a1ad?q=80&w=2000&auto=format&fit=crop"
    ],
    category: "Men",
    collection: "Elements",
    fragranceFamily: "Woody Aromatic",
    notes: {
      top: ["Juniper Berry", "Mint", "Eucalyptus"],
      heart: ["Siberian Pine", "Fir Balsam", "Cypress"],
      base: ["Silver Birch", "Musk", "Ambergris"]
    },
    longevity: "10 hours",
    sillage: "Strong",
    rating: 4.5,
    reviews: 76,
    stock: 50,
    sizes: ["100ml"],
    tags: ["Winter", "Fresh"]
  },

  // Heritage Collection
  {
    id: "p5",
    name: "Gilded Vetiver",
    brand: "AURA LUMINA",
    description: "An aristocratic take on classic vetiver. Refined, sharp, and incredibly sophisticated.",
    price: 180,
    images: [
      "https://images.unsplash.com/photo-1585386959984-a4155224a1ad?q=80&w=2000&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1594035910387-fea47794261f?q=80&w=2000&auto=format&fit=crop"
    ],
    category: "Men",
    collection: "Heritage",
    fragranceFamily: "Woody Aromatic",
    notes: {
      top: ["Bergamot", "Lemon", "Pink Pepper"],
      heart: ["Haitian Vetiver", "Cedar", "Angelica"],
      base: ["Oakmoss", "Musk", "Patchouli"]
    },
    longevity: "8 hours",
    sillage: "Moderate",
    rating: 4.6,
    reviews: 75,
    stock: 60,
    sizes: ["50ml", "100ml", "200ml"],
    tags: ["Office", "Classic"]
  }
];

export const collections = [
  {
    id: "c1",
    name: "Luxury Noir",
    description: "Dark, seductive, and unforgettable.",
    image: "https://images.unsplash.com/photo-1616843413587-9e3a37f7bbd8?q=80&w=2000&auto=format&fit=crop"
  },
  {
    id: "c2",
    name: "Luminance",
    description: "Light, floral, and ethereal.",
    image: "https://images.unsplash.com/photo-1599305090598-fe179d501227?q=80&w=2000&auto=format&fit=crop"
  },
  {
    id: "c3",
    name: "Elements",
    description: "Inspired by the raw forces of nature.",
    image: "https://images.unsplash.com/photo-1622618991746-fe6004db3a47?q=80&w=2000&auto=format&fit=crop"
  }
];
