import "../styles/mobiles.css";
import { FaMobileAlt, FaTools, FaBatteryFull, FaPhoneAlt } from "react-icons/fa";
import { useEffect, useState } from "react";

/* HERO SLIDES */
import apple from "../assets/mobiles/apple.jpg";
import samsung from "../assets/mobiles/samsung1.jpg";
import oneplus from "../assets/mobiles/oneplus.jpg";
import google from "../assets/mobiles/google.jpg";
import motorola from "../assets/mobiles/motorola.webp";
import realme from "../assets/mobiles/realme.jpg";
import vivo from "../assets/mobiles/vivo.jpg";

const slides = [
  {
    img: apple,
    title: "Apple iPhone",
    desc: "Premium smartphones with powerful performance & long-term support",
  },
  {
    img: samsung,
    title: "Samsung",
    desc: "Best display technology with flagship & budget-friendly options",
  },
  {
    img: oneplus,
    title: "OnePlus",
    desc: "Fast, smooth performance with clean OxygenOS experience",
  },
  {
    img: motorola,
    title: "Motorola",
    desc: "Near-stock Android with solid build quality",
  },
  {
    img: google,
    title: "Google Pixel",
    desc: "Best camera phones with pure Android experience",
  },
  {
    img: realme,
    title: "Realme",
    desc: "Affordable smartphones with modern design & features",
  },
  {
    img: vivo,
    title: "Vivo",
    desc: "Camera-focused phones with stylish design",
  },
];

export default function Mobiles() {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="mobiles-page">
      {/* HERO SLIDER */}
      <section
  className="mobiles-hero slider"
  style={{ backgroundImage: `url(${slides[current].img})` }}
>
  <div className="hero-overlay">
    <h1>{slides[current].title}</h1>
    <p>{slides[current].desc}</p>
  </div>

  {/* SLIDER DOTS */}
  <div className="slider-dots">
    {slides.map((_, index) => (
      <span
        key={index}
        className={`dot ${current === index ? "active" : ""}`}
        onClick={() => setCurrent(index)}
      ></span>
    ))}
  </div>
</section>

      {/* SERVICES */}
      {/* <section className="mobiles-services">
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
      </section> */}
      {/* REPAIR & ACCESSORIES */}
<section className="mobile-charges">
  <h2>Mobile Repair & Accessories</h2>
  <p className="charges-subtitle">
    Sales, repairs & accessories for all major mobile brands
  </p>

  <div className="charges-grid">
    {/* Display */}
    <div className="charge-card">
      <h3>📱 Display Replacement</h3>
      <ul>
        <li>Android Displays (All Brands)</li>
        <li>iPhone Displays (Original & Compatible)</li>
        <li>Touch & Glass Replacement</li>
      </ul>
    </div>

    {/* Battery */}
    <div className="charge-card">
      <h3>🔋 Battery Replacement</h3>
      <ul>
        <li>Original & High-Backup Batteries</li>
        <li>Fast Charging Support</li>
        <li>Battery Health Check</li>
      </ul>
    </div>

    {/* Chargers */}
    <div className="charge-card">
      <h3>🔌 Chargers & Cables</h3>
      <ul>
        <li>Fast Chargers (18W / 25W / 65W)</li>
        <li>Type-C, Micro USB, Lightning Cables</li>
        <li>Original & Compatible Options</li>
      </ul>
    </div>

    {/* Tempered */}
    <div className="charge-card">
      <h3>🛡 Tempered Glass & Covers</h3>
      <ul>
        <li>Normal / 9D / Privacy Glass</li>
        <li>Back Covers & Camera Protection</li>
        <li>Scratch & Shock Protection</li>
      </ul>
    </div>
  </div>

  <div className="charges-note">
    💡 Accessories & repairs available for Apple, Samsung, OnePlus, Vivo,
    Oppo, Redmi, Realme & more.
  </div>
</section>


      {/* CALL */}
      <section className="mobiles-call">
        <h2>Need Mobile Service?</h2>
        <a href="tel:+919999999999" className="mobiles-call-btn">
          <FaPhoneAlt /> Call Now
        </a>
      </section>
      {/* FLOATING WHATSAPP */}
<a
  href="https://wa.me/919182411422?text=Hi%20Murali%20Technicalworks!%20I%20would%20like%20to%20know%20more%20about%20your%20services."
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
