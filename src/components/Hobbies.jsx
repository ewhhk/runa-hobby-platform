import "../styles/Hobbies.css";

const hobbies = [
  {
    icon: "🎨",
    title: "Creative Arts",
    description: "Drawing, Design, Photography, Animation",
  },
  {
    icon: "💻",
    title: "Technology",
    description: "Programming, AI, Robotics, Game Development",
  },
  {
    icon: "🎵",
    title: "Music",
    description: "Singing, Instruments, Music Production",
  },
  {
    icon: "⚽",
    title: "Sports",
    description: "Football, Basketball, Swimming, Fitness",
  },
  {
    icon: "🧪",
    title: "Science",
    description: "Biology, Chemistry, Physics, Astronomy",
  },
  {
    icon: "🎭",
    title: "Leadership",
    description: "Psychology, Communication, Public Speaking",
  },
];

const advantages = [
  {
    icon: "🎯",
    title: "Personalized Approach",
    text: "Every teenager receives recommendations based on their personality, interests, and goals.",
  },
  {
    icon: "👨‍🏫",
    title: "Experienced Mentors",
    text: "Our lecturers are carefully selected professionals who guide and inspire every student.",
  },
  {
    icon: "🏫",
    title: "School Visits",
    text: "Several times a week we visit schools, organize workshops, and create hobby groups.",
  },
  {
    icon: "🌱",
    title: "Growth Together",
    text: "Students learn in small supportive groups where they build skills and confidence.",
  },
];

export default function Hobbies() {
  return (
    <section className="hobbies" id="hobbies">
      <div className="section-title">
        <span>EXPLORE EVERY PASSION</span>

        <h2>There is a hobby for everyone.</h2>

        <p>
          We believe every teenager has unique talents waiting to be discovered.
          Our mission is to help students explore different fields, meet
          inspiring mentors, and find activities that truly match their
          personality.
        </p>
      </div>

      <div className="hobby-grid">
        {hobbies.map((item) => (
          <div className="hobby-card" key={item.title}>
            <div className="hobby-icon">{item.icon}</div>

            <h3>{item.title}</h3>

            <p>{item.description}</p>
          </div>
        ))}
      </div>

      <div className="advantages">
        {advantages.map((item) => (
          <div className="adv-card" key={item.title}>
            <div className="adv-icon">{item.icon}</div>

            <div>
              <h3>{item.title}</h3>

              <p>{item.text}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
