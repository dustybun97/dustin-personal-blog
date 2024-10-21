
import "./App.css";
import { Navbar} from "./components/Navbar";
import { HeroSection } from "./components/HeroSection";
import { Footer } from "./components/Footer";
import ArticleSection from "./components/ArticleSection";


function App() {
  return (
    <>
      <Navbar />
      <ArticleSection />
      <HeroSection />
      <Footer />
    </>
  );
}

export default App;
