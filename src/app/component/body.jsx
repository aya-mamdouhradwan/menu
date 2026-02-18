'use client';
import Image from "next/image";
import { motion } from "framer-motion";

// Categories
const categories = [
  { id: 1, name: "Sea Food", icon: "🦐" },
  { id: 2, name: "Roast Food", icon: "🍖" },
  { id: 3, name: "Fast Food", icon: "🍔" },
  { id: 4, name: "Rice and Pasta", icon: "🍝" },
  { id: 5, name: "Desert", icon: "🍰" },
  { id: 6, name: "Hot Drinks", icon: "☕" },
  { id: 7, name: "Cold Drinks", icon: "🥤" },
];

// All Menu Data
const menuData = {
  1: [
    { id: 1, name: "Fish Dish", price: 300, image: "/food/fish.jpg" },
    { id: 2, name: "Sushi", price: 200, image: "/food/sochy.jpg" },
    { id: 3, name: "Stick Fish", price: 250, image: "/food/stickfish.jpg" },
    { id: 4, name: "Sea Food", price: 300, image: "/food/seafood1.jpg" },
  ],
  2: [
    { id: 1, name: "Mix Dish", price: 300, image: "/food/michakil.jpg" },
    { id: 2, name: "Steak", price: 250, image: "/food/steak.jpg" },
    { id: 3, name: "Shish Tawook", price: 200, image: "/food/شيش طاووق.jpg" },
    { id: 4, name: "Shawarma", price: 300, image: "/food/shorma.jpg" },
  ],
  3: [
    { id: 1, name: "Burger", price: 200, image: "/food/borgar.jpg" },
    { id: 2, name: "Pizza", price: 150, image: "/food/pizza.jpg" },
    { id: 3, name: "Kentucky", price: 200, image: "/food/kintaki.jpg" },
    { id: 4, name: "Crepe", price: 200, image: "/food/shawerma.jpg" },
  ],
  4: [
    { id: 1, name: "Rice", price: 200, image: "/food/kabsa.jpg" },
    { id: 2, name: "Basmati", price: 200, image: "/food/basmati.jpg" },
    { id: 3, name: "Pasta", price: 150, image: "/food/makarona1.jpg" },
    { id: 4, name: "Bashamel", price: 200, image: "/food/مكرونة بالبشاميل.jpg" },
  ],
  5: [
    { id: 1, name: "Konafa", price: 50, image: "/food/konafa.jpg" },
    { id: 2, name: "Om Ali", price: 60, image: "/food/ام علي🇪🇬.jpg" },
    { id: 3, name: "Golash", price: 50, image: "/food/glash.jpg" },
    { id: 4, name: "Zalabia", price: 40, image: "/food/baklawa.jpg" },
  ],
  6: [
    { id: 1, name: "Green Tea", price: 40, image: "/food/tea.jpg" },
    { id: 2, name: "Coffee", price: 50, image: "/food/coffe.jpg" },
    { id: 3, name: "Hot Chocolate", price: 60, image: "/food/hotchoclite.jpg" },
    { id: 4, name: "Sahlab", price: 50, image: "/food/sahlab.jpg" },
  ],
  7: [
    { id: 1, name: "Orange Juice", price: 30, image: "/food/orange.jpg" },
    { id: 2, name: "Ice Coffee", price: 40, image: "/food/icecoffe.jpg" },
    { id: 3, name: "Milkshake", price: 50, image: "/food/Milkshakes.jpg" },
    { id: 4, name: "Pepsi", price: 40, image: "/food/neanaa.jpg" },
  ],
};

// Animation
const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, x: 50 },
  visible: { opacity: 1, x: 0 },
};

export default function Body() {
  return (
    <div className="body-container">
      <h1 className="categories-title">Check Categories</h1>

      {/* Categories */}
      
      <motion.div
            className="items-grid"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ 
              once: false,      
              amount: 0.2       
            }}
          >
        {categories.map((cat) => (
          <motion.a
            key={cat.id}
            href={`#${cat.id}`}
            className="category-card"
            variants={itemVariants}
            whileHover={{ scale: 1.1 }}
            viewport={{ 
              once: false,      
              amount: 0.2       
            }}
          >
            <span className="category-icon">{cat.icon}</span>
            <span className="category-name">{cat.name}</span>
          </motion.a>
        ))}
      </motion.div>

      {/* Dynamic Sections */}
      {categories.map((cat) => (
        <motion.section
          key={cat.id}
          id={cat.id}
          className="category-section"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          viewport={{ 
            once: false,      
            amount: 0.2       
          }}
        >
          <h1 className="section-heading">{cat.name}</h1>

          <motion.div
            className="items-grid"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ 
              once: false,      
              amount: 0.2       
            }}
          >
            {menuData[cat.id].map((item) => (
              <motion.article
                key={item.id}
                className="item-card"
                variants={itemVariants}
                whileHover={{ scale: 1.05 }}
                viewport={{ 
                  once: false,      
                  amount: 0.2       
                }}
              >
                <div className="item-card-image">
                  <Image
                    src={item.image}
                    alt={item.name}
                    fill
                    sizes="(max-width: 480px) 50vw, (max-width: 768px) 33vw, 25vw"
                    unoptimized
                  />
                </div>

                <div className="item-card-body">
                  <h4 className="item-name">{item.name}</h4>
                  <p className="item-price">{item.price} EGP</p>
                </div>
              </motion.article>
            ))}
          </motion.div>
        </motion.section>
      ))}
    </div>
  );
}
