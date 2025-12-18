import { Link } from "react-router-dom";
import { useState } from "react";
import "../styles/navbar.css";
import {
  FaHome,
  FaVideo,
  FaDesktop,
  FaMobileAlt,
  FaPrint,
  FaPhoneAlt,
} from "react-icons/fa";

export default function Navbar() {
  const [showForm, setShowForm] = useState(false);

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
      <header className="navbar">
        {/* LOGO */}
        <div className="navbar-logo">
          <Link to="/" className="brand">
            <span className="brand-main">Murali</span>
            <span className="brand-sub">TechnicalWorks</span>
          </Link>
        </div>

        {/* LINKS */}
        <nav className="navbar-links">
          <Link to="/"><FaHome /> Home</Link>
          <Link to="/cctv"><FaVideo /> CCTV</Link>
          <Link to="/computers"><FaDesktop /> Computers</Link>
          <Link to="/mobiles"><FaMobileAlt /> Mobiles</Link>
          <Link to="/printer-cartridges"><FaPrint /> Cartridges</Link>
        </nav>

        {/* ACTION BUTTONS */}
        <div className="navbar-actions">
          <button className="visit-btn" onClick={() => setShowForm(true)}>
            Free Site Visit
          </button>

          <a href="tel:9676760263" className="call-btn">
            <FaPhoneAlt /> Call Now
          </a>
        </div>
      </header>

      {/* POPUP FORM */}
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
            ></textarea>

            <div className="form-buttons">
              <button type="submit">Submit</button>
              <button type="button" onClick={() => setShowForm(false)}>
                Cancel
              </button>
            </div>
          </form>
        </div>
      )}
    </>
  );
}
