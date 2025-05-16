import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Navbar } from "./components/Navbar";
import { HeroSection } from "./components/HeroSection";
import { Footer } from "./components/Footer";
import ArticleSection from "./components/ArticleSection";
import AdminLoginPage from "./pages/admin/AdminLoginPage";

function App() {
  return (
    <Router>
      <Routes>
        {/* หน้าแรก */}
        <Route
          path="/"
          element={
            <>
              <Navbar />
              <HeroSection />
              <ArticleSection />
              <Footer />
            </>
          }
        />

        {/* หน้า Admin Login */}
        <Route path="/admin/login" element={<AdminLoginPage />} />
      </Routes>
    </Router>
  );
}

export default App;
