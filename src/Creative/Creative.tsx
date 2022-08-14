import { lazy, Suspense } from "react";
import { BrowserRouter, Link, Outlet, Route, Routes } from "react-router-dom";

import "./Creative.css";
const HomeComponent = lazy(() => import("./Home/Home"));

export default function Creative() {
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
          <pre className="Creative-nav-breadcrumb-separator">/</pre>
        </div>
      </nav>
      <div className="Creative-outlet">
        <Outlet />
      </div>
    </div>
  );
}
