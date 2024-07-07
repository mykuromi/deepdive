import { Route, Routes } from "react-router-dom";
import "./App.css";
import { D20240621, D20240629, D20240706, Home } from "./pages";

function App() {
  return (
    <div id="App" className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/D20240621" element={<D20240621 />} />
        <Route path="/D20240629" element={<D20240629 />} />
        <Route path="/D20240706" element={<D20240706 />} />
      </Routes>
    </div>
  );
}

export default App;
