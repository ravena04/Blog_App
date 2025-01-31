import React from 'react';
import { Link } from 'react-router-dom';
import '../Categories.css';  // You can style it according to your needs.

const Categories = () => {
  const categories = [
    { name: "Technology", image: "https://t4.ftcdn.net/jpg/03/08/69/75/360_F_308697506_9dsBYHXm9FwuW0qcEqimAEXUvzTwfzwe.jpg" },
    { name: "Health", image: "https://etimg.etb2bimg.com/thumb/103580468.cms?width=400&height=300" },
    { name: "Lifestyle", image: "https://img.freepik.com/free-vector/illustration-passion_53876-17884.jpg" },
    { name: "Education", image: "https://img.freepik.com/premium-photo/education-background-with-colorful-stationery_8087-1663.jpg?w=360" },
    { name: "Business", image: "https://cdn.pixabay.com/photo/2020/07/08/04/12/work-5382501_1280.jpg" },
  ];

  return (
    <div className="categories-container">
      <h1>Explore Other Top Blogs based on Categories</h1> {/* Heading added here */}
      <div className="categories-list">
        {categories.map((category, index) => (
          <div className="category-card" key={index}>
            <img src={category.image} alt={category.name} className="category-image" />
            <h3>{category.name}</h3>
            <Link to={`/category/${category.name.toLowerCase()}`} className="explore-button">
              Explore
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Categories;
