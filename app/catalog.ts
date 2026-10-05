export const stores = [
    { id: 'meijer', name: 'Meijer', address: '101 Market Avenue, Indianapolis, IN', hours: '8:00 AM – 10:00 PM', lat: 39.785, lng: -86.147, color: '#ed2939', initial: 'm', tag: 'Groceries & everyday essentials' },
    { id: 'walmart', name: 'Walmart', address: '240 Grocery Lane, Indianapolis, IN', hours: '7:00 AM – 11:00 PM', lat: 39.747, lng: -86.125, color: '#0071ce', initial: 'W', tag: 'Your everyday favorites' },
    { id: 'aldi', name: 'ALDI', address: '35 Neighborhood Way, Indianapolis, IN', hours: '9:00 AM – 8:00 PM', lat: 39.79, lng: -86.19, color: '#09205e', initial: 'A', tag: 'Simple finds, great value' }
];
export const products = [
    { id: 'banana', name: 'Organic bananas', unit: '1 bunch · approx. 1.5 lb', price: 189, stock: 18, category: 'Produce', icon: '🍌', color: '#fff6cb' },
    { id: 'avocado', name: 'Hass avocados', unit: 'Bag of 3', price: 349, stock: 12, category: 'Produce', icon: '🥑', color: '#eaf1d8' },
    { id: 'strawberry', name: 'Fresh strawberries', unit: '16 oz container', price: 429, stock: 9, category: 'Produce', icon: '🍓', color: '#ffe4e7' },
    { id: 'broccoli', name: 'Broccoli crowns', unit: '1 lb', price: 219, stock: 20, category: 'Produce', icon: '🥦', color: '#e2eedf' },
    { id: 'milk', name: 'Whole milk', unit: '1 gallon', price: 379, stock: 15, category: 'Dairy & eggs', icon: '🥛', color: '#e8eff9' },
    { id: 'eggs', name: 'Large brown eggs', unit: '12 count', price: 449, stock: 10, category: 'Dairy & eggs', icon: '🥚', color: '#f3ece4' },
    { id: 'bread', name: 'Sourdough loaf', unit: 'Fresh baked · 18 oz', price: 499, stock: 8, category: 'Bakery', icon: '🍞', color: '#f5e5cd' },
    { id: 'croissant', name: 'Butter croissants', unit: '4 count', price: 549, stock: 0, category: 'Bakery', icon: '🥐', color: '#f8e9d9' },
    { id: 'pasta', name: 'Penne pasta', unit: '16 oz box', price: 169, stock: 24, category: 'Pantry', icon: '🍝', color: '#f6e9d9' },
    { id: 'coffee', name: 'Medium roast coffee', unit: 'Ground · 12 oz', price: 799, stock: 11, category: 'Pantry', icon: '☕', color: '#eee5de' },
    { id: 'chicken', name: 'Chicken breast', unit: 'Boneless · 1 lb', price: 599, stock: 7, category: 'Meat & seafood', icon: '🍗', color: '#f9e9e2' },
    { id: 'salmon', name: 'Atlantic salmon', unit: 'Fillet · 12 oz', price: 1099, stock: 4, category: 'Meat & seafood', icon: '🐟', color: '#e6eef2' }
];
export const money = (c: number) => new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD' }).format(c / 100);
export function priceFor(id: string, store: string) { const p = products.find(p => p.id === id); return p ? Math.round(p.price * (store === 'walmart' ? .95 : store === 'aldi' ? .88 : 1)) : 0; }
export const categories = ['All products', 'Produce', 'Dairy & eggs', 'Bakery', 'Pantry', 'Meat & seafood'];
