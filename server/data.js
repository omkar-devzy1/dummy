// Seed catalog data served by the API.
// Mirrors the shapes the frontend components expect.

export const categories = [
  { id: 1, name: 'Indoor Plants', count: '120+ varieties', icon: '🌿', color: 'from-forest-700/80 to-forest-900/80', bg: 'bg-forest-50', image: 'https://images.unsplash.com/photo-1545241047-6083a3684587?w=600&q=80', description: 'Purify air & add life indoors' },
  { id: 2, name: 'Outdoor Plants', count: '90+ varieties', icon: '🌳', color: 'from-sage-700/80 to-sage-900/80', bg: 'bg-sage-50', image: 'https://images.unsplash.com/photo-1416879595882-3373a0480b5b?w=600&q=80', description: 'Transform your garden space' },
  { id: 3, name: 'Succulents', count: '60+ varieties', icon: '🪴', color: 'from-earth-600/80 to-earth-800/80', bg: 'bg-earth-50', image: 'https://images.unsplash.com/photo-1459411621453-7b03977f4bfc?w=600&q=80', description: 'Low maintenance, high beauty' },
  { id: 4, name: 'Flowering Plants', count: '75+ varieties', icon: '🌸', color: 'from-forest-600/80 to-sage-800/80', bg: 'bg-forest-50', image: 'https://images.unsplash.com/photo-1487070183336-b863922373d4?w=600&q=80', description: 'Color & fragrance all year' },
  { id: 5, name: 'Bonsai', count: '30+ varieties', icon: '🎋', color: 'from-forest-800/80 to-forest-950/80', bg: 'bg-forest-50', image: 'https://images.unsplash.com/photo-1512428813834-c702c7702b78?w=600&q=80', description: 'Ancient art, living sculpture' },
  { id: 6, name: 'Pots & Décor', count: '200+ styles', icon: '🏺', color: 'from-earth-700/80 to-earth-900/80', bg: 'bg-earth-50', image: 'https://images.unsplash.com/photo-1485955900006-10f4d324d411?w=600&q=80', description: 'Elevate your plant aesthetic' },
];

export const products = [
  { id: 1, name: 'Monstera Deliciosa', care: 'Easy', careColor: 'text-forest-600', price: 599, originalPrice: 799, rating: 4.9, reviews: 284, tag: 'Bestseller', tagColor: 'bg-forest-700', image: 'https://images.unsplash.com/photo-1614594975525-e45190c55d0b?w=500&q=80', benefits: ['Air purifier', 'Low light'] },
  { id: 2, name: 'Peace Lily', care: 'Easy', careColor: 'text-forest-600', price: 349, originalPrice: null, rating: 4.8, reviews: 196, tag: 'Air Purifier', tagColor: 'bg-sage-600', image: 'https://images.unsplash.com/photo-1604762524889-3e2fcc145683?w=500&q=80', benefits: ['Pet safe', 'Low light'] },
  { id: 3, name: 'Snake Plant', care: 'Very Easy', careColor: 'text-forest-500', price: 449, originalPrice: 549, rating: 4.9, reviews: 412, tag: 'Most Popular', tagColor: 'bg-earth-600', image: 'https://images.unsplash.com/photo-1572688484438-313a6e50c333?w=500&q=80', benefits: ['Drought tolerant', 'Bedroom safe'] },
  { id: 4, name: 'Fiddle Leaf Fig', care: 'Moderate', careColor: 'text-earth-600', price: 899, originalPrice: 1099, rating: 4.7, reviews: 143, tag: 'Trending', tagColor: 'bg-forest-600', image: 'https://images.unsplash.com/photo-1463936575829-25148e1db1b8?w=500&q=80', benefits: ['Statement plant', 'Fast growing'] },
  { id: 5, name: 'ZZ Plant', care: 'Very Easy', careColor: 'text-forest-500', price: 499, originalPrice: null, rating: 4.8, reviews: 228, tag: 'Beginner Pick', tagColor: 'bg-sage-700', image: 'https://images.unsplash.com/photo-1586348943529-beaae6c28db9?w=500&q=80', benefits: ['Drought tolerant', 'Low light'] },
  { id: 6, name: 'Pothos Golden', care: 'Very Easy', careColor: 'text-forest-500', price: 249, originalPrice: null, rating: 4.9, reviews: 567, tag: 'Best Value', tagColor: 'bg-forest-700', image: 'https://images.unsplash.com/photo-1601598851547-4302969d0614?w=500&q=80', benefits: ['Trailing vine', 'Adaptable'] },
];
