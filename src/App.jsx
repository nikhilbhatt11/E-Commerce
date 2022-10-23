import React from "react";
import Navbar from "./Navbar";
import { Routes, Route } from "react-router-dom";
import ProductListPage from "./ProductListPage";
import Footer from "./Footer";
import ProductDetail from "./ProductDetail";
import CartPage from "./CartPage";
import NotFound from "./NotFound";
import Login from "./Login";
import SignIn from "./SignIn";
import UserRoute from "./UserRoute";
import NotUserRoute from "./NotUserRoute";
import Alert from "./Alert";
import UserProvider from "./providers/UserProvider";
import AlertProvider from "./providers/AlertProvider";
import CartProvider from "./providers/CartProvider";

function App() {
  return (
    <div>
      <UserProvider>
        <CartProvider>
          <AlertProvider>
            <Alert />
            <div className=" bg-white mb-8">
              <Navbar />
            </div>
            <div className="max-w-4xl mx-auto bg-white p-4">
              <Routes>
                <Route
                  index
                  element={
                    <UserRoute>
                      <ProductListPage />
                    </UserRoute>
                  }
                />
                <Route
                  path="/products/:id"
                  element={
                    <UserRoute>
                      <ProductDetail />
                    </UserRoute>
                  }
                />
                <Route
                  path="/products/main"
                  element={
                    <UserRoute>
                      <ProductListPage />
                    </UserRoute>
                  }
                />
                <Route path="*" element={<NotFound />} />
                <Route
                  path="/cart"
                  element={
                    <UserRoute>
                      <CartPage />
                    </UserRoute>
                  }
                />
                <Route
                  path="/Login"
                  element={
                    <NotUserRoute>
                      <Login />
                    </NotUserRoute>
                  }
                />
                <Route
                  path="/SignIn"
                  element={
                    <NotUserRoute>
                      <SignIn />
                    </NotUserRoute>
                  }
                />
              </Routes>
            </div>
            <div>
              <Footer />
            </div>
          </AlertProvider>
        </CartProvider>
      </UserProvider>
    </div>
  );
}
export default App;
