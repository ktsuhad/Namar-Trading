import "bootstrap/dist/css/bootstrap.min.css";
import Navbarr from "./Components/Navbar/Navbar";
import Slider from "./Components/Slider/Slider";
import AboutUs from "./Components/AboutUs/AboutUs";
import Services from "./Components/Services/Services";

function App() {
  return (
    <div>
      <Navbarr />
      <Slider />
      <AboutUs />
      <Services />
    </div>
  );
}

export default App;
