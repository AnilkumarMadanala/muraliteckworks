import "../styles/footer.css";
import {
  FaPhoneAlt,
  FaEnvelope,
  FaMapMarkerAlt,
  FaWhatsapp,
  FaFacebookF,
  FaInstagram,
  FaYoutube,
  FaHome,
  FaVideo,
  FaDesktop,
  FaMobileAlt,
  FaPrint,
} from "react-icons/fa";
import { Link } from "react-router-dom";

export default function Footer() {
  const whatsappMessage = `Hello Muralitechnicalworks,%0A
I would like a FREE site visit for CCTV / Computer / Mobile service.`;

  return (
    <footer className="footer">
      <div className="footer-container">
        {/* COMPANY INFO */}
        <div className="footer-box">
          <h3>Muralitechnicalworks</h3>
          <p>
             Murali Technical Works  
             CCTV Installation, Mobile, Computer & Printer Repair  
            Veeraghattam, Parvathipuram Manyam, Andhra Pradesh – 532460  

          </p>

          <div className="footer-social">
            <a href="#"><FaFacebookF /></a>
            <a href="#"><FaInstagram /></a>
            <a href="#"><FaYoutube /></a>
            <a
              href={`https://wa.me/919182411422?text=${whatsappMessage}`}
              target="_blank"
              rel="noreferrer"
            >
              <FaWhatsapp />
            </a>
          </div>
        </div>

        {/* QUICK LINKS */}
        <div className="footer-box">
          <h4>Quick Links</h4>

          <ul className="footer-links">
            <li>
              <Link to="/"><FaHome /> Home</Link>
            </li>
            <li>
              <Link to="/cctv"><FaVideo /> CCTV</Link>
            </li>
            <li>
              <Link to="/computers"><FaDesktop /> Computers</Link>
            </li>
            <li>
              <Link to="/mobiles"><FaMobileAlt /> Mobiles</Link>
            </li>
            <li>
              <Link to="/printer-cartridges"><FaPrint /> Printer Cartridges</Link>
            </li>
          </ul>
        </div>

        {/* CONTACT & ACTIONS */}
        <div className="footer-box">
          <h4>Contact & Support</h4>

          <p>
            <FaMapMarkerAlt /> Parvathipuram, Vizianagaram, Visakhapatnam,
            Srikakulam
          </p>

          <p>
            <FaPhoneAlt /> <a href="tel:9182411422">9182411422</a>
          </p>

          <p>
            <FaEnvelope /> muralitechnicalworks@gmail.com
          </p>

          <a href="tel:9182411422" className="footer-btn call">
            📞 Call Now
          </a>

          <a
            href={`https://wa.me/919182411422?text=${whatsappMessage}`}
            target="_blank"
            rel="noreferrer"
            className="footer-btn whatsapp"
          >
            🛠 Free Site Visit
          </a>
        </div>
      </div>

      {/* COPYRIGHT */}
      <div className="footer-bottom">
        © {new Date().getFullYear()} Muralitechnicalworks. All Rights Reserved.
      </div>
    </footer>
  );
}
