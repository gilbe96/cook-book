import { Routes, Route } from "react-router-dom";
import "./App.css";
import Home from "./pages/home/Home";
import Recipes from "./pages/recipes/Recipes";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="recipes" element={<Recipes />} />
    </Routes>
  );
};

export default App;
