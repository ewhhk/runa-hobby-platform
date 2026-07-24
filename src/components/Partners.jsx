import "../styles/Partners.css"


const partners = [
  {
    icon: "🏛️",
    title: "EduFuture Slovakia Foundation",
    text: "A private educational foundation supporting innovative learning projects, youth development programs, and equal access to modern education opportunities across Slovakia.",
  },

  {
    icon: "💡",
    title: "Danube Innovation Fund",
    text: "An investment initiative focused on supporting young talent, technology projects, and educational platforms that prepare students for future careers.",
  },

  {
    icon: "🎓",
    title: "Central Europe Education Partners",
    text: "A network of education supporters connecting schools, mentors, universities, and organizations to create new opportunities for teenagers.",
  },

  {
    icon: "🎵",
    title: "Magic Music Academy",
    text: "A creative partner supporting young musicians through professional workshops, vocal training, music production sessions, and artistic development programs.",
  },

  {
    icon: "🚀",
    title: "Future Skills Ventures",
    text: "An early-stage investment group helping youth-focused projects grow through mentorship, strategic guidance, and innovation support.",
  },

  {
    icon: "🌱",
    title: "Youth Growth Initiative",
    text: "A social development organization focused on discovering teenagers' talents, building confidence, and creating pathways for personal growth.",
  },
];

export default function Partners() {
  return (
    <section className="partners" id="partners">
      <div className="partners-header">
        <span>OUR COMMUNITY</span>

        <h2>Building the future together.</h2>

        <p>
          RUNA connects schools, mentors and educational organizations to help
          teenagers discover their talents and develop new skills.
        </p>
      </div>

      <div className="partners-grid">
        {partners.map((partner) => (
          <div className="partner-card" key={partner.title}>
            <div className="partner-icon">{partner.icon}</div>

            <h3>{partner.title}</h3>

            <p>{partner.text}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
