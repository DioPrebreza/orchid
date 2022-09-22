import logo from "./logo.svg";
import "./App.css";
import Navbar from "./components/navbar/Navbar.js";
import LandingHeader from "./components/landing-header/LandingHeader.js";
import SalePromotion from "./components/landing-header/SalePromotion.js";

function App() {
  return (
    <div>
      <Navbar />
      <LandingHeader />
      <SalePromotion />
    </div>
  );
}

export default App;
