import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import Journey from "./pages/Journey";
import LittleThings from "./pages/LittleThings";
import Memories from "./pages/Memories";
import Letter from "./pages/Letter";
import Ending from "./pages/Ending";

import "./styles/global.css";

function App() {
  return (
    <BrowserRouter basename="/personal/">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/journey" element={<Journey />} />
        <Route path="/littlethings" element={<LittleThings />} />
        <Route path="/memories" element={<Memories />} />
        <Route path="/letter" element={<Letter />} />
        <Route path="/ending" element={<Ending />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;