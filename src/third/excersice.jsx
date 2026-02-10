// objective--- create a shopping cart componrnt that manage items, quantity and total 

// requirement 
// add items to cart (name,price ,quantity)
// update quantity for each items
// remove items from cart
// calculate and diaplay subtotal,tax(10%),and total clear  entire cart

// objective- create shopping cart component that manage items,quantities,and total;

// requirement 
// toggle between dark and light 
// apply theme to component style
// dialpay current theme

import React, { useState } from "react";

const Shopping = () => {
  // cart state
  const [cart, setCart] = useState([]);

  // theme state
  const [theme, setTheme] = useState("light");

  // sample products
  const products = [
    { id: 1, name: "Laptop", price: 50000 },
    { id: 2, name: "Headphones", price: 2000 },
    { id: 3, name: "Mouse", price: 800 }
  ];

  // add item to cart
  const addToCart = (product) => {
    const exists = cart.find((item) => item.id === product.id);

    if (exists) {
      setCart(
        cart.map((item) =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        )
      );
    } else {
      setCart([...cart, { ...product, quantity: 1 }]);
    }
  };

  // update quantity
  const updateQuantity = (id, qty) => {
    if (qty <= 0) return;
    setCart(
      cart.map((item) =>
        item.id === id ? { ...item, quantity: qty } : item
      )
    );
  };

  // remove item
  const removeItem = (id) => {
    setCart(cart.filter((item) => item.id !== id));
  };

  // clear cart
  const clearCart = () => {
    setCart([]);
  };

  // calculations
  const subtotal = cart.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );
  const tax = subtotal * 0.1;
  const total = subtotal + tax;

  // toggle theme
  const toggleTheme = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };

  // styles
  const styles = {
    container: {
      background: theme === "light" ? "#f9f9f9" : "#222",
      color: theme === "light" ? "#000" : "#fff",
      minHeight: "100vh",
      padding: "20px"
    },
    card: {
      border: "1px solid #ccc",
      padding: "10px",
      marginBottom: "10px",
      borderRadius: "5px",
      background: theme === "light" ? "#fff" : "#333"
    },
    button: {
      margin: "5px",
      padding: "5px 10px",
      cursor: "pointer"
    }
  };

  return (
    <div style={styles.container}>
      <h1>🛒 Shopping Cart</h1>

      <button style={styles.button} onClick={toggleTheme}>
        Toggle Theme
      </button>
      <p>Current Theme: <b>{theme}</b></p>

      <h2>Products</h2>
      {products.map((p) => (
        <div key={p.id} style={styles.card}>
          <p>{p.name} - ₹{p.price}</p>
          <button style={styles.button} onClick={() => addToCart(p)}>
            Add to Cart
          </button>
        </div>
      ))}

      <h2>Cart Items</h2>
      {cart.length === 0 && <p>Cart is empty</p>}

      {cart.map((item) => (
        <div key={item.id} style={styles.card}>
          <p>
            {item.name} - ₹{item.price}
          </p>

          <input
            type="number"
            value={item.quantity}
            min="1"
            onChange={(e) =>
              updateQuantity(item.id, Number(e.target.value))
            }
          />

          <button
            style={styles.button}
            onClick={() => removeItem(item.id)}
          >
            Remove
          </button>
        </div>
      ))}

      <h2>Summary</h2>
      <p>Subtotal: ₹{subtotal}</p>
      <p>Tax (10%): ₹{tax}</p>
      <p><b>Total: ₹{total}</b></p>

      <button style={styles.button} onClick={clearCart}>
        Clear Cart
      </button>
    </div>
  );
};

export default Shopping;