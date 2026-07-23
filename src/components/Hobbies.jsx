import "../styles/Hobbies.css";

// import img from "../assets/happy-teen.jpg";
import art from "../assets/hobbies-photos/art.jpg";
import tech from "../assets/hobbies-photos/tech.jpg";
import music from "../assets/hobbies-photos/music.jpg";
import sport from "../assets/hobbies-photos/sport.jpg";
// import science from "../assets/hobbies-photos/science.jpg";
import leadership from "../assets/hobbies-photos/leadership.jpg";
import film from "../assets/hobbies-photos/film.jpg";

import mentor_student from "../assets/advantages/mentor-with-student.jpg"
const hobbies = [
  {
    image: art,
    title: "Creative Arts",
    description: "Drawing, Design, Photography, Animation",
  },
  {
    image: tech,
    title: "Technology",
    description: "Programming, AI, Robotics, Game Development",
  },
  {
    image: music,
    title: "Music",
    description: "Singing, Instruments, Music Production",
  },
  {
    image: sport,
    title: "Sports",
    description: "Football, Basketball, Swimming, Fitness",
  },
  {
    image: leadership,
    title: "Leadership",
    description: "Psychology, Communication, Public Speaking",
  },
  {
    image: film,
    title: "Filmmaking",
    description: "Directing, Cinematography, Video Editing, Storytelling",
  },
];

const advantages = [
  {
    icon: mentor_student,
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
          <div
            className="hobby-card"
            key={item.title}
            style={{
              backgroundImage: `url(${item.image})`,
            }}
          >
            <div className="hobby-overlay"></div>

            <div className="hobby-content">
              <h3>{item.title}</h3>

              <p>{item.description}</p>
            </div>
          </div>
        ))}
      </div>

      <div className="advantages">
        {advantages.map((item) => (
          <div className="adv-card" key={item.title}>
            <div className="adv-icon"><img src={item.icon} alt="img" /></div>

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
