import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Login from './components/Login/Login';
import ProductList from './components/ProductList/ProductList';
import Cart from './components/Cart/Cart';
import AdminPage from './components/AdminPage/AdminPage';

const App = () => {
  const [userRole, setUserRole] = useState(''); // Manages user role state

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login setUserRole={setUserRole} />} />
        <Route path="/products" element={userRole === 'user' ? <ProductList /> : <Navigate to="/" />} />
        <Route path="/cart" element={userRole === 'user' ? <Cart /> : <Navigate to="/" />} />
        <Route path="/admin" element={userRole === 'admin' ? <AdminPage /> : <Navigate to="/" />} />
      </Routes>
    </Router>
  );
};

export default App;
