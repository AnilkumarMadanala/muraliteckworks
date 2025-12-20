import { useEffect, useState } from "react";
import "../styles/home.css";

// Hero slides
import slide1 from "../assets/hero/cctv1.jpg";
// import slide2 from "../assets/hero/cctv2.jpg";
// import slide3 from "../assets/hero/cctv3.jpg";
// import slide4 from "../assets/hero/cctv4.jpg";
// import slide5 from "../assets/hero/cctv5.jpg";

import p1 from "../assets/partners/c1.jpg";
import p2 from "../assets/partners/c2.webp";
import p3 from "../assets/partners/c3.jpg";
import p4 from "../assets/partners/c4.jpg";
import p5 from "../assets/partners/c5.jpg";
import p6 from "../assets/partners/c6.jpg";

import c1 from "../assets/clients/pc1.jpg";
import c2 from "../assets/clients/pc2.jpg";
import c3 from "../assets/clients/pc3.png";

// Icons
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt,FaWhatsapp } from "react-icons/fa";

export default function Home() {
  const slides = [slide1,];
  const [current, setCurrent] = useState(0);
  const [showForm, setShowForm] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length);
    }, 4500);
    return () => clearInterval(interval);
  }, []);

  // ✅ FIXED SUBMIT HANDLER
  const handleSubmit = (e) => {
    e.preventDefault();

    const formData = new FormData(e.target);

    const name = formData.get("name");
    const phone = formData.get("phone");
    const email = formData.get("email");
    const location = formData.get("location");
    const description = formData.get("description");

    const message = `Hello Muralitechnicalworks,%0A
Name: ${name}%0A
Phone: ${phone}%0A
Email: ${email}%0A
Location: ${location}%0A
Requirement: ${description}`;

    window.open(`https://wa.me/919676760263?text=${message}`, "_blank");

    e.target.reset();
    setShowForm(false);
  };

  return (
    <>
      {/* HERO */}
    {/* HERO SECTION */}
<section
  className="hero-slider"
 style={{ backgroundImage: `url(${slide1})` }}
 >
  <div className="overlay">
    <div className="hero-content">
      <span className="hero-badge">Trusted CCTV Experts</span>

      <h1>Secure Your Home & Business</h1>
      <h2>Professional CCTV Installation</h2>

      <p className="hero-highlight">
        Parvathipuram • Vizag • Vizianagaram • Srikakulam
      </p>

      <p className="hero-sub">
        HD • IP • WiFi Cameras | Free Site Visit | Same-Day Installation
      </p>

      <div className="stats">
        <span>✅ 6+ Years Experience</span>
        <span>👨‍👩‍👧‍👦 1000+ Happy Clients</span>
      </div>

      <div className="hero-buttons">
        <button onClick={() => setShowForm(true)}>Free Site Visit</button>
        <a href="tel:9676760263">Call Now</a>
      </div>
    </div>
  </div>
</section>


      {/* WHY CHOOSE US */}
      {/* WHY CHOOSE US */}
{/* WHY CHOOSE US */}
<section className="why-choose">
  <div className="why-container">
    {/* LEFT CONTENT */}
    <div className="why-left">
      <span className="section-tag">KEY ADVANTAGES</span>
      <h2>Why Choose Muralitechnicalworks?</h2>

      <p>
        We are a trusted technology service provider delivering professional
        CCTV installation, computer support, mobile solutions, and printer
        cartridge services for homes and businesses.
      </p>

      {/* EXPERIENCE STATS */}
      <div className="why-stats">
        <div>
          <h3>6+</h3>
          <span>Years Experience</span>
        </div>
        <div>
          <h3>1000+</h3>
          <span>Happy Clients</span>
        </div>
        <div>
          <h3>1200+</h3>
          <span>Installations</span>
        </div>
      </div>
    </div>

    {/* RIGHT POINTS */}
    <div className="why-right">
      {/* CCTV */}
      <div className="why-item">✔ Free CCTV Site Visit</div>
      <div className="why-item">✔ Same-Day Installation</div>
      <div className="why-item">✔ Professional CCTV Installation</div>
      <div className="why-item">✔ Mobile Remote Viewing Setup</div>
      <div className="why-item">✔ Affordable Packages</div>
      <div className="why-item">✔ Genuine Branded Cameras</div>
      

      {/* COMPUTERS */}
      <div className="why-item">✔ Computer Sales & Service Support</div>

      {/* MOBILES */}
      <div className="why-item">✔ Mobile Sales & Repairs</div>

      {/* PRINTER */}
      <div className="why-item">✔ Genuine Printer Cartridges</div>
    </div>
  </div>
</section>



      {/* SERVICES */}
   {/* WE SERVE */}
<section className="we-serve">
  <div className="serve-container">
    <span className="section-tag orange">INDUSTRIES WE SERVE</span>
    <h2>CCTV Solutions for Every Type of Property</h2>
    <p className="serve-desc">
      We deliver reliable CCTV installation services for residential,
      commercial, and industrial properties ensuring complete coverage
      and peace of mind.
    </p>

    <div className="serve-grid">
      <div className="serve-card">🏠 Homes, Villas & Flats</div>
      <div className="serve-card">🏬 Shops, Offices & Showrooms</div>
      <div className="serve-card">🏢 Apartments & Gated Communities</div>
      <div className="serve-card">🏭 Warehouses & Factories</div>
      <div className="serve-card">🏫 Schools & Colleges</div>
      <div className="serve-card">🏥 Hospitals & Clinics</div>
    </div>
  </div>
</section>


     

      {/* PARTNERS */}
      {/* PARTNERS */}
<section className="logo-section">
  <h2>Our Technology Partners</h2>
  <p>We work with trusted and genuine brands</p>

  <div className="logo-grid">
    {[p1,p2,p3,p4,p5,p6].map((logo, i) => (
      <div className="logo-box" key={i}>
        <img src={logo} alt="Partner Logo" />
      </div>
    ))}
  </div>
</section>
{/* CLIENTS */}
<section className="logo-section light">
  <h2>Our Clients</h2>
  <p>Trusted by homes, offices & institutions</p>

  <div className="logo-grid">
    {[c1,c2,c3].map((logo, i) => (
      <div className="logo-box" key={i}>
        <img src={logo} alt="Client Logo" />
      </div>
    ))}
  </div>
</section>

<section className="reviews">
  <h2>What Our Customers Say</h2>

  <div className="review-grid">
    <div className="review-card">
      <div className="stars">★★★★★</div>
      <p className="review-text">
        Excellent CCTV installation. Clean wiring and very professional work.
        Highly recommended.
      </p>
      <h4>Ramesh Kumar</h4>
      <span>Parvathipuram</span>
    </div>

    <div className="review-card">
      <div className="stars">★★★★★</div>
      <p className="review-text">
        Installed cameras for my shop. Very quick service and good quality
        cameras.
      </p>
      <h4>Srinivas Rao</h4>
      <span>Vizianagaram</span>
    </div>
    
    <div className="review-card">
      <div className="stars">★★★★★</div>
      <p className="review-text">
        Mobile service was excellent. Problem fixed within one hour.
      </p>
      <h4>Mahesh</h4>
      <span>Visakhapatnam</span>
    </div>
  </div>
</section>


      <section className="contact-section">
        <h2>Contact Us</h2>
        <p className="contact-sub">
          Free site visit • Quick response • Trusted technicians
        </p>

        <div className="contact-container">
          <div className="contact-info">
            <p>
              <FaPhoneAlt /> <strong>Call:</strong> 9676760263
            </p>
            <p>
              <FaEnvelope /> <strong>Email:</strong>{" "}
              muralitechnicalworks@gmail.com
            </p>
            <p>
              <FaMapMarkerAlt /> <strong>Service Areas:</strong>
              <br />
              Parvathipuram, Vizag, Vizianagaram, Srikakulam
            </p>

            <div className="contact-buttons">
              <a href="tel:9676760263" className="btn-call">
                Call Now
              </a>
              <button className="btn-visit" onClick={() => setShowForm(true)}>
                Free Site Visit
              </button>
            </div>
          </div>

          <div className="contact-map">
            <iframe
              title="map"
              src="https://www.google.com/maps?q=Parvathipuram&output=embed"
              loading="lazy"
            ></iframe>
          </div>
        </div>
      </section>

      {/* POPUP FORM */}
      {showForm && (
        <div className="form-overlay">
          <form className="quote-form" onSubmit={handleSubmit}>
            <h3>Get Free Quote</h3>

            <input name="name" placeholder="Your Name" required />
            <input name="phone" placeholder="Phone Number" required />
            <input name="email" placeholder="Email" />
            <input name="location" placeholder="Your Location" required />

            <textarea
              name="description"
              placeholder="Describe your requirement"
              rows="3"
            ></textarea>

            <div className="form-buttons">
              <button type="submit">Send to WhatsApp</button>
              <button type="button" onClick={() => setShowForm(false)}>
                Cancel
              </button>
            </div>
          </form>
        </div>
      )}

      <div className="floating-actions">
  <button
    className="floating-btn visit"
    onClick={() => setShowForm(true)}
  >
    Free Site Visit
  </button>

  {/* FLOATING WHATSAPP ICON */}
{/* <a
  href="https://wa.me/919676760263"
  target="_blank"
  rel="noopener noreferrer"
  className="whatsapp-float"
>
  <FaWhatsapp />
</a> */}

</div>

    </>
  );
}