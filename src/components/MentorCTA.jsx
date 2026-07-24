import "../styles/MentorCTA.css";
import MentorCTAStat from "./MentorCTAStat";

export default function MentorCTA() {
  return (
    <section className="mentor-cta-section">
      <div className="mentor-cta-card">
        <div className="mentor-cta-content">
          <span className="mentor-cta-label">FOR EDUCATORS</span>

          <h2 className="mentor-cta-title">
            Share your knowledge.
            <br />
            Inspire the next generation.
          </h2>

          <p className="mentor-cta-description">
            Are you a professional, artist, teacher, or specialist? Join our
            mentor community and help teenagers discover their talents through
            workshops and creative programs.
          </p>

          <button className="mentor-cta-button">
            <a href="https://www.survio.com/survey/d/T9C6E6Y9C3T5T7T6X"
            target="_blank">
              Become a Mentor
            </a>
          </button>
        </div>

        <MentorCTAStat />
      </div>
    </section>
  );
}
