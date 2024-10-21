
import "./App.css";
import { Navbar} from "./components/Navbar";
import { HeroSection } from "./components/HeroSection";
import { Footer } from "./components/Footer";
import ArticleSections from "../src/components/ArticleSection"

function App() {
  return (
    <>
      <Navbar />
      <ArticleSections />
      <HeroSection />
      <Footer />
    </>
  );
}

export default App;
