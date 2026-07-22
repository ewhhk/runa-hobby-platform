import "../styles/FloatingProfile.css";
import img from "../assets/happy-teen.jpg";

export default function FloatingProfile() {
  return (
    <div className="floating-area">
      <div className="profile-card">
        <img src={img} alt="Happy teenager discovering passion" />

        <div className="profile-info">
          <h3>Emma, 16</h3>

          <p>Creative Explorer</p>

          <div className="match">✨ 94% hobby match</div>
        </div>
      </div>

      <div className="floating-item item-one">🎨</div>

      <div className="floating-item item-two">💻</div>

      <div className="floating-item item-three">🎵</div>

      <div className="floating-item item-four">🚀</div>

      <div className="small-card">
        <span>🔥</span>

        <div>
          <strong>New discovery</strong>

          <p>Design & Art</p>
        </div>
      </div>
    </div>
  );
}
