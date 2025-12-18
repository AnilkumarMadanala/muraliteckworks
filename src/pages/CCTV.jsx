import "../styles/cctv.css";
import { FaVideo, FaTools, FaShieldAlt, FaPhoneAlt } from "react-icons/fa";

export default function CCTV() {
  return (
    <div className="cctv-page">
      {/* Header Section */}
      <section className="cctv-hero">
        <h1>CCTV Sales & Installation</h1>
        <p>
          Secure your home, office, and business with professional CCTV solutions
        </p>
      </section>

      {/* Services Section */}
      <section className="cctv-services">
        <h2>Our CCTV Services</h2>

        <div className="cctv-grid">
          <div className="cctv-card">
            <FaVideo className="cctv-icon" />
            <h3>CCTV Installation</h3>
            <p>High-quality camera installation for homes & businesses</p>
          </div>

          <div className="cctv-card">
            <FaTools className="cctv-icon" />
            <h3>Maintenance & AMC</h3>
            <p>Regular service and maintenance for smooth operation</p>
          </div>

          <div className="cctv-card">
            <FaShieldAlt className="cctv-icon" />
            <h3>Security Consultation</h3>
            <p>Expert advice for complete surveillance coverage</p>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="cctv-why">
        <h2>Why Choose Muralitechnicalworks?</h2>
        <ul>
          <li>✔ Experienced CCTV Technicians</li>
          <li>✔ Branded Cameras & DVR/NVR</li>
          <li>✔ Affordable Pricing</li>
          <li>✔ Quick Installation</li>
          <li>✔ After-Sales Support</li>
        </ul>
      </section>

      {/* Call to Action */}
      <section className="cctv-call">
        <h2>Need CCTV Installation?</h2>
        <a href="tel:+919999999999" className="cctv-call-btn">
          <FaPhoneAlt /> Call Now
        </a>
      </section>
    </div>
  );
}
