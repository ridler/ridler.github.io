import { lazy, Suspense } from "react";
import { BrowserRouter, Routes, Route, Outlet } from "react-router-dom";
import "./App.css";

const HomeComponent = lazy(() => import("./Home/Home"));
const CreativeComponent = lazy(() => import("./Creative/Creative"));
const CreativeHomeComponent = lazy(() => import("./Creative/Home/Home"));
const CreativeShortsComponent = lazy(
  () => import("./Creative/Fiction/Shorts/Shorts")
);
const CreativeDesignComponent = lazy(() => import("./Creative/Design/Design"));

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
              >
                <Route
                  path=""
                  element={
                    <Suspense>
                      <CreativeHomeComponent />
                    </Suspense>
                  }
                ></Route>
                <Route
                  path="shorts"
                  element={
                    <Suspense>
                      <CreativeShortsComponent />
                    </Suspense>
                  }
                ></Route>
                <Route
                  path="design"
                  element={
                    <Suspense>
                      <CreativeDesignComponent />
                    </Suspense>
                  }
                ></Route>
              </Route>
            </Routes>
          </BrowserRouter>
          <Outlet />
        </div>
      </div>
    </div>
  );
}
