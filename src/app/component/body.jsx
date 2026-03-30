"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence, MotionConfig } from "framer-motion";
import Image from "next/image";
import { useTranslations } from "next-intl";

// Categories
const categories = [
  { id: 8, key: "AllDesh", icon: "🍽️" },
  { id: 1, key: "seaFood", icon: "🦐" },
  { id: 2, key: "roastFood", icon: "🍖" },
  { id: 3, key: "fastFood", icon: "🍔" },
  { id: 4, key: "ricePasta", icon: "🍝" },
  { id: 5, key: "dessert", icon: "🍰" },
  { id: 6, key: "hotDrinks", icon: "☕" },
  { id: 7, key: "coldDrinks", icon: "🥤" },
];

// Menu Data
const menuData = {
  1: [
    { id: 101, key: "fishDish", price: 300, image: "/food/fish.jpg" },
    { id: 102, key: "sushi", price: 200, image: "/food/sochy.jpg" },
    { id: 103, key: "stickFish", price: 250, image: "/food/stickfish.jpg" },
    { id: 104, key: "seaFoodItem", price: 300, image: "/food/seafood1.jpg" },
  ],
  2: [
    { id: 201, key: "mixDish", price: 300, image: "/food/michakil.jpg" },
    { id: 202, key: "steak", price: 250, image: "/food/steak.jpg" },
    { id: 203, key: "shishTawook", price: 200, image: "/food/شيش طاووق.jpg" },
    { id: 204, key: "shawarma", price: 300, image: "/food/shorma.jpg" },
  ],
  3: [
    { id: 301, key: "burger", price: 200, image: "/food/borgar.jpg" },
    { id: 302, key: "pizza", price: 150, image: "/food/pizza.jpg" },
    { id: 303, key: "kentucky", price: 200, image: "/food/kintaki.jpg" },
    { id: 304, key: "crepe", price: 200, image: "/food/shawerma.jpg" },
  ],
  4: [
    { id: 401, key: "rice", price: 200, image: "/food/kabsa.jpg" },
    { id: 402, key: "basmati", price: 200, image: "/food/basmati.jpg" },
    { id: 403, key: "pasta", price: 150, image: "/food/makarona1.jpg" },
    { id: 404, key: "bashamel", price: 200, image: "/food/مكرونة بالبشاميل.jpg" },
  ],
  5: [
    { id: 501, key: "konafa", price: 50, image: "/food/konafa.jpg" },
    { id: 502, key: "omAli", price: 60, image: "/food/ام علي🇪🇬.jpg" },
    { id: 503, key: "golash", price: 50, image: "/food/glash.jpg" },
    { id: 504, key: "zalabia", price: 40, image: "/food/baklawa.jpg" },
  ],
  6: [
    { id: 601, key: "greenTea", price: 40, image: "/food/tea.jpg" },
    { id: 602, key: "coffee", price: 50, image: "/food/coffe.jpg" },
    { id: 603, key: "hotChocolate", price: 60, image: "/food/hotchoclite.jpg" },
    { id: 604, key: "sahlab", price: 50, image: "/food/sahlab.jpg" },
  ],
  7: [
    { id: 701, key: "orangeJuice", price: 30, image: "/food/orange.jpg" },
    { id: 702, key: "iceCoffee", price: 40, image: "/food/icecoffe.jpg" },
    { id: 703, key: "milkshake", price: 50, image: "/food/Milkshakes.jpg" },
    { id: 704, key: "pepsi", price: 40, image: "/food/neanaa.jpg" },
  ],
};

// Animation Variants
const containerVariants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.1, delayChildren: 0.15 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 40, scale: 0.95, filter: "blur(4px)" },
  visible: { opacity: 1, y: 0, scale: 1, filter: "blur(0px)", transition: { duration: 0.5, ease: "easeOut" } },
};

export default function Body() {
  const tMenu = useTranslations("Menu");
  const [selectedItem, setSelectedItem] = useState(null);
  const [activeCategory, setActiveCategory] = useState(8);
  const [startAnimation, setStartAnimation] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setStartAnimation(true), 150);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    setStartAnimation(false);
    const timer = setTimeout(() => setStartAnimation(true), 150);
    return () => clearTimeout(timer);
  }, [activeCategory]);

  const allItems = Object.values(menuData).flatMap(cat => cat);
  const itemsToShow = activeCategory === 8 ? allItems : menuData[activeCategory] || [];

  return (
    <MotionConfig reducedMotion="never">
      <div className="body-container">
        <h1 className="categories-title">
          {activeCategory === 8
            ? tMenu("checkCategories")
            : tMenu(`categories.${categories.find(c => c.id === activeCategory)?.key}`)}
        </h1>

        {activeCategory !== 8 && (
          <button className="back-btn" onClick={() => setActiveCategory(8)}>
            {tMenu("back")}
          </button>
        )}

        {/* Categories */}
        <motion.div
          className="categories-grid"
          variants={containerVariants}
          initial="hidden"
          animate={startAnimation ? "visible" : "hidden"}
        >
          {categories.map(cat => (
            <motion.button
              key={cat.id}
              className="category-card"
              variants={itemVariants}
              whileHover={{ scale: 1.06, boxShadow: "0px 8px 20px rgba(0,0,0,0.15)" }}
              onClick={() => setActiveCategory(cat.id)}
            >
              <span className="category-icon">{cat.icon}</span>
              <span className="category-name">{tMenu(`categories.${cat.key}`)}</span>
            </motion.button>
          ))}
        </motion.div>

        {/* Items */}
        {itemsToShow.length === 0 && <p className="no-items">لا توجد أطباق في هذا القسم حالياً.</p>}

        <motion.div
          key={activeCategory}
          className="items-grid"
          variants={containerVariants}
          initial="hidden"
          animate={startAnimation ? "visible" : "hidden"}
        >
          {itemsToShow.map(item => (
            <motion.article
              key={item.id}
              className="item-card"
              variants={itemVariants}
              whileHover={{ scale: 1.03, boxShadow: "0px 10px 25px rgba(0,0,0,0.2)" }}
              onClick={() => setSelectedItem(item)}
            >
              <div className="item-card-image">
                <Image src={item.image} alt={tMenu(`items.${item.key}`)} fill style={{ objectFit: "cover" }} unoptimized />
              </div>
              <div className="item-card-body">
                <h4 className="item-name">{tMenu(`items.${item.key}`)}</h4>
                <p className="item-price">{item.price} EGP</p>
              </div>
            </motion.article>
          ))}
        </motion.div>

        {/* Popup */}
        <AnimatePresence>
          {selectedItem && (
            <motion.div
              className="popup-overlay"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedItem(null)}
            >
              <motion.div
                className="popup-card"
                initial={{ scale: 0.85, y: 30 }}
                animate={{ scale: 1, y: 0 }}
                exit={{ scale: 0.85, y: 30 }}
                transition={{ duration: 0.3 }}
                onClick={e => e.stopPropagation()}
              >
                <div className="popup-image">
                  <Image src={selectedItem.image} alt={tMenu(`items.${selectedItem.key}`)} fill style={{ objectFit: "cover" }} unoptimized />
                </div>
                <div className="popup-content">
                  <button className="popup-close" onClick={() => setSelectedItem(null)}>✕</button>
                  <h2 className="popup-title">{tMenu(`items.${selectedItem.key}`)}</h2>
                  <p className="popup-price">{selectedItem.price} EGP</p>
                  <button className="close-btn" onClick={() => setSelectedItem(null)}>
                    {tMenu("close")}
                  </button>
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </MotionConfig>
  );
}