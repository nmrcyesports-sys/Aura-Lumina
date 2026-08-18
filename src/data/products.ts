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
  {
    id: "p1",
    name: "Midnight Velvet",
    brand: "AURA LUMINA",
    description: "A deep, intoxicating blend of dark woods and spiced vanilla. Midnight Velvet captures the essence of a mysterious evening in an opulent metropolis. The fragrance opens with a burst of spicy cardamom, leading into a rich heart of smoked oud and leather, finally settling into a warm, lingering vanilla and amber base.",
    price: 245,
    images: [
      "https://images.unsplash.com/photo-1594035910387-fea47794261f?q=80&w=2000&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1592914610354-fd354ea45e48?q=80&w=2000&auto=format&fit=crop",
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
    id: "p2",
    name: "Ethereal Silk",
    brand: "AURA LUMINA",
    description: "Light, luminous, and endlessly elegant. Ethereal Silk is a delicate floral masterpiece that feels like a gentle breeze in a blooming spring garden. Crisp pear and white freesia introduce the scent, blossoming into a heart of soft rose and lily of the valley, resting on a base of white musk and subtle patchouli.",
    price: 195,
    images: [
      "https://images.unsplash.com/photo-1588405748880-12d1d2a59f75?q=80&w=2000&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1595425970377-c9703bc48baf?q=80&w=2000&auto=format&fit=crop"
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
    id: "p3",
    name: "Oasis Mirage",
    brand: "MAISON VERT",
    description: "A refreshing burst of citrus wrapped in modern mineral notes. Oasis Mirage is the perfect balance of fresh and sophisticated, designed for the modern individual who seeks clarity and vitality.",
    price: 210,
    originalPrice: 250,
    discount: 16,
    images: [
      "https://images.unsplash.com/photo-1592914610354-fd354ea45e48?q=80&w=2000&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1594035910387-fea47794261f?q=80&w=2000&auto=format&fit=crop"
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
    id: "p4",
    name: "Crimson Ember",
    brand: "NOIR ELIXIR",
    description: "A passionate and fiery fragrance that commands attention. Crimson Ember mixes sweet cherry with roasted almonds and deep woods.",
    price: 285,
    images: [
      "https://images.unsplash.com/photo-1616843413587-9e3a37f7bbd8?q=80&w=2000&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1588405748880-12d1d2a59f75?q=80&w=2000&auto=format&fit=crop"
    ],
    category: "Women",
    collection: "Luxury Noir",
    fragranceFamily: "Fruity Gourmand",
    notes: {
      top: ["Black Cherry", "Bitter Almond", "Plum"],
      heart: ["Turkish Rose", "Jasmine Sambac", "Cinnamon"],
      base: ["Tonka Bean", "Vanilla", "Sandalwood"]
    },
    longevity: "12+ hours",
    sillage: "Heavy",
    rating: 4.9,
    reviews: 312,
    stock: 15,
    sizes: ["50ml"],
    tags: ["Seductive", "Evening", "Best Seller"]
  },
  {
    id: "p5",
    name: "Gilded Vetiver",
    brand: "AURA LUMINA",
    description: "An aristocratic take on classic vetiver. Refined, sharp, and incredibly sophisticated.",
    price: 180,
    images: [
      "https://images.unsplash.com/photo-1595425970377-c9703bc48baf?q=80&w=2000&auto=format&fit=crop",
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
  },
  {
    id: "p6",
    name: "Cashmere Blanc",
    brand: "MAISON VERT",
    description: "Like wrapping yourself in a warm, expensive cashmere blanket. Soft, powdery, and comforting.",
    price: 220,
    images: [
      "https://images.unsplash.com/photo-1592914610354-fd354ea45e48?q=80&w=2000&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1588405748880-12d1d2a59f75?q=80&w=2000&auto=format&fit=crop"
    ],
    category: "Unisex",
    collection: "Luminance",
    fragranceFamily: "Floral Musk",
    notes: {
      top: ["Aldehydes", "White Rose"],
      heart: ["Peony", "Violet", "Orange Blossom"],
      base: ["White Musk", "Cashmeran", "Sandalwood"]
    },
    longevity: "10 hours",
    sillage: "Intimate",
    rating: 4.8,
    reviews: 142,
    stock: 80,
    sizes: ["100ml"],
    tags: ["Cozy", "Everyday"]
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
    image: "https://images.unsplash.com/photo-1588405748880-12d1d2a59f75?q=80&w=2000&auto=format&fit=crop"
  },
  {
    id: "c3",
    name: "Elements",
    description: "Inspired by the raw forces of nature.",
    image: "https://images.unsplash.com/photo-1592914610354-fd354ea45e48?q=80&w=2000&auto=format&fit=crop"
  }
];
