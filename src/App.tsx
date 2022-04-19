import { withAuthenticator } from "@aws-amplify/ui-react";
import React from "react";
import { Route, Routes } from "react-router-dom";
import "./App.css";
import CartPage from "./pages/CartPage";
import FourOhFour from "./pages/FourOhFour";
import HomePage from "./pages/HomePage";
import LoginPage from "./pages/LoginPage";

// eslint-disable-next-line @typescript-eslint/no-explicit-any
function App({ signOut, user }: any) {
  return (
    <div className="bg-light-background min-h-full pt-4">
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/cart" element={<CartPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="*" element={<FourOhFour />} />
      </Routes>
      <h1>Hello {user.username}</h1>
      <button onClick={signOut}>Sign out</button>
    </div>
  );
}

export default withAuthenticator(App);
