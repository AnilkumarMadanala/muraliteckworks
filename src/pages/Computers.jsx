import "../styles/computers.css";
import { FaPhoneAlt } from "react-icons/fa";

import hp from "../assets/computer/hp.jpg";
import dell from "../assets/computer/dell.jpg";
import asus from "../assets/computer/asus.jpg";
import lenovo from "../assets/computer/lenova.jpg";
import zebronics from "../assets/computer/zebronics.webp";
import mouse from "../assets/computer/mouse.webp";
import keyboard from "../assets/computer/keyboard.jpg";
import repair1 from "../assets/computer/repair1.jpg";
import repair2 from "../assets/computer/repair2.jpeg";

export default function Computers() {
  return (
    <div className="computers-page">

      {/* HERO */}
      <section className="computers-hero">
        <h1>Computer Sales & Services</h1>
        <p>Desktops • Laptops • Accessories • Repairs</p>
      </section>

      {/* PRODUCTS */}
      <section className="computers-products">
        <h2>Our Products</h2>

        <div className="computers-grid">
          <div className="computers-card">
            <img src={hp} alt="HP Computers" />
            <h3>HP Systems</h3>
            <p>Reliable desktops & laptops for office and home use</p>
            <p className="trust">✅ 15+ installations last month</p>
          </div>

          <div className="computers-card">
            <img src={dell} alt="Dell Computers" />
            <h3>Dell Systems</h3>
            <p>High-performance business & enterprise systems</p>
            <p className="trust">✅ 20+ corporate setups</p>
          </div>

          <div className="computers-card">
            <img src={asus} alt="Asus Computers" />
            <h3>ASUS Laptops</h3>
            <p>Best for performance, gaming & productivity</p>
            <p className="trust">✅ 12+ laptops delivered</p>
          </div>

          <div className="computers-card">
            <img src={lenovo} alt="Lenovo Computers" />
            <h3>Lenovo Systems</h3>
            <p>Durable laptops for business & education</p>
            <p className="trust">✅ 18+ office deployments</p>
          </div>

          <div className="computers-card">
            <img src={zebronics} alt="Zebronics Accessories" />
            <h3>Zebronics Accessories</h3>
            <p>UPS, speakers & computer peripherals</p>
            <p className="trust">✅ Trusted accessory partner</p>
          </div>

          <div className="computers-card">
            <img src={mouse} alt="Mouse" />
            <h3>Mouse</h3>
            <p>Wired & wireless mouse for all usage types</p>
          </div>

          <div className="computers-card">
            <img src={keyboard} alt="Keyboard" />
            <h3>Keyboards</h3>
            <p>Standard, mechanical & wireless keyboards</p>
          </div>
        </div>
      </section>

      {/* SERVICES */}
      <section className="computers-services">
        <h2>Repair & Support Services</h2>

        <div className="computers-grid">
          <div className="computers-card">
            <img src={repair1} alt="Computer Repair" />
            <h3>Hardware Repairs</h3>
            <p>Motherboard, RAM, HDD, SSD & power issues</p>
          </div>

          <div className="computers-card">
            <img src={repair2} alt="Laptop Repair" />
            <h3>Laptop Services</h3>
            <p>Screen, battery, keyboard & OS installation</p>
          </div>
        </div>
      </section>

      {/* CALL */}
      <section className="computers-call">
        <h2>Need Computer Support?</h2>
        <a href="tel:9676760263" className="computers-call-btn">
          <FaPhoneAlt /> Call Now
        </a>
      </section>
      <a
  href="https://wa.me/919676760263?text=Hi%20Murali%20Technicalworks!%20I%20would%20like%20to%20know%20more%20about%20your%20services."
  target="_blank"
  rel="noopener noreferrer"
  className="whatsapp-float"
>
  <img
    src="https://upload.wikimedia.org/wikipedia/commons/6/6b/WhatsApp.svg"
    alt="WhatsApp"
  />
</a>


    </div>
  );
}
