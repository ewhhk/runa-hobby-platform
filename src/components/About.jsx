import "../styles/About.css";

export default function About() {
  return (
    <section className="about" id="about">
      <div className="about-left">
        <span className="section-label">ABOUT US</span>

        <h2>
          Every passion starts with
          <span> one discovery.</span>
        </h2>

        <p>
          RUNA is a platform designed to help teenagers explore their interests,
          understand their strengths, and discover hobbies that match their
          personality. We believe everyone has unique potential— sometimes they
          just need the right guidance to uncover it.
        </p>

        <div className="about-features">
          <div className="feature">
            <div className="feature-icon">🎯</div>

            <div>
              <h4>Personalized Results</h4>
              <p>Recommendations based on your personality.</p>
            </div>
          </div>

          <div className="feature">
            <div className="feature-icon">🧩</div>

            <div>
              <h4>Discover New Interests</h4>
              <p>Explore activities you may never have considered.</p>
            </div>
          </div>

          <div className="feature">
            <div className="feature-icon">🚀</div>

            <div>
              <h4>Start Your Journey</h4>
              <p>Turn curiosity into real skills and confidence.</p>
            </div>
          </div>
        </div>
      </div>

      <div className="about-right">
        <div className="about-card">
          <div className="quote">
            "Your future passion might be one decision away."
          </div>

          <div className="progress">
            <div className="progress-info">
              <span>Self-discovery</span>
              <span>94%</span>
            </div>

            <div className="progress-bar">
              <div className="progress-fill"></div>
            </div>
          </div>

          <div className="mini-stats">
            <div>
              <h3>45+</h3>
              <p>Hobby fields</p>
            </div>

            <div>
              <h3>1200+</h3>
              <p>Students</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
