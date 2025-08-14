import { useState, useCallback } from "react";

// Projects
import Accordion from "./components/projects/1-9/Accordion";
import Calculator from "./components/projects/1-9/Calculator";
import Counter from "./components/projects/1-9/Counter";
import Form from "./components/projects/1-9/Form";
import HiddenSearchBar from "./components/projects/1-9/HiddenSearchBar";
import Meals from "./components/projects/1-9/Meals";
import Testimonials from "./components/projects/1-9/Testimonials";
import ToDo from "./components/projects/1-9/ToDo";
import ToggleBackgroundColor from "./components/projects/1-9/ToggleBackgroundColor";

// E-commerce
import Navigation from "./components/projects/E-commerce/navigation/Nav.jsx";
import Products from "./components/projects/E-commerce/products/Products.jsx";
import Recommended from "./components/projects/E-commerce/recommended/Recommended.jsx";
import Sidebar from "./components/projects/E-commerce/Sidebar/Sidebar.jsx";
import Card from "./components/projects/E-commerce/components/card.jsx";

import products from "./components/projects/E-commerce/db/data.jsx";

function App() {
  const [selectedCategory, setSelectedCategory] = useState("");
  const [query, setQuery] = useState("");

  const handleInputChange = useCallback((e) => setQuery(e.target.value), []);
  const handleCategoryChange = useCallback((e) => setSelectedCategory(e.target.value), []);
  const handleRecommendedClick = useCallback((e) => setSelectedCategory(e.target.value), []);

  const filteredProducts = (() => {
    let filtered = products;

    if (query.trim() !== "") {
      const lowerQuery = query.toLowerCase();
      filtered = filtered.filter((product) => product.title.toLowerCase().includes(lowerQuery));
    }

    if (selectedCategory) {
      filtered = filtered.filter(({ category, color, company, newPrice, title }) =>
        [category, color, company, newPrice.toString(), title].includes(selectedCategory)
      );
    }

    return filtered;
  })();

  // Helper to render a project section
  const ProjectSection = ({ title, children }) => (
    <section className="my-12 flex flex-col items-center px-4">
      <h2 className="text-2xl font-bold mb-6">{title}</h2>
      <div className="w-full max-w-3xl flex justify-center">{children}</div>
    </section>
  );

  return (
    <>
      {/* E-commerce section */}
      <div className="mb-12">
        <Sidebar handleChange={handleCategoryChange} />
        <Navigation query={query} handleInputChange={handleInputChange} />
        <Recommended handleClick={handleRecommendedClick} />
        <Products
          result={filteredProducts.map(({ img, title, star, reviews, prevPrice, newPrice }, index) => (
            <Card
              key={index}
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

      {/* Projects */}
      <ProjectSection title="Accordion">
        <Accordion title="Example Accordion" content="This is an example content." />
      </ProjectSection>

      <ProjectSection title="Calculator">
        <Calculator />
      </ProjectSection>

      <ProjectSection title="Counter">
        <Counter />
      </ProjectSection>

      <ProjectSection title="Form">
        <Form />
      </ProjectSection>

      <ProjectSection title="Hidden Search Bar">
        <HiddenSearchBar />
      </ProjectSection>

      <ProjectSection title="Meals">
        <Meals />
      </ProjectSection>

      <ProjectSection title="Testimonials">
        <Testimonials />
      </ProjectSection>

      <ProjectSection title="ToDo">
        <ToDo />
      </ProjectSection>

      <ProjectSection title="Toggle Background Color">
        <ToggleBackgroundColor />
      </ProjectSection>
    </>
  );
}

export default App;
