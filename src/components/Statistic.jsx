import CountUp from "../styles/CountUp";
import UseInView from "../styles/UseInView";
import "../styles/Statistic.css";
const stats = [
  {
    num: "1200",
    suf: "+",
    title: "teenagers",
  },
  {
    num: "45",
    suf: "+",
    title: "hobby fields",
  },
  {
    num: "25",
    suf: "",
    title: "mentors",
  },
];

export default function Statistic(){
    const [ref, inView] = UseInView();
    return (
      <section className="stats" ref={ref}>
        {stats.map((item, index) => (
          <div className="stat-card" key={index}>
            <h3>
              {inView && <CountUp end={item.num} />}
              {item.suf}
            </h3>
            <p>{item.title}</p>
          </div>
        ))}
      </section>
    );
}