import { useEffect, useState } from "react";
import { Link, Outlet, useLocation } from "react-router-dom";

import "./Creative.css";

export default function Creative() {
  const location = useLocation();
  const [leafRouteName, setLeafRouteName] = useState("");

  useEffect(() => {
    setLeafRouteName(location.pathname.replace(/\/creative\/?/, ""));
  }, [location]);

  return (
    <div className="Creative">
      <nav className="Creative-nav">
        <div className="Creative-nav-content">
          <Link to="/" className="Home-label-link inner-link">
            FTJR
          </Link>
          <pre className="Creative-nav-breadcrumb-separator">/</pre>
          <Link to="" className="Creative-nav-breadcrumb inner-link">
            creative
          </Link>
          {leafRouteName && (
            <pre className="Creative-nav-breadcrumb-separator">/</pre>
          )}
          <span className="Creative-nav-breadcrumb">{leafRouteName}</span>
        </div>
      </nav>
      <div className="Creative-outlet">
        <Outlet />
      </div>
    </div>
  );
}
