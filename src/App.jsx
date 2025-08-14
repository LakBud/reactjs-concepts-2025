import { useState, useCallback } from "react";

import Navigation from "./components/projects/E-commerce/navigation/Nav.jsx";
import Products from "./components/projects/E-commerce/products/Products.jsx";
import Recommended from "./components/projects/E-commerce/recommended/Recommended.jsx";
import Sidebar from "./components/projects/E-commerce/Sidebar/Sidebar.jsx";
import Card from "./components/projects/E-commerce/components/card.jsx";

import products from "./components/projects/E-commerce/db/data.jsx";

function App() {
  const [selectedCategory, setSelectedCategory] = useState("");
  const [query, setQuery] = useState("");

  // Handlers
  const handleInputChange = useCallback((e) => setQuery(e.target.value), []);
  const handleCategoryChange = useCallback((e) => setSelectedCategory(e.target.value), []);
  const handleRecommendedClick = useCallback((e) => setSelectedCategory(e.target.value), []);

  // Memoize filtered results to avoid unnecessary recalculations on each render
  const filteredProducts =
    (() => {
      // Start from full product list
      let filtered = products;

      // Filter by search query
      if (query.trim() !== "") {
        const lowerQuery = query.toLowerCase();
        filtered = filtered.filter((product) => product.title.toLowerCase().includes(lowerQuery));
      }

      // Filter by selected category or other filters
      if (selectedCategory) {
        filtered = filtered.filter(({ category, color, company, newPrice, title }) =>
          [category, color, company, newPrice.toString(), title].includes(selectedCategory)
        );
      }

      return filtered;
    },
    [products, query, selectedCategory]);

  return (
    <div>
      <Sidebar handleChange={handleCategoryChange} />
      <Navigation query={query} handleInputChange={handleInputChange} />
      <Recommended handleClick={handleRecommendedClick} />
      <Products
        result={filteredProducts.map(({ img, title, star, reviews, prevPrice, newPrice }, index) => (
          <Card
            key={index} // simple fix: use index as key
            img={img}
            title={title}
            star={star}
            reviews={reviews}
            prevPrice={prevPrice}
            newPrice={"$" + newPrice}
          />
        ))}
      />
    </div>
  );
}

export default App;
