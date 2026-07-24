import CountUp from "../styles/CountUp";
import UseInView from "../styles/UseInView";
import "../styles/MentorCTAStat.css";

const stats = [
  {
    num: 25,
    suf: "+",
    title: "Mentors",
  },
  {
    num: 20,
    suf: "+",
    title: "Schools",
  },
  {
    num: 1200,
    suf: "+",
    title: "Students",
  },
];

export default function MentorCTAStat() {
  const [ref, inView] = UseInView();

  return (
    <div className="mentor-statistics" ref={ref}>
      {stats.map((item) => (
        <div className="mentor-stat-card" key={item.title}>
          <strong className="mentor-stat-number">
            {inView && <CountUp end={item.num} />}

            {item.suf}
          </strong>

          <p className="mentor-stat-title">{item.title}</p>
        </div>
      ))}
    </div>
  );
}
