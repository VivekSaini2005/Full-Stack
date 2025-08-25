import React from "react";
import ReactDOM from "react-dom/client"
import { BrowserRouter as Router, Routes, Route } from "react-router";
import User from "./id";
import Product from "./mulpara";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/user/:id" element={<User />} />
        <Route path="/product/:category/:id" element={<Product />} />
      </Routes>
    </Router>
  );
}

ReactDOM.createRoot(document.getElementById('root')).render(<App></App>);