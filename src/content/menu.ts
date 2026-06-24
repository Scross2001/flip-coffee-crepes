export type DietaryTag = 'Vegetarian' | 'Vegan' | 'GF available';
export type MenuCategory =
  | 'Sweet Crepes'
  | 'Savory Crepes'
  | 'Classic Drinks'
  | 'Signature Drinks'
  | 'Lemonades';

export interface MenuItem {
  id: string;
  name: string;
  description: string;
  price: string; // keep as string so "$" / "from" wording is flexible
  category: MenuCategory;
  image?: string; // path under /public, e.g. 'images/menu/biscoff.jpg'
  tags: DietaryTag[];
}

export const categories: MenuCategory[] = [
  'Sweet Crepes',
  'Savory Crepes',
  'Classic Drinks',
  'Signature Drinks',
  'Lemonades',
];

// Prices are placeholders — confirm against DoorDash and update.
export const menu: MenuItem[] = [
  {
    id: 'strawberry-cream',
    name: 'Strawberry Cream',
    description: 'Fresh strawberries, vanilla cream, powdered sugar.',
    price: '$9.50',
    category: 'Sweet Crepes',
    image: 'images/menu/strawberry-cream.jpg',
    tags: ['Vegetarian'],
  },
  {
    id: 'biscoff-heaven',
    name: 'Biscoff Heaven',
    description: 'Warm Biscoff spread, crushed cookies, whipped cream.',
    price: '$10.50',
    category: 'Sweet Crepes',
    image: 'images/menu/biscoff-heaven.jpg',
    tags: ['Vegetarian'],
  },
  {
    id: 'dubai-pistachio',
    name: 'Dubai Pistachio',
    description: 'Pistachio cream, chocolate, crispy kataifi.',
    price: '$12.00',
    category: 'Sweet Crepes',
    image: 'images/menu/dubai-pistachio.jpg',
    tags: ['Vegetarian'],
  },
  {
    id: 'breakfast-protein',
    name: 'Breakfast Protein Crepe',
    description: 'Eggs, melted cheese, your choice of protein.',
    price: '$11.00',
    category: 'Savory Crepes',
    image: 'images/menu/breakfast-protein.jpg',
    tags: ['GF available'],
  },
  {
    id: 'turkey-cheese-melt',
    name: 'Turkey Cheese Melt',
    description: 'Roast turkey, Swiss, greens, house sauce.',
    price: '$11.50',
    category: 'Savory Crepes',
    image: 'images/menu/turkey-cheese.jpg',
    tags: ['GF available'],
  },
  {
    id: 'spicy-bbq-chicken',
    name: 'Spicy BBQ Chicken',
    description: 'Grilled chicken, spicy BBQ, cheddar, slaw.',
    price: '$12.00',
    category: 'Savory Crepes',
    image: 'images/menu/bbq-chicken.jpg',
    tags: ['GF available'],
  },
  {
    id: 'espresso',
    name: 'Espresso',
    description: 'Rich, bold double shot.',
    price: '$3.50',
    category: 'Classic Drinks',
    tags: ['Vegan'],
  },
  {
    id: 'americano',
    name: 'Americano',
    description: 'Espresso over hot water, smooth and clean.',
    price: '$4.00',
    category: 'Classic Drinks',
    tags: ['Vegan'],
  },
  {
    id: 'cappuccino',
    name: 'Cappuccino',
    description: 'Espresso with steamed milk and velvety foam.',
    price: '$4.75',
    category: 'Classic Drinks',
    tags: ['Vegetarian'],
  },
  {
    id: 'raf',
    name: 'RAF',
    description: 'Silky espresso, cream, and vanilla sugar.',
    price: '$5.75',
    category: 'Signature Drinks',
    image: 'images/menu/raf.jpg',
    tags: ['Vegetarian'],
  },
  {
    id: 'flavored-latte',
    name: 'Flavored Latte',
    description: 'House espresso, steamed milk, your favorite syrup.',
    price: '$5.50',
    category: 'Signature Drinks',
    tags: ['Vegetarian'],
  },
  {
    id: 'flavored-matcha',
    name: 'Flavored Matcha',
    description: 'Ceremonial matcha, milk, choice of flavor.',
    price: '$5.95',
    category: 'Signature Drinks',
    image: 'images/menu/matcha.jpg',
    tags: ['Vegetarian'],
  },
  {
    id: 'seasonal-lemonade',
    name: 'Seasonal Lemonade',
    description: 'Fresh-squeezed lemonade in rotating flavors.',
    price: '$4.50',
    category: 'Lemonades',
    tags: ['Vegan'],
  },
];
