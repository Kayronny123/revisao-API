import { BrowserRouter, Routes, Route } from "react-router-dom";

import React from "react";
import FeedPage from "../pages/feed/FeedPage";
import LoginPage from "../pages/login/LoginPage";
import SigNupPage from "../pages/signup/SigNupPage";
import AddRecipePage from "../pages/addRecipe/AddRecipePage";
import RecipeDetailPage from "../pages/recipeDetail/RecipeDetailPage";
import Header from "../components/Header/Header";
export default function Router() {
  return (
    <>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route index element={<FeedPage />} />
          <Route path="login" element={<LoginPage />} />{" "}
          <Route path="signup" element={<SigNupPage />} />
          <Route path="add" element={<AddRecipePage />} />
          <Route path="detail/:id" element={<RecipeDetailPage />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}
