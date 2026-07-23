import "../styles/Partners.css"



const partners = [
  {
    icon: "🇸🇰",
    title: "Ministry of Education",
    text: "Supporting innovation in youth education and personal development.",
  },

  {
    icon: "🏫",
    title: "Slovak School Network",
    text: "Connecting schools with modern hobby-based learning programs.",
  },

  {
    icon: "🎓",
    title: "University Innovation Hub",
    text: "Creating opportunities between students, mentors and future careers.",
  },

  {
    icon: "🎵",
    title: "Lukas Varga — Magic Music Studio",
    text: "Slovak singer and music producer supporting young talents through creativity, vocal training and music workshops.",
  },

  {
    icon: "🌱",
    title: "Youth Development Center",
    text: "Helping teenagers discover talents and build confidence.",
  },

  {
    icon: "🚀",
    title: "Startup Slovakia Community",
    text: "Inspiring young people to explore entrepreneurship and innovation.",
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
