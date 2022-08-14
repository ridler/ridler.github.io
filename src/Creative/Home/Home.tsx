import { Link } from "react-router-dom";
import "./Home.css";

export default function Home() {
  return (
    <nav className="Creative-Home-nav">
      <ul className="Creative-Home-nav-menu-items">
        <h2>Fiction</h2>
        <li>
          <Link className="inner-link" to="shorts">
            Misc. Shorts
          </Link>
        </li>
        <li>
          <a>Sacred Path</a>
        </li>
        <li>
          <Link className="inner-link" to="/">
            <h2>Design</h2>
          </Link>
        </li>
        <h2>External</h2>
        <li>
          📺 <a href="https://www.youtube.com/user/tadoubleg">YouTube</a>
        </li>
        <li>
          📷 <a href="https://www.instagram.com/taggridler">Instagram</a>
        </li>
      </ul>
    </nav>
  );
}
