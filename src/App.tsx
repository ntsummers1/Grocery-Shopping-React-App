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
        <Route path="/" element={<HomePage signOut={signOut} />} />
        <Route
          path="/cart"
          element={<CartPage signOut={signOut} user={user} />}
        />
        <Route path="/login" element={<LoginPage />} />
        <Route path="*" element={<FourOhFour />} />
      </Routes>
    </div>
  );
}

export default withAuthenticator(App);
