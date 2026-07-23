import "../styles/Mentors.css";

import art from "../assets/mentors/woman-art.jpg"
import leader from "../assets/mentors/woman-leader.jpg"
import tech from "../assets/mentors/man-tech.avif"
import music from "../assets/mentors/man-music.avif"

const mentors = [
  {
    image: tech,
    name: "Alex Johnson",
    role: "Technology Mentor",
    description:
      "Programming, AI and robotics mentor helping students build real projects.",
  },

  {
    image: art,
    name: "Maria Smith",
    role: "Creative Arts Mentor",
    description:
      "Designer and artist helping teenagers discover creativity and visual skills.",
  },

  {
    image: music,
    name: "Daniel Brown",
    role: "Music Mentor",
    description:
      "Musician and producer teaching students performance and music creation.",
  },

  {
    image: leader,
    name: "Anna Wilson",
    role: "Leadership Mentor",
    description:
      "Communication coach helping students develop confidence and leadership.",
  },
];

export default function Mentors() {
  return (
    <section className="mentors" id="mentors">
      <div className="mentors-header">
        <span>OUR TEAM</span>

        <h2>Meet your mentors</h2>

        <p>
          Our lecturers are carefully selected professionals with experience who
          guide students as mentors, not just teachers.
        </p>
      </div>

      <div className="mentor-grid">
        {mentors.map((mentor) => (
          <div className="mentor-card" key={mentor.name}>
            <div className="mentor-image">
              <img src={mentor.image} alt={mentor.name} />
            </div>

            <div className="mentor-info">
              <h3>{mentor.name}</h3>

              <span>{mentor.role}</span>

              <p>{mentor.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
