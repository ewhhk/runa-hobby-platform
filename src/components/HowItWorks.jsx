import "../styles/HowItWorks.css";

const steps = [
  {
    title: "Take the Personality Test",
    text: "Answer a few carefully selected questions to discover your interests and strengths.",
  },
  {
    title: "Receive Your Match",
    text: "Get personalized hobby recommendations designed specifically for you.",
  },
  {
    title: "Meet Your Mentor",
    text: "Our experienced mentors help you explore your chosen direction.",
  },
  {
    title: "Join a Hobby Group",
    text: "Become part of a supportive community and start learning together.",
  },
  {
    title: "Grow Your Skills",
    text: "Develop confidence, creativity, and real-world experience.",
  },
];

export default function HowItWorks() {
  return (
    <section className="how">
      <div className="how-left">
        <span className="section-tag">HOW IT WORKS</span>

        <h2>
          Your journey begins
          <span> with one step.</span>
        </h2>

        <p>
          Every teenager follows a unique path. We guide students from the first
          personality assessment to finding the right mentor, joining a hobby
          group, and developing skills they will use for years.
        </p>

        <button className="journey-btn">Start Your Journey</button>
      </div>

      <div className="journey-card">
        <div className="journey-title">🚀 Learning Journey</div>

        <div className="timeline">
          <div className="progress-track">
            <div className="progress-line"></div>
          </div>

          {steps.map((step, index) => (
            <div className="timeline-item" key={step.title}>
              <div className={`circle step-${index + 1}`}>{index + 1}</div>

              <div className="timeline-content">
                <h3>{step.title}</h3>

                <p>{step.text}</p>
              </div>
            </div>
          ))}

          <div className="finish">
            🎉
            <div>
              <h3>Finish</h3>
              <p>Start your new passion journey.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
