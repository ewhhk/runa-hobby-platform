import "../styles/Footer.css";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-brand">
          <h2>RUNA</h2>

          <p>
            Helping teenagers discover their passions, develop skills and build
            their future.
          </p>
        </div>

        <div className="footer-links">
          <h3>Explore</h3>

          <a href="#about">About</a>

          <a href="#hobbies">Hobbies</a>

          <a href="#mentors">Mentors</a>

          <a href="#partners">Partners</a>
        </div>

        <div className="footer-links">
          <h3>Programs</h3>

          <a href="#schedule">Schedule</a>

          <a href="#test">Personality Test</a>

          <a href="#contacts">Contact</a>
        </div>

        <div className="footer-contact">
          <h3>Contact</h3>

          <p>📧 runa.platform@gmail.com</p>

          <p>📍 Slovakia</p>

          <div className="socials">
            <a href="#">Instagram</a>

            <a href="#">Facebook</a>

            <a href="#">LinkedIn</a>
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <p>© 2026 RUNA. All rights reserved.</p>

        <p>Built for the future generation 🌱</p>
      </div>
    </footer>
  );
}
