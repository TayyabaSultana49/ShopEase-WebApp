# 🛒 ShopEase – E-commerce Frontend with Redux Toolkit

## Overview

ShopEase is a modern and responsive E-commerce Frontend application developed using **React.js** and **Redux Toolkit**. The application simulates a real-world online shopping experience by allowing users to browse products, search and filter items, view detailed product information, and manage a shopping cart efficiently.

The project demonstrates React component architecture, global state management with Redux Toolkit, routing using React Router, and responsive UI design.

---

## Objectives

- Build a responsive E-commerce application using React.js.
- Implement global state management with Redux Toolkit.
- Develop reusable and modular React components.
- Manage product and cart data efficiently.
- Demonstrate routing, hooks, and event handling in React.

---

## Features

### Home Page
- Attractive landing page
- Responsive navigation bar
- "Shop Now" button
- User-friendly interface

### Product Listing
- Displays products in a responsive grid layout
- Product image
- Product title
- Product price
- Product category
- Search functionality
- Category filtering

### Product Details
- Large product image
- Product description
- Product category
- Product price
- Add to Cart functionality

### Shopping Cart
- Add products to cart
- Remove products from cart
- Increase product quantity
- Decrease product quantity
- Display total number of items
- Display total cart value
- Persistent cart using Local Storage

### State Management
- Product data managed using Redux Toolkit
- Cart management using Redux Toolkit
- Quantity updates
- Automatic total price calculation

### Responsive Design
- Mobile-friendly layout
- Tablet compatibility
- Desktop responsiveness

---

## Technologies Used

- React.js
- Redux Toolkit
- React Router DOM
- JavaScript (ES6+)
- HTML5
- CSS3
- DummyJSON API
- Vite

---

## React Concepts Implemented

- Functional Components
- Component Reusability
- Props
- React Hooks
  - useState
  - useEffect
- Conditional Rendering
- Event Handling
- React Router
- State Management using Redux Toolkit

---

## Redux Toolkit Concepts

- Store Configuration
- Redux Slices
- Reducers
- Actions
- Dispatch
- Selectors
- Global State Management

---

## Project Structure

```text
src
│
├── assets
├── components
│   ├── Navbar.jsx
│   ├── ProductCard.jsx
│   ├── SearchBar.jsx
│   ├── CategoryFilter.jsx
│   ├── CartItem.jsx
│   └── Loader.jsx
│
├── pages
│   ├── Home.jsx
│   ├── Products.jsx
│   ├── ProductDetails.jsx
│   └── Cart.jsx
│
├── services
│   └── api.js
│
├── store
│   ├── store.js
│   ├── productSlice.js
│   └── cartSlice.js
│
├── App.jsx
├── App.css
├── main.jsx
└── index.css
```

---

## API

This application uses the **DummyJSON API** to fetch product information dynamically.

API Endpoint:

https://dummyjson.com/products

---

## Key Highlights

- Clean and reusable component architecture
- Efficient global state management
- Responsive user interface
- Dynamic product fetching
- Search and category filtering
- Real-time cart updates
- Persistent cart using Local Storage
- Organized project structure
- Modern React development practices

---

## Conclusion

ShopEase is a fully functional React-based E-commerce Frontend application that demonstrates modern frontend development practices using React.js and Redux Toolkit. The project showcases reusable components, efficient state management, responsive design, routing, and dynamic product handling, making it a strong implementation of an online shopping interface.

---

