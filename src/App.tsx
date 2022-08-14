import { lazy, Suspense } from "react";
import { BrowserRouter, Routes, Route, Outlet } from "react-router-dom";
import "./App.css";

const HomeComponent = lazy(() => import("./Home/Home"));
const CreativeComponent = lazy(() => import("./Creative/Creative"));

export function App() {
  return (
    <div className="Outermost">
      <div className="SecondOutermost">
        <div className="AppContainer">
          <BrowserRouter>
            <Routes>
              <Route
                path="/"
                element={
                  <Suspense>
                    <HomeComponent />
                  </Suspense>
                }
              ></Route>
              <Route
                path="creative"
                element={
                  <Suspense>
                    <CreativeComponent />
                  </Suspense>
                }
              ></Route>
            </Routes>
          </BrowserRouter>
          <Outlet />
        </div>
      </div>
    </div>
  );
}
