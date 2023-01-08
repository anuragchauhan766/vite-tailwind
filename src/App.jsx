import Navbar from "./components/Navbar/Navbar";
import HeroSection from "./components/hero/Hero";
import FeatureSection from "./components/feature/FeatureSection";
import Testinomial from "./components/testinomial/testinomail";
import Cta from "./components/Cta/Cta";
import Footer from "./components/footer/footer";
function App() {
  return (
    <div className="">
      <Navbar />
      <HeroSection />
      <FeatureSection />
      <Testinomial />
      <Cta />
      <Footer />
    </div>
  );
}

export default App;
