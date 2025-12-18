import "../styles/mobiles.css";
import { FaMobileAlt, FaTools, FaBatteryFull, FaPhoneAlt } from "react-icons/fa";

export default function Mobiles() {
  return (
    <div className="mobiles-page">
      <section className="mobiles-hero">
        <h1>Mobile Sales & Services</h1>
        <p>New mobiles, repairs, accessories & support</p>
      </section>

      <section className="mobiles-services">
        <h2>Our Mobile Services</h2>

        <div className="mobiles-grid">
          <div className="mobiles-card">
            <FaMobileAlt className="mobiles-icon" />
            <h3>Mobile Sales</h3>
            <p>Latest smartphones at best prices</p>
          </div>

          <div className="mobiles-card">
            <FaTools className="mobiles-icon" />
            <h3>Mobile Repairs</h3>
            <p>Screen, software & hardware fixes</p>
          </div>

          <div className="mobiles-card">
            <FaBatteryFull className="mobiles-icon" />
            <h3>Accessories</h3>
            <p>Chargers, batteries & covers</p>
          </div>
        </div>
      </section>

      <section className="mobiles-call">
        <h2>Need Mobile Service?</h2>
        <a href="tel:+919999999999" className="mobiles-call-btn">
          <FaPhoneAlt /> Call Now
        </a>
      </section>
    </div>
  );
}
