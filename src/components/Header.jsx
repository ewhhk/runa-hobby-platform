import { useState } from "react";
import "../styles/Header.css";
import img from "../assets/runa.png";

export default function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="header">
      <div className="logo">
        <img src={img} alt="logo" />
      </div>

      <button
        className={`menu-toggle ${open ? "active" : ""}`}
        onClick={() => setOpen(!open)}
      >
        <span></span>
        <span></span>
        <span></span>
      </button>

      <nav className={open ? "open" : ""}>
        <a href="#about" onClick={() => setOpen(false)}>
          About
        </a>
        <a href="#hobbies" onClick={() => setOpen(false)}>
          Hobbies
        </a>
        <a href="#schedule" onClick={() => setOpen(false)}>
          Schedule
        </a>
        <a href="#contacts" onClick={() => setOpen(false)}>
          Contacts
        </a>
      </nav>
    </header>
  );
}
