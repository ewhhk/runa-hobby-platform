import "../styles/Schedule.css";

const schedule = [
  {
    day: "Monday",
    title: "Personality Testing",
    time: "09:00 - 12:00",
    icon: "🧠",
    text: "Discover your interests and strengths through our interactive test.",
  },

  {
    day: "Wednesday",
    title: "School Workshops",
    time: "14:00 - 17:00",
    icon: "🏫",
    text: "We visit schools and organize creative hobby sessions.",
  },

  {
    day: "Friday",
    title: "Mentor Meetings",
    time: "15:00 - 18:00",
    icon: "👨‍🏫",
    text: "Personal conversations with experienced mentors.",
  },

  {
    day: "Saturday",
    title: "Hobby Groups",
    time: "10:00 - 14:00",
    icon: "🚀",
    text: "Small groups develop skills and explore passions.",
  },
];

export default function Schedule() {
  return (
    <section className="schedule" id="schedule">
      <div className="schedule-header">
        <span>WEEKLY PROGRAM</span>

        <h2>
          Your journey with <span>RUNA</span>
        </h2>

        <p>
          A structured experience designed to help teenagers discover their
          passion, meet mentors, and grow.
        </p>
      </div>

      <div className="schedule-grid">
        {schedule.map((item) => (
          <div className="schedule-card" key={item.day}>
            <div className="schedule-top">
              <div className="schedule-icon">{item.icon}</div>

              <div>
                <h3>{item.day}</h3>

                <p>{item.time}</p>
              </div>
            </div>

            <h4>{item.title}</h4>

            <p>{item.text}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
