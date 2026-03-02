'use client';
import Image from "next/image";
import { motion } from "framer-motion";
import { useTranslations } from "next-intl";

// Categories (ids correspond to Menu.categories keys)
const categories = [
  { id: 1, key: "seaFood", icon: "🦐" },
  { id: 2, key: "roastFood", icon: "🍖" },
  { id: 3, key: "fastFood", icon: "🍔" },
  { id: 4, key: "ricePasta", icon: "🍝" },
  { id: 5, key: "dessert", icon: "🍰" },
  { id: 6, key: "hotDrinks", icon: "☕" },
  { id: 7, key: "coldDrinks", icon: "🥤" },
];

// All Menu Data (keys correspond to Menu.items keys)
const menuData = {
  1: [
    { id: 1, key: "fishDish", price: 300, image: "/food/fish.jpg" },
    { id: 2, key: "sushi", price: 200, image: "/food/sochy.jpg" },
    { id: 3, key: "stickFish", price: 250, image: "/food/stickfish.jpg" },
    { id: 4, key: "seaFoodItem", price: 300, image: "/food/seafood1.jpg" },
  ],
  2: [
    { id: 1, key: "mixDish", price: 300, image: "/food/michakil.jpg" },
    { id: 2, key: "steak", price: 250, image: "/food/steak.jpg" },
    { id: 3, key: "shishTawook", price: 200, image: "/food/شيش طاووق.jpg" },
    { id: 4, key: "shawarma", price: 300, image: "/food/shorma.jpg" },
  ],
  3: [
    { id: 1, key: "burger", price: 200, image: "/food/borgar.jpg" },
    { id: 2, key: "pizza", price: 150, image: "/food/pizza.jpg" },
    { id: 3, key: "kentucky", price: 200, image: "/food/kintaki.jpg" },
    { id: 4, key: "crepe", price: 200, image: "/food/shawerma.jpg" },
  ],
  4: [
    { id: 1, key: "rice", price: 200, image: "/food/kabsa.jpg" },
    { id: 2, key: "basmati", price: 200, image: "/food/basmati.jpg" },
    { id: 3, key: "pasta", price: 150, image: "/food/makarona1.jpg" },
    { id: 4, key: "bashamel", price: 200, image: "/food/مكرونة بالبشاميل.jpg" },
  ],
  5: [
    { id: 1, key: "konafa", price: 50, image: "/food/konafa.jpg" },
    { id: 2, key: "omAli", price: 60, image: "/food/ام علي🇪🇬.jpg" },
    { id: 3, key: "golash", price: 50, image: "/food/glash.jpg" },
    { id: 4, key: "zalabia", price: 40, image: "/food/baklawa.jpg" },
  ],
  6: [
    { id: 1, key: "greenTea", price: 40, image: "/food/tea.jpg" },
    { id: 2, key: "coffee", price: 50, image: "/food/coffe.jpg" },
    { id: 3, key: "hotChocolate", price: 60, image: "/food/hotchoclite.jpg" },
    { id: 4, key: "sahlab", price: 50, image: "/food/sahlab.jpg" },
  ],
  7: [
    { id: 1, key: "orangeJuice", price: 30, image: "/food/orange.jpg" },
    { id: 2, key: "iceCoffee", price: 40, image: "/food/icecoffe.jpg" },
    { id: 3, key: "milkshake", price: 50, image: "/food/Milkshakes.jpg" },
    { id: 4, key: "pepsi", price: 40, image: "/food/neanaa.jpg" },
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
  const tMenu = useTranslations("Menu");

  return (
    <div className="body-container">
      <h1 className="categories-title">{tMenu("checkCategories")}</h1>

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
            <span className="category-name">
              {tMenu(`categories.${cat.key}`)}
            </span>
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
          <h1 className="section-heading">
            {tMenu(`categories.${cat.key}`)}
          </h1>

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
                  amount: 0.2,
                }}
              >
                <div className="item-card-image">
                  <Image
                    src={item.image}
                    alt={tMenu(`items.${item.key}`)}
                    fill
                    sizes="(max-width: 480px) 50vw, (max-width: 768px) 33vw, 25vw"
                    unoptimized
                  />
                </div>

                <div className="item-card-body">
                  <h4 className="item-name">
                    {tMenu(`items.${item.key}`)}
                  </h4>
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
