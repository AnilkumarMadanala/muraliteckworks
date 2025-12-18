import "../styles/computers.css";
import { FaDesktop, FaTools, FaLaptop, FaPhoneAlt } from "react-icons/fa";

export default function Computers() {
  return (
    <div className="computers-page">
      <section className="computers-hero">
        <h1>Computer Sales & Services</h1>
        <p>Desktops, Laptops, Repairs & AMC Services</p>
      </section>

      <section className="computers-services">
        <h2>Our Computer Services</h2>

        <div className="computers-grid">
          <div className="computers-card">
            <FaDesktop className="computers-icon" />
            <h3>Desktop Sales</h3>
            <p>Custom & branded desktop solutions</p>
          </div>

          <div className="computers-card">
            <FaLaptop className="computers-icon" />
            <h3>Laptop Sales</h3>
            <p>Latest laptops with warranty</p>
          </div>

          <div className="computers-card">
            <FaTools className="computers-icon" />
            <h3>Repairs & Upgrades</h3>
            <p>Hardware & software troubleshooting</p>
          </div>
        </div>
      </section>

      <section className="computers-call">
        <h2>Need Computer Support?</h2>
        <a href="tel:+919999999999" className="computers-call-btn">
          <FaPhoneAlt /> Call Now
        </a>
      </section>
    </div>
  );
}
