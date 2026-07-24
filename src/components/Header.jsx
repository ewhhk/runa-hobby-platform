import "../styles/Header.css";
import img from "../assets/runa.png";
export default function Header() {
    return (
      <header className="header">
        <div className="logo">
          <img src={img} alt="img" />
        </div>

        <nav>
          <a href="#about">About</a>
          <a href="#hobbies">Hobbies</a>
          <a href="#schedule">Schedule</a>
          <a href="#contacts">Contacts</a>
        </nav>
        
      </header>
    );
}