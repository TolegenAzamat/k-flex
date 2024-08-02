import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from './pages/home/home';
// import Test from './pages/test/test';
import AboutUs from './pages/aboutus/aboutus';


function App() {
  return (
    <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          {/* <Route path="/test" element={<Test />} /> */}
          <Route path="/aboutus" element={<AboutUs />} />
        </Routes>
      </Router>
  );
}

export default App;
