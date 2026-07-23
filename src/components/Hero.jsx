import "../styles/Hero.css";
import FloatingProfile from "./FloatingProfile";
import Statistic from "./Statistic";

export default function Hero() {
  return (
    <section className="hero">
      <div className="hero-content">
        <p className="hero-label">✨ A platform to discover yourself</p>

        <h1>
          Find your
          <span> unique passion</span>
        </h1>

        <p className="hero-description">
          We help teenagers discover their talents, explore new interests, and
          find activities that truly inspire them.
        </p>

        <div className="hero-buttons">
          <button className="primary-btn">
            <a
              target="_blank"
              href="https://www.survio.com/survey/d/R5W2Z6V3A2M9N8D0Q"
            >
              Take the test
            </a>
          </button>

          <button className="secondary-btn">Learn more</button>
        </div>

        <Statistic />
      </div>

      <FloatingProfile />
      {/* <div className="hero-card"> */}
        {/* <div className="card-header">Explore your possibilities</div>

        <div className="interest">
          <div className="icon">🎨</div>

          <div>
            <h3>Creativity</h3>

            <p>Design, art, photography</p>
          </div>
        </div>
        <div className="interest">
          <div className="icon">💻</div>

          <div>
            <h3>Technology</h3>

            <p>Coding, AI, robotics</p>
          </div>
        </div>

        <div className="interest">
          <div className="icon">🎵</div>

          <div>
            <h3>Music</h3>

            <p>Singing, production, instruments</p>
          </div>
        </div>

        <div className="card-footer">🔥 Discover what inspires you</div> */}
      {/* </div> */}
    </section>
  );
}
