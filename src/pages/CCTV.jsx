import { useState } from "react";
import "../styles/cctv.css";
import {
  FaPhoneAlt,
  FaVideo,
  FaTools,
  FaShieldAlt,
} from "react-icons/fa";

/* Brand Images */
import hikvision from "../assets/cctv/hikvision.webp";
import dahua from "../assets/cctv/dahua-cctv.webp";
import cpplus from "../assets/cctv/cp-plus-camera.png";
import godrej from "../assets/cctv/godrej-cctv.webp";
import sony from "../assets/cctv/sony.webp";
import zebronics from "../assets/cctv/zebranics.png";
import uniview from "../assets/cctv/uniview.jpg";
import samsung from "../assets/cctv/samsung.jpg";

/* Products Data */
const brands = [
  {
    img: hikvision,
    title: "Hikvision (Market Leader)",
    why: "Widely used in India — strong performance for residential & commercial setups.",
    models: ["DS-2CD2143G0-I — 4MP IP camera, weatherproof"],
    installs: "12+ installations last month",
  },
  {
    img: dahua,
    title: "Dahua Technology",
    why: "Excellent video quality with AI features like WDR & PoE support.",
    models: ["IPC-HFW2431S-S — 4MP outdoor camera"],
    installs: "9+ installations last month",
  },
  {
    img: cpplus,
    title: "CP Plus (Very Popular in India)",
    why: "Affordable, easy installation, reliable performance.",
    models: [
      "4MP Wi-Fi PT Camera",
      "CP-E31A 3MP PT Camera",
      "2.4MP Dome Camera",
      "2.4MP Bullet Camera",
    ],
    installs: "15+ installations last month",
  },
  {
    img: godrej,
    title: "Godrej Security Solutions",
    why: "Trusted Indian brand with rugged build quality.",
    models: ["GS-2MP-DIR — Night vision camera"],
    installs: "6+ installations last month",
  },
  {
    img: sony,
    title: "Sony",
    why: "Premium video quality with AI analytics.",
    models: ["SNC-CH220 / SNC-EB632R"],
    installs: "4+ installations last month",
  },
  {
    img: zebronics,
    title: "Zebronics",
    why: "Budget-friendly brand with reliable performance.",
    models: ["ZEB-DSC-T7 — 1080p camera"],
    installs: "7+ installations last month",
  },
  {
    img: uniview,
    title: "Uniview",
    why: "IP cameras with smart features & compression.",
    models: ["IPC2122LR3-PF28-C"],
    installs: "5+ installations last month",
  },
  {
    img: samsung,
    title: "Samsung",
    why: "Premium brand for high-end security setups.",
    models: ["SNF-8010 — 4K AI camera"],
    installs: "3+ installations last month",
  },
];

export default function CCTV() {
  const [showForm, setShowForm] = useState(false);

  /* WhatsApp Submit Handler */
  const handleSubmit = (e) => {
    e.preventDefault();

    const formData = new FormData(e.target);

    const message = `Hello Muralitechnicalworks,%0A
Name: ${formData.get("name")}%0A
Phone: ${formData.get("phone")}%0A
Email: ${formData.get("email") || "N/A"}%0A
Location: ${formData.get("location")}%0A
Requirement: ${formData.get("description")}`;

    window.open(
      `https://wa.me/919676760263?text=${encodeURIComponent(message)}`,
      "_blank"
    );

    e.target.reset();
    setShowForm(false);
  };

  return (
    <div className="cctv-page">

      {/* HERO */}
      <section className="cctv-hero">
        <h1>CCTV Sales & Installation</h1>
        <p>Professional CCTV solutions for home & business security</p>
      </section>

      {/* SERVICES */}
      <section className="cctv-services">
        <h2>Our CCTV Services</h2>

        <div className="cctv-grid">
          <div className="cctv-card">
            <FaVideo className="cctv-icon" />
            <h3>CCTV Installation</h3>
            <p>High-quality installation for homes & businesses</p>
          </div>

          <div className="cctv-card">
            <FaTools className="cctv-icon" />
            <h3>Maintenance & AMC</h3>
            <p>Regular service and system maintenance</p>
          </div>

          <div className="cctv-card">
            <FaShieldAlt className="cctv-icon" />
            <h3>Security Consultation</h3>
            <p>Expert advice for complete surveillance coverage</p>
          </div>
        </div>
      </section>

      {/* PRODUCTS */}
      <section className="cctv-brands">
        <h2>Products & Trusted Partners</h2>

        <div className="brand-grid-4">
          {brands.map((b, i) => (
            <div className="brand-row" key={i}>
              <div
                className="brand-image"
                style={{ backgroundImage: `url(${b.img})` }}
              />

              <div className="brand-info">
                <h3>📹 {b.title}</h3>
                <p><strong>Why choose:</strong> {b.why}</p>

                <p className="models-title">Popular Models:</p>
                <ul>
                  {b.models.map((m, idx) => (
                    <li key={idx}>{m}</li>
                  ))}
                </ul>

                <p className="trust">
                  ✅ Installed by <strong>MuraliTechnicalWorks</strong> —{" "}
                  <strong>{b.installs}</strong>
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CALL TO ACTION */}
      <section className="cctv-call">
        <h2>Need CCTV Installation?</h2>

        <div className="cctv-call-actions">
          <button className="visit-btn" onClick={() => setShowForm(true)}>
            Free Site Visit
          </button>

          <a href="tel:9676760263" className="cctv-call-btn">
            <FaPhoneAlt /> Call Now
          </a>
        </div>
      </section>

      {/* FREE SITE VISIT POPUP */}
      {showForm && (
        <div className="form-overlay">
          <form className="quote-form" onSubmit={handleSubmit}>
            <h3>Free Site Visit</h3>

            <input name="name" placeholder="Your Name" required />
            <input name="phone" placeholder="Phone Number" required />
            <input name="email" placeholder="Email" />
            <input name="location" placeholder="Location" required />
            <textarea
              name="description"
              placeholder="Requirement"
              rows="3"
              required
            />

            <div className="form-buttons">
              <button type="submit">Submit</button>
              <button type="button" onClick={() => setShowForm(false)}>
                Cancel
              </button>
            </div>
          </form>
        </div>
      )}
{/* FLOATING ACTION BUTTON */}
<div className="floating-actions">
  <button
    className="floating-btn visit"
    onClick={() => setShowForm(true)}
  >
    Free Site Visit
  </button>
</div>

    </div>
  );
}
