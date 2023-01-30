import { useSelector } from "react-redux";
import { BrowserRouter, Routes, Route } from "react-router-dom"
import Auth from "./Components/Auth/Auth";
import NavDrawer from "./Components/Layout/Components/Header&Nav";
import Dashboard from "./Components/Layout/Dashboard";

function App() {

  const isLoggedIn = useSelector(state => state.auth.isLoggedIn);
  return (
    <BrowserRouter>
      {isLoggedIn && <NavDrawer />}
      <Routes>
        <Route exact path="/" element={isLoggedIn ? <Dashboard /> : <Auth />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
