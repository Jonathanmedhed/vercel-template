import { useSelector } from "react-redux";
import CssBaseline from "@mui/material/CssBaseline";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage";
import routes from "./routes/routes";

const App = () => {
  const { themeMode } = useSelector((state) => state.themeMode);

  return (
    <>
      {/* mui reset css */}
      <CssBaseline />

      {/* app routes */}
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage />}>
            {routes.map((route, index) =>
              route.index ? (
                <Route
                  index
                  key={index}
                  element={
                    route.state ? (
                      <span state={route.state}>{route.element}</span>
                    ) : (
                      route.element
                    )
                  }
                />
              ) : (
                <Route
                  path={route.path}
                  key={index}
                  element={
                    route.state ? (
                      <span state={route.state}>{route.element}</span>
                    ) : (
                      route.element
                    )
                  }
                />
              )
            )}
          </Route>
        </Routes>
      </BrowserRouter>
      {/* app routes */}
    </>
  );
};

export default App;
