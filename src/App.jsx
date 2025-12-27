import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import ScrollToTop from "./components/ScrollToTop";
import Home from "./pages/Home";
import CCTV from "./pages/CCTV";
import Computers from "./pages/Computers";
import Mobiles from "./pages/Mobiles";
import PrinterCartridges from "./pages/PrinterCartridges";
import Footer from "./components/Footer";


function App() {
  return (
    <>
      <Navbar />
       <ScrollToTop />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/cctv" element={<CCTV />} />
        <Route path="/computers" element={<Computers />} />
        <Route path="/mobiles" element={<Mobiles />} />
        <Route path="/printer-cartridges" element={<PrinterCartridges />} />
      </Routes>
       <Footer />
    </>
  );
}

export default App;
