// HOOKS 
import { Route, Routes } from "react-router-dom";

// PAGES 
import { Home } from "./pages/Home/Home";
import { About } from "./pages/About/About";
import Login from "./pages/Login/Login";

export function Router() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/login" element={<Login />} />
    </Routes>
  );
}
