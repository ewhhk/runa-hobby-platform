import "../styles/Contacts.css";
import icon from "../assets/runa.png"

export default function Contacts() {
  return (
    <section className="contacts" id="contacts">
      <div className="contacts-card">
        <div className="contacts-text">
          <span className="contacts-label">START YOUR JOURNEY</span>

          <h2>
            Ready to discover
            <span> your passion?</span>
          </h2>

          <p>
            Join RUNA and find the hobby, mentor, and community that matches
            your personality.
          </p>

          <div className="contact-buttons">
            <a
        
              href="https://www.survio.com/survey/d/R5W2Z6V3A2M9N8D0Q"
              target="_blank"
              rel="noopener noreferrer"
              className="contact-main-btn"
            >
              Take the test
            </a>

            <a
              href="mailto:runa.platform@gmail.com"
              className="contact-second-btn"
            >
              Contact us
            </a>
          </div>
        </div>

        <div className="contact-info">
          <div className="contact-item">
            <div className="contact-icon">📧</div>

            <div>
              <h4>Email</h4>
              <p>runa.finds.hobby@gmail.com</p>
            </div>
          </div>

          <div className="contact-item">
            <div className="contact-icon">📍</div>

            <div>
              <h4>Location</h4>
              <p>
                <a href="https://www.google.com/maps/place/Univerzitn%C3%BD+vedeck%C3%BD+park+TECHNICOM/@48.7321839,21.2387841,17z/data=!4m6!3m5!1s0x473ee058bc8e1627:0x75fb36c8571ff614!8m2!3d48.7321847!4d21.2427544!16s%2Fg%2F11f2ryhkvn?authuser=0&entry=ttu&g_ep=EgoyMDI2MDcyMC4wIKXMDSoASAFQAw%3D%3D">
                  Boženy Němcovej 5, 040 01 Košice
                </a>
              </p>
            </div>
          </div>

          <div className="contact-item">
            <div className="contact-icon">
              <img src={icon} alt="icon" />
            </div>

            <div>
              <h4>Instagram</h4>
              <p>
                <a href="https://www.instagram.com/runafindshobby/">
                  @runafindshobby
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
