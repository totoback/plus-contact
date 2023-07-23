import {Outlet, Route, Routes} from "react-router-dom";
import "./App.css";
import LoginPage from "./pages/LoginPage";
import LandingPage from "./pages/LandingPage";
import LagisterPage from "./pages/LagisterPage";
import Footer from "./layout/Footer";
import Navbar from "./layout/Navbar";


function Layout() {
  return (
    <div className="flex flex-col h-screen">
      <Navbar />
      <main className="mb-auto w-10/12 max-w-4xl mx-auto">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}
function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<LandingPage />} />

          <Route path="/login" element={<LoginPage />} />
          <Route path="/register" element={<LagisterPage />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
