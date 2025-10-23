export interface Product {
  id: number;
  name: string;
  price: number;
  description: string;
  badge?: string;
  features: string[];
  emoji: string;
}

export const products: Product[] = [
  {
    id: 1,
    name: "Wireless Headphones",
    price: 129.99,
    description:
      "Premium wireless headphones with active noise cancellation. Experience crystal-clear sound quality and all-day comfort with these state-of-the-art headphones. Perfect for music lovers.",
    badge: "Best Seller",
    features: [
      "Active noise cancellation",
      "30-hour battery life",
      "Bluetooth 5.0 connectivity",
      "Comfortable over-ear design",
    ],
    emoji: "🎧",
  },
  {
    id: 2,
    name: "Smart Watch Pro",
    price: 299.99,
    description:
      "Advanced smartwatch with health tracking and fitness monitoring. Stay connected and track your fitness goals with this feature-packed wearable device. Water-resistant and built to last.",
    badge: "New Arrival",
    features: [
      "Heart rate monitoring",
      "GPS tracking",
      "Water-resistant up to 50m",
      "7-day battery life",
    ],
    emoji: "⌚",
  },
  {
    id: 3,
    name: "Laptop Backpack",
    price: 79.99,
    description:
      "Durable and stylish backpack designed for laptops up to 17 inches. Multiple compartments keep your tech and accessories organized. Perfect for commuters, students, and travelers.",
    badge: "Popular",
    features: [
      "Fits laptops up to 17 inches",
      "Water-resistant material",
      "Multiple storage compartments",
      "Ergonomic padded straps",
    ],
    emoji: "🎒",
  },
  {
    id: 4,
    name: "Mechanical Keyboard",
    price: 159.99,
    description:
      "Professional mechanical keyboard with customizable RGB lighting. Tactile switches provide satisfying feedback for typing and gaming. Built with premium materials for durability.",
    badge: "Gaming",
    features: [
      "Mechanical switches",
      "Customizable RGB lighting",
      "Programmable macro keys",
      "Braided USB cable",
    ],
    emoji: "⌨️",
  },
  {
    id: 5,
    name: "Portable Charger",
    price: 49.99,
    description:
      "High-capacity portable charger with fast charging technology. Keep your devices powered throughout the day. Compact design makes it perfect for travel and daily use.",
    badge: "Essential",
    features: [
      "20,000mAh capacity",
      "Fast charging support",
      "Dual USB ports",
      "LED battery indicator",
    ],
    emoji: "🔋",
  },
];
