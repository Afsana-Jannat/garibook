import "./Footer.css";

import garibookLogo from "../assets/Garibook_Logo-footer.svg";
import nrbLogo from "../assets/nrb_no_background.svg";
import link3Logo from "../assets/link3-two.png";

const Footer = () => {
  return (
    <footer className="footer">

      <div className="footer-container">

        <div className="footer-top">

          {/* GARIBOOK */}
          <div className="footer-column">

            <h3>garibook</h3>

            <ul>
              <li>
                <a href="#">About Us</a>
              </li>

              <li>
                <a href="#">Customer Reviews</a>
              </li>

              <li>
                <a href="#">Career</a>
              </li>

              <li>
                <a href="#">Newsroom</a>
              </li>

              <li>
                <a href="#">Garibook Map</a>
              </li>
            </ul>

          </div>


          {/* SERVICES */}
          <div className="footer-column">

            <h3>Services</h3>

            <ul>
              <li>
                <a href="#">Intercity Rental</a>
              </li>

              <li>
                <a href="#">Airport Pick and Drop</a>
              </li>

              <li>
                <a href="#">Hourly Rental</a>
              </li>

              <li>
                <a href="#">Vehicle Management System (VMS)</a>
              </li>
            </ul>

          </div>


          {/* BECOME OUR PARTNER */}
          <div className="footer-column">

            <h3>Become Our Partner</h3>

            <ul>
              <li>
                <a href="#">Become a Smart Driver</a>
              </li>

              <li>
                <a href="#">Become a member of Garibook Club</a>
              </li>

              <li>
                <a href="#">
                  Garibook Business for Corporate Travel
                </a>
              </li>
            </ul>

          </div>


          {/* CONTACTS */}
          <div className="footer-column footer-contact">

            <h3>Contacts</h3>

            <ul>

              <li>
                <a href="mailto:support@garibook.com">
                  support@garibook.com
                </a>
              </li>

              <li>
                Police Plaza Concord Tower
                <br />
                -01, 13th Floor, Plot-02, Road-
                <br />
                144, Gulshan, Dhaka-1212
              </li>

              <li>
                <a href="tel:+8809678112233">
                  +88 09 678 11 22 33
                </a>
              </li>

            </ul>

          </div>

        </div>

        <div className="footer-middle">

          {/* DOWNLOAD APP */}

          <div className="footer-download">

            <h2>
              Download Our
              <br />
              Garibook Mobile App
            </h2>

            <a
              href="https://onelink.to/"
              target="_blank"
              rel="noopener noreferrer"
              className="footer-download-button"
            >
              <span>Download App</span>

              <span className="footer-download-arrow">
                →
              </span>
            </a>

          </div>


          {/* PRODUCT BY */}

          <div className="footer-company">

            <h2>A Product By</h2>

            <div className="company-info">

              <img
                src={nrbLogo}
                alt="NRB Solution Ltd."
                className="nrb-logo"
              />

              <div className="company-text">

                <p>NRB Solution Ltd.</p>

                <a
                  href="https://nrb-solutions.net/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Visit Website →
                </a>

              </div>

            </div>

          </div>


          {/* POWERED BY */}

          <div className="footer-company">

            <h2>Powered By</h2>

            <div className="company-info">

              <img
                src={link3Logo}
                alt="Link 3 Technologies"
                className="link3-logo"
              />

              <div className="company-text">

                <p>Link 3 Technologies</p>

                <a
                  href="https://link3.net/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Visit Website →
                </a>

              </div>

            </div>

          </div>

        </div>


        <div className="footer-divider"></div>


        <div className="footer-bottom">

          {/* LOGO */}

          <div className="footer-bottom-logo">

            <img
              src={garibookLogo}
              alt="Garibook"
            />

          </div>


          {/* TERMS */}

          <div className="footer-bottom-links">

            <a href="#">
              Terms &amp; Conditions
            </a>

            <a href="#">
              Privacy Policy
            </a>

          </div>


          {/* TRADE LICENSE */}

          <div className="footer-license">

            <span>Trade license number:</span>

            <span>
              TRAD/DNCC/013806/2024
            </span>

          </div>


          {/* COPYRIGHT */}

          <div className="footer-copyright">

            © 2026 Garibook.com

          </div>

        </div>

      </div>

      <div className="payment-strip">

        <div className="payment-container">

          <div className="payment-label">
            Pay With
          </div>

          <div className="payment-placeholder">

          </div>

        </div>

      </div>

      <button
  className="back-to-top"
  onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
  aria-label="Back to top"
>
  ↑
</button>

    </footer>
  );
};

export default Footer;