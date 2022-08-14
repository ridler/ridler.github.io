import { Link } from "react-router-dom";
import "./Home.css";

export default function Home() {
  return (
    <div className="Home">
      <header className="Home-title top-label">
        Forrest Tagg Joshua Ridler
      </header>
      <nav className="Home-nav">
        <Link className="Home-heading__creative top-label" to="creative">
          <h2>Creative</h2>
        </Link>
        <h2 className="Home-heading__professional top-label">Professional</h2>
        <ul>
          <li>
            📃{" "}
            <a href="https://docs.google.com/document/d/e/2PACX-1vQ0Ix7nTtlkaqQX1MQRGSu4_td68ZPLo0g_YGgVPvSttqhobf3ADOzkhFc_M7JVtfSLAVhPRbreYbj_/pub">
              Résumé
            </a>
          </li>
          <li>
            👷 <a href="https://github.com/ridler">Github</a>
          </li>
          <li>
            🤝 <a href="https://www.linkedin.com/in/ridler">LinkedIn</a>
          </li>
        </ul>
      </nav>
    </div>
  );
}
