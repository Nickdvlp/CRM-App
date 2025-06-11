import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Dashboard from "./pages/Dashboard";
import DashboardProducts from "./pages/DashboardProducts";
import { PrivateRoutes } from "./utils/PrivateRoutes";
import MainSection from "./pages/MainSection";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />

        <Route path="/dashboard" element={<Dashboard />}>
          <Route
            index
            element={
              <PrivateRoutes>
                <MainSection />
              </PrivateRoutes>
            }
          />
          <Route
            path="products"
            element={
              <PrivateRoutes>
                <DashboardProducts />
              </PrivateRoutes>
            }
          />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
