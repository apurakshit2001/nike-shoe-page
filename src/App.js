import "./App.css";
import HeroSection from "./components/Hero";
import Navigation from "./components/Navbar";
const App = () => {
  return (
    <div>
      <Navigation />
      <HeroSection />
    </div>
  );
};

export default App;