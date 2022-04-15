import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <div style={{ marginTop: "100px", color: "red" }}>
      {/* <!-- Footer --> */}
      <footer style={{ backgroundColor: "gray" }}>
        {/* <!-- Footer main --> */}
        <section className="ft-main">
          <div className="ft-main-item">
            <h2 className="ft-title">About</h2>
            <ul>
              <li>
                <a href="#">Services</a>
              </li>
              <li>
                <a href="#">Contact</a>
              </li>
              <li>
                <a href="#">Pricing</a>
              </li>
              <li>
                <a href="#">Customers</a>
              </li>
              <li>
                <a href="#">Discount</a>
              </li>
            </ul>
          </div>
          <div className="ft-main-item">
            <h2 className="ft-title">Resources</h2>
            <ul>
              <li>
                <a href="#">Men's Clothing</a>
              </li>
              <li>
                <a href="#">Women's Clothing</a>
              </li>
              <li>
                <a href="#">Jewelery</a>
              </li>
              <li>
                <a href="#">Electronic</a>
              </li>
            </ul>
          </div>

          <div className="ft-main-item">
            <h2 className="ft-title">Contact</h2>
            <ul>
              <li>
                <a href="#">Help</a>
              </li>
              <li>
                <a href="#">Sales</a>
              </li>
              <li>
                <a href="#">Advertise</a>
              </li>
            </ul>
          </div>
          <div className="ft-main-item">
            <h2 className="ft-title">Stay Updated</h2>
            <p>Get free updates before others do!</p>
            <form>
              <input
                type="email"
                name="email"
                placeholder="Enter email address"
              />
              <input type="submit" defaultValue="Subscribe" />
            </form>
          </div>
        </section>

        {/* Footer social */}
        <section className="ft-social">
          <ul className="ft-social-list">
            <li>
              <a href="#">
                <i className="bi bi-facebook" />
              </a>
            </li>
            <li>
              <a href="#">
                <i className="bi bi-twitter" />
              </a>
            </li>
            <li>
              <a href="#">
                <i className="bi bi-instagram" />
              </a>
            </li>
            <li>
              <a href="#">
                <i class="bi bi-github"></i>
              </a>
            </li>
            <li>
              <a href="#">
                <i className="bi bi-linkedin" />
              </a>
            </li>
            <li>
              <a href="#">
                <i class="bi bi-youtube"></i>
              </a>
            </li>
          </ul>
        </section>

        {/* Footer legal */}
        <section className="ft-legal">
          <ul className="ft-legal-list">
            <li>
              <a href="#">Terms &amp; Conditions</a>
            </li>
            <li>
              <a href="#">Privacy Policy</a>
            </li>
            <li>© 2022 by Online Shopping Hub</li>
          </ul>
        </section>
      </footer>
      {/* <!-- Footer --> */}
    </div>
  );
};

export default Footer;
