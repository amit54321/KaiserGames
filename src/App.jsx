import NewHomePage from "./pages/NewHomePage";
import GamesPage from "./pages/GamesPage";
import AboutPage from "./pages/AboutPage";
import NewNav from "./components/NewNav";
import SingleGamePage from "./pages/SingleGamePage";

import Home from "./pages/Home";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import { ToastContainer } from "react-toastify";
function App() {
  return (
    <div>
      <Router history={history}>
        <NewNav />
        <div className=" min-h-[100px]"></div>
        <Routes>
          <Route path="/" element={<NewHomePage />} />
          <Route exact path="/games/about" element={<SingleGamePage />} />
          <Route exact path="/games" element={<GamesPage />} />
          <Route path="/about" element={<AboutPage />} />
        </Routes>
      </Router>
      <ToastContainer />
      {/* <Home /> */}
    </div>
  );
}

export default App;
