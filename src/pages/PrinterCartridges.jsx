import "../styles/printerCartridges.css";
import { FaPrint, FaTint, FaTools, FaPhoneAlt } from "react-icons/fa";

export default function PrinterCartridges() {
  return (
    <div className="printer-page">
      <section className="printer-hero">
        <h1>Printer Cartridges & Services</h1>
        <p>Cartridge sales, refilling & printer support</p>
      </section>

      <section className="printer-services">
        <h2>Our Printer Services</h2>

        <div className="printer-grid">
          <div className="printer-card">
            <FaPrint className="printer-icon" />
            <h3>Cartridge Sales</h3>
            <p>Original & compatible cartridges</p>
          </div>

          <div className="printer-card">
            <FaTint className="printer-icon" />
            <h3>Cartridge Refilling</h3>
            <p>Cost-effective refilling services</p>
          </div>

          <div className="printer-card">
            <FaTools className="printer-icon" />
            <h3>Printer Repairs</h3>
            <p>Inkjet & laser printer service</p>
          </div>
        </div>
      </section>

      <section className="printer-call">
        <h2>Need Printer Support?</h2>
        <a href="tel:+919999999999" className="printer-call-btn">
          <FaPhoneAlt /> Call Now
        </a>
      </section>
    </div>
  );
}
